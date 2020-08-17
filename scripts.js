const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoId}`
        console.log(videoId)
    })
}

// Uma maneira de fazer

// const closeModal = document.querySelector('.close-modal')

// closeModal.addEventListener("click", function(){
//     modalOverlay.classList.remove('active')
// })

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ""
})
