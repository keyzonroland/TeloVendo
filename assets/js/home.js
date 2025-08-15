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

  // Productos (12 items, 3x4 en escritorio por CSS)
  var gridProds = document.getElementById('grid-productos');
  if (gridProds) {
    var list = PRODUCTS.slice(0, 12);
    var frag2 = document.createDocumentFragment();
    list.forEach(function(p){ frag2.appendChild(createProductCard(p)); });
    gridProds.appendChild(frag2);
  }
})();
