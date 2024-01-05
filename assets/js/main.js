// ============== SHOW MENU =========

const navMenu = document.getElementById('nav_menu'),
	navToggle = document.getElementById('nav_toggle'),
	navClose = document.getElementById('nav_close')

// Menu show
navToggle.addEventListener('click', () => {
	navMenu.classList.add('show_menu')
})


// Menu hidden
navClose.addEventListener('click', () => {
	navMenu.classList.remove('show_menu')
})



// ================= SEARCH ===============
const search = document.getElementById('search'),
	searchBtn = document.getElementById('search_btn'),
	searchClose = document.getElementById('search_close')

// show search

searchBtn.addEventListener('click', () => {
	search.classList.add('show_search')
})


// Search hidden

searchClose.addEventListener('click', () => {
	search.classList.remove('show_search')
})


// ============= LOGIN =============
const login = document.getElementById('login'),
	loginBtn = document.getElementById('login_btn'),
	loginClose = document.getElementById('login_close')

// Login show

	loginBtn.addEventListener('click', () =>{
		login.classList.add('show_login')
	})

// login hidden
	loginClose.addEventListener('click', () =>{
		login.classList.remove('show_login')
	})

// ================== Eyetoggle =============

const eyeIcon = document.getElementById('eye_icon'),
	passwordInput = document.getElementById('password')

	eyeIcon.addEventListener('click', () =>{
		if(passwordInput.type === "password"){
			passwordInput.type = "text";
			eyeIcon.classList.replace("ri-eye-off-line", "ri-eye-line")
		}else{
			passwordInput.type = "password";
			eyeIcon.classList.replace("ri-eye-line", "ri-eye-off-line")
		}
	})


