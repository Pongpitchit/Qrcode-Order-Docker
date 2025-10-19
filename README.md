# QR Code Ordering System
# ระบบสั่งอาหารผ่าน QR Code

A modern restaurant ordering system where customers can order directly via QR code at their table. Built with **Next.js 13+**, **Bun backend**, **PostgreSQL**, **Redis**, and **MinIO**.

ระบบสั่งอาหารสมัยใหม่ที่ลูกค้าสามารถสั่งอาหารโดยตรงผ่าน QR Code ที่โต๊ะ ใช้ **Next.js 13+**, **Bun backend**, **PostgreSQL**, **Redis**, และ **MinIO**

---

## Features
## ฟีเจอร์

- Scan QR code to open table-specific menu.
- Browse available menu items with images.
- Add/remove items from cart and adjust quantity.
- Submit orders with optional notes.
- Manage menus, tables, and orders in backend.
- Image storage via **MinIO** with presigned URLs.
- Backend caching with **Redis**.

- สแกน QR Code เพื่อเปิดเมนูเฉพาะโต๊ะ
- เรียกดูรายการอาหารพร้อมรูปภาพ
- เพิ่ม/ลบรายการในตะกร้าและปรับจำนวน
- ส่งคำสั่งซื้อพร้อมหมายเหตุเพิ่มเติม
- จัดการเมนู โต๊ะ และคำสั่งซื้อในระบบหลังบ้าน
- เก็บรูปภาพผ่าน **MinIO** ด้วย presigned URLs
- ระบบแคชหลังบ้านด้วย **Redis**

---

## Tech Stack
## เทคโนโลยีที่ใช้

- **Frontend**: Next.js 13+, React, TypeScript, Tailwind CSS
- **Backend**: Bun + Hono framework
- **Database**: PostgreSQL 16
- **Cache**: Redis 7
- **Storage**: MinIO
- **State Management**: Zustand (cart store)
- **Icons**: lucide-react
- **UI Components**: shadcn/ui

- **ส่วนหน้า**: Next.js 13+, React, TypeScript, Tailwind CSS
- **ส่วนหลัง**: Bun + Hono framework
- **ฐานข้อมูล**: PostgreSQL 16
- **แคช**: Redis 7
- **ที่เก็บไฟล์**: MinIO
- **การจัดการสถานะ**: Zustand (cart store)
- **ไอคอน**: lucide-react
- **คอมโพเนนต์ UI**: shadcn/ui

---

## Getting Started
## เริ่มต้นใช้งาน

### Prerequisites
### ข้อกำหนดเบื้องต้น

- Docker & Docker Compose
- Node.js / Bun (depending on environment)
- Optional: bun or yarn

- Docker & Docker Compose
- Node.js / Bun (ขึ้นอยู่กับสภาพแวดล้อม)
- ตัวเลือก: bun หรือ yarn

### Clone Repository
### คลอนโปรเจค

```bash
git clone https://github.com/yourusername/qr-code-ordering.git
cd qr-code-ordering
```

---

## How to Run Project
## วิธีการรันโปรเจค

Follow these steps to set up and run the project:

ทำตามขั้นตอนเหล่านี้เพื่อตั้งค่าและรันโปรเจค:

1. **Run Prisma Migration:**
   **รัน Prisma Migration:**
   ```bash
   bunx prisma migrate dev --name init
   ```

2. **Reset Prisma (if migration fails):**
   **รีเซ็ต Prisma (หาก migration ไม่สำเร็จ):**
   ```bash
   bunx prisma reset
   ```

3. **Seed Database (run once to start project):**
   **ใส่ข้อมูลเริ่มต้นในฐานข้อมูล (รันครั้งเดียวเพื่อเริ่มโปรเจค):**
   ```bash
   bun run seed
   ```
   (Run this in the backend directory)
   (รันในโฟลเดอร์ backend)

4. **Start Backend:**
   **เริ่ม Backend:**
   ```bash
   bun run dev
   ```
   (Run this in the backend directory)
   (รันในโฟลเดอร์ backend)

5. **Start Frontend:**
   **เริ่ม Frontend:**
   ```bash
   bun run dev
   ```
   (Run this in the frontend directory)
   (รันในโฟลเดอร์ frontend)

6. **Login with User Email and Password:**
   **เข้าสู่ระบบด้วยอีเมลและรหัสผ่าน:**
   Use the seeded user credentials to access the system.
   ใช้อีเมลและรหัสผ่านที่ใส่ไว้ในระบบเพื่อเข้าถึง

---

## Running with Docker

The project includes a `docker-compose.yml` to run **PostgreSQL**, **Redis**, and **MinIO**.

```bash
docker-compose up -d
```

- PostgreSQL: `localhost:5432`
- Redis: `localhost:6379`
- MinIO API: `localhost:9000`
- MinIO Console: `localhost:9001` (login with `minioadmin:minioadmin`)

---

## Backend

1. Navigate to backend folder:

```bash
cd backend
```

2. Install dependencies (if using Bun):

```bash
bun install
```

3. Run development server:

```bash
bun run --hot src/index.ts
```

4. Seed database (optional):

```bash
bun run src/utils/seed.ts
```

---

## Frontend

1. Navigate to frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
bun install
# or npm install / yarn install
```

3. Run development server:

```bash
bun dev
# or npm run dev / yarn dev
```

- Frontend default: `http://localhost:3000`
- API backend default: `http://localhost:3001/api/v1`

---

## Environment Variables

Create `.env` files for frontend and backend:

**Frontend** (`.env.local`):

```env
NEXT_PUBLIC_API_URL="http://localhost:3001/api/v1"

REDIS_URL=redis://localhost:6379

NEXT_PUBLIC_MINIO_ENDPOINT=http://localhost:9000
NEXT_PUBLIC_MINIO_BUCKET=menus

MINIO_ENDPOINT=http://localhost:9000
MINIO_ACCESS_KEY=
MINIO_SECRET_KEY=
MINIO_BUCKET=menus
```

**Backend** (`.env`):

```env
# Hono Server
PORT=3001

# Redis
REDIS_URL=redis://redis:6379

# Prisma
DATABASE_URL="postgresql://[root]:[password]@localhost:5432/qrcode-order?schema=public"

JWT_SECRET=

MINIO_ENDPOINT=http://localhost:9000
MINIO_ACCESS_KEY=
MINIO_SECRET_KEY=
MINIO_BUCKET=menus
```

---

## API Endpoints (Summary)

**Auth**

- `POST /auth/register`
- `POST /auth/login`
- `GET /auth/me`
- `POST /auth/logout`
- `PATCH /auth/change-password`

**Menu**

- `GET /menus`
- `GET /menus/:id`
- `POST /menus`
- `PUT /menus/:id`
- `DELETE /menus/:id`

**Order**

- `GET /orders`
- `GET /orders/:id`
- `GET /orders/table/:tableId`
- `POST /orders`
- `PATCH /orders/:id/status`
- `DELETE /orders/:id`

**Table**

- `GET /tables`
- `POST /tables`
- `PUT /tables/:id`
- `PATCH /tables/:id/toggle`
- `DELETE /tables/:id`

**User**

- `GET /users`
- `GET /users/:id`
- `POST /users`
- `PUT /users/:id`
- `DELETE /users/:id`

**Presign URL**

- `GET /presign/:key`

---

## Folder Structure

```
frontend/
  ├─ app/                  # Next.js pages & layouts
  ├─ components/           # UI components
  ├─ lib/                  # API utils, fetch presigned URL
  ├─ store/                # Zustand cart store
  └─ public/

backend/
  ├─ src/
      ├─ api/              # Hono routes
      ├─ config/           # Database & MinIO config
      ├─ utils/            # Helpers, seeding
      └─ index.ts          # Entry point
```

---

## Notes

- **MinIO Images**: Use presigned URLs to serve images securely in frontend.
- **Cart State**: Stored in frontend using Zustand; no backend persistence until order submission.
- **Redis**: Can be used to cache menu or frequently accessed data.
- **Docker**: Everything required (DB, Redis, MinIO) is included in `docker-compose.yml`.
