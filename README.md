# Express TypeScript MySQL CRUD API

REST API sederhana menggunakan **Express**, **TypeScript**, dan **MySQL** dengan pendekatan **native (tanpa ORM)**.  
Project ini dibuat sebagai contoh backend modern berbasis **ESM (ESNext + NodeNext)**.

---

## 🛠️ Teknologi
- Node.js (v18+)
- Express
- TypeScript
- MySQL (`mysql2/promise`)
- dotenv
- Native ESM

---

## 📂 Struktur Project
src/
├─ routes/
│ └─ user.route.ts
├─ db.ts
└─ index.ts

---

## ⚙️ Instalasi

```bash
npm install
```

## 🔐 Konfigurasi Environment

Buat file .env di root project:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=test_db
DB_PORT=3306
PORT=3000

## ▶️ Menjalankan Aplikasi
```bash
npm run start
```
Aplikasi akan berjalan di: 
http://localhost:3000

## 📌 Endpoint API
Method	Endpoint	Deskripsi
GET	/users	Ambil semua data user
GET	/users/:name	Ambil user berdasarkan ID
POST	/users	Tambah user baru
PUT	/users/:name	Update data user
DELETE	/users/:name	Hapus user

## 📮 Contoh Request

POST /users

{
  "name": "Rizky",
  "email": "rizky@mail.com"
}

