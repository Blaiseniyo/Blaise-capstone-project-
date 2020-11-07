const form=document.querySelector('#new-post');
const post =document.getElementById('review');
const cancel =document.querySelector('.cancel');
const title=document.querySelector('.title2');
const content=document.querySelector('.content2');

form.addEventListener('submit', e =>{
    e.preventDefault();
    title.textContent=form.title.value;
    content.textContent=form.content.value;
    document.querySelector('.post').classList.add('show');
    document.querySelector('.post2').classList.remove('show');
})

cancel.addEventListener('click', () =>{
    document.querySelector('.post').classList.remove('show');
    document.querySelector('.post2').classList.add('show');
})

if (location.hash){
    let id=location.hash.slice(1);

    function renderArticle(article){
        const title=document.querySelector('#title');
        const content=document.querySelector('#content');
        title.value=article.title;
        content.value=article.content;
    }

    db.collection('posts').doc(id).get().then((article)=>{
        renderArticle(article.data());
    }) 
    post.addEventListener('click', ()=>{
        db.collection('posts').doc(id).update({
            title:form.title.value,
            content:form.content.value,
            image:'../Image/blog1.jpg'
        })
    
        document.querySelector('[name= title]').value=' ';
        document.querySelector('[name= content]').value=' ';
    
        setTimeout(()=>{
            window.location.href='posts.html';
        },1500)
    })
}else{
    post.addEventListener('click', ()=>{
        db.collection('posts').add({
            title:form.title.value,
            content:form.content.value,
            image:'../Image/blog1.jpg'
        })
    
        document.querySelector('[name= title]').value=' ';
        document.querySelector('[name= content]').value=' ';
    
        setTimeout(()=>{
            window.location.href='posts.html';
        },1500)
    })
}
//showing the post to the users before posting it

//adding the post firebase
