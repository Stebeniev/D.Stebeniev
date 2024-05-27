document.addEventListener('DOMContentLoaded', function() {
  function addShowClassWithDelay(elements, delay) {
    elements.forEach((element, index) => {
      setTimeout(() => {
        if (element) {
          element.classList.add('show');
        }
      }, index * delay);
    });
  }

  const mainElements = [
    document.querySelector('.hello'),
    document.querySelector('.everyone'),
    document.querySelector('.title-content__main'),
    document.querySelector('.title-content__text')
  ];

  const skillsItems = document.querySelectorAll('.skills-item');
  const educationItems = document.querySelectorAll('.education-item');
  const contactsItems = document.querySelectorAll('.contacts-item');

  addShowClassWithDelay(mainElements, 1000);
  addShowClassWithDelay(Array.from(skillsItems), 1000);
  addShowClassWithDelay(Array.from(educationItems), 1000);
  addShowClassWithDelay(Array.from(contactsItems), 1000);
});

document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.querySelector('.burger-menu');
  const navList = document.querySelector('.nav-list');

  if (burgerMenu && navList) {
    burgerMenu.addEventListener('click', function() {
      burgerMenu.classList.toggle('is-active');
      navList.classList.toggle('nav-list--open');
    });

    const navLinks = document.querySelectorAll('.nav-list__link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        burgerMenu.classList.remove('is-active');
        navList.classList.remove('nav-list--open');
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const downloadBtn = document.getElementById('download-btn');

  if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
      const link = document.createElement('a');
      link.href = './CV_Dmitriy-Stebeniev.pdf';
      link.download = 'resume Dmitriy_Stebeniev.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
});
