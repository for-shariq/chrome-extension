var jsonData = '[{"Id": 1,"HorizonUserName": "shariq","HorizonPassword": "abc","IXLUserName": "arsalaanali","IXLPassword": "ayaanali","Active": 1,"SchoolId": 1},{"Id": 2,"HorizonUserName": "nasir","HorizonPassword": "abc","IXLUserName": "arsalaanali",		"IXLPassword": "ayaanali","Active": 1,"SchoolId": 1	},{	"Id": 3,	"HorizonUserName": "shariq",	"HorizonPassword": "abc",	"IXLUserName": "arsalaanali","IXLPassword": "ayaanali",	"Active": 0,"SchoolId": 2 }]';

//debugger;
var username = document.querySelector('input[name="username"]');
fillField(username,'shariq');
var password = document.querySelector('input[name="password"]');
fillField(password,'abc');
var submit = document.querySelector('input[type="submit"]');
console.log(submit);
function fillField(field, value) {
    if(field){
        field.value = value;
    }
}

/*const script = document.createElement('script');
script.src = 'background.js';
script.onload = () => {
    console.log('Script loaded successfuly');
  };
document.body.insertAdjacentHTML('beforeend', '<input type="button" text="click" onClick="clicked()">');
*/
