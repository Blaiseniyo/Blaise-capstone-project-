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


const posts=document.querySelector('.grid');

// creating element and render posts

function renderPosts(doc){
    let article = document.createElement('article');
    let image=document.createElement('img');
    let div =document.createElement('div');
    let title=document.createElement('h3');
    let content =document.createElement('p');
    let btn =document.createElement('button');

    article.setAttribute('post-id',doc.id);
    image.src=doc.data().image;
    image.style.height='150px'
    title.textContent=doc.data().title;
    const content2 = doc.data().content;
    content.textContent=content2.substring(0,50);
    btn.textContent='read me';
    div.setAttribute('class','text');
    div.appendChild(title);
    div.appendChild(content);
    div.appendChild(btn);
    article.appendChild(image);
    article.appendChild(div);
    posts.appendChild(article);

    // btn2.addEventListener('click', (e) =>{
    //     e.stopPropagation();
    //     if (confirm("By deleting this post, It is going to be permanently removed from our server")){
    //         const id=e.target.parentNode.parentNode.parentNode.getAttribute('post-id');
    //         db.collection('posts').doc(id).delete();
    //    } ;
    // })

    btn.addEventListener('click',e=>{
        const id=e.target.parentNode.parentNode.getAttribute('post-id');
        window.location.href=`article.html#${id}`;

    })
}

// getting data from firebase
// db.collection('posts').get().then(snapshot => {
//     snapshot.docs.forEach( doc =>{
//         renderPosts(doc); 
//     })
// })

// Real time load of data from the firebase
db.collection('posts').onSnapshot(snpashot =>{
    let changes =snpashot.docChanges();
    changes.forEach(change =>{
        if(change.type=='added'){
            renderPosts(change.doc);
        }
        else if(change.type== 'removed'){
            let art = posts.querySelector('[post-id='+ change.doc.id +']');
            posts.removeChild(art);
        }
    })
})
navSlide();