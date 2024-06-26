

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
const typed2 =  new Typed('.footerm',{
    strings:['@dagisukakamu','wanjay','otw ganti username dagisukangoding','owakoakwokaw'],
    typeSpeed: 40,
    backSpeed: 10,
    backDelay: 1000,
    loop:true
});

//video




