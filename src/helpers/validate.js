export const validate = (data,type) => {


    const errors={};

     if (!data.email){
         errors.email = "Email required";
     } else if (! /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ .test(data.email)){
         errors.email="Email address is invalid"
     } else {
         delete errors.email;
     }

     if (!data.password) {
         errors.password = "Password required"
     } else if ( data.password.length < 6){
         errors.password = "Pssword need to be 6 character or more "
     } else {
         delete errors.password;
     }
     if(type === "signUp"){
        if (!data.name.trim()){
            errors.name="Username required";
        } else {
            delete errors.name;
        }
        if (!data.confirmPassword){
            errors.confirmPassword = "Confirm the password"
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = "Password do not match"
        } else {
            delete errors.confirmPassword;
        }
   
        if (!data.isAccepted) {
           errors.isAccepted = "Accept our regulations"
        } else {
           delete data.isAccepted;
        }
     }
     return errors;

    }