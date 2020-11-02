const update =() =>{
    const btns = document.querySelectorAll(".update");
    const dele = document.querySelectorAll(".delete");
    const dele1 = document.querySelector(".delete1");

    btns.forEach((btn,index) =>{
        btn.addEventListener('click',() => {
            document.getElementById('title').value="Blaise"
        })
    })
    dele.forEach((btn,index) =>{
                btn.addEventListener('click',() => {
                    setTimeout(()=>{
                        if (confirm('do you want to delete thi post')){
                             console.log('you deleted the post')
                        } ;
                     },0)
                })
            })
    // dele1.addEventListener('click', ()=>{
    //     setTimeout(()=>{
    //         if (confirm('do you want to delete thi post')){
    //              console.log('you deleted the post')
    //         } ;
    //      },2000)
    // })
}


// document.querySelector('.cancel').addEventListener('click', () =>{
//     setTimeout(()=>{
//        if (confirm('do you want to delete thi post')){
//             console.log('you deleted the post')
//        } ;
//     },2000)
// });
// navSlide();
update();