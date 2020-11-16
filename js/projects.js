let form3 =document.querySelector('.project-form');

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
    let input = document.createElement('input');
    let des =document.createElement('textarea');
    des.cols='6';
    des.rows='8';
    input1.style.marginBottom="10px";
    input.style.marginBottom="10px";
    input1.type='text';
    input1.placeholder='Title';
    input.type='file';

    form.appendChild(input1);
    form.appendChild(des);
    form.appendChild(input);

    form3.appendChild(form);

    console.log();
}

document.querySelector('.add-2').addEventListener('click',(e)=>{
    document.querySelector('.save-3').style.display='block';
    document.querySelector('.add-2').style.display="none";
    renderNewproject();
})

document.querySelector('.save-3').addEventListener('click',(e)=>{
    document.querySelector('.add-2').style.display='block';
    document.querySelector('.save-3').style.display="none"
})

