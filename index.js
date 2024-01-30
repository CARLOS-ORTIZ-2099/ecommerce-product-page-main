const imgs = document.querySelectorAll('.imgs')
const galleryContainer = document.querySelector('.gallery-container')
const imgMain = document.querySelector('.gallery-container .img-main')
const gallery = document.querySelectorAll('.gallery-container .gallery .imgs')
const menuImage =  document.querySelector('.menu-image')
const ulContainer = document.querySelector('.ul-container')
const closeImage = document.querySelector('.close-image')
let currentIndex = null


const absolue = document.querySelector('.absolute')
const galleryContainerClone = document.querySelector('.gallery-container-clone')
const imgMainClone = document.querySelector('.gallery-container-clone .img-main-container .img-main')
const galleryClone = document.querySelectorAll('.gallery-container-clone .gallery .imgs')
let containerButtons = document.createElement('div')

gallery.forEach((img, index) => {
    img.addEventListener('click', (e) => {
        currentIndex = index
        console.log(currentIndex);
        seterImg(e, imgMain)    
    })
})

galleryClone.forEach((img, index) => {
    img.addEventListener('click', (e) => {
        currentIndex = index
        console.log(currentIndex);
        seterImg(e, imgMainClone)    
    })
})

function seterImg(e, nodo) {
    let src = e.target.getAttribute('src')
    nodo.setAttribute('src', src)
}


imgMain.addEventListener('click', (e) => openLightbox(e))

function openLightbox(e) {
    console.log(e.target);
        galleryContainerClone.classList.remove('hidden')
        galleryContainerClone.classList.add('custom')
        console.log(imgMainClone);
        seterImg(e, imgMainClone)
        
        const prevButton = document.createElement('button');
        prevButton.innerHTML = 'Prev';
        prevButton.classList.add('prev')
        prevButton.addEventListener('click', () => showPrevImage());

        const nextButton = document.createElement('button');
        nextButton.innerHTML = 'Next';
        nextButton.classList.add('next')
        nextButton.addEventListener('click', () => showNextImage());

        const closeButton = document.createElement('button')
        closeButton.addEventListener('click', removeModal)
        closeButton.classList.add('close')
        closeButton.innerHTML = 'X'

        containerButtons.append(closeButton,prevButton, nextButton )
        containerButtons.classList.add('buttons-container')
        absolue.appendChild(containerButtons)
}

function removeModal(){
    galleryContainerClone.classList.add('hidden')
    galleryContainerClone.classList.remove('custom')
    containerButtons.innerHTML = ``
}


function showPrevImage() {
   if(currentIndex <= 0) return 
   currentIndex -=1
   console.log(currentIndex);
   let src = galleryClone[currentIndex].getAttribute('src')
   imgMainClone.setAttribute('src', src)

}


function showNextImage() {
    if(currentIndex >=galleryClone.length-1) return
    currentIndex +=1
    console.log(currentIndex);
    let src = galleryClone[currentIndex].getAttribute('src')
    imgMainClone.setAttribute('src', src)
}

menuImage.addEventListener('click',(e)=>{
    ulContainer.style.visibility=  'visible'
})
closeImage.addEventListener('click',(e)=>{
    ulContainer.style.visibility=  'hidden'
})
