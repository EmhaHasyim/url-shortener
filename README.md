# URL Shortener 🔗

Sebuah aplikasi pemendek URL yang cepat dan efisien dengan antarmuka modern. Memungkinkan pengguna untuk mengubah URL panjang menjadi tautan pendek yang mudah dibagikan.

## Tech Stack 🛠️

**Frontend:**
- ⚡ [Vite](https://vitejs.dev/) - Build tool cepat
- ⚛️ [React](https://react.dev/) - Library UI
- 🎨 [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) - Styling komponen
- 🧩 [Zustand](https://zustand-demo.pmnd.rs/) - State management
- 🔄 [TanStack Query](https://tanstack.com/query/latest) - Data fetching & caching

**Backend:**
- 🚀 [Bun](https://bun.sh/) - Runtime JavaScript
- 🔥 [Hono](https://hono.dev/) - Framework web
- 📐 [Zod](https://zod.dev/) - Validasi schema
- 🗄️ [Drizzle ORM](https://orm.drizzle.team/) - ORM untuk SQL
- 💾 [SQLite](https://www.sqlite.org/index.html) - Database

## Instalasi 🛠️

### Prasyarat:
- [Bun](https://bun.sh/) v1.2.5 atau lebih baru

1. **Clone repositori**
```bash
git clone https://github.com/EmhaHasyim/url-shortener
cd url-shortener
```

2. **Instal dependensi backend**
```bash
bun install
```

3. **Setup database**
```bash
bun run database
```

4. **Instal dependensi frontend**
```bash
cd frontend
bun install
```

5. **Build frontend**
```bash
bun run build
cd ..
```

6. **Menjalankan Aplikasi 🚀**
```bash
bun run start
```

Aplikasi akan tersedia di:
- Backend: http://localhost:3000

## Environment Variables 📋

Buat file `.env` di root direktori dengan konten:
```env
DB_FILE_NAME=database.sqlite
PORT=3000
```
