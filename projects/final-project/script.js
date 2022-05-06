var augh = null

function calcDynamicHeight(ref) {
    const vw = window.innerWidth
    const vh = window.innerHeight
    const objectWidth = ref.scrollWidth
    return objectWidth - vw + vh + 150 // ul margin-right
}

function onAlbumClick(audioId) {
    // stop all audio + stop all spinning vinyls
    augh.pause(); augh.currentTime = 0;
    document.getElementById("aughVinyl").classList.remove("rotate")

    // play the music
    const a = document.getElementById(audioId)
    a.volume = 0.3
    a.play()

    // spin the vinyl
    document.getElementById(audioId + "Vinyl").classList.add("rotate")
}

document.addEventListener("DOMContentLoaded", function(event) { 
    augh = document.getElementById('augh')

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

    // audio changes
    document.getElementById("bgm").volume = 0.6;
});