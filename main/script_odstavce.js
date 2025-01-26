document.querySelectorAll('.accordion-button').forEach((button) => {
    button.addEventListener('click', () => {
      const accordionItem = button.parentElement;
      const isActive = accordionItem.classList.contains('active');
  
      // Zavřeme všechny ostatní
      document.querySelectorAll('.accordion-item').forEach((item) => {
        item.classList.remove('active');
        item.querySelector('.accordion-content').style.maxHeight = '0';
        item.querySelector('.accordion-icon').textContent = '+'; // Reset ikony na plus
      });
  
      // Přepneme aktuální
      if (!isActive) {
        accordionItem.classList.add('active');
        const content = accordionItem.querySelector('.accordion-content');
        content.style.maxHeight = content.scrollHeight + 'px';
        accordionItem.querySelector('.accordion-icon').textContent = '-'; // Změna na mínus
      }
    });
  });
  