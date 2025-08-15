// Utilidades generales y UI básica
(function(){
  // Año dinámico en el footer
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Toggle menú móvil
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.getElementById('site-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function(){
      var isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }
})();

function money(n) {
  try { return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(n); }
  catch(e) { return '$' + (n/100).toFixed(2); }
}

function createProductCard(p) {
  // Columna Bootstrap que contiene una card
  var col = document.createElement('div');
  col.className = 'col';

  var cat = (CATEGORIES.find(function(c){ return c.slug===p.categorySlug; })||{}).name || 'General';

  col.innerHTML = [
    '<div class="card h-100">',
    `  <a href="producto.html?id=${encodeURIComponent(p.id)}" aria-label="Ver ${p.name}">`,
    `    <img class="card-img-top" src="${p.image}" alt="${p.name}" loading="lazy" decoding="async" width="400" height="250" />`,
    '  </a>',
    '  <div class="card-body">',
    `    <h5 class="card-title">${p.name}</h5>`,
    `    <p class="card-text">${p.description}</p>`,
    `    <span class="badge text-bg-primary">${cat}</span>`,
    '  </div>',
    '  <div class="card-footer d-flex justify-content-between align-items-center">',
    `    <strong>${money(p.price)}</strong>`,
    `    <a class="btn btn-sm btn-primary" href="producto.html?id=${encodeURIComponent(p.id)}">Ver</a>`,
    '  </div>',
    '</div>'
  ].join('\n');
  return col;
}
