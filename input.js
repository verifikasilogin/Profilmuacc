

document.addEventListener('DOMContentLoaded', function() {
    var phoneNumber = localStorage.getItem('phoneNumber');
    document.getElementById('phoneNumberDisplay').innerText = phoneNumber;

    // Kode JavaScript untuk mencegah input huruf dan menyambung antar kolom
    const otpInputs = document.querySelectorAll('.otp-input-group input');

    otpInputs.forEach((input, index) => {
        input.addEventListener('input', function(event) {
            const value = event.target.value;
            const isNumber = /^[0-9]+$/.test(value); // Cek apakah hanya angka
            if (!isNumber) {
                event.target.value = value.slice(0, -1); // Hapus karakter terakhir
            }

            if (event.target.value.length === 1) {
                if (index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus(); // Pindah ke input berikutnya
                }
            }
        });

        input.addEventListener('keyup', function(event) {
            if (event.key === 'Backspace' && event.target.value === '') {
                if (index > 0) {
                    otpInputs[index - 1].focus(); // Pindah ke input sebelumnya
                }
            }
        });
    });
});
