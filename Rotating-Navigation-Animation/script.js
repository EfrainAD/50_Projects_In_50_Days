const page = document.querySelector('.container')
const openBtn = document.querySelector('#open')
const closeBtn = document.querySelector('#close')

const openNav = () => {
   page.classList.add('show-nav')
}
const closeNav = () => {
   page.classList.remove('show-nav')
}

openBtn.addEventListener('click', openNav)
closeBtn.addEventListener('click', closeNav)
