// Saat halaman dimuat, cek localStorage dan terapkan dark mode jika perlu
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('tema') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});

// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Simpan ke localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('tema', 'dark');
  } else {
    localStorage.setItem('tema', 'light');
  }
});


// Highlight navigasi aktif
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("aktif"));
    link.classList.add("aktif");
  });
});

// Formulir Berlangganan
const formLangganan = document.getElementById('formBerlangganan');
if (formLangganan) {
  formLangganan.addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const paket = document.getElementById('paket').value;
    const pembayaran = document.getElementById('pembayaran').value;

    alert(`Terima kasih, ${nama}! Paket ${paket} Anda dengan metode ${pembayaran} telah diproses.`);

    formLangganan.reset();
  });
}

function tampilkanDeskripsi(film) {
  const data = {
    insideout: {
      judul: "Inside Out (2015)",
      deskripsi: "Mengisahkan emosi dalam kepala seorang anak bernama Riley. Film ini lucu, menyentuh, dan edukatif."
    },
    coco: {
      judul: "Coco (2017)",
      deskripsi: "Petualangan di dunia arwah dengan budaya Meksiko yang kuat. Film ini menyampaikan pesan tentang keluarga dan impian."
    },
    nemo: {
      judul: "Finding Nemo (2003)",
      deskripsi: "Marlin berpetualang di laut mencari anaknya, Nemo. Kisah penuh warna dan makna tentang keberanian dan keluarga."
    },
    luca: {
      judul: "Luca (2021)",
      deskripsi: "Monster laut remaja menjelajahi dunia manusia di Italia. Cerita tentang persahabatan dan menerima diri sendiri."
    },
    hotel: {
      judul: "Hotel Transylvania (2012)",
      deskripsi: "Mengisahkan Dracula yang membangun hotel sebagai tempat aman bagi monster. Film ini lucu, imajinatif, dan cocok untuk semua umur."
    }
  };

  const info = data[film];
  document.getElementById("deskripsiFilm").innerHTML = `
    <h3>${info.judul}</h3>
    <p>${info.deskripsi}</p>
  `;
}
