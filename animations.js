// Hero Button Animation
function animateHero() {
    const heroSection = document.querySelector('.hero');
    heroSection.style.transform = 'scale(1.05)';
    setTimeout(() => heroSection.style.transform = 'scale(1)', 400);
}

// Hover Effect for Exclusive Items
document.querySelectorAll('.exclusive-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});
