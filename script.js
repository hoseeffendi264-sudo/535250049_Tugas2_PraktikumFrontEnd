const namaMahasiswa = "Fernando Hose Noble Effendi";
const nimMahasiswa = "535250049";

function tampilkanInfo() {
    document.getElementById('namaValue').textContent = namaMahasiswa;
    document.getElementById('nimValue').textContent = nimMahasiswa;
    document.getElementById('infoDisplay').classList.add('show');
}

function hapusInfo() {
    document.getElementById('infoDisplay').classList.remove('show');
}