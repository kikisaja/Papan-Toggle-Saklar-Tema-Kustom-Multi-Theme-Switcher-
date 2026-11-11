# 🎨 Multi-Theme Switcher (Papan Toggle Saklar Tema Kustom)

Aplikasi pemilih tema multi-skema (*Multi-Theme Switcher*) berbasis JavaScript murni yang memungkinkan pengguna mengubah seluruh palet warna halaman web secara instan ke dalam berbagai pilihan gaya (*Light*, *Dark*, *Ocean*, *Forest*, *Pastel*).

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **CSS Custom Properties (Variables):**
   Memanfaatkan variabel CSS pada selektor `:root[data-theme="..."]` guna mengelola kumpulan skema warna yang terpusat dan mudah diubah.
2. **DOM Attribute Manipulation (`setAttribute`):**
   Mengubah atribut tingkat akar dokumen (`data-html`) secara dinamis untuk memicu perubahan seluruh variabel gaya warna secara instan.
3. **LocalStorage Persistence:**
   Menyimpan preferensi pilihan tema pengguna ke dalam memori peramban (*browser*) agar tema tetap bertahan saat halaman dimuat ulang.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Tombol saklar pilihan tema, kotak konten, & teks status footer
├── style.css        # Variabel warna :root[data-theme], Neobrutalism, & transisi mulus
└── script.js        # Logika pengaturan tema, manajemen LocalStorage, & DOM state
