# Jawaban Pertanyaan Pertemuan 5


## Praktikum 1
A. 
1. Gambar
<img src="screenshots/container1.png">
<img src="screenshots/container-fluid.png">
2. container-fluid akan membuat container yang menyesuaikan lebar layar, sedangkan container akan menyisakan sedikit space kosong

B.
1. Kita harus menginstall komponen tersebut, misalnya bootstrap "npm install bootstrap"

## Praktikum 2
1. Karena port 3000 sudah digunakan untuk react, dan kita ingin keduanya berjalan bersama, maka kita menggunakan port 3001 untuk json-server

2. jika kita mengganti port json-server menjadi 3000, maka tidak bisa dan tabrakan, karena port 3000 sudah digunakan oleh react

## Praktikum 3
1. Jika kita mengikuti alur praktikum maka tidak akan terjadi apa apa alias tidak terhapus, maka dari itu kita akan menambahkan bind data pada post.jsx seperti ini

<img src="screenshots/hapus.png">

2. Data akan terhapus,sesuai dengan id artikel , dan server akan merespon perintah hapus tersebut

<img src="screenshots/hapus2.png">

3. Fungsi handleHapusArtikel berguna untuk menangani proses penghapusan artikel, fungsi ini disematkan pada button hapus 

<img src="screenshots/handleHapus.png">

4. componentDidMount pada gambar 1.18 mengambil data dari jsonplaceholder, sedangkan di gambar 3.2 mengambil data lokal dari server-json & listArtikel yang sudah kita buat

## Praktikum 4
1. Sebelum menambahkan data maka data tidak berubah, setelah menambahkan data, maka data akan tertambah , sedangkan server akan merespon seperti ini

<img src="screenshots/sebelum.png">
<img src="screenshots/setelah.png">

2. Data yang tampil di browser telah mengalami sorting karena pada saat mengambil data, diurutkan dari yang terbaru atau dari yang id nya besar terlebih dahulu

<img src="screenshots/sort.png">