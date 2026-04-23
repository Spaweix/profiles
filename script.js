const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');
const musicIcon = document.getElementById('music-icon');
const musicText = document.getElementById('music-text');
ruz (istediğin gibi değiştirebilirsin)
bgMusic.volume = 0.3;

musicBtn.addEventListener('click', () => {
  if (bgMusic.paused) {
        bgMusic.play(); // Şarkıyı başlat
        musicIcon.classList.remove('fa-play'); 
        musicIcon.classList.add('fa-pause'); 
        musicText.textContent = 'Playing...'
        musicBtn.classList.add('playing'); 
    } 
    else {
        bgMusic.pause(); // Şarkıyı durdur
        musicIcon.classList.remove('fa-pause'); 
        musicIcon.classList.add('fa-play'); // 
        musicText.textContent = 'Paused'; // 
        musicBtn.classList.remove('playing'); // 
    }
});
