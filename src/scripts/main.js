

document.addEventListener('DOMContentLoaded', function() {
    const logosection = document.querySelector('.logo_dark')

    window.addEventListener('load', function() {
        const logodark = document.querySelector('.logo__dark__item')
        setTimeout(function () {
            logodark.style.opacity = 1.7
            logodark.style.transform = 'scale(1.05)'
        },500)
    })

    function reveal() {
        var reveals = document.querySelectorAll('.sobre__item')

        reveals.forEach((reveal) => {
            let windowHeight = window.innerHeight
            let elementTop = reveal.getBoundingClientRect().top
            let elementVisible = 100;

            if(elementTop < windowHeight - elementVisible) {
                reveal.classList.add('animar')
            } else {
                reveal.classList.remove('animar')
            }
            
        })
        window.addEventListener('scroll', reveal)
    }

    reveal();
})

