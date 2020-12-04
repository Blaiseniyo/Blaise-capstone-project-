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

let id=location.hash.slice(1);
function renderArticle(article){
    const title=document.querySelector('#title');
    const content=document.querySelector('#content');
    const image=document.querySelector('.image');
    title.textContent=article.title;
    content.textContent=article.content;
    console.log(article.image);
    image.src=article.image;
}

db.collection('posts').doc(id).get().then((article)=>{
    renderArticle(article.data());
}) 


function renderComments(comment){
    const comments =document.querySelector('#comment-1');
    const name =document.createElement('h2');
    const com =document.createElement('p');
    const div =document.createElement('div');
    div.setAttribute('class','comment');
    name.textContent=comment.name;
    com.textContent=comment.comment;
    div.appendChild(name);
    div.appendChild(com);
    comments.appendChild(div);
}

//displaying the comment to the UI

db.collection('comments').where("post","==",id).onSnapshot(snpashot =>{
    let changes =snpashot.docChanges();
    changes.forEach(change =>{
        if(change.type=='added'){
            renderComments(change.doc.data());
        }
        else if(change.type== 'removed'){
            // let art = posts.querySelector('[post-id='+ change.doc.id +']');
            // posts.removeChild(art);
        }
    })
})

let form =document.querySelector('.comment-form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if( form.name.value && form.comment.value){
        db.collection('comments').add({
            post: id,
            name:form.name.value,
            comment: form.comment.value
        })
        form.name.value=' ';
        form.comment.value=' ';
    }else{
        alert('Enter your name and your comment before you leave a comment ');
    }
})

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

let url =location.href;
document.getElementById('log-out').addEventListener('click', (e)=>{
    e.preventDefault()
    auth.signOut().then(()=>{
        console.log('clicked'); 
    });
})

auth.onAuthStateChanged(user =>{
    if(user){
        setRules(user);
        console.log('user logged in');
    }else{
        setRules();
        window.location.href=`signin.html#${url}`;
    }
})
navSlide();