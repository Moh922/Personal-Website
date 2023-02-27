// SLIDESHOW
let img = document.getElementById('img')
let imgArray = ['./images/IMG-20220311-WA0050.jpg', './images/image2.jpeg', './images/image3.jpeg', './images/image4.jpeg', './images/image5.jpeg',
                './images/image6.jpeg', './images/image7.jpeg', './images/image8.jpeg', './images/image9.jpeg']
let imgIndex = 0;

function slideShow(){
    img.setAttribute('src', imgArray[imgIndex])
    imgIndex++;


    if(imgIndex >= imgArray.length){
        imgIndex = 0;
    }
}
setInterval(slideShow, 3000)

// NAVBAR

const navbar = document.querySelector(".navbar");

const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section')
const navbarlinks = document.querySelectorAll('.navbar-link')
const progress = document.querySelector('.progress-bars-wrappers')
const progressBarPercents = [97, 89, 70, 65, 50, 60, 65];


window.addEventListener('scroll', ()=> {
 mainFn()  
})

const mainFn = () => {
    if(window.pageYOffset >= navbarOffsetTop){
        navbar.classList.add("sticky")
    } else{
        navbar.classList.remove("sticky")
    }

    sections.forEach((section, i) => {
        if(window.pageYOffset >= section.offsetTop 
            - 10){
              navbarlinks.forEach(navbarlink => {
                  navbarlink.classList.remove('change')
              })
                navbarlinks[i].classList.add('change')
            }
    })

    if(window.pageYOffset + window.innerHeight >= progress.offsetTop){
          document.querySelectorAll('.progress-percent').forEach((el, i) => {
                    el.style.width = `${progressBarPercents[i]}%`;
                    el.previousElementSibling.firstElementChild.textContent =
                    progressBarPercents[i]
                 })
                }

}

mainFn()

window.addEventListener('resize', () =>{
    window.location.reload()
})