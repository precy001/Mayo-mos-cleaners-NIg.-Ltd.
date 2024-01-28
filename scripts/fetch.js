const form = document.getElementById('js-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new formData(form);
    fetch('https://usebasin.com/f/a200a24ca67d', {
        method: 'POST',
        headers:{
            "Accept": "application/json",
        },
        body:formData,
    })
    .then((response) =>{
        if(response.status === 200){
           console.log('success');
        }else{
            console.log('fail');
        }
    })
    .catch((error) =>
    console.log(error));
})