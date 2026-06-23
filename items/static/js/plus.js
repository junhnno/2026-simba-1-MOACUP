document.addEventListener('DOMContentLoaded', () => {

    const categories = document.querySelectorAll('.category[data-id]');
    const nextBtn = document.querySelector('.btn');

    let selectedCategoryId = null;

    categories.forEach(cat => {
        cat.addEventListener('click', () => {
            categories.forEach(c => c.classList.remove('selected'));
            cat.classList.add('selected');

            selectedCategoryId = cat.dataset.id;

            console.log('선택된 카테고리:', selectedCategoryId);
        });
    });

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();

            if (!selectedCategoryId) {
                alert('카테고리를 선택해주세요.');
                return;
            }

            location.href = `/items/plus_info/?category=${selectedCategoryId}`;
        });
    }

});

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get('category');
    
    if (categoryId) {
        document.querySelectorAll('.category').forEach(el => {
            const input = el.querySelector('input[type="radio"]');
            if (input && input.value === categoryId) {
                input.checked = true;
                el.classList.add('selected');
            }
        });
    }
});