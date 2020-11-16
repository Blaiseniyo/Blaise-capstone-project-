let form2 =document.querySelector('.skill-form');


function renderSkills(doc){
    let div =document.createElement('div');
    let i =document.createElement('img');
    let h5 =document.createElement('h5');
    let btn =document.createElement('button');
    i.src=doc.data().image;
    i.alt="skill-pic";
    i.classList.add('skill-pic');
    i.style.width='140px';
    i.style.height='120px';
    h5.textContent=doc.data().name;
    btn.classList.add('remove');
    btn.textContent="remove";
    div.setAttribute('skill-id',doc.id);
    div.appendChild(i);
    div.appendChild(h5);
    div.appendChild(btn);

    form2.appendChild(div);
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        let id=e.target.parentNode;
        console.log(id);
    })
}


db.collection('skills').onSnapshot(snapshot =>{
    let changes =snapshot.docChanges();
    changes.forEach(change =>{
        if(change.type =='added'){
            renderSkills(change.doc);
        }
        else{
            let skil = form2.querySelector('[skill-id='+ change.doc.id +']');
            form2.removeChild(skil);
        }
    });
})