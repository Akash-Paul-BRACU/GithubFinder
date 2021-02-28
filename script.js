let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = new UI();

searchBtn.addEventListener('click', (e) =>{
    let userText = searchUser.value;
    if (userText != '') {
        fetch(`https://api.github.com/users/${userText}`)
        .then(res => res.json())
        .then(data => {
            if(data.message =='Not Found'){
                ui.showAlert('Please enter valid username', "alert alert-danger");
            }
            else{
                ui.showProfile(data);
                console.log(data);
            }
        })
    }
    else{
        ui.clearProfile();
    }
});
