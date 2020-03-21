document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const curPos = window.scrollY;
    const divs = document.querySelectorAll('container' || 'body>container');
    const links = document.querySelectorAll('#menu a');

    divs.forEach((el) => {
        if (el.offsetTop <= curPos) {
            links.forEach((a) => {
                a.classList.remove('colored-item');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('colored-item');
                }
            })
        }
    });
}