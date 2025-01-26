window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    // Pokud je stránka posunutá dolů, přidáme třídu 'fixed'
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Najdeme všechny obrázky v galerii
const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalCaption = document.querySelector('.modal-caption'); // Nový prvek pro popis obrázku
const closeModal = document.querySelector('.modal .close');

// Kliknutí na obrázek -> Zobrazí se v modalu
galleryImages.forEach((img) => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
    modalCaption.textContent = img.alt; // Přidá text z atributu alt
  });
});

// Zavření modalu při kliknutí na křížek
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Zavření modalu při kliknutí mimo obrázek
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

