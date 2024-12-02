const navLeft = document.querySelector(".nav-left")
const navRight = document.querySelector(".nav-right")
const carouselImages = document.querySelectorAll('.carousel-img')
const navigationDots = document.querySelectorAll('.navigation-dot')

function moveImagesLeft(){
    const carouselImages = document.querySelectorAll('.carousel-img')
    const navigationDots = document.querySelectorAll('.navigation-dot')
    if (carouselImages[0].classList.contains('active-img')){
        carouselImages[0].classList.remove('active-img')
        carouselImages[0].classList.add('hidden')
        carouselImages[3].classList.remove('hidden')
        carouselImages[3].classList.add('active-img')
        navigationDots[0].classList.remove('active-dot')
        navigationDots[3].classList.add('active-dot')
    } else if (carouselImages[1].classList.contains('active-img')){
        carouselImages[1].classList.remove('active-img')
        carouselImages[1].classList.add('hidden')
        carouselImages[0].classList.remove('hidden')
        carouselImages[0].classList.add('active-img')
        navigationDots[1].classList.remove('active-dot')
        navigationDots[0].classList.add('active-dot')
    } else if (carouselImages[2].classList.contains('active-img')){
        carouselImages[2].classList.remove('active-img')
        carouselImages[2].classList.add('hidden')
        carouselImages[1].classList.remove('hidden')
        carouselImages[1].classList.add('active-img')
        navigationDots[2].classList.remove('active-dot')
        navigationDots[1].classList.add('active-dot')
    } else if (carouselImages[3].classList.contains('active-img')){
        carouselImages[3].classList.remove('active-img')
        carouselImages[3].classList.add('hidden')
        carouselImages[2].classList.remove('hidden')
        carouselImages[2].classList.add('active-img')
        navigationDots[3].classList.remove('active-dot')
        navigationDots[2].classList.add('active-dot')
    } 
}

function moveImagesRight(){
    const carouselImages = document.querySelectorAll('.carousel-img')
    const navigationDots = document.querySelectorAll('.navigation-dot')
    if (carouselImages[0].classList.contains('active-img')){
        carouselImages[0].classList.remove('active-img')
        carouselImages[0].classList.add('hidden')
        carouselImages[1].classList.remove('hidden')
        carouselImages[1].classList.add('active-img')
        navigationDots[0].classList.remove('active-dot')
        navigationDots[1].classList.add('active-dot')
    } else if (carouselImages[1].classList.contains('active-img')){
        carouselImages[1].classList.remove('active-img')
        carouselImages[1].classList.add('hidden')
        carouselImages[2].classList.remove('hidden')
        carouselImages[2].classList.add('active-img')
        navigationDots[1].classList.remove('active-dot')
        navigationDots[2].classList.add('active-dot')
    } else if (carouselImages[2].classList.contains('active-img')){
        carouselImages[2].classList.remove('active-img')
        carouselImages[2].classList.add('hidden')
        carouselImages[3].classList.remove('hidden')
        carouselImages[3].classList.add('active-img')
        navigationDots[2].classList.remove('active-dot')
        navigationDots[3].classList.add('active-dot')
    } else if (carouselImages[3].classList.contains('active-img')){
        carouselImages[3].classList.remove('active-img')
        carouselImages[3].classList.add('hidden')
        carouselImages[0].classList.remove('hidden')
        carouselImages[0].classList.add('active-img')
        navigationDots[3].classList.remove('active-dot')
        navigationDots[0].classList.add('active-dot')
    } 
}

navLeft.addEventListener('click', function(){
    moveImagesLeft()
})

navRight.addEventListener('click', function(){
    moveImagesRight()

})

setInterval(moveImagesRight,3000)
