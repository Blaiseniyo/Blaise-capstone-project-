auth.onAuthStateChanged(user =>{
    if(user){
        console.log('uesr logged in');
    }else{
        window.location.href='signin.html';
    }
})

document.getElementById('log-out').addEventListener('click', (e)=>{
    e.preventDefault()
    auth.signOut().then(()=>{
        console.log('clicked'); 
    });
})