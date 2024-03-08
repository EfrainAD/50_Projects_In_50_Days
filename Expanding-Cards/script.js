const panels = document.querySelectorAll('.panel')

const clearActiveStatus = () => {
   panels.forEach((panel) => panel.classList.remove('active'))
}

const makeActive = (panel) => {
   clearActiveStatus()
   panel.classList.add('active')
}

panels.forEach((panel) => {
   panel.addEventListener('click', () => {
      makeActive(panel)
   })
})
