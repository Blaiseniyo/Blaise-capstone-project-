const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const update =document.querySelector('.active');
    const dele=document.querySelector('.delete');
    

    burger.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('go');
            //Animate links
    navLinks.forEach((link,index) => {
        if (link.style.animation){
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    //Burger animation
    burger.classList.toggle('toggle');

    update.addEventListener('click',() =>{
        document.querySelector('.title').insertAdjacentText='How start with machine learning'
    })

    });
}

navSlide();