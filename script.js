// script.js
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah perilaku default tautan

            // Mengambil elemen target berdasarkan href
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Menggulung halaman ke elemen target
            if (targetElement) { // Memastikan elemen target ada
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Efek gulir halus
                });
            }
        });
    });
});

document.getElementById('contactForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const toastEl = document.getElementById('formToast');
    const toast = new bootstrap.Toast(toastEl);

    // Show the toast
    toast.show();

    // Optionally clear the form after submission
    this.reset();
});

document.getElementById('subscribeForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah perilaku default form

    // Tampilkan pesan umpan balik
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.classList.remove('d-none'); // Menghilangkan kelas 'd-none' untuk menampilkan pesan

    // Reset form setelah 2 detik
    setTimeout(() => {
        alertMessage.classList.add('d-none'); // Menyembunyikan pesan
        this.reset(); // Mereset form
    }, 2000);
});
