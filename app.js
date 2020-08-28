const sections = document.querySelectorAll('section')
const bubble = document.querySelector('.bubble')
const gradients = ['linear-gradient(to right, #fc4a1a, #f7b733)',
'linear-gradient(to right, #36d1dc, #5b86e5)',
'linear-gradient(to right, #f00000, #dc281e)'];

const options = {
    threshhold: 0.7
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        console.log(entry);
       
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`)
        
        
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left

        };
        if (entry.isIntersecting) {
            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
            bubble.style.setProperty('height', `${directions.height}px`);
            bubble.style.background = gradients[gradientIndex];
        }
    });
}

sections.forEach(section => {
    observer.observe(section);
});