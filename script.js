

//scroll reveal
ScrollReveal({
    
    distance:'20px',
    duration:1000,
    delay:200
});
//tambahkan kanan kiri
ScrollReveal().reveal('.card', {origin: 'left'})

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
