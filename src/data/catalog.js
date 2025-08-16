// ✅ src/data/catalog.js

export const categories = [
  {
    name: "Kids Wear",
    slug: "kidswear",
    image: "https://m.media-amazon.com/images/I/61SS4fG3UXL._SX679_.jpg",
  },
  {
    name: "Mens Wear",
    slug: "menswear",
    image: "https://m.media-amazon.com/images/I/71tW0KJ-c+L._SY879_.jpg",
  },
];

export const products = [
  {
    id: 1,
    name: "Kids T-Shirt",
    category: "kidswear",
    price: 299,
    image: "https://m.media-amazon.com/images/I/61SS4fG3UXL._SX679_.jpg",
    description: "Comfortable and colorful T-shirt for kids"
  },
  {
    id: 2,
    name: "Men Formal Shirt",
    category: "menswear",
    price: 699,
    image: "https://m.media-amazon.com/images/I/71tW0KJ-c+L._SY879_.jpg",
    description: "Premium quality men's shirt for office wear"
  }
];
