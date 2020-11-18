let form3 =document.querySelector('.project-form');

let changed1 = false;
let fil1 =null;

function renderProjects(doc){
    let div =document.createElement('div');
    let i =document.createElement('img');
    let h5 =document.createElement('h5');
    let text =document.createElement('textarea');
    let btn =document.createElement('button');
    i.src=doc.data().image;
    i.alt="project-pic";
    i.classList.add('project-pic');
    i.style.width='140px';
    i.style.height='120px';
    h5.textContent=doc.data().name;
    text.cols='6';
    text.rows='8m';
    text.value=doc.data().description;
    btn.classList.add('remove');
    btn.textContent="remove";
    div.setAttribute('project-id',doc.id);
    div.appendChild(i);
    div.appendChild(h5);
    div.appendChild(text);
    div.appendChild(btn);

    form3.appendChild(div);
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        let id=e.target.parentNode;
        console.log(id);
    })
}


db.collection('projects').onSnapshot(snapshot =>{
    let changes =snapshot.docChanges();
    changes.forEach(change =>{
        if(change.type =='added'){
            renderProjects(change.doc);
        }
        else{
            let skil = form3.querySelector('[project-id='+ change.doc.id +']');
            form2.removeChild(skil);
        }
    });
})

function renderNewproject(){
    let form=document.createElement('form');
    let input1 = document.createElement('input');
    let link = document.createElement('input');
    let input = document.createElement('input');
    let des =document.createElement('textarea');
    des.cols='6';
    des.rows='8';
    input1.style.marginTop="10px";
    input1.style.marginBottom="10px";
    input.style.marginBottom="10px";
    input1.type='text';
    link.type='text';
    input1.name='name';
    link.name='link';
    input.name='image';
    input.classList.add('image');
    des.name='description';
    form.classList.add('in')
    input1.placeholder='Title';
    input.type='file';

    form.appendChild(input1);
    form.appendChild(des);
    form.appendChild(link);
    form.appendChild(input);

    form3.appendChild(form);


    input.addEventListener('change', (e)=>{
        changed1=true;
        fil1= e.target.files[0];
    })
    console.log();
}

document.querySelector('.add-2').addEventListener('click',(e)=>{
    document.querySelector('.save-3').style.display='block';
    document.querySelector('.add-2').style.display="none";
    renderNewproject();
})

document.querySelector('.save-3').addEventListener('click',(e)=>{
    document.querySelector('.add-2').style.display='block';
    document.querySelector('.save-3').style.display="none";
    let form = document.querySelector('.in');
    let file=document.querySelector('.image');

    if(changed){
        let storageRef =str.ref('image/'+fil1.name);
        storageRef.put(fil1).then(()=>{
            storageRef.getDownloadURL().then(url=>{
                db.collection('projects').add({
                    name: form.name.value,
                    description:form.description.value,
                    link: form.link.value,
                    image:url
            }).then(()=>{
                console.log(added);
            })
        })
    })
    }else{
        alert('please you have to first choice an Image for your project');
    }

})

