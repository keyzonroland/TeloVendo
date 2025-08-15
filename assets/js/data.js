// Datos de ejemplo (mock) — categorías y productos
const CATEGORIES = [
  { slug: 'libros', name: 'Libros' },
  { slug: 'electronica', name: 'Electrónica' },
  { slug: 'hogar', name: 'Hogar' },
  { slug: 'moda', name: 'Moda' },
  { slug: 'juguetes', name: 'Juguetes' },
];

const PRODUCTS = [
  { id: 'p1', name: 'Libro: JavaScript Esencial', slug: 'js-esencial', categorySlug: 'libros', description: 'Aprende JS moderno con ejemplos prácticos.', image: './assets/img/products/p1-js-esencial.jpeg', price: 19990, isNew: true },
  { id: 'p2', name: 'Auriculares Inalámbricos', slug: 'auriculares-wireless', categorySlug: 'electronica', description: 'Sonido nítido y cancelación de ruido.', image: './assets/img/products/p2-auriculares.jpeg', price: 34990, isNew: true },
  { id: 'p3', name: 'Lámpara de Escritorio LED', slug: 'lampara-led', categorySlug: 'hogar', description: 'Iluminación ajustable para tu espacio.', image: './assets/img/products/p3-lampara.jpeg', price: 14990, isNew: false },
  { id: 'p4', name: 'Polera Unisex', slug: 'polera-unisex', categorySlug: 'moda', description: 'Algodón orgánico, varios colores.', image: './assets/img/products/p4-polera.jpeg', price: 12990, isNew: false },
  { id: 'p5', name: 'Robot de Juguete', slug: 'robot-juguete', categorySlug: 'juguetes', description: 'Interactivo y educativo.', image: './assets/img/products/p5-robot.jpg', price: 22990, isNew: true },
  { id: 'p6', name: 'Libro: UX para Todos', slug: 'ux-para-todos', categorySlug: 'libros', description: 'Fundamentos de diseño centrado en el usuario.', image: './assets/img/products/p6-ux.jpg', price: 17990, isNew: false },
  { id: 'p7', name: 'Set de Teclado y Mouse', slug: 'set-teclado-mouse', categorySlug: 'electronica', description: 'Combo inalámbrico cómodo y silencioso.', image: './assets/img/placeholder.svg', price: 25990, isNew: false },
  { id: 'p8', name: 'Libro: HTML y CSS Básico', slug: 'html-css-basico', categorySlug: 'libros', description: 'Crea tus primeras páginas web desde cero.', image: './assets/img/placeholder.svg', price: 15990, isNew: false },
  { id: 'p9', name: 'Almohada Ergonómica', slug: 'almohada-ergonomica', categorySlug: 'hogar', description: 'Descanso óptimo para tu cuello.', image: './assets/img/placeholder.svg', price: 9990, isNew: false },
  { id: 'p10', name: 'Chaqueta Impermeable', slug: 'chaqueta-impermeable', categorySlug: 'moda', description: 'Protección y estilo para cualquier clima.', image: './assets/img/placeholder.svg', price: 39990, isNew: false },
  { id: 'p11', name: 'Set de Bloques Creativos', slug: 'bloques-creativos', categorySlug: 'juguetes', description: 'Estimula la imaginación con horas de juego.', image: './assets/img/placeholder.svg', price: 11990, isNew: false },
  { id: 'p12', name: 'Libro: Accesibilidad Web', slug: 'accesibilidad-web', categorySlug: 'libros', description: 'Buenas prácticas para sitios inclusivos.', image: './assets/img/placeholder.svg', price: 18990, isNew: false },
];
