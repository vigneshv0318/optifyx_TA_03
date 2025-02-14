function filterImages(category) {
    const images = document.querySelectorAll('.image');

    images.forEach((image) => {
        const imageCategory = image.getAttribute('data-category');
        
        if (category === 'all') {
            image.classList.remove('hidden');
        } else {
            if (imageCategory === category) {
                image.classList.remove('hidden');
            } else {
                image.classList.add('hidden');
            }
        }
    });
}
