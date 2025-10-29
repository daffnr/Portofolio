# Portfolio Website

Website portfolio pribadi yang dibangun menggunakan Next.js, TypeScript, dan Tailwind CSS. Website ini menampilkan informasi tentang developer, daftar project yang pernah dibuat, serta form kontak yang memungkinkan pengunjung mengirim pesan langsung melalui EmailJS.

## Deskripsi

Portfolio website ini dirancang untuk memberikan gambaran profesional tentang skills, pengalaman, dan project yang telah dikerjakan. Tampilan modern dengan animasi halus dan desain responsif memastikan pengalaman pengguna yang optimal di berbagai perangkat.

## Fitur Utama

- Tampilan responsive untuk desktop dan mobile
- Animasi scroll dan efek fade-in pada setiap section
- Section Hero dengan perkenalan singkat dan background particle effect
- Section About dengan informasi lengkap tentang developer
- Section Projects menampilkan daftar project dengan card berukuran seragam
- Section Skills menampilkan tech stack dan tools yang digunakan
- Section Contact dengan integrasi EmailJS untuk mengirim pesan langsung ke email developer
- Navigasi dengan smooth scroll antar section
- Footer dengan informasi kontak dan sosial media

## Teknologi yang Digunakan

- Next.js 14 - Framework React untuk production
- TypeScript - Type safety untuk kode yang lebih maintainable
- Tailwind CSS - Utility-first CSS framework untuk styling
- Framer Motion - Library animasi untuk efek transisi yang halus
- EmailJS - Service untuk mengirim email dari form kontak
- AOS (Animate On Scroll) - Library untuk animasi saat scroll
- React Icons - Koleksi icon untuk UI

## Cara Menjalankan Project

### Prasyarat

Pastikan Anda telah menginstall Node.js versi 18 atau lebih baru. Anda dapat mengecek versi Node.js dengan menjalankan:

```bash
node --version
```

### Instalasi

1. Clone repository ini atau download source code

```bash
git clone <repository-url>
cd portofolio
```

2. Install dependencies menggunakan npm atau package manager lainnya

```bash
npm install
```

atau

```bash
yarn install
```

### Menjalankan Development Server

Jalankan development server dengan perintah berikut:

```bash
npm run dev
```

atau

```bash
yarn dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat website.

### Build untuk Production

Untuk membuat production build:

```bash
npm run build
```

Untuk menjalankan production build:

```bash
npm start
```

## Konfigurasi EmailJS

Form kontak menggunakan EmailJS untuk mengirim email. Untuk menggunakan fitur ini, Anda perlu:

1. Daftar akun di [EmailJS](https://www.emailjs.com/)
2. Buat service dan template email
3. Update konfigurasi di file `components/ContactSection.tsx`:
   - Service ID
   - Template ID
   - Public Key

## Struktur Project

```
portofolio/
├── components/          # React components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── ContactSection.tsx
│   └── ...
├── pages/              # Next.js pages
│   └── home/
├── public/             # Static assets
│   └── images/
├── styles/             # Global styles
└── lib/                # Utility functions
```

## Lisensi

Project ini adalah project pribadi untuk portfolio.
