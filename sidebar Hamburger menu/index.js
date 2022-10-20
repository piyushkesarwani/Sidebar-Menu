const toggleMenu = document.querySelector('.toggleMenu');
const sidebarContainer = document.querySelector('.sidebarContainer')
const closeBtn = document.querySelector('.closeBtn');

toggleMenu.addEventListener('click', () => {
	sidebarContainer.classList.toggle('active');
})

closeBtn.addEventListener('click', () => {
	sidebarContainer.classList.remove('active');
})