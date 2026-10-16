# Portofolio Audrey Nabilla Laksono (`A12.2024.07171`)

Situs portofolio akademik dan teknis untuk **Audrey Nabilla Laksono**, mahasiswa Program Studi S1 Sistem Informasi, Fakultas Ilmu Komputer, Universitas Dian Nuswantoro (UDINUS) Semarang.

## Isi Berkas

- `index.html` — Halaman utama portofolio (Bab I – VII).
- `monograph.css` — Lembar gaya visual (*Warm Alabaster, Espresso Ink, Botanical Cypress, Rose-Berry*).
- `interactive.js` — Pengendali fitur interaktif (Penjelajah 4 Pilar Bidang, Filter Studi Aktif Semester 5, Filter Karya, dan Laci Spesifikasi Arsitektur).
- `crest.svg` — Ikon monogram `AN`.

---

## Cara Upload & Publikasi ke GitHub (`audreynabilla`)

### Cara 1: Upload Langsung lewat Browser (Paling Mudah, Tanpa Terminal)
1. Buka dan login ke akun GitHub kamu di [https://github.com/audreynabilla](https://github.com/audreynabilla).
2. Klik tombol **+** di pojok kanan atas, lalu pilih **New repository**.
3. Isi **Repository name** dengan `portfolio` (atau `audreynabilla.github.io` jika ingin alamat utamanya langsung `https://audreynabilla.github.io`).
4. Pilih **Public**, lalu klik **Create repository**.
5. Pada halaman repositori baru tersebut, klik tautan **uploading an existing file**.
6. Tarik (*drag & drop*) semua file yang ada di dalam folder ini (`index.html`, `monograph.css`, `interactive.js`, `crest.svg`, `README.md`) ke kotak unggahan.
7. Klik tombol hijau **Commit changes**.
8. Untuk mengaktifkan link website:
   - Buka tab **Settings** di repositori tersebut.
   - Pilih menu **Pages** di bagian kiri.
   - Pada bagian **Build and deployment** -> **Branch**, ubah `None` menjadi `main` dan biarkan foldernya `/(root)`, lalu klik **Save**.
   - Tunggu sekitar 1 menit, lalu segarkan halaman. Link website kamu akan muncul di bagian atas halaman **Pages**.

### Cara 2: Menggunakan Git di Terminal / VS Code
Jalankan perintah berikut di dalam folder ini:

```bash
git init
git branch -M main
git add .
git commit -m "feat: initial portfolio website"
git remote add origin https://github.com/audreynabilla/portfolio.git
git push -u origin main
```
Setelah selesai, buka menu **Settings -> Pages** di repositori GitHub kamu dan pilih branch `main` untuk mengaktifkan GitHub Pages.
