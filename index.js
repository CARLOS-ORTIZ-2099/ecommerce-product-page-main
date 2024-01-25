const imgs = document.querySelectorAll('.imgs')
const imgmain = document.querySelector('.img-alone')
const galleryContainer = document.querySelector('.gallery-container')
const imgsgallery = document.querySelectorAll('.gallery .imgs')
let indice = null
// console.log(galleryContainer);

imgsgallery.forEach((img, index) => {
    //console.log(imgsgallery);
    img.addEventListener('click', (e) => {
        indice = index
        console.log(indice);
        seterImg(e, imgmain)    
    })
})

imgmain.addEventListener('click', () => openLightbox())

function openLightbox() {
        const lightboxContainer = galleryContainer.cloneNode(true)
        document.body.appendChild(lightboxContainer)
        lightboxContainer.classList.add('custom')
    
        const closeButton = document.createElement('button')
        closeButton.classList.add('close')
        closeButton.innerHTML = 'X'
        lightboxContainer.appendChild(closeButton)
        //console.log(lightboxContainer);
    
        const galleryClone = document.querySelectorAll('.custom .gallery .imgs')
        console.log(galleryClone);
        const imgMainClone = document.querySelector('.custom .img-main .img-alone')
        console.log(imgMainClone);

        const prevButton = document.createElement('button');
        prevButton.innerHTML = 'Prev';
        prevButton.addEventListener('click', () => showPrevImage(galleryClone, imgMainClone));

        const nextButton = document.createElement('button');
        nextButton.innerHTML = 'Next';
        nextButton.addEventListener('click', () => showNextImage(galleryClone, imgMainClone));

       lightboxContainer.appendChild(prevButton)
       lightboxContainer.appendChild(nextButton)

        galleryClone.forEach((ele, index) => {
            ele.addEventListener('click', (e) => {
                indice = index
                console.log(indice);
                seterImg(e, imgMainClone)
            })
        })
    
        closeButton.addEventListener('click', (e) =>{
            lightboxContainer.remove()
        }) 
    
}

function seterImg(e, nodo) {
    let src = e.target.getAttribute('src')
    nodo.setAttribute('src', src)
}

function showPrevImage(gallery, imgMain) {
   if(indice <= 0) return 
   indice -=1
   console.log(indice);
   let src = gallery[indice].getAttribute('src')
   imgMain.setAttribute('src', src)

}


function showNextImage(gallery, imgMain) {
    if(indice >=gallery.length-1) return
    indice +=1
    console.log(indice);
    let src = gallery[indice].getAttribute('src')
    imgMain.setAttribute('src', src)
}
