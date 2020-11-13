const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links');
    const navLinks = document.querySelectorAll('.nav-links li');
    

    burger.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('go');
        // nav.classList.toggle('nav-active');
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

    });
}

navSlide();


let loggedIn =document.querySelectorAll('.logged-in');
let loggedOut =document.querySelectorAll('.logged-out');

function setRules(user){
    if(user){
        loggedIn.forEach(link =>{
            link.style.display='block';

        })
        loggedOut.forEach(link =>{
            link.style.display='none';
            
        })
    }else{
        loggedIn.forEach(link =>{
            link.style.display='none';

        })
        loggedOut.forEach(link =>{
            link.style.display='block';
            
        })
    }
}