let form =document.querySelector('.profile-form');
let fields = document.querySelectorAll(".profile");
let save = document.querySelector('.save');
let image =document.querySelector('.profile-pic');
const file = document.getElementById('pic');
const id="pdZVknj9jDxZwIejBpRt";
let changed = false;
let fil =null;

fields.forEach(field =>{
    field.addEventListener('change',()=>{
        save.style.display='block';
    })
})

file.addEventListener('change', (e) =>{
    changed=true;
    fil= e.target.files[0];
    image.src=URL.createObjectURL(fil);
})

function renderProfile(doc){

    form.fname.value=doc.firstName;
    form.lname.value=doc.lastName;
    image.src=doc.picture,
    form.description.value=doc.description;
    form.about.value=doc.about;
}


db.collection('profile').doc(id).get().then(profile=>{
       renderProfile(profile.data());
})

save.addEventListener('click', (e)=>{
    e.preventDefault();
    if(changed){
        let storageRef = str.ref('images/'+ fil.name);
            db.collection('profile').doc(id).get().then((profile)=>{
                let im =str.refFromURL(profile.data().picture);
                im.delete().then(()=>{
                    console.log('deleted succefully');
                    storageRef.put(fil).then((snapshot)=>{
                        storageRef.getDownloadURL().then(url =>{
                           db.collection('profile').doc(id).update({
                                firstName:form.fname.value,
                                lastName:form.lname.value,
                                description:form.description.value,
                                about:form.about.value,
                                picture:url
                            }).then(()=>{
                                window.location.load;
                            })
                        })
                    })
                })
            })
            .catch((error =>{
                console.log(error);
            }))
    }else{
        db.collection('profile').doc(id).update({
            firstName: form.fname.value,
            lastName: form.lname.value,
            description: form.description.value,
            about:form.about.value
        })
    }
})