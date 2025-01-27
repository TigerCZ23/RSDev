// Najdeme všechny sekce s paralaxovým efektem
const parallaxSections = document.querySelectorAll('.parralax-section');

// Získáme výšku headeru
const header = document.querySelector('header'); // Uprav selektor podle toho, jak header definujete
let headerHeight = header ? header.offsetHeight : 0;

// Aktualizace výšky headeru při změně velikosti okna (pro případ responsivity)
window.addEventListener('resize', () => {
    headerHeight = header ? header.offsetHeight : 0;
});

// Přidáme scroll listener pro paralaxový efekt
window.addEventListener('scroll', () => {
    parallaxSections.forEach((section) => {
        const sectionRect = section.getBoundingClientRect(); // Pozice sekce vůči viewportu
        const offsetStart = parseInt(section.dataset.offset || 50); // Offset od vrchu okna (procento, výchozí hodnota 50)
        const speed = parseFloat(section.dataset.speed || 0); // Rychlost paralaxy, výchozí 0.5

        // Výška sekce pro inicializaci paralaxy ve středu obrázku
        const sectionHeight = section.offsetHeight;

        // Převod offsetu na pixely (relativní k výšce okna)
        const sectionStart = (window.innerHeight - headerHeight) * (offsetStart / 100);

        // Paralaxový efekt začne, když sekce dosáhne nastaveného bodu
        if (sectionRect.top <= sectionStart && sectionRect.bottom >= 0) {
            // Posun pozadí včetně inicializace středu obrázku
            const baseOffset = sectionHeight / -6; // Začíná ve středu obrázku
            const scrollOffset = (sectionStart - sectionRect.top) * speed; // Dynamický posun
            section.style.backgroundPositionY = `${baseOffset + scrollOffset}px`;
        }
    });
});
