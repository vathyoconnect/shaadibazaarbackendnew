# ShaadiBazaar Backend

This is the backend API for **ShaadiBazaar**, an Indian wedding marketplace app built with Node.js, Express, and MongoDB.

## 🚀 Features

- User, Vendor, Admin roles
- JWT Authentication
- Vendor profiles & listings
- Booking system
- Reviews & ratings
- Image upload support
- Admin dashboard

---

## 🛠 Technologies Used

- Node.js
- Express
- MongoDB Atlas
- JWT Authentication
- Multer (image upload)
- Render (cloud deployment)

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/shaadibazaar-backend.git
cd shaadibazaar-backend
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file using the template below:

```
MONGO_URI=your_mongodb_atlas_connection
JWT_SECRET=your_secret_key
PORT=5000
```

---

## ▶️ Run Locally

```bash
npm run dev
```

---

## 🌐 API Endpoints Overview

| Endpoint                     | Access   | Description                     |
|------------------------------|----------|---------------------------------|
| POST /api/auth/register      | Public   | Register a new user/vendor      |
| POST /api/auth/login         | Public   | Login and get token             |
| GET /api/vendors             | Admin    | View all vendors                |
| POST /api/vendors            | Vendor   | Create vendor profile           |
| GET /api/vendors/me          | Vendor   | Get own profile                 |
| POST /api/bookings           | User     | Book vendor                     |
| GET /api/bookings/my-bookings| User     | View my bookings                |
| PUT /api/bookings/:id        | Vendor   | Confirm/reject booking          |
| POST /api/reviews            | User     | Submit review                   |
| GET /api/reviews/:vendorId   | Public   | Get vendor reviews              |
| POST /api/upload             | Vendor   | Upload an image (Multer)        |
| GET /uploads/:filename       | Public   | Access uploaded image           |
| GET /api/admin/stats         | Admin    | Dashboard stats                 |
| GET /api/admin/users         | Admin    | All users                       |
| GET /api/admin/bookings      | Admin    | All bookings                    |
| GET /api/admin/reviews       | Admin    | All reviews                     |

---

## 🌍 Deployment

- MongoDB: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
- Render: [https://render.com/](https://render.com/)

---

## 👨‍💻 Author

Built with ❤️ by [Raghu]
