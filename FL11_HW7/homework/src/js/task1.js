let userList = [['user@gmail.com', 'UserPass'], ['admin@gmail.com', 'AdminPass']];
let minNameLen = 6;
let nameLen = 5;
let cancelMsg = 'Canceled.';
let pswMsg = 'Please, enter your password';

let userEmail = prompt('Please, enter your login (email):');
if (!userEmail){ 
    alert(cancelMsg);
}else if (userEmail.length < minNameLen){ 
    alert('I dont know any emails having name length less than 6 symbols');
}else {
    let loggedUserIndex = -1;
    let isUserExist = false;
    for (let i = 0; i < userList.length; i++){
        if (userEmail === userList[i][0]) {
            isUserExist = true;
            let userPassword = prompt(pswMsg);
            if (!userPassword){ 
                alert(cancelMsg);
            }else if (userPassword === userList[i][1]){ 
                loggedUserIndex = i;
            }else{ 
                alert('Wrong password');
            }break;
        }
    }
    if (!isUserExist) {
        alert('I don’t know you');
    }
    if (loggedUserIndex >= 0){
        let changePsw = confirm('Do you want to change your password?');
        if (!changePsw){ 
            alert('You have failed the change.');
        }else{
            let oldPassword = prompt(pswMsg + ' (OLD) ');
            if (!oldPassword){ 
                alert(cancelMsg);
            }else if (oldPassword === userList[loggedUserIndex][1]){
                let newPassword = prompt(pswMsg + ' (NEW)');
                if (newPassword && newPassword.length > nameLen) {
                    if (newPassword === prompt('Please enter you NEW password one more time')) {
                        alert('You have successfully changed your password.');
                    }else {
                        alert('You wrote the wrong password.');
                }
            }else {
                    alert('It’s too short password. Sorry.');
                }
            }else {
                alert('Wrong password');
        }
    }
}
}