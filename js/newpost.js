const form=document.querySelector('#new-post');
form.addEventListener('submit', e =>{
    e.preventDefault();
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