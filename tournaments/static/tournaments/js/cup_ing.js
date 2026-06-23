const cardLeft = document.getElementById('card-left');
const cardRight = document.getElementById('card-right');
const nextBtn = document.getElementById('next-btn');
const backBtn = document.querySelector('.back-btn');
const exitModal = document.querySelector('.Frame158');
const modalCancel = document.getElementById('modal-cancel');
const modalConfirm = document.getElementById('modal-confirm');
const screen = document.querySelector('.screen');

const winnerInput = document.getElementById('winner-item-id');
const matchForm = document.getElementById('match-form');

function selectCard(selected, other) {
    selected.classList.add('selected');
    selected.classList.remove('unselected');

    other.classList.add('unselected');
    other.classList.remove('selected');

    const selectedItemId = selected.dataset.itemId;

    if (winnerInput) {
        winnerInput.value = selectedItemId;
    }

    if (nextBtn) {
        nextBtn.disabled = false;
    }
}

if (cardLeft && cardRight) {
    cardLeft.addEventListener('click', () => {
        selectCard(cardLeft, cardRight);
    });

    cardRight.addEventListener('click', () => {
        selectCard(cardRight, cardLeft);
    });
}

if (nextBtn && matchForm) {
    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (!winnerInput || !winnerInput.value) {
            return;
        }

        matchForm.submit();
    });
}

if (backBtn && exitModal) {
    backBtn.addEventListener('click', (e) => {
        e.preventDefault();

        exitModal.classList.add('active');

        if (screen) {
            screen.classList.add('modal-open');
        }
    });
}

if (modalCancel && exitModal) {
    modalCancel.addEventListener('click', () => {
        exitModal.classList.remove('active');

        if (screen) {
            screen.classList.remove('modal-open');
        }
    });
}

if (modalConfirm) {
    modalConfirm.addEventListener('click', () => {
        const url = modalConfirm.dataset.url;

        if (url) {
            window.location.href = url;
        }
    });
}