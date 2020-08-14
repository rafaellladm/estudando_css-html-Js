const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", function(){
        modalOverlay.classList.add('active')
    })
}

// Uma maneira de fazer

// const closeModal = document.querySelector('.close-modal')

// closeModal.addEventListener("click", function(){
//     modalOverlay.classList.remove('active')
// })

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})
