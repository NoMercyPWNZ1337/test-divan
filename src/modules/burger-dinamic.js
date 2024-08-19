document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const mobileNav = document.getElementById('mobile-nav');

    burgerMenu.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const dropdownTrigger = document.querySelectorAll('.dropdown-trigger-chat');
    const dropdown = document.querySelectorAll('.dropdown-chat');

    dropdownTrigger.forEach((trigger, index) => {
      // Додаємо обробник події для кожного тригера
      trigger.addEventListener('click', () => {
        dropdown[index].classList.toggle('active-chat'); // Показуємо/ховаємо відповідний список
      });

      // Закрити дропдаун, якщо натиснути за межами його області
      window.addEventListener('click', (event) => {
        if (!event.target.matches('.dropdown-trigger-chat')) {
          dropdown.forEach((menu) => {
            if (menu.classList.contains('active-chat')) {
              menu.classList.remove('active-chat');
            }
          });
        }
      });
    });

    // Обробник події для кнопки бургер-меню
    document.getElementById('burger-menu').addEventListener('click', function () {
      const searchTrigger = document.getElementById('search-trigger');

      // Додаємо або прибираємо клас для зміни стилів
      searchTrigger.classList.toggle('active');
    });
  });