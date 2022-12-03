# Deployment Course by Alterra Academy

- GraphQL adalah bahasa kueri untuk API Anda, dan runtime sisi server untuk mengeksekusi kueri dengan menggunakan sistem tipe yang Anda tetapkan untuk data Anda. 

- GraphQL meminimalkan jumlah data yang perlu ditransfer melalui jaringan. 

- Dengan graphQL kita dapat menggunakan satu titik akhir tunggal ( /graphQL ) untuk setiap permintaan yang diperlukan.

- Sebelum kita dapat melakukan GraphQL maka kita perlu men-setup GraphQL Server (Backend), Anda dapat menggunakan Hasura, Apollo Server atau lainnya untuk melakukan itu. Kemudian kita dapat menggunakan GraphQL pada client baik menggunakan Prisma, Apollo Client, Postman, dll.

- Ada 3 fitur utama di klien GraphQL:
    1. Query, mendapatkan data berdasarkan query tertentu yang kita definisikan
    2. Mutation, masukkan, perbarui, hapus data
    3. Subscription, dapatkan tanggal terbaru secara realtime / berdasarkan acara

- Dengan graphQL kita bisa mendapatkan data yang kita butuhkan. Kami menentukan bidang apa yang ingin kami dapatkan dan graphQL akan memberi kami data berdasarkan apa yang kami definisikan. 

- Kami juga dapat menggunakan kueri untuk mendapatkan data dari beberapa koleksi terkait. n contoh di bawah ini, jika kita ingin mendapatkan data direktur kita perlu menggunakan director.id untuk mendapatkan data dari endpoint lain, tetapi dengan graphql kita juga dapat mendefinisikan bidang yang dibutuhkan
langsung selama tersedia di server GraphQL.

- Kami juga dapat menggunakan kueri untuk mendapatkan data dari beberapa koleksi yang tidak terkait untuk meminimalkan permintaan jaringan. Gambar jika kita menginginkan data film dan data buku. Dengan REST kita perlu melakukan setidaknya 2 permintaan ke 2 titik akhir yang berbeda. Dengan GrophQL kita bisa melakukan 1 request untuk mendapatkan data tersebut.

- Fragmen GraphQL adalah bagian dari logika yang dapat dibagi antara beberapa kueri dan mutasi. Kita dapat menggunakan fragmen untuk menyederhanakan kueri atau mutasi

- Mutasi pada dasarnya adalah fungsionalitas untuk memperbarui, menyisipkan, dan menghapus data, Kita perlu menentukan operasi apa yang ingin kita lakukan (berdasarkan operasi yang tersedia di server graphql Anda) dan kemudian menentukan data apa yang perlu dikembalikan oleh GraphQL.

- Subscriptions adalah fitur GraphQL yang memungkinkan server mengirim data ke kliennya saat terjadi peristiwa tertentu terjadi. Langganan biasanya diimplementasikan dengan WebSockets. Dalam pengaturan itu, server mempertahankan koneksi yang stabil ke klien langganannya.

- Ketika data diubah maka klien akan mendapatkan data yang diperbarui secara langsung secara real-time. Pada contoh di bawah ini, jika kita melakukan subscription pada person collection maka setiap kali orang baru ditambahkan atau ketika data dihapus atau diubah maka kita akan mendapatkan update dota secara real-time langsung ke klien kita. Berlangganan hanya akan terjadi di sisi klien
bukan sisi server.

- Hasura adalah layanan yang menyediakan graphql dan rest api. Dikelola penuh di cloud hasura atau dihosting sendiri. Buka https://hasura.jo/ dan buat server baru Anda sendiri

- Heroku adalah platform cloud sebagai layanan yang mendukung beberapa bahasa pemrograman. Heroku juga menyediakan database postgres gratis. Buka httpsi/heroku.com/ dan buat sendiri 