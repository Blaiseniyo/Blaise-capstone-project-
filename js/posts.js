const update =() =>{
    const dele = document.querySelectorAll(".delete");

    dele.forEach((btn,index) =>{
                btn.addEventListener('click',() => {
                    setTimeout(()=>{
                        if (confirm('do you want to delete thi post')){
                             console.log('you deleted the post')
                        } ;
                     },0)
                })
            })
}
update();

const posts=document.querySelector('.grid');

// creating alement and render posts

function renderPosts(doc){
    let article = document.createElement('article');
    let image=document.createElement('img');
    let div =document.createElement('div');
    let title=document.createElement('h3');
    let content =document.createElement('p');
    let div2 =document.createElement('div');
    let btn1 =document.createElement('button')
    let btn2 =document.createElement('button')

    article.setAttribute('post-id',doc.id);
    image.src=doc.data().image;
    title.textContent=doc.data().title;
    const content2 = doc.data().content;
    content.textContent=content2.substring(0,50);
    btn1.setAttribute('class','update');
    btn1.textContent='Update';
    btn2.setAttribute('class','delete');
    btn2.textContent='Delete';
    div2.setAttribute('class','btn'); 
    div2.appendChild(btn1);
    div2.appendChild(btn2);
    div.appendChild(image);
    div.appendChild(title);
    div.appendChild(content);
    div.appendChild(div2);
    article.appendChild(div);
    posts.appendChild(article);

    btn2.addEventListener('click', (e) =>{
        e.stopPropagation();
        if (confirm("By deleting this post, It is going to be permanently removed from our server")){
            const id=e.target.parentNode.parentNode.parentNode.getAttribute('post-id');
            // console.log(id);
            db.collection('posts').doc(id).delete();
       } ;
    })

    btn1.addEventListener('click',e=>{
        const id=e.target.parentNode.parentNode.parentNode.getAttribute('post-id');
        // const post =db.collection('post').doc(id).get();
        window.location.href=`update.html#${id}`;

    })
}

// getting data from firebase
// db.collection('posts').get().then(snapshot => {
//     snapshot.docs.forEach( doc =>{
//         renderPosts(doc); 
//     })
// })


db.collection('posts').onSnapshot(snpashot =>{
    let changes =snpashot.docChanges();
    changes.forEach(change =>{
        if(change.type=='added'){
            renderPosts(change.doc);
        }
        else if(change.type== 'removed'){
            let art = posts.querySelector('[post-id='+ change.doc.id +']');
            posts.removeChild(art);
        }
    })
})

// adding data to firebase