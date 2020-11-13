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
        console.log('uesr logged in');
    }else{
        setRules();
        window.location.href=`signin.html#${url}`;
    }
})