document.getElementById('log-out').addEventListener('click', (e)=>{
    e.preventDefault()
    auth.signOut().then(()=>{
        console.log('clicked'); 
    });
})