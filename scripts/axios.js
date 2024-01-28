const form = document.getElementById('js-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new formData(form);
    axios
    .post('https://usebasin.com/f/a200a24ca67d', formData, options)
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
