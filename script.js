

//scroll reveal
const sr = ScrollReveal({
    distance: '20px',
    duration: 2000
});

// Dapatkan semua elemen dengan kelas 'card-item'
const cardItems = document.querySelectorAll('.card-item');

// Atur animasi bergantian kiri dan kanan untuk setiap elemen dan tambahkan delay
cardItems.forEach((item, index) => {
    const origin = (index % 2 === 0) ? 'left' : 'right';
    const delay = 400 * (index + 1); // Tambahkan delay berdasarkan indeks item
    sr.reveal(item, { origin: origin, delay: delay });
});

//typed
const typed =  new Typed('.multiple-text',{
    strings:['not u.','not youuu.','yeah uuu🫵'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

// vidio tengah
window.addEventListener('resize', function() {
    var video = document.getElementById('bg-video');
    var viewportWidth = window.innerWidth;
    var videoWidth = video.clientWidth;
    var offset = (videoWidth - viewportWidth) / 2;
    video.style.left = -offset + 'px';
});
