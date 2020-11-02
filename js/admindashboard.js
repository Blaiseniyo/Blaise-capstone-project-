const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const update =document.querySelector('.update');
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

    // update.addEventListener('click',() =>{
    //     document.getElementById("title").value='none';
    // })

    });
}

// document.getElementById('help').addEventListener('click', () => {
//     console.log('clicked')
// });

// const update =() =>{
//     const btns = document.querySelectorAll(".update");
//     const dele = document.querySelectorAll("delete");

//     btns.forEach((btn,index) =>{
//         btn.addEventListener('click',() => {
//             document.getElementById('title').value="Blaise";
//         })
//     })
//     dele.forEach((btn,index) =>{
//         btn.addEventListener('click',() => {
//             prompt('people');
//         })
//     })
//     }
navSlide();
// update();