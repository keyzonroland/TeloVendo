// Datos de ejemplo (mock) — categorías y productos
const CATEGORIES = [
  { slug: 'libros', name: 'Libros' },
  { slug: 'electronica', name: 'Electrónica' },
  { slug: 'hogar', name: 'Hogar' },
  { slug: 'moda', name: 'Moda' },
  { slug: 'juguetes', name: 'Juguetes' },
];

const PRODUCTS = [
  { id: 'p1', name: 'Libro: JavaScript Esencial', slug: 'js-esencial', categorySlug: 'libros', description: 'Aprende JS moderno con ejemplos prácticos.', image: './assets/img/placeholder.svg', price: 19990, isNew: true },
  { id: 'p2', name: 'Auriculares Inalámbricos', slug: 'auriculares-wireless', categorySlug: 'electronica', description: 'Sonido nítido y cancelación de ruido.', image: './assets/img/placeholder.svg', price: 34990, isNew: true },
  { id: 'p3', name: 'Lámpara de Escritorio LED', slug: 'lampara-led', categorySlug: 'hogar', description: 'Iluminación ajustable para tu espacio.', image: './assets/img/placeholder.svg', price: 14990, isNew: false },
  { id: 'p4', name: 'Polera Unisex', slug: 'polera-unisex', categorySlug: 'moda', description: 'Algodón orgánico, varios colores.', image: './assets/img/placeholder.svg', price: 12990, isNew: false },
  { id: 'p5', name: 'Robot de Juguete', slug: 'robot-juguete', categorySlug: 'juguetes', description: 'Interactivo y educativo.', image: './assets/img/placeholder.svg', price: 22990, isNew: true },
  { id: 'p6', name: 'Libro: UX para Todos', slug: 'ux-para-todos', categorySlug: 'libros', description: 'Fundamentos de diseño centrado en el usuario.', image: './assets/img/placeholder.svg', price: 17990, isNew: false },
];
