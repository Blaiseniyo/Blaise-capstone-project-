const form=document.querySelector('#new-post');
const post =document.getElementById('review');
const cancel =document.querySelector('.cancel');
const title=document.querySelector('.title2');
const content=document.querySelector('.content2');
const file = document.getElementById('cover-image');
let changed = false;
let fil =null;
console.log(file);


file.addEventListener('change', (e) =>{
    changed=true;
    fil= e.target.files[0];
    // let storageRef = str.ref('images/'+ fil.name);
    // storageRef.put(fil).then((snapshot)=>{
    //     storageRef.getDownloadURL().then(url =>{
    //         document.querySelector('.form-imaga').src=url;
    //     })
    // });
})

form.addEventListener('submit', e =>{
    e.preventDefault();
    title.textContent=form.title.value;
    content.textContent=form.content.value;
    document.querySelector('.post').classList.add('show');
    document.querySelector('.post2').classList.remove('show');
})

cancel.addEventListener('click', () =>{
    document.querySelector('.post').classList.remove('show');
    document.querySelector('.post2').classList.add('show');
})

if (location.hash){
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
    post.addEventListener('click', ()=>{
        db.collection('posts').doc(id).update({
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
}else{
    post.addEventListener('click', ()=>{
        let url1 ="https://firebasestorage.googleapis.com/v0/b/capstone-project-1e83a.appspot.com/o/images%2Fimage%20placeholder.jpg?alt=media&token=8acdb2e9-0e5b-4506-bdac-a6cabc45caa9";
        if(changed){
            console.log(fil.name)
            let storageRef = str.ref('images/'+ fil.name);
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
        // db.collection('posts').add({
        //     title:form.title.value,
        //     content:form.content.value,
        //     image:'../Image/blog1.jpg'
        // })
    
        // document.querySelector('[name= title]').value=' ';
        // document.querySelector('[name= content]').value=' ';
    
        // setTimeout(()=>{
        //     window.location.href='posts.html';
        // },1500)
    })
}
//showing the post to the users before posting it

//adding the post firebase
