let form =document.querySelector('.form-msg');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let date =new Date();
    db.collection('messages').add({
        name:form.name.value,
        email:form.email.value,
        message: form.message.value,
        date : date
    }).then(()=>{
        alert('message sent');
        form.name.value=' ';
        form.email.value=' ';
        form.message.value=' ';
    }).catch(()=>{
        alert('your message was not sent, please try again');
    })
})