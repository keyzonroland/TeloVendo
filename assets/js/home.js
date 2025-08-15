// Poblado de Novedades y Categorías (Home)
(function(){
  if (typeof PRODUCTS === 'undefined' || typeof CATEGORIES === 'undefined') return;

  // Novedades
  var gridNov = document.getElementById('grid-novedades');
  if (gridNov) {
    var novedades = PRODUCTS.filter(function(p){ return p.isNew; }).slice(0, 6);
    var frag = document.createDocumentFragment();
    novedades.forEach(function(p){ frag.appendChild(createProductCard(p)); });
    gridNov.appendChild(frag);
  }

  // Categorías destacadas
  var gridCat = document.getElementById('grid-categorias');
  if (gridCat) {
    CATEGORIES.slice(0, 4).forEach(function(cat){
      var a = document.createElement('a');
      a.href = 'catalogo.html?categoria=' + encodeURIComponent(cat.slug);
      a.className = 'category-tile';
      a.innerHTML = '<span class="category-tile__name">' + cat.name + '</span>';
      gridCat.appendChild(a);
    });
  }
})();
