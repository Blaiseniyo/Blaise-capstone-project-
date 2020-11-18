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
        if(ur){
            location.href=ur;
        }else{
            // location.href
        }
    }else{
        setRules();
    }
})