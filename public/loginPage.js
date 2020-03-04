'use strict' ;

const userForm = new UserForm();
userForm.loginFormCallback = function (data) {
   ApiConnector.login(data, function (response) {
       if (response.success === true) {
            location.reload();
       } else {
          loginErrorMessageBox(response.data);
       }
       console.log(response);
       });
  };
  userForm.registerFormCallback = function (data) {
     ApiConnector.register(data, function (response) {
        if(response.success === true) {
            location.reload();
        } else {
             registerErrorMessageBox(response.data);
        }
        console.log(response);
     });
  }   
