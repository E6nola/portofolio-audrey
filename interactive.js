/* ==========================================================================
   AUDREY NABILLA LAKSONO — INTERACTIVE MONOGRAPH CONTROLLER
   Powers:
   1. 4-Pillar Domain Workbench (Bab I)
   2. Active Semester 5 Study Cluster Filter (Bab II)
   3. Case Study Category Filter & Architecture Specification Drawer (Bab III)
   4. Scroll-Spy Chapter Index & Clipboard Utilities
   ========================================================================== */

(function () {
  "use strict";

  /* 1. Data for Interactive 4-Pillar Domain Workbench */
  const DOMAIN_DATA = {
    web: {
      tag: "Pilar 01 — Pengembangan Perangkat Lunak",
      courses: "PWD · PWL · Konsep Basis Data · CRM",
      title: "Membangun Aplikasi Web Transaksional dengan Arsitektur MVC & REST API",
      desc: "Merancang dan mengimplementasikan aplikasi web dari perancangan skema relasional MySQL hingga lapisan antarmuka pengguna. Menggunakan PHP Native berorientasi objek (OOP) dengan pemisahan Model-View-Controller (MVC), abstraksi basis data PDO untuk mencegah injeksi SQL, autentikasi sesi menggunakan hashing kata sandi, serta penyediaan endpoint JSON RESTful API.",
      highlights: [
        {
          key: "Arsitektur Kode",
          val: "Pemisahan Front Controller (public/index.php), Controller spesifik modul, Model berbasis PDO, dan SecurityHelper sanitasi input."
        },
        {
          key: "Fitur Produksi",
          val: "Multi-peran (Admin & Pelanggan), keranjang transaksi POS, manajemen poin loyalitas CRM, unggah bukti pembayaran, dan CRUD REST API (GET, POST, PUT, DELETE)."
        },
        {
          key: "Artefak Utama",
          val: "PawSpa Pet Grooming Booking, Sistem Inventaris MVC + REST API, Aplikasi Web POS & CRM Djuara Coffee (4 cabang), serta Sistem Penjualan Multi-Modul."
        }
      ],
      bpTitle: "Alur Arsitektur Sistem yang Diterapkan",
      steps: [
        {
          code: "01 / Skema Data",
          head: "Pemodelan ERD & Normalisasi MySQL",
          text: "Merancang relasi tabel (pengguna, produk, reservasi/transaksi, member) beserta constraint kunci asing."
        },
        {
          code: "02 / Lapisan Logika",
          head: "Model PDO & Controller OOP",
          text: "Menangani query parameter terikat (prepared statements), validasi input, dan manajemen sesi login."
        },
        {
          code: "03 / Antarmuka & API",
          head: "Tampilan Responsif & Endpoint JSON",
          text: "Menyajikan dasbor operasional bagi admin/pelanggan sekaligus layanan REST API untuk pertukaran data."
        }
      ],
      filterTarget: "web",
      btnLabel: "Tampilkan Karya Aplikasi Web & API"
    },

    ux: {
      tag: "Pilar 02 — Rekayasa Sistem & Pengalaman Pengguna",
      courses: "APST · APSIO · IMK · MPB · Literasi Informasi",
      title: "Pemodelan Proses Bisnis (UML/BPMN) & Riset UI/UX Tervalidasi Statistik",
      desc: "Menganalisis permasalahan operasional organisasi menggunakan kerangka PIECES, lalu memodelkan solusi sistem baik secara terstruktur (FOD, DFD) maupun berorientasi objek (UML & BPMN). Pada sisi antarmuka, menggabungkan evaluasi Heuristic Nielsen, perancangan User-Centered Design (UCD), dan uji ketergunaan System Usability Scale (SUS) yang divalidasi dengan IBM SPSS.",
      highlights: [
        {
          key: "Pemodelan Sistem",
          val: "BPMN As-Is & To-Be (Bizagi), Use Case Diagram & skenario, Activity Diagram, Sequence Diagram (PlantUML & Draw.io), Class Diagram, serta DFD berjenjang."
        },
        {
          key: "Metode Riset UX",
          val: "10 Prinsip Heuristic Evaluation Nielsen, uji validitas Pearson & reliabilitas Cronbach's Alpha (0,716) di SPSS, serta evaluasi akhir SUS (skor 78,9 / Grade B)."
        },
        {
          key: "Artefak Utama",
          val: "Naskah Jurnal JOINS #16835 (Redesain UI/UX DPM-KM UDINUS), Analisis UML/BPMN PT. Bina Givensa, Desain Produk LAMI Coffee, dan Marketplace Pujasera."
        }
      ],
      bpTitle: "Tahapan Rekayasa Kebutuhan & Desain UI/UX",
      steps: [
        {
          code: "01 / Audit & Analisis",
          head: "PIECES, BPMN As-Is & Heuristic Evaluation",
          text: "Mengidentifikasi titik hambatan proses bisnis serta masalah ketergunaan antarmuka pada sistem berjalan."
        },
        {
          code: "02 / Arsitektur Model",
          head: "UML (Use Case, Sequence, Class) & BPMN To-Be",
          text: "Merumuskan alur proses usulan, interaksi objek pada Sequence Diagram, dan struktur kelas basis data."
        },
        {
          code: "03 / Prototipe & Uji",
          head: "High-Fidelity UCD & Validasi SPSS / SUS",
          text: "Menguji prototipe kepada responden nyata dan mengukur peningkatan usability secara kuantitatif."
        }
      ],
      filterTarget: "ux",
      btnLabel: "Tampilkan Karya Analisis UML & UI/UX"
    },

    gov: {
      tag: "Pilar 03 — Tata Kelola Enterprise, Strategi & Audit TI",
      courses: "Tata Kelola MLTI · PSSI · Audit SI · PSDP · Transformasi Digital",
      title: "Penyelarasan Strategi Bisnis-TI, Katalog Layanan ITIL & Audit Sistem Informasi",
      desc: "Menerapkan kerangka kerja standar industri untuk memastikan investasi teknologi informasi mendukung sasaran strategis organisasi. Mencakup penyusunan rencana strategis SI metode Ward & Peppard, perancangan portofolio layanan ITIL v3/v4, pemetaan kontrol COBIT 5 pada sistem ERP Odoo, hingga pelaksanaan Audit Sistem Informasi.",
      highlights: [
        {
          key: "Kerangka Standar",
          val: "ITIL (Service Strategy 4P, Service Catalogue, RFC, SLA), COBIT 5 (APO, DSS, MEA), Luftman SAMM, dan Ward & Peppard Strategic Planning."
        },
        {
          key: "Analisis Strategis",
          val: "SWOT, Value Chain Analysis, Porter's Five Forces, Balanced Scorecard Strategic Map, dan pemetaan portofolio aplikasi McFarlan Strategic Grid."
        },
        {
          key: "Studi Kasus Nyata",
          val: "Perumda Air Minum (PDAM) Tirta Moedal Kota Semarang, ERP Odoo PT Batik Semarang 16, PT Shopee Internasional Indonesia, dan PT Bukalapak.com Tbk."
        }
      ],
      bpTitle: "Kerangka Penyelarasan & Audit Enterprise",
      steps: [
        {
          code: "01 / Pemetaan Strategi",
          head: "Evaluasi Lingkungan Bisnis & TI (Ward & Peppard)",
          text: "Menganalisis rantai nilai internal, tekanan industri, dan kesenjangan sistem informasi yang berjalan."
        },
        {
          code: "02 / Tata Kelola Layanan",
          head: "Katalog Layanan ITIL, SLA & Domain COBIT 5",
          text: "Menstandarkan spesifikasi layanan TI, prosedur Request for Change (RFC), dan metrik kinerja proses."
        },
        {
          code: "03 / Audit & Mitigasi",
          head: "Evaluasi Pengendalian Internal & Risiko TI",
          text: "Menyusun proposal dan instrumen audit sistem informasi untuk menjamin keandalan layanan publik."
        }
      ],
      filterTarget: "gov",
      btnLabel: "Tampilkan Karya Tata Kelola & Strategi TI"
    },

    data: {
      tag: "Pilar 04 — Sains Data, Kecerdasan Buatan & Sistem Keputusan",
      courses: "Penambangan Data · Analitika Data · SPK · Kecerdasan Buatan · Riset Operasi",
      title: "Eksplorasi Penambangan Data, Imbalanced Learning & Keputusan Multikriteria",
      desc: "Mengolah dataset mentah menjadi wawasan prediktif dan rekomendasi keputusan yang dapat dipertanggungjawabkan. Mengombinasikan eksperimen pembelajaran mesin di Google Colab (Python), penanganan ketimpangan kelas data (SMOTE/ADASYN), kajian sistematis rantai pasok (SCOR/PRISMA), serta model Sistem Pendukung Keputusan (AHP, SAW, WP).",
      highlights: [
        {
          key: "Machine Learning",
          val: "Regresi Linear/Berganda, Decision Tree, KNN, K-Means Clustering, Market Basket Analysis (Apriori & FP-Growth), serta GridSearchCV."
        },
        {
          key: "Imbalanced Data",
          val: "Eksperimen komparatif oversampling SMOTE, SMOTE-Tomek, dan ADASYN dengan evaluasi Accuracy, Precision, Recall, dan F1-Score."
        },
        {
          key: "Optimasi & SPK",
          val: "Analytical Hierarchy Process (AHP), Simple Additive Weighting (SAW), Weighted Product (WP), Tabel Keputusan, serta metode Simplex & MODI."
        }
      ],
      bpTitle: "Alur Eksperimen Analitika & Pemodelan Keputusan",
      steps: [
        {
          code: "01 / Prapemrosesan",
          head: "Pembersihan Data & Penyeimbangan Kelas (SMOTE/ADASYN)",
          text: "Menangani nilai kosong, normalisasi atribut, dan mengatasi bias pada dataset dengan kelas minoritas."
        },
        {
          code: "02 / Pemodelan & Optimasi",
          head: "Klasifikasi, Klasterisasi & Pembobotan AHP/SAW/WP",
          text: "Melatih model prediktif/asosiatif di Python Colab atau menyusun matriks keputusan multikriteria."
        },
        {
          code: "03 / Evaluasi Kinerja",
          head: "Validasi Metrik (F1-Score, Recall) & Rekomendasi",
          text: "Mengukur ketepatan model secara objektif sebelum diterjemahkan menjadi rekomendasi kebijakan."
        }
      ],
      filterTarget: "all",
      btnLabel: "Lihat Seluruh Karya & Riset"
    }
  };

  /* 2. Detailed Specification Data for the 8 Case Studies (Modal Drawer) */
  const CASE_STUDIES = {
    "pawspa": {
      kicker: "KARYA 01 · FULL-STACK PHP OOP MVC",
      title: "PawSpa — Sistem Reservasi & Manajemen Layanan Grooming Hewan",
      meta: "Pemrograman Web Lanjut (Semester 4) · Proyek Akhir Kelompok 7 (Audrey Nabilla L., Putri Gisca D.R., Aisha Fayza N.H., Labibah Bunga M.)",
      summary: "Aplikasi web reservasi layanan perawatan anjing dan kucing yang dirancang dengan arsitektur Model-View-Controller (MVC) murni menggunakan PHP Native OOP dan basis data relasional MySQL/MariaDB. Sistem ini memisahkan alur kerja pelanggan dan administrator secara ketat, mendukung pemilihan paket perawatan, pengunggahan bukti pembayaran, hingga pemantauan status pengerjaan secara real-time.",
      architecture: [
        {
          title: "Router & Front Controller Terpusat",
          detail: "Menggunakan Apache .htaccess URL rewriting yang mengarahkan permintaan ke pengendali yang sesuai (AuthController, BookingController, ServiceController, AdminController)."
        },
        {
          title: "Lapisan Model & Skema Basis Data Otomatis",
          detail: "Dilengkapi skrip auto-installer SQL (config/install.sql) yang membangun tabel users, services, dan bookings lengkap dengan relasi kunci asing melalui UserModel, ServiceModel, dan BookingModel."
        },
        {
          title: "Manajemen Berkas & Siklus Status Reservasi",
          detail: "Menangani unggah foto hewan dan bukti pembayaran pelanggan (public/uploads/payments/) serta transisi status antrean: pending, confirmed, completed, dan cancelled."
        }
      ],
      deliverables: [
        "Modul Autentikasi & Profil: Registrasi pelanggan, login multi-peran (Admin & User), proteksi sesi, dan pembaruan profil pengguna.",
        "Katalog & Filter Layanan: Penjelajahan paket grooming anjing dan kucing beserta rincian harga dan durasi layanan.",
        "Formulir Reservasi & Riwayat Pelanggan: Input jadwal kedatangan, unggah bukti bayar, pembatalan/ubah jadwal pada status pending.",
        "Dasbor Administrator: Ringkasan statistik reservasi hari ini, total pelanggan, CRUD katalog layanan, dan verifikasi pembayaran."
      ],
      stack: ["PHP 7.4+ OOP", "Custom MVC", "MySQL / MariaDB", "HTML5 & Custom CSS", "Vanilla JavaScript", "Apache .htaccess"],
      links: [
        { label: "Buka Repo UAS-kelompok-7 di GitHub ↗", url: "https://github.com/audreynabilla/UAS-kelompok-7" }
      ]
    },

    "inventaris-mvc": {
      kicker: "KARYA 02 · ARSITEKTUR MVC, PDO & RESTFUL API",
      title: "Sistem Manajemen Inventaris Berbasis MVC & Layanan RESTful JSON API",
      meta: "Pemrograman Web Lanjut (Semester 4) · Proyek Individu (A12.2024.07171)",
      summary: "Pengembangan bertahap aplikasi manajemen inventaris produk yang menerapkan praktik keamanan web modern di PHP. Mengintegrasikan antarmuka pengelolaan stok berbasis MVC dengan layanan RESTful API mandiri yang melayani pertukaran data berformat JSON.",
      architecture: [
        {
          title: "Struktur Direktori MVC Modular",
          detail: "Memisahkan kode ke dalam app/controllers (AuthController, ProdukController), app/models (UserModel, ProdukModel), app/views, dan titik masuk public/index.php."
        },
        {
          title: "Keamanan PDO & SecurityHelper",
          detail: "Seluruh interaksi basis data menggunakan PHP Data Objects (PDO) dengan prepared statements, dikombinasikan dengan SecurityHelper untuk sanitasi input XSS dan hashing kata sandi (password_hash & password_verify)."
        },
        {
          title: "Endpoint RESTful API Mandiri (api/)",
          detail: "Menyediakan antarmuka pemrograman aplikasi di folder api/ (read.php [GET], create.php [POST], update.php [PUT], delete.php [DELETE]) dengan header HTTP dan payload JSON standar."
        }
      ],
      deliverables: [
        "Operasi CRUD Inventaris Lengkap: Pengelolaan kode produk, nama barang, kategori, harga satuan, jumlah stok, dan unggah foto produk.",
        "Sistem Login & Sesi Terproteksi: Pembatasan akses halaman manajemen stok hanya bagi pengguna terautentikasi.",
        "Dokumentasi & Pengujian Endpoint API: Pengujian metode HTTP GET, POST, PUT, dan DELETE untuk manipulasi data produk secara terprogram."
      ],
      stack: ["PHP Native OOP", "PHP PDO", "MySQL", "RESTful JSON API", "SecurityHelper", "Git & XAMPP"],
      links: [
        { label: "Buka Repo pwl-crud-07171 di GitHub ↗", url: "https://github.com/audreynabilla/pwl-crud-07171" },
        { label: "Video Demo Tahap 1 (YouTube) ↗", url: "https://youtu.be/tk5sZqzhVaE" },
        { label: "Video Demo Tahap 2 (YouTube) ↗", url: "https://youtu.be/LKf02jkrs-I" },
        { label: "Video Demo Tahap 3 (YouTube) ↗", url: "https://youtu.be/afBZMuH899g" }
      ]
    },

    "crm-djuara": {
      kicker: "KARYA 03 · SISTEM INFORMASI CRM & POS RITEL",
      title: "Sistem Informasi CRM & Kasir Multi-Cabang pada Djuara Coffee",
      meta: "Pengelolaan Hubungan Pelanggan / CRM (Semester 3 — Kelas Unggulan)",
      summary: "Perancangan dan implementasi aplikasi web Point of Sale (POS) yang terintegrasi langsung dengan mesin loyalitas pelanggan (Customer Relationship Management) untuk jaringan kedai Djuara Coffee yang memiliki 4 cabang operasional.",
      architecture: [
        {
          title: "Pemodelan Basis Data Relasional & UML",
          detail: "Diawali dengan perancangan Entity Relationship Diagram (ERD), Sequence Diagram pengelolaan master produk, dan Activity Diagram alur transaksi menggunakan Draw.io."
        },
        {
          title: "Mesin Perhitungan Poin & Konfigurasi CRM",
          detail: "Modul konfigurasi_crm.php dan cek_member.php secara otomatis menghitung perolehan poin dari nominal belanja pelanggan dan memperbarui saldo poin anggota."
        },
        {
          title: "Manajemen Multi-Cabang & Pelaporan",
          detail: "Memungkinkan pemantauan transaksi lintas cabang (kelola_cabang.php, performa_cabang.php) serta rekapitulasi laporan penjualan harian."
        }
      ],
      deliverables: [
        "Modul Kasir (POS) & Cetak Struk: Input pesanan dengan pilihan modifier minuman (transaksi.php, proses_transaksi.php, cetak_struk.php).",
        "Manajemen Katalog & Cabang: Pengelolaan produk kopi/non-kopi, tambahan topping/modifier, dan daftar cabang operasional.",
        "Program Loyalitas & Katalog Reward: Pendaftaran member (data_pelanggan.php), pengaturan ambang poin, dan penukaran hadiah (reward_list.php)."
      ],
      stack: ["PHP Native", "MySQL", "HTML5 / CSS3 / JS", "ERD & Sequence Diagram", "CRM Loyalty Engine"],
      links: []
    },

    "penjualan-web": {
      kicker: "KARYA 04 · APLIKASI WEB OPERASIONAL & FRONTEND",
      title: "Aplikasi Web Manajemen Penjualan, Pegawai, Kategori & Supplier",
      meta: "Pemrograman Web Dasar (Semester 3) · Proyek Individu (A12.2024.07171)",
      summary: "Kumpulan proyek pengembangan web semester 3 yang mencakup sistem informasi manajemen toko berbasis PHP/MySQL dengan empat modul entitas relasional, serta berbagai aplikasi mikro interaktif berbasis HTML5, Bootstrap 5, dan JavaScript DOM.",
      architecture: [
        {
          title: "Autentikasi & Dasbor Administrasi (penjualan_7171baru)",
          detail: "Menyediakan alur registrasi.php, login.php, dan dashboard.php yang terhubung ke basis data MySQL."
        },
        {
          title: "Empat Modul CRUD Entitas Bisnis",
          detail: "Mencakup operasi tambah, lihat detail, ubah, dan hapus untuk Data Barang, Data Pegawai, Kategori Produk, dan Data Supplier."
        },
        {
          title: "Eksplorasi Antarmuka Bootstrap 5 & JavaScript DOM",
          detail: "Mencakup situs katalog kuliner/bakery responsif (UTS.html) serta aplikasi pemesanan jamu tradisional dan kalkulator interaktif berbasis manipulasi DOM."
        }
      ],
      deliverables: [
        "Modul Barang & Kategori: Pengelolaan inventaris barang dagangan beserta klasifikasi kategorinya.",
        "Modul Pegawai & Supplier: Pencatatan identitas staf operasional toko dan direktori pemasok barang.",
        "Mini-Apps JavaScript & Bootstrap 5: Validasi formulir dinamis, kalkulasi harga pesanan otomatis, dan tata letak responsif."
      ],
      stack: ["PHP Native", "MySQL", "HTML5 & CSS3", "Bootstrap 5.3", "Vanilla JavaScript DOM"],
      links: []
    },

    "bina-givensa": {
      kicker: "KARYA 05 · ANALISIS SISTEM TERSTRUKTUR & BERORIENTASI OBJEK",
      title: "Analisis & Perancangan Sistem Informasi Jual Beli Alat Kesehatan pada PT. Bina Givensa",
      meta: "APST (Semester 2) & APSIO (Semester 3 — Kelas Unggulan)",
      summary: "Studi kasus komprehensif selama dua semester berturut-turut pada PT. Bina Givensa, perusahaan distributor alat kesehatan di Semarang. Mengubah prosedur pemesanan, pengadaan, dan distribusi manual menjadi spesifikasi sistem informasi berbasis web yang terdokumentasi penuh.",
      architecture: [
        {
          title: "Tahap 1 — Pendekatan Terstruktur (APST)",
          detail: "Menyusun analisis masalah PIECES, Flow of Document (FOD), Context Diagram, Decomposition Diagram, dan Data Flow Diagram (DFD Level 0 & Level 1) untuk proses registrasi, penjualan, pembelian, dan distribusi."
        },
        {
          title: "Tahap 2 — Rekayasa Proses Bisnis BPMN (APSIO)",
          detail: "Memetakan BPMN As-Is dan merancang BPMN To-Be untuk memangkas hambatan birokrasi pemesanan alat kesehatan oleh rumah sakit mitra."
        },
        {
          title: "Tahap 3 — Spesifikasi UML & Antarmuka",
          detail: "Menyusun Use Case Diagram beserta skenario naratif, Activity Diagram usulan, Sequence Diagram (menggunakan PlantUML & Draw.io), Class Diagram, serta rancangan layar untuk Kepala Sarana RS, Supplier, dan Direktur."
        }
      ],
      deliverables: [
        "Dokumen Analisis PIECES & Kebutuhan Fungsional/Non-Fungsional sistem distribusi alat kesehatan.",
        "Set Lengkap Diagram UML: Use Case, Activity, Sequence (Registrasi, Pengadaan, Pemesanan, Distribusi, Transaksi), dan Class Diagram.",
        "Purwarupa Antarmuka Input/Output bagi tiga aktor utama organisasi."
      ],
      stack: ["UML 2.0", "BPMN (As-Is & To-Be)", "DFD & FOD", "PIECES Framework", "PlantUML", "Draw.io"],
      links: []
    },

    "imk-dpmkm": {
      kicker: "KARYA 06 · RISET UI/UX, UCD & VALIDASI SPSS (JOINS #16835)",
      title: "Redesain UI/UX Situs Web DPM-KM UDINUS & Rancang Bangun Marketplace Pujasera",
      meta: "Interaksi Manusia & Komputer (Semester 4) · Diajukan ke Jurnal JOINS UDINUS",
      summary: "Proyek riset pengalaman pengguna yang menggabungkan evaluasi heuristik, pengujian instrumen statistik di IBM SPSS, perancangan ulang antarmuka berbasis User-Centered Design (UCD), dan validasi akhir menggunakan System Usability Scale (SUS).",
      architecture: [
        {
          title: "Evaluasi Awal Berbasis 10 Heuristic Nielsen",
          detail: "Mengidentifikasi kendala usability pada situs DPM-KM UDINUS bersama 33 responden valid, dilanjutkan uji validitas Pearson Correlation dan reliabilitas Cronbach's Alpha (0,716) menggunakan IBM SPSS."
        },
        {
          title: "Redesain Prototipe dengan User-Centered Design (UCD)",
          detail: "Memperbaiki hierarki navigasi, visibilitas status sistem, konsistensi komponen visual, dan alur penyampaian aspirasi mahasiswa."
        },
        {
          title: "Validasi System Usability Scale (SUS) & Studi Pujasera",
          detail: "Pengujian pasca-redesain pada 37 responden menghasilkan skor SUS 78,9 (Grade B / Excellent). Mencakup pula studi perancangan UI marketplace pemesanan meja pujasera berbasis web."
        }
      ],
      deliverables: [
        "Naskah Ilmiah Bahasa Inggris & Indonesia yang telah disubmit ke JOINS UDINUS (Submission ID #16835).",
        "Dataset & Output Statistik IBM SPSS (.sav & .spv) untuk uji validitas dan reliabilitas instrumen.",
        "Rancangan Antarmuka High-Fidelity situs DPM-KM UDINUS dan aplikasi web Marketplace Pujasera."
      ],
      stack: ["Heuristic Evaluation", "User-Centered Design (UCD)", "System Usability Scale (SUS)", "IBM SPSS Statistics", "UI/UX Prototyping"],
      links: []
    },

    "itil-pdam": {
      kicker: "KARYA 07 · TATA KELOLA ITIL, COBIT 5 & AUDIT SISTEM INFORMASI",
      title: "Tata Kelola ITIL & Audit Layanan TI pada PDAM Tirta Moedal serta ERP Odoo PT Batik Semarang 16",
      meta: "Tata Kelola Manajemen Layanan TI (Semester 4) & Audit Sistem Informasi (Semester 5)",
      summary: "Rangkaian kajian tata kelola dan audit layanan teknologi informasi pada perusahaan daerah dan industri manufaktur di Semarang, menggunakan kerangka kerja ITIL v3/v4, COBIT 5, dan konsep ERP Odoo.",
      architecture: [
        {
          title: "Katalog Layanan TI & RFC pada PDAM Tirta Moedal",
          detail: "Mendokumentasikan portofolio layanan TI pelanggan dan operasional (Aplikasi Mobile Si Agan, Website Resmi, Call Center, PPOB, GIS Jaringan Perpipaan, SCADA Monitoring IPA) beserta dokumen Business Case, User Profile, dan Request for Change (RFC)."
        },
        {
          title: "Proposal Audit Sistem Informasi PDAM (Semester 5)",
          detail: "Menyusun profil organisasi, pemetaan risiko layanan TI, dan rencana pelaksanaan audit sistem informasi pada Perumda Air Minum Tirta Moedal Kota Semarang."
        },
        {
          title: "ITIL Service Strategy & COBIT 5 pada ERP Odoo PT Batik Semarang 16",
          detail: "Menerapkan perspektif ITIL 4P (Perspective, Position, Plans, Pattern) dan domain COBIT 5 (APO, DSS, MEA) untuk mengoptimalkan modul SCM, CRM, dan Knowledge Management bagi ~700 pembatik."
        }
      ],
      deliverables: [
        "Dokumen Katalog Layanan TI v1.1, Business Case, dan RFC Perumda Air Minum Tirta Moedal Semarang.",
        "Laporan Penerapan ITIL Domain Service Strategy & COBIT 5 pada ERP Odoo PT Batik Semarang 16.",
        "Kajian Balanced Scorecard pada KSP Artha Prima dan analisis maturitas penyelarasan strategi TI."
      ],
      stack: ["ITIL v3 / v4", "COBIT 5 (APO, DSS, MEA)", "ERP Odoo (SCM & CRM)", "IT Service Catalogue & SLA", "IS Audit Planning"],
      links: []
    },

    "pssi-transdig": {
      kicker: "KARYA 08 · PERENCANAAN STRATEGIS SI & TRANSFORMASI DIGITAL",
      title: "Perencanaan Strategis SI (Shopee & Bukalapak) serta Transformasi Digital Posyandu IoT",
      meta: "Perencanaan Strategis SI & Transformasi Digital (Semester 4)",
      summary: "Penyusunan cetak biru perencanaan strategis sistem informasi korporasi e-commerce menggunakan kerangka kerja Ward & Peppard, dipadukan dengan perancangan solusi transformasi digital layanan kesehatan masyarakat berbasis IoT dan pemerintahan desa berbasis AI.",
      architecture: [
        {
          title: "Metode Ward & Peppard (Shopee & Bukalapak)",
          detail: "Menganalisis lingkungan bisnis dan SI/TI internal-eksternal menggunakan matriks SWOT, Value Chain, Porter's Five Forces, Balanced Scorecard Strategic Map, dan pemetaan kuadran McFarlan Strategic Grid."
        },
        {
          title: "Ekosistem Posyandu Pintar Berbasis IoT (Deteksi Stunting)",
          detail: "Merancang integrasi timbangan/sensor antropometri IoT, kartu identitas balita berbasis QR Code, grafik pertumbuhan KMS otomatis di aplikasi tablet Android, pengingat imunisasi WhatsApp, dan sinkronisasi API Puskesmas."
        },
        {
          title: "Smart Village AI Chatbot & Manajemen Perubahan",
          detail: "Konsep layanan administrasi desa 24/7 berbasis Cloud Computing dan Natural Language Processing (NLP), serta kajian mitigasi resistensi perubahan organisasi."
        }
      ],
      deliverables: [
        "Dokumen Perencanaan Strategis SI/TI pada PT Shopee Internasional Indonesia dan laporan PBL PT Bukalapak.com Tbk.",
        "Strategic Map Balanced Scorecard & diagram proses BPMN To-Be menggunakan Bizagi Modeler.",
        "Proposal Transformasi Digital Posyandu IoT dan Smart Village Chatbot."
      ],
      stack: ["Ward & Peppard Framework", "Balanced Scorecard", "McFarlan Strategic Grid", "BPMN Bizagi", "IoT & Cloud Architecture"],
      links: []
    }
  };

  /* 3. Initialize 4-Pillar Domain Workbench */
  const domainTabs = document.querySelectorAll(".domain-tab");
  const stagePanel = document.getElementById("panel-domain-stage");
  const stageTag = document.getElementById("stage-tag");
  const stageCourses = document.getElementById("stage-courses");
  const stageTitle = document.getElementById("stage-title");
  const stageDesc = document.getElementById("stage-desc");
  const stagePoints = document.getElementById("stage-points");
  const stageBpTitle = document.getElementById("stage-bp-title");
  const stageBpSteps = document.getElementById("stage-bp-steps");
  const stageJumpBtn = document.getElementById("stage-jump-btn");

  function activateDomain(domainKey) {
    const info = DOMAIN_DATA[domainKey];
    if (!info) return;

    domainTabs.forEach(function (tab) {
      const isMatch = tab.getAttribute("data-domain") === domainKey;
      tab.classList.toggle("is-active", isMatch);
      tab.setAttribute("aria-selected", isMatch ? "true" : "false");
      if (isMatch && stagePanel) {
        stagePanel.setAttribute("aria-labelledby", tab.id);
      }
    });

    stageTag.textContent = info.tag;
    stageCourses.textContent = info.courses;
    stageTitle.textContent = info.title;
    stageDesc.textContent = info.desc;

    stagePoints.innerHTML = info.highlights
      .map(function (h) {
        return (
          '<div class="highlight-row">' +
          '<span class="highlight-key">' + h.key + "</span>" +
          '<span class="highlight-val">' + h.val + "</span>" +
          "</div>"
        );
      })
      .join("");

    stageBpTitle.textContent = info.bpTitle;
    stageBpSteps.innerHTML = info.steps
      .map(function (s) {
        return (
          "<li>" +
          '<span class="bp-step-code">' + s.code + "</span>" +
          "<strong>" + s.head + "</strong>" +
          "<span>" + s.text + "</span>" +
          "</li>"
        );
      })
      .join("");

    if (stageJumpBtn) {
      stageJumpBtn.setAttribute("data-target-filter", info.filterTarget);
      stageJumpBtn.textContent = info.btnLabel;
    }
  }

  domainTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      activateDomain(tab.getAttribute("data-domain"));
    });
  });

  /* 4. Initialize Semester 5 Study Cluster Filter (Bab II) */
  const studyChips = document.querySelectorAll(".cluster-chip");
  const studyCards = document.querySelectorAll(".study-card");

  studyChips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      const selectedGroup = chip.getAttribute("data-study-filter");
      studyChips.forEach(function (c) {
        c.classList.toggle("is-selected", c === chip);
      });

      studyCards.forEach(function (card) {
        const group = card.getAttribute("data-study-group");
        const visible = selectedGroup === "all" || group === selectedGroup;
        card.hidden = !visible;
      });
    });
  });

  /* 5. Initialize Case Study Filter (Bab III) */
  const workFilterBtns = document.querySelectorAll(".work-filter-btn");
  const caseCards = document.querySelectorAll(".case-card");
  const workCountLabel = document.getElementById("work-count-label");

  function applyWorkFilter(category) {
    let shown = 0;
    workFilterBtns.forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-work-filter") === category);
    });

    caseCards.forEach(function (card) {
      const cardCat = card.getAttribute("data-work-category");
      const isMatch = category === "all" || cardCat === category;
      card.hidden = !isMatch;
      if (isMatch) shown += 1;
    });

    if (workCountLabel) {
      workCountLabel.textContent = "Menampilkan " + shown + " dari " + caseCards.length + " karya";
    }
  }

  workFilterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyWorkFilter(btn.getAttribute("data-work-filter"));
    });
  });

  if (stageJumpBtn) {
    stageJumpBtn.addEventListener("click", function () {
      const targetFilter = stageJumpBtn.getAttribute("data-target-filter") || "all";
      applyWorkFilter(targetFilter);
      const arsipSection = document.getElementById("arsip-karya");
      if (arsipSection) {
        arsipSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  /* 6. Specification & Architecture Modal Drawer */
  const drawerBackdrop = document.getElementById("spec-drawer-backdrop");
  const drawerCloseBtn = document.getElementById("drawer-close-btn");
  const drawerKicker = document.getElementById("drawer-project-kicker");
  const drawerTitle = document.getElementById("drawer-project-title");
  const drawerMeta = document.getElementById("drawer-project-meta");
  const drawerSummary = document.getElementById("drawer-project-summary");
  const drawerArchList = document.getElementById("drawer-arch-list");
  const drawerDeliverables = document.getElementById("drawer-deliverables-list");
  const drawerStackChips = document.getElementById("drawer-stack-chips");
  const drawerLinksBar = document.getElementById("drawer-links-bar");

  let lastFocusedTrigger = null;

  function openSpecDrawer(projectId, triggerEl) {
    const data = CASE_STUDIES[projectId];
    if (!data || !drawerBackdrop) return;

    lastFocusedTrigger = triggerEl || document.activeElement;

    drawerKicker.textContent = data.kicker;
    drawerTitle.textContent = data.title;
    drawerMeta.textContent = data.meta;
    drawerSummary.textContent = data.summary;

    drawerArchList.innerHTML = data.architecture
      .map(function (item) {
        return "<li><strong>" + item.title + "</strong><span>" + item.detail + "</span></li>";
      })
      .join("");

    drawerDeliverables.innerHTML = data.deliverables
      .map(function (item) {
        return "<li>" + item + "</li>";
      })
      .join("");

    drawerStackChips.innerHTML = data.stack
      .map(function (tech) {
        return "<li>" + tech + "</li>";
      })
      .join("");

    if (data.links && data.links.length > 0) {
      drawerLinksBar.innerHTML = data.links
        .map(function (lnk) {
          return (
            '<a href="' +
            lnk.url +
            '" target="_blank" rel="noopener noreferrer" class="drawer-ext-btn">' +
            lnk.label +
            "</a>"
          );
        })
        .join("");
      drawerLinksBar.hidden = false;
    } else {
      drawerLinksBar.innerHTML = "";
      drawerLinksBar.hidden = true;
    }

    drawerBackdrop.hidden = false;
    drawerBackdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (drawerCloseBtn) {
      drawerCloseBtn.focus();
    }
  }

  function closeSpecDrawer() {
    if (!drawerBackdrop || drawerBackdrop.hidden) return;
    drawerBackdrop.hidden = true;
    drawerBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === "function") {
      lastFocusedTrigger.focus();
    }
  }

  document.querySelectorAll(".inspect-trigger").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openSpecDrawer(btn.getAttribute("data-project-id"), btn);
    });
  });

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener("click", closeSpecDrawer);
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener("click", function (ev) {
      if (ev.target === drawerBackdrop) {
        closeSpecDrawer();
      }
    });
  }

  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && drawerBackdrop && !drawerBackdrop.hidden) {
      closeSpecDrawer();
    }
  });

  /* 7. Scroll-Spy Chapter Navigation */
  const chapterLinks = document.querySelectorAll(".chapter-link");
  const chapterBlocks = document.querySelectorAll(".chapter-block");

  if ("IntersectionObserver" in window && chapterBlocks.length > 0) {
    const spyObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const activeId = entry.target.id;
            chapterLinks.forEach(function (link) {
              link.classList.toggle("is-current", link.getAttribute("data-chapter") === activeId);
            });
          }
        });
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );

    chapterBlocks.forEach(function (block) {
      spyObserver.observe(block);
    });
  }

  /* 8. Copy Email Buttons */
  document.querySelectorAll(".copy-email-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const email = btn.getAttribute("data-copy");
      if (!email || !navigator.clipboard) return;
      const originalText = btn.textContent;
      navigator.clipboard.writeText(email).then(function () {
        btn.textContent = "Tersalin ✓";
        setTimeout(function () {
          btn.textContent = originalText;
        }, 2000);
      });
    });
  });

  /* 9. Coursera Credential Registry Filter (Bab V) */
  const credTabs = document.querySelectorAll(".reg-tab-btn");
  const credRows = document.querySelectorAll(".cred-row");

  credTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      const selectedGroup = tab.getAttribute("data-cred-group");
      credTabs.forEach(function (t) {
        t.classList.toggle("is-selected", t === tab);
      });

      credRows.forEach(function (row) {
        const cat = row.getAttribute("data-cred-cat");
        const visible = selectedGroup === "all" || cat === selectedGroup;
        row.hidden = !visible;
      });
    });
  });
})();
