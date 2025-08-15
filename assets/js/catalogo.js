// Lógica de catálogo: chips de categorías, búsqueda y render
(function(){
  var grid = document.getElementById('grid-catalogo');
  var chipsWrap = document.getElementById('cat-chips');
  var qInput = document.getElementById('q');

  if (!grid || !chipsWrap) return;

  var params = new URLSearchParams(location.search);
  var activeCat = params.get('categoria') || '';
  var q = params.get('q') || '';
  if (qInput) qInput.value = q;

  function renderChips() {
    chipsWrap.innerHTML = '';
    var allChip = document.createElement('button');
    allChip.type = 'button';
    allChip.className = 'chip' + (activeCat === '' ? ' chip--active' : '');
    allChip.textContent = 'Todas';
    allChip.addEventListener('click', function(){ activeCat = ''; update(); });
    chipsWrap.appendChild(allChip);

    CATEGORIES.forEach(function(cat){
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip' + (activeCat === cat.slug ? ' chip--active' : '');
      b.textContent = cat.name;
      b.setAttribute('data-slug', cat.slug);
      b.addEventListener('click', function(){ activeCat = cat.slug; update(); });
      chipsWrap.appendChild(b);
    });
  }

  function filterProducts() {
    var term = (qInput && qInput.value || '').toLowerCase().trim();
    return PRODUCTS.filter(function(p){
      var okCat = !activeCat || p.categorySlug === activeCat;
      var okText = !term || p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term);
      return okCat && okText;
    });
  }

  function renderProducts(list) {
    grid.innerHTML = '';
    var frag = document.createDocumentFragment();
    list.forEach(function(p){ frag.appendChild(createProductCard(p)); });
    if (!list.length) {
      var empty = document.createElement('p');
      empty.className = 'muted';
      empty.textContent = 'No se encontraron resultados.';
      grid.appendChild(empty);
    } else {
      grid.appendChild(frag);
    }
  }

  function update(pushState){
    renderChips();
    var list = filterProducts();
    renderProducts(list);
    if (pushState) {
      var usp = new URLSearchParams();
      if (activeCat) usp.set('categoria', activeCat);
      if (qInput && qInput.value) usp.set('q', qInput.value);
      history.replaceState(null, '', location.pathname + (usp.toString() ? ('?' + usp.toString()) : ''));
    }
  }

  if (qInput) qInput.addEventListener('input', function(){ update(true); });

  renderChips();
  renderProducts(filterProducts());
})();
