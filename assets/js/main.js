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
  var card = document.createElement('article');
  card.className = 'card product-card';
  card.innerHTML = [
    `<a class="card__media" href="producto.html?id=${encodeURIComponent(p.id)}" aria-label="Ver ${p.name}">`,
    `  <img src="${p.image}" alt="${p.name}" loading="lazy" />`,
    `</a>`,
    `<div class="card__body">`,
    `  <h3 class="card__title"><a href="producto.html?id=${encodeURIComponent(p.id)}">${p.name}</a></h3>`,
    `  <p class="card__text">${p.description}</p>`,
    `</div>`,
    `<footer class="card__footer">`,
    `  <span class="badge">${(CATEGORIES.find(c=>c.slug===p.categorySlug)||{}).name||'General'}</span>`,
    `  <span class="price">${money(p.price)}</span>`,
    `</footer>`
  ].join('\n');
  return card;
}
