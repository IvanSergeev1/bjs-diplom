'use strict' ;

const useForm = new UserForm();
userForm.loginFormCallback = function (data) {
   ApiConnector.login(data, function (response) {
       if (response.success === true) {
            location.reload();
       } else {
          alert(response.data);
       }
       console.log(response);
       });
  };
  useForm.registerFormCallback = function (data) {
     ApiConnector.register(data, function (response) {
        if(response.success === true) {
            location.reload();
        } else {
             alert(response.data);
        }
        console.log(response);
     });
  }   
