let form = document.querySelector('.signin-form');

function validPassword(){
    let password =form.password.value;
    const span = document.querySelector('.password-error');
    if( password){
        if(password.length >= 6){
            span.style.display='none';
            return 1;
        }else{
            span.textContent='password should be atleat 6 characters long';
            span.style.display='block';
        }
    }else{
        span.textContent='This field is required';
        span.style.display='block';
    }
}

function validEmail(){
    let email =form.email.value.split('@');
    let value = form.email.value;
    const span = document.querySelector('.email-error');
    if( email.length > 1){
        if(email[1] && email[0]){
            span.style.display='none';
            return 1;
        }else{
            span.textContent='enter both part before and after @ ,of the email';
            span.style.display='block';
        }
    }else{
        if(value){
            span.textContent='enter a valid email';
            span.style.display='block'; 
        }
        else{
            span.textContent='This field is required';
            span.style.display='block';
        }
    }
}

auth.onAuthStateChanged(user =>{
    if(user){
        console.log('uesr logged in');
    }else{
        console.log('uesr logged out');
    }
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let email =validEmail();
    let password =validPassword();
    console.log(email,password);

    if(email ===1 && password === 1){
        auth.signInWithEmailAndPassword(form.email.value,form.password.value).then((res)=>{
            document.querySelector('.error-message').style.display='none';
            console.log(res.user)
            form.reset();
        }).catch((error)=>{
            document.querySelector('.error-message').style.display='block';
        })
    }

})