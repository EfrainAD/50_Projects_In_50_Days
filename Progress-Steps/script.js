const progressBar = document.querySelector('.progress-container')
const circal = document.querySelectorAll('.circal')
const prevBtn = document.querySelector('#progress-prev')
const nextBtn = document.querySelector('#progress-next')

let progressBarStatus = 1

const updateProgressCircals = () => {
   circal.forEach((c, index) => {
      if (index < progressBarStatus) {
         c.classList.add('active')
      } else {
         c.classList.remove('active')
      }
   })
}

const updateProgressLine = () => {
   const percent = ((progressBarStatus - 1) / (circal.length - 1)) * 100

   // The percentage is set with var() in the css file
   document.documentElement.style.setProperty(
      '--progressbar-percentage',
      percent + '%'
   )
}

const updateBtnsDisabledStatus = () => {
   // This will also make sure the progressBar will not go out of range of 1 - circal.length
   prevBtn.disabled = progressBarStatus === 1 ? true : false
   nextBtn.disabled = progressBarStatus === circal.length ? true : false
}

const updateProgressBarStatus = (btnPressedId) => {
   if (btnPressedId === 'progress-next') {
      progressBarStatus++
   } else {
      progressBarStatus--
   }
}

const handleUpdateProgressBar = (e) => {
   const btnPressedId = e.target.id

   updateProgressBarStatus(btnPressedId)
   updateProgressCircals()
   updateProgressLine()
   updateBtnsDisabledStatus()
}

prevBtn.addEventListener('click', handleUpdateProgressBar)
nextBtn.addEventListener('click', handleUpdateProgressBar)
