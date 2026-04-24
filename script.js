// --- 1. Müzik Çalar ---
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

// --- 2. Custom Cursor ---
const cursor = document.querySelector('.custom-cursor');
// Tüm etkileşimli ögeleri seçiyoruz
const links = document.querySelectorAll('a, .audio-player-ui, .avatar, button, .close-btn');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

links.forEach(link => {
    link.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
    link.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
});

// --- 3. Daktilo (Typewriter) Efekti ---
const typeWriterElement = document.getElementById('typewriter');
const texts = ["Software Developer", "Horror Writer", "Gamer", "Tech Enthusiast"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typeWriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typeWriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000; // Yazı bitince bekleme süresi
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500; // Silinince yeni yazıya geçmeden bekle
    }

    setTimeout(typeWriter, typeSpeed);
}
typeWriter(); // Başlat

// --- 4. Projeler Modal (Açılır Pencere) ---
const modal = document.getElementById("projects-modal");
const btn = document.getElementById("open-modal-btn");
const span = document.getElementsByClassName("close-btn")[0];

btn.onclick = function() { modal.classList.add("show"); }
span.onclick = function() { modal.classList.remove("show"); }
window.onclick = function(event) {
    if (event.target == modal) { modal.classList.remove("show"); }
}

// --- 5. Lanyard API (Discord Durumu) ---
// DİKKAT: Aşağıdaki 'SENIN_DISCORD_ID_BURAYA' yazan yere kendi 18 haneli Discord ID'ni yazmalısın.
const discordId = 'SENIN_DISCORD_ID_BURAYA'; 

async function fetchDiscordStatus() {
    if (discordId === 'SENIN_DISCORD_ID_BURAYA') {
        document.getElementById('d-text').textContent = 'ID Girilmedi';
        return;
    }
    
    try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${discordId}`);
        const data = await response.json();
        
        if (data.success) {
            const status = data.data.discord_status; // online, idle, dnd, offline
            const dot = document.getElementById('d-dot');
            const text = document.getElementById('d-text');
            
            // Mevcut classları temizle ve yenisini ekle
            dot.className = 'status-dot ' + status;
            
            const statusMap = {
                'online': 'Çevrimiçi',
                'idle': 'Boşta',
                'dnd': 'Rahatsız Etmeyin',
                'offline': 'Çevrimdışı'
            };
            
            text.textContent = statusMap[status];
        }
    } catch (error) {
        console.error('Discord durumu çekilemedi:', error);
    }
}
fetchDiscordStatus();
setInterval(fetchDiscordStatus, 30000); // Her 30 saniyede bir günceller

// --- 6. Particles.js (Arka plan toz/sis efekti) ---
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.2, "random": true },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": false },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "bubble" },
      "onclick": { "enable": false },
      "resize": true
    },
    "modes": {
      "bubble": { "distance": 200, "size": 4, "duration": 2, "opacity": 0.5, "speed": 3 }
    }
  },
  "retina_detect": true
});
