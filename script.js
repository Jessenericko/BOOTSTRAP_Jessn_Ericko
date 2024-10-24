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

// Penanganan form kontak
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const toastEl = document.getElementById('formToast');
    const toast = new bootstrap.Toast(toastEl);

    // Show the toast
    toast.show();

    // Optionally clear the form after submission
    this.reset();
});

// Penanganan form langganan
document.getElementById('subscribeForm')?.addEventListener('submit', function(e) {
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

// Penanganan modal pembayaran
document.getElementById('paymentModal').addEventListener('show.bs.modal', (event) => {
    const button = event.relatedTarget; // Button that triggered the modal
    const membershipType = button.getAttribute('data-membership');
    const membershipPrice = button.getAttribute('data-price');

    // Update the modal's content
    const membershipTypeInput = document.getElementById('membershipType');
    const membershipPriceInput = document.getElementById('membershipPrice');

    membershipTypeInput.value = membershipType;
    membershipPriceInput.value = membershipPrice;
});

// Penanganan pengiriman form pembayaran
document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Payment submitted successfully!');
    this.reset(); // Reset form after submission
    const modal = bootstrap.Modal.getInstance(document.getElementById('paymentModal'));
    modal.hide(); // Hide modal after submission
});
