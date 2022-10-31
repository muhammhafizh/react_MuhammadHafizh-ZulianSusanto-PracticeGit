# React Testing Course by Alterra Academy

- Testing adalah proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi.

- Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.

- Manfaat Testing

    1. Ketika aplikasi kita mempunyai coverage yang baik (mayoritas codebase tercover oleh test), Kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita. Saat kita mengubah    bagian tersebut, dan ada bagian yang lain menjadi broken kita akan segera mengetahuinya.

    2. Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug.

- Kategori Testing

    1. Rendering component trees ai dalam environment tes yang sudah disederhanakan dan ditegaskan pada keluarannya. Kita akan fokus pada bagian ini.

    2. Menjalankan aplikasi lengkap di dalam environment peramban (browser) asli. Ini dikenal sebagai tes “end-to-end”.

- Rekomendasi tools

    1. Jest
    2. React Testing Library

- Kategori Testing
 
    1. LabelText: getByLabelText: <label for="search" />
    2. PlaceholderText: getByPlaceholderText: <input placeholder="Search" />
    4. AltText: getByAltText: <img alt="profile" />
    5. DisplayValue: getByDisplayValue: <input value="JavaScript" />

- Fungsi render RTL akan merender file JSX apa pun yang dibutuhkan. Setelah itu, kita baru bisa memiliki akses ke komponen React yang akan kita test. Untuk meyakinkan bahwa file JSX sudah terender, kita bisa menggunakan fungsi debug RTL. 

- React Testing Library digunakan untuk berinteraksi dengan komponen kita seperti manusia. itulah alasan kenapa kita melihat struktur HTML sebagai output dari fungsi render.