const nextBtn = document.querySelector('.button--next')
const previousBtn = document.querySelector('.button--previous')
const main = document.querySelector('.main')
const heading = document.querySelector('.descriptionSection__heading')
const description = document.querySelector('.descriptionSection__description')
const nav = document.querySelector('.nav')
const hamburger = document.querySelector('.header__hamburger')
const data = [
   {
      imgFile: 'images/desktop-image-hero-1.jpg',
      heading: 'Discover innovative ways to decorate',
      description: 'We provide unmatched quality, comfort and style for property owner across the country. Our experts combine form and function in bringing your vision to life. Create a toom in your own reflection of you and what you love.'
   },
   {
      imgFile: 'images/desktop-image-hero-2.jpg',
      heading: 'We are available all across the globe',
      description: 'With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we\'re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today.'
   },
   {
      imgFile: 'images/desktop-image-hero-3.jpg',
      heading: 'Manufactured with the best materials',
      description: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
   },
]

const buttonsHandler = () => {
   let index = 0
   previousBtn.addEventListener('click', () => {
      if (index > 0) {
         index--
      } else {
         index = data.length - 1
      }
      main.style = `background: url('${data[index].imgFile}') no-repeat center; background-size: cover;`
      heading.textContent = data[index].heading
      description.textContent = data[index].description
   })
   nextBtn.addEventListener('click', () => {
      if (index < data.length - 1) {
         index++
      } else {
         index = 0
      }
      main.style = `background: url('${data[index].imgFile}') no-repeat center; background-size: cover;`
      heading.textContent = data[index].heading
      description.textContent = data[index].description
   })
}
buttonsHandler()

const hamburgerHandler = () => {
   hamburger.addEventListener('click', function () {
      let imgFile = this.src.split('/').pop()
      if (imgFile == 'icon-hamburger.svg') {
         this.src = 'images/icon-close.svg'
      } else {
         this.src = 'images/icon-hamburger.svg'
      }
      nav.classList.toggle('nav--active')
   })
}
hamburgerHandler()
