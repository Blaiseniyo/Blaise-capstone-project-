const form=document.querySelector('#new-post');
const post =document.getElementById('review');
const cancel =document.querySelector('.cancel');
const title=document.querySelector('.title2');
const content=document.querySelector('.content2');
const file = document.getElementById('cover-image');
let changed = false;
let fil =null;
let url1 ="https://firebasestorage.googleapis.com/v0/b/capstone-project-1e83a.appspot.com/o/images%2Fimage%20placeholder.jpg?alt=media&token=8acdb2e9-0e5b-4506-bdac-a6cabc45caa9";
console.log(file);

function renderUpdate(url){
    if( changed){
        document.getElementById('bl').src=URL.createObjectURL(fil);
    }
    else{
        document.getElementById('bl').src=url;
    }
    title.textContent=form.title.value;
    content.textContent=form.content.value;
    document.querySelector('.post').classList.add('show');
    document.querySelector('.post2').classList.remove('show');
}

file.addEventListener('change', (e) =>{
    changed=true;
    fil= e.target.files[0];
})

cancel.addEventListener('click', () =>{
    document.querySelector('.post').classList.remove('show');
    document.querySelector('.post2').classList.add('show');
})

if (location.hash){
    console.log('i am here ');
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
    form.addEventListener('submit', e =>{
        e.preventDefault();
        db.collection('posts').doc(id).get().then((article)=>{
            renderUpdate(article.data().image);
        }) 
        
    })
    post.addEventListener('click', ()=>{
        if (changed){
            let storageRef = str.ref(`images/${fil.name}${form.title.value}`);
            db.collection('posts').doc(id).get().then((article)=>{
                let im =str.refFromURL(article.data().image);
                im.delete().then(()=>{
                    console.log('deleted succefully');
                    storageRef.put(fil).then((snapshot)=>{
                        storageRef.getDownloadURL().then(url =>{
                           db.collection('posts').doc(id).update({
                                title:form.title.value,
                                content:form.content.value,
                                image:url
                            }).then(()=>{
                                 document.querySelector('[name= title]').value=' ';
                                document.querySelector('[name= content]').value=' ';
                                console.log('done');
                                window.location.href='posts.html';
                            })
                        })
                    })
                })
            })
            .catch((error =>{
                console.log(error);
            }))
        }else{
            post.addEventListener('click', ()=>{
                db.collection('posts').doc(id).update({
                    title:form.title.value,
                    content:form.content.value,
                }).then(()=>{
                    document.querySelector('[name= title]').value=' ';
                    document.querySelector('[name= content]').value=' ';
                    window.location.href='posts.html';
                
                })
            })
        }

    })

    // post.addEventListener('click', ()=>{
    //     let url1 ="https://firebasestorage.googleapis.com/v0/b/capstone-project-1e83a.appspot.com/o/images%2Fimage%20placeholder.jpg?alt=media&token=8acdb2e9-0e5b-4506-bdac-a6cabc45caa9";
    //     if(changed){
    //         console.log('i am changed ');
    //         console.log(fil.name)
    //         let storageRef = str.ref('images/'+ fil.name);
    //         console.log(storageRef);
    //         storageRef.put(fil).then((snapshot)=>{
    //             storageRef.getDownloadURL().then(url =>{
    //                 console.log(url)
    //                db.collection('posts').doc(id).update({
    //                     title:form.title.value,
    //                     content:form.content.value,
    //                     image:url
    //                 }).then(()=>{
    //                     console.log('updated');
    //                      document.querySelector('[name= title]').value=' ';
    //                     document.querySelector('[name= content]').value=' ';
    //                     console.log('done');
    //                     window.location.href='posts.html';
    //                 })
    //             })
    //         }).catch((error =>{
    //             console.log(error);
    //         }));
    //     }
    //     else{
    //         post.addEventListener('click', ()=>{
    //             db.collection('posts').doc(id).update({
    //                 title:form.title.value,
    //                 content:form.content.value,
    //             }).then(()=>{
    //                 document.querySelector('[name= title]').value=' ';
    //                 document.querySelector('[name= content]').value=' ';
    //                 window.location.href='posts.html';
    
    //             })
    //         })
    //     }
    // })
}else{
    form.addEventListener('submit', e =>{
        e.preventDefault();
        renderUpdate(url1);
    }) 
    post.addEventListener('click', ()=>{
        if(changed){
            console.log(fil.name)
            let storageRef = str.ref(`images/${fil.name}${form.title.value}`);
            storageRef.put(fil).then((snapshot)=>{
                storageRef.getDownloadURL().then(url =>{
                   db.collection('posts').add({
                        title:form.title.value,
                        content:form.content.value,
                        image:url
                    }).then(()=>{
                         document.querySelector('[name= title]').value=' ';
                        document.querySelector('[name= content]').value=' ';
                        console.log('done');
                        window.location.href='posts.html';
                    })
                })
            }).catch((error =>{
                console.log(error);
            }));
        }
        else{
            db.collection('posts').add({
                title:form.title.value,
                content:form.content.value,
                image:url1
            }).then(()=>{
                 document.querySelector('[name= title]').value=' ';
                document.querySelector('[name= content]').value=' ';
                console.log('done');
                window.location.href='posts.html';
            })
        }
    })
}

