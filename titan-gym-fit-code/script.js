
// navbar
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu-list');
const cancelBtn = document.querySelector('.icon.cancel-btn');

function toggleMenu() {
  menuList.classList.toggle('active');
  menuBtn.classList.toggle('hide');
  menuBtn.classList.toggle('show');
  cancelBtn.classList.toggle('show');
}

menuBtn.addEventListener('click', toggleMenu);

cancelBtn.addEventListener('click', () => {
  menuList.classList.remove('active');
  menuBtn.classList.remove('hide');
  menuBtn.classList.remove('show');
  cancelBtn.classList.remove('show');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menuList.classList.remove('active');
    menuBtn.classList.remove('hide');
    menuBtn.classList.remove('show');
    cancelBtn.classList.remove('show');
  }
});

// Smooth scrolling for internal links
menuList.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - navbar.clientHeight,
      behavior: 'smooth'
    });
    menuList.classList.remove('active');
    menuBtn.classList.remove('hide');
    menuBtn.classList.remove('show');
    cancelBtn.classList.remove('show');
  }
});

window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
};


// viti
const yearDisplay = document.getElementById('year');
for (let i = 1; i <= 2010; i++) {
  (function (index) {
    setTimeout(() => {
      yearDisplay.innerText = index;
    }, index * 2);
  })(i);
}


// Regjistrimi cdo vit
const numberDisplay = document.getElementById('people');
for (let i = 1; i <= 50; i++) {
  (function (index) {
    setTimeout(() => {
      numberDisplay.innerText = index;
    }, index * 12);
  })(i);
}

//regjistrohu for other answer
const select = document.getElementById("mySelect");
const otherInput = document.getElementById("otherInput");
const values = ["option1", "option2", "other"];

select.addEventListener("change", () => {
  if (select.value === "other") {
    otherInput.disabled = false;
  } else {
    otherInput.disabled = true;
  }
});
