var activeAlbum = null

function calcDynamicHeight(ref) {
    const vw = window.innerWidth
    const vh = window.innerHeight
    const objectWidth = ref.scrollWidth
    return objectWidth - vw + vh + 150 // ul margin-right
}

function clearPreviousAlbum(album) {
    if (album == null) return

    const vinyl = album.children[0]
    removeVinylAddedClasses(vinyl)

    const albumAudio = document.getElementById(album.id + "-audio")
    albumAudio.pause()
    albumAudio.currentTime = 0
}

function removeVinylAddedClasses(vinyl) {
    vinyl.classList.remove("slide-out")
    vinyl.classList.remove("slide-in")
    vinyl.classList.remove("pin")
    vinyl.classList.remove("rotate")
}

function onAlbumMouseEnter(album) {
    if (activeAlbum != album) {
        const vinyl = album.children[0]

        removeVinylAddedClasses(vinyl)
        vinyl.classList.add("slide-in")
    }
}

function onAlbumMouseLeave(album) {
    if (activeAlbum != album) {
        const vinyl = album.children[0]

        removeVinylAddedClasses(vinyl)
        vinyl.classList.add("slide-out")
    }
}

function onAlbumClicked(album) {
    clearPreviousAlbum(activeAlbum)
    activeAlbum = album

    const vinyl = album.children[0]

    removeVinylAddedClasses(vinyl)
    vinyl.classList.add("pin")
    vinyl.classList.add("rotate")

    const albumAudio = document.getElementById(album.id + "-audio")
    albumAudio.volume = 0.3
    albumAudio.play()
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