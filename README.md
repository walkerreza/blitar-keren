# Website Wisata Blitar Raya

## Deskripsi Proyek

Website ini adalah platform informasi wisata untuk Blitar raya yang menampilkan berbagai destinasi wisata populer, informasi tentang Blitar, galeri foto, dan fitur ulasan dari pengunjung. Proyek ini dikembangkan menggunakan React dan Tailwind CSS dengan pendekatan atomic design.

## Fitur Utama

- **Halaman Utama**: Menampilkan video cinematic Blitar, destinasi populer, dan informasi umum
- **Detail Destinasi**: Informasi lengkap tentang destinasi wisata termasuk tiket, jam buka, dan peta lokasi
- **Halaman Reviews**: Pengunjung dapat melihat dan membuat ulasan tentang pengalaman wisata mereka
- **Navigasi Modern**: Navbar dengan efek backdrop-blur dan indikator menu aktif
- **Tampilan Responsif**: Desain yang optimal untuk perangkat mobile dan desktop

## Teknologi yang Digunakan

- **React**: Library JavaScript untuk membangun antarmuka pengguna
- **Vite**: Build tool yang cepat untuk pengembangan modern
- **Tailwind CSS**: Framework CSS untuk styling yang efisien
- **React Router**: Untuk navigasi antar halaman
- **React Icons**: Koleksi ikon populer untuk React

## Cara Menjalankan Proyek

### Prasyarat
- Node.js versi terbaru
- npm atau yarn

### Instalasi

1. Clone repositori ini
2. Buka terminal dan navigasi ke direktori proyek
3. Jalankan perintah untuk menginstal dependensi:
   ```bash
   npm install
   ```

### Menjalankan Server Development

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

### Build untuk Production

```bash
npm run build
```

File hasil build akan tersedia di folder `dist`

## Struktur Proyek

- `src/components`: Komponen React yang diorganisir dengan pendekatan atomic design
  - `atoms`: Komponen dasar seperti Button, Card, dll
  - `molecules`: Komponen yang terdiri dari beberapa atom
  - `organisms`: Komponen yang lebih kompleks seperti Navbar, Hero, dll
- `src/pages`: Halaman-halaman utama aplikasi
- `src/assets`: Gambar, video, dan aset statis lainnya
- `src/context`: Context API untuk state management
- `data`: Data statis untuk aplikasi

## Kontributor

Dikembangkan untuk lomba web design.


