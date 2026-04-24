// --- Müzik Çalar Kodları ---
const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');
const musicIcon = document.getElementById('music-icon');
const musicText = document.getElementById('music-text');

bgMusic.volume = 0.3;

musicBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicIcon.classList.remove('fa-play');
        musicIcon.classList.add('fa-pause');
        musicText.textContent = 'Playing...';
        musicBtn.classList.add('playing');
    } else {
        bgMusic.pause();
        musicIcon.classList.remove('fa-pause');
        musicIcon.classList.add('fa-play');
        musicText.textContent = 'Paused';
        musicBtn.classList.remove('playing');
    }
});

// --- Custom Cursor Kodları ---
const cursor = document.querySelector('.custom-cursor');
const links = document.querySelectorAll('a, .audio-player-ui, .avatar');

// İmleci fare ile hareket ettir
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Linklerin ve butonların üzerine gelince imlece class ekle/çıkar
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
    });
});
