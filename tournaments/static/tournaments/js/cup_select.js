document.querySelectorAll('.round_btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.round_btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');

        const selectedSizeInput = document.getElementById('selected_size');
        selectedSizeInput.value = btn.dataset.size;
    });
});

document.querySelectorAll('.category_btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.category_btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');

        const selectedCategoryInput = document.getElementById('selected_category');
        selectedCategoryInput.value = btn.dataset.categoryId;
    });
});