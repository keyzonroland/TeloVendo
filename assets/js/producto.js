// Lógica de ficha de producto: leer id y poblar contenido
(function(){
  var params = new URLSearchParams(location.search);
  var id = params.get('id');
  var p = PRODUCTS.find(function(x){ return x.id === id; });

  var nameEl = document.getElementById('product-name');
  var imgEl = document.getElementById('product-image');
  var descEl = document.getElementById('product-desc');
  var catEl = document.getElementById('product-category');
  var priceEl = document.getElementById('product-price');
  var crumbEl = document.getElementById('crumb-name');
  var backLink = document.getElementById('back-to-catalog');

  if (!p) {
    if (nameEl) nameEl.textContent = 'Producto no encontrado';
    if (descEl) descEl.textContent = 'No pudimos encontrar el recurso solicitado.';
    return;
  }

  var cat = CATEGORIES.find(function(c){ return c.slug === p.categorySlug; });
  if (nameEl) nameEl.textContent = p.name;
  if (crumbEl) crumbEl.textContent = p.name;
  if (imgEl) { imgEl.src = p.image; imgEl.alt = p.name; }
  if (descEl) descEl.textContent = p.description;
  if (catEl) catEl.textContent = (cat && cat.name) || 'General';
  if (priceEl) priceEl.querySelector('[itemprop="price"]').textContent = money(p.price);
  if (backLink && cat) backLink.href = 'catalogo.html?categoria=' + encodeURIComponent(cat.slug);
})();
