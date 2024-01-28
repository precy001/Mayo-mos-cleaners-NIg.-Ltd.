var form = document.getElementById('js-form')
form.onsubmit = function(event){
    event.preventDefault();

    var formData = new formData(form);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', form.action, true);
    xhr.send(formData);
    xhr.onload = function(e){
       var response = JSON.parse(xhr.response);
       if(xhr.status === 200){
          console.log('success')
       }else{
        console.log('fail')
       }
    };
};