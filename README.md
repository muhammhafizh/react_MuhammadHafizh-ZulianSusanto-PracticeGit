# React Router Course by Alterra Academy

- Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA(Single Page Application)

- Multi Page Application(MPA) juga disebut dengan tradisional web app adalah jenis aplikasi website dimana perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru

- Keunggulan Multi Page Application
    1. SEO website akan lebih mudah dioptimasi
    2. Memudahkanmu untuk mengubah halaman tertentu untuk setiap kebutuhan yang berbeda
    3. Menggunakan tools analisis seperti google analytics yang dapat terintegrasi langsung dengan website

- Kekurangan Multi Page Application
    1. Kecepatan download website jauh lebih lama jika dibandingkan dengan Single page application
    2. Kamu perlu mengintegrasikan antara front-end dan back-end
    3. Lebih sering maintenance dan update
    4. Mungkin lebi sering menemukan masalah performa pada website

- Single Page Application(SPA) adalah salah satu jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut

- Keunggulan Single Page Application
    1. Waktu loading website jauh lebih cepat
    2. Tidak ada query tambahan ke server
    3. Front-end yang cepat dan responsif
    4. Meningkatkan pengalaman pengguna (user experience)

- Kekurangan Single Page Application
    1. Tidak bagus dalam hal SEO
    2. Berat saat di-load/ buka pertama kali
    3. Kurang aman dibanding dengan website biasa
    4. Masalah kompatibilitas browser

- React Router
    1. BrowserRouter: digunakan sebagai router yang menggunakan API history dari HTML5 sehingga dapat menggunakan location untuk sinkronkan UI dengan url
    2. Route: digunakan sebagai pengarah jalan nya lalu lintas suatu aplikasi web
    3. Switch: digunakan untuk membungkus kumpulan beberapa component Route
    4. Link: digunakan untuk berpindah antar halaman.

- Parameter URL adalah suatu parameter yang nilainya ditetapkan secara dinamis di URL halaman.

- Perbedaan Link dan Redirect
    1. Link dapat digunakan pada kondisi apapun, sedangkan Redirect lebih sering digunakan pada halaman 404
    2. Link memberikan istory baru pada browser, sedangkan Redirect menimpa history pada browser
    3. Link bereaksi dengan click seperti href pada tag anchor, sedangkan Redirect bereaksi dengan suatu kondisi

- Hook Routing
    1. useHistory: memberi kita akses ke instance riwayat yang dapat anda gunakan untuk bernavigasi
        - Length: jumlah entri riwayat
        - go: memindahkan penunjuk di tumpukan riwayat sebanayk n entri
        - goBack: setara dengan go(-1)
        - goForward: setara dengan go(1)
        - Push: mendorong entri baru ke tumpukan riwayat
        - Replace: mengganti entri saat ini di tumpukan riwayat history
    2. useLocation
    3. useParams: mengembalikan objek pasangan kunci/nilai parameter URL
    4. useRouteMatch: mencoba mencocokan URL saat ini dengan cara yang sama seperti <Route>