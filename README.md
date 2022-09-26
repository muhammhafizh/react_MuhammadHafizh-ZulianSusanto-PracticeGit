# React Form Course by Alterra Academy

- Form merupakan salah satu hal krusial dalam pengembangan aplikasi website. Form dapat digunakan untuk menghandle inputan dari user.

-  Apa itu Controlled Component?

Kita dapat menggabungkan cara menyimpan dan memperbarui
state di HTML dan React dengan menggunakan state pada React.
Kemudian Komponen React yang me-render sebuah form juga
mengontrol apa yang terjadi dalam form tersebut pada masukan
pengguna selanjutnya.

Sebuah elemen masukan form yang nilainya dikontrol oleh React
melalui cara seperti ini disebut sebagai "controlled component.

- Uncontrolled Component

Uncontrolled component adalah alternatif lain dari controlled
component, dimana data form akan ditangani oleh DOM-nya
sendiri. Untuk menulis uncontrolled component, alih-alih menulis
event handler untuk setiap pembaruan state, kita bisa
menggunakan ref untuk mendapatkan nilai form dari DOM.

- Form controlled dan uncontrolled memiliki kelebihannya sendiri. Kita perlu mengevaluasi situasi kita secara spesifik dan memilih pendekatan apa yang cocok untuk kondisi kita.

Jika formulir sangat sederhana dalam hal umpan balik UI,
uncontrolled dengan refs sepenuhnya baik-baik saja. Kita tidak
perlu mendengarkan apa yang dikatakan berbagai artikel bahwa
uncontrolled itu "buruk". Lagipula kita selalu dapat bermigrasi ke
controlled input.

Pada dasarnya, ada 3 alasan mengapa validasi form diperlukan :

1. Mencari input data yang benar dan sesuai format. Sebuah
web/aplikasi tidak dapat berjalan dengan benar, jika data yang
diolah tidak sesuai dengan kebutuhan aplikasi

2. Melindungi akun pengguna. Misalnya, membuat pengguna
untuk memasukkan data password yang aman

3. Melindungi sistem/aplikasi. Validasi form yang kuat dapat
meminimalisir perilaku pengguna yang ingin meretas
sistem/aplikasi

- Client-side validation

Validasi yang dilakukan pada sisi klien (browser). Validasi ini
dilakukan agar data input sesuai dengan kebutuhan form, sebelum
data form dikirimkan ke server.

Kelebihan validasi sisi klien ialah user-friendly, karena jika terjadi
kesalahan pengguna akan langsung diberitahu. Pengguna tidak
harus menunggu respon dari server untuk mengetahui hasil
validasi.

- Server-side validation

Validasi yang dilakukan pada sisi server. Sisi server bertugas untuk
memvalidasi data kembali, sebelum disimpan di database. Jika
ditemukan kesalahan, maka response akan dikirim kembali ke
client berupa koreksi atas kesalahan yang dibuat oleh pengguna.

Berbeda dengan validasi sisi klien, validasi ini tidak user-friendly.
Karena, koreksi kesalahan akan dikirimkan, setelah form di-submit.