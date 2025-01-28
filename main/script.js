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

let currentIndex = 0; // Uchovává index aktuálně zobrazeného obrázku

// Funkce pro otevření modalu
function openModal(index) {
  modal.style.display = 'block';
  currentIndex = index;
  updateModalImage();
}

// Funkce pro aktualizaci obrázku a popisu v modalu
function updateModalImage() {
  const currentImage = galleryImages[currentIndex];
  modalImg.src = currentImage.src;
  modalCaption.textContent = currentImage.alt; // Aktualizace popisu obrázku
}

// Přidáme posluchače událostí pro každý obrázek v galerii
galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    openModal(index);
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

// Funkce pro přepnutí na další obrázek
function showNextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length; // Cyklus zpět na začátek
  updateModalImage();
}

// Funkce pro přepnutí na předchozí obrázek
function showPrevImage() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length; // Cyklus na konec
  updateModalImage();
}

// Přidání posluchače pro klávesové šipky
document.addEventListener('keydown', (e) => {
  if (modal.style.display === 'block') {
    if (e.key === 'ArrowRight') {
      showNextImage(); // Šipka doprava
    } else if (e.key === 'ArrowLeft') {
      showPrevImage(); // Šipka doleva
    } else if (e.key === 'Escape') {
      modal.style.display = 'none'; // Zavření modalu klávesou Escape
    }
  }
});
