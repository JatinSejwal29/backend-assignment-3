# Inventory and Data Management System

Backend for Web Dev III - Assignment 3 (Node.js, Express, MongoDB, Mongoose, dotenv).

## Setup

1. Install MongoDB locally (or use a MongoDB Atlas URI)
2. `npm install`
3. Copy `.env.example` to `.env` and edit if needed
4. `npm run seed` (optional, adds 12 sample products)
5. `npm start` (or `npm run dev` for auto-restart)

Server runs on `http://localhost:5000`

## API Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| POST | /api/products | Create a product |
| GET | /api/products | List products (filter, sort, paginate) |
| GET | /api/products/:id | Get one product |
| PUT | /api/products/:id | Update product details |
| PATCH | /api/products/:id/stock | Restock / sale (`{ "change": 10 }` or `{ "change": -3 }`) |
| DELETE | /api/products/:id | Delete a product |
| GET | /api/products/low-stock | Products with quantity <= reorderLevel |
| GET | /api/products/summary | Category-wise summary (aggregation) |

### Query params for GET /api/products

- `category`, `supplier`, `search` (name or sku)
- `minPrice`, `maxPrice`, `inStock=true|false`
- `sort=-price,name` (prefix `-` for descending)
- `page`, `limit` (default 1 and 10)

Example: `/api/products?category=Electronics&minPrice=500&sort=-price&page=1&limit=5`

### Sample POST body

```json
{
  "name": "Gel Pen Pack of 15",
  "sku": "STNY-PN-713",
  "category": "Stationery",
  "price": 120,
  "quantity": 40,
  "reorderLevel": 20,
  "supplier": "Cello Pens"
}
```

## Folder Structure

```
config/       database connection
models/       mongoose schema
controllers/  request handling logic
routes/       express routes
middleware/   id check, stock check, error handler
seed.js       sample data
server.js     app entry point
```
