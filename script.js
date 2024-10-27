const menuIcon = document.querySelector('#menu-icon');
const navLink = document.querySelector('.nav-link');

menuIcon.onclick = () => {
  navLink.classList.toggle('active');
};

// experience section
const university = document.getElementById('university');
const oryza = document.getElementById('oryza');
const imgDefault = document.getElementById('img-default');
const imgUniversity = document.getElementById('img-university');
const imgOryza = document.getElementById('img-oryza');

const toggleActive = (imgToShow) => {
  [imgDefault, imgUniversity, imgOryza].forEach((img) => {
    img.classList.remove('active');
  });
  console.log(imgToShow);
  imgToShow.classList.add('active');
};

university.addEventListener('mouseover', () => toggleActive(imgUniversity));
oryza.addEventListener('mouseover', () => toggleActive(imgOryza));

university.addEventListener('mouseout', () => toggleActive(imgDefault));
oryza.addEventListener('mouseout', () => toggleActive(imgDefault));

// slider
const projectGrid = document.querySelector('.projects-grid');
const arrowBtns = document.querySelectorAll('.project i');
const firstCardWidth = projectGrid.querySelector('.project-card').offsetWidth;

arrowBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    projectGrid.scrollLeft += btn.id === 'slide-left' ? -firstCardWidth : firstCardWidth;
  });
});

let isDragging = false,
  startX,
  startScrollLeft;

const dragStart = (e) => {
  isDragging = true;
  projectGrid.classList.add('dragging');

  startX = e.pageX;
  startScrollLeft = projectGrid.scrollLeft;
};

const dragStop = () => {
  isDragging = false;
  projectGrid.classList.remove('dragging');
};

const dragging = (e) => {
  // console.log(e.pageX);
  if (!isDragging) return;

  projectGrid.scrollLeft = startScrollLeft - (e.pageX - startX);
};

projectGrid.addEventListener('mousedown', dragStart);
projectGrid.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);
