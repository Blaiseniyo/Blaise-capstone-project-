auth.onAuthStateChanged(user =>{
    if(user){
        console.log('uesr logged in');
    }else{
        console.log('uesr logged out');
    }
})

document.getElementById('log-out').addEventListener('click', (e)=>{
    e.preventDefault()
    auth.signOut().then(()=>{
        console.log('clicked'); 
    });
})