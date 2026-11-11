// --- AMBIL ELEMEN DOM ---
const htmlElement = document.documentElement;
const themeButtons = document.querySelectorAll(".theme-btn");
const activeThemeName = document.getElementById("active-theme-name");

// --- 1. TERAPKAN TEMA ---
function setTheme(themeName) {
    // Atur atribut data-theme pada tag <html>
    htmlElement.setAttribute("data-theme", themeName);

    // Simpan pilihan ke localStorage
    localStorage.setItem("selected_theme", themeName);

    // Perbarui status tombol aktif
    themeButtons.forEach((btn) => {
        if (btn.getAttribute("data-theme") === themeName) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Perbarui teks status di footer
    const activeBtn = document.querySelector(`.theme-btn[data-theme="${themeName}"]`);
    if (activeBtn) {
        activeThemeName.textContent = activeBtn.textContent;
    }
}

// --- 2. EVENT LISTENER KLIK TOMBOL TEMA ---
themeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const themeName = btn.getAttribute("data-theme");
        setTheme(themeName);
    });
});

// --- 3. MUAT TEMA TERSIMPAN SAAT HALAMAN DIBUKA ---
function loadSavedTheme() {
    const savedTheme = localStorage.getItem("selected_theme");
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme("light"); // Default tema
    }
}

// Inisialisasi awal
loadSavedTheme();
