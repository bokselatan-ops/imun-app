const formPendaftaran = document.getElementById('form-pendaftaran');
const daftarPasien = document.getElementById('daftar-pasien');
const formPelayanan = document.getElementById('form-pelayanan');
const pasienSelect = document.getElementById('pasien');
const catatanPelayanan = document.getElementById('catatan-pelayanan');

let pasienList = [];
let pelayananList = [];

// Menangani pendaftaran pasien
formPendaftaran.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const tanggalLahir = document.getElementById('tanggal-lahir').value;
    const kelurahan = document.getElementById('kelurahan').value;
    const rt = document.getElementById('rt').value;
    const rw = document.getElementById('rw').value;
    const nomorTelepon = document.getElementById('nomor-telepon').value;
    const namaWali = document.getElementById('nama-wali').value;

    const pasien = { nama, tanggalLahir, kelurahan, rt, rw, nomorTelepon, namaWali };
    pasienList.push(pasien);
    
    // Menambahkan pasien ke daftar
    const li = document.createElement('li');
    li.textContent = `${nama} - ${tanggalLahir}`;
    daftarPasien.appendChild(li);
    
    // Menambahkan pasien ke dropdown pelayanan
    const option = document.createElement('option');
    option.value = nama;
    option.textContent = nama;
    pasienSelect.appendChild(option);
    
    // Reset form
    formPendaftaran.reset();
});

// Menangani pencatatan pelayanan
formPelayanan.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const pasien = pasienSelect.value;
    const deskripsi = document.getElementById('deskripsi').value;

    // Mengumpulkan jenis vaksin yang dipilih
    const jenisVaksin = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach((checkbox) => {
        jenisVaksin.push(checkbox.value);
    });

    const catatan = { pasien, deskripsi, jenisVaksin: jenisVaksin.join(', ') };
    pelayananList.push(catatan);
    
    // Menambahkan catatan pelayanan ke daftar
    const li = document.createElement('li');
    li.textContent = `${pasien}: ${deskripsi} - Vaksin: ${catatan.jenisVaksin}`;
    catatanPelayanan.appendChild(li);
    
    // Reset form
    formPelayanan.reset();
});
