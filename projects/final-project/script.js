function calcDynamicHeight(ref) {
    const vw = window.innerWidth
    const vh = window.innerHeight
    const objectWidth = ref.scrollWidth
    return objectWidth - vw + vh + 150 // ul margin-right
} 

document.addEventListener("DOMContentLoaded", function(event) { 
    const pContainer = document.querySelector('.p-container')
    const horizontal = document.querySelector('.horizontal')
    pContainer.style.height = `${calcDynamicHeight(horizontal)}px`


    window.addEventListener('scroll', () => {
        const sticky = document.querySelector('.sticky')
        horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`
    })
  
    window.addEventListener('resize', () => {
        pContainer.style.height = `${calcDynamicHeight(horizontal)}px`
    })
});