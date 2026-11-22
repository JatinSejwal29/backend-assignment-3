// run with: npm run seed
// puts some sample products in the database so you can test the APIs quickly
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  { name: 'Study Table', sku: 'FURN-TB-812', category: 'Furniture', price: 3999, quantity: 2, reorderLevel: 4, supplier: 'IKEA India' },
  { name: 'Office Chair', sku: 'FURN-CH-204', category: 'Furniture', price: 5499, quantity: 15, reorderLevel: 5, supplier: 'Godrej Interio' },
  { name: 'Laptop 15 inch', sku: 'ELEC-LP-101', category: 'Electronics', price: 45999, quantity: 5, reorderLevel: 5, supplier: 'Dell India' },
  { name: 'Wireless Mouse', sku: 'ELEC-MS-102', category: 'Electronics', price: 799, quantity: 50, reorderLevel: 15, supplier: 'Logitech' },
  { name: 'Bluetooth Speaker', sku: 'ELEC-SP-103', category: 'Electronics', price: 2499, quantity: 30, reorderLevel: 10, supplier: 'boAt' },
  { name: 'Smartphone', sku: 'ELEC-PH-104', category: 'Electronics', price: 18999, quantity: 11, reorderLevel: 8, supplier: 'Samsung India' },
  { name: 'Cotton T-Shirt', sku: 'APPR-TS-301', category: 'Apparel', price: 499, quantity: 60, reorderLevel: 20, supplier: 'Allen Solly' },
  { name: 'Denim Jacket', sku: 'APPR-JK-302', category: 'Apparel', price: 2299, quantity: 18, reorderLevel: 6, supplier: "Levi's" },
  { name: 'Spiral Notebook', sku: 'STNY-NB-701', category: 'Stationery', price: 60, quantity: 8, reorderLevel: 25, supplier: 'Classmate' },
  { name: 'Ball Pen Box', sku: 'STNY-BP-702', category: 'Stationery', price: 150, quantity: 100, reorderLevel: 30, supplier: 'Reynolds' },
  { name: 'Basmati Rice 5kg', sku: 'GROC-RC-901', category: 'Grocery', price: 650, quantity: 40, reorderLevel: 15, supplier: 'India Gate' },
  { name: 'Olive Oil 1L', sku: 'GROC-OL-902', category: 'Grocery', price: 899, quantity: 25, reorderLevel: 10, supplier: 'Figaro' },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log(`${products.length} products added`);
  } catch (err) {
    console.error('Seeding failed:', err.message);
  } finally {
    await mongoose.disconnect();
  }
};

seed();
