// document.querySelector('.name-label').textContent='To'
// document.querySelector('.name').textContent='yvan';

function renderMessage(doc){
    let container =document.querySelector('.msg');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    let div4 = document.createElement('div');
    let p1 =document.createElement('p');
    let p2 =document.createElement('p');
    let p3 =document.createElement('p');
    let p4 =document.createElement('p');
    let strg1 =document.createElement('strong');
    let strg2 =document.createElement('strong');
    let strg3 =document.createElement('strong');
    let h4 =document.createElement('h4');
    let a =document.createElement('a');
    
    div2.setAttribute('class','test');
    div3.setAttribute('class','test');
    div4.setAttribute('class','test');
    
    p1.setAttribute('class','name-label');
    p2.setAttribute('class','email-label');
    p3.setAttribute('class','date-label');
    p4.setAttribute('class','message');
    
    strg1.setAttribute('class','name');
    strg2.setAttribute('class','email');
    strg3.setAttribute('class','date');
    
    h4.setAttribute('class','reply');
    
    p1.textContent='From:';
    p2.textContent='Email:';
    p3.textContent='Date:';
    
    strg1.textContent=doc.name;
    strg2.textContent=doc.email;
    strg3.textContent;
    
    p4.textContent=doc.message;
    a.href="#"
    a.textContent='Reply';
    h4.appendChild(a)
    
    div2.appendChild(p1);
    div3.appendChild(p2);
    // div4.appendChild(p3);
    
    div2.appendChild(strg1);
    div3.appendChild(strg2);
    div4.appendChild(strg3);
    
    div1.appendChild(div2);
    div1.appendChild(div3);
    div1.appendChild(div4);
    div1.appendChild(p4);
    div1.appendChild(h4);
    
    container.appendChild(div1);

}

db.collection('messages').onSnapshot(snapshot =>{
    let changes =snapshot.docChanges();
    changes.forEach(change => {
        if(change.type=='added'){
            renderMessage(change.doc.data())
        }
    });
})
