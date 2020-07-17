/*==========nav background color change on scroll============*/
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 650){
            $(".navbar").addClass("nav-bg");
        }
        else{
            $(".navbar").removeClass("nav-bg");
        }
    });
  });

/*=============Form Validation==================*/

function validate(){
    let name =document.getElementById("name").value;
    let chrac=/^[A-Za-z]+$/ ;
    let email =document.myForm.email.value;
    let phone =document.getElementById("phone").value;


    if(name==""){
        document.getElementById("name_msg").innerHTML="** Enter your name";
        return false;
    }
    if(name.length < 3){
        document.getElementById("name_msg").innerHTML="** Name should more than 3 chracter";
        return false;
    }
    if(name.length > 20){
        document.getElementById("name_msg").innerHTML="** Name should not more than 20 chracter";
        return false;
    }

    if(!name.match(chrac)){
            document.getElementById("name_msg").innerHTML="** No Special Chracter Allowed";
            return false;
    }


    if(email.indexOf('@') <=0 ){
        document.getElementById("mail_msg").innerHTML="** Invalid @ position";
            return false;
    }

    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
        document.getElementById("mail_msg").innerHTML="** Invalid . position";
            return false;
    }


    if(phone==""){
        document.getElementById("mob_msg").innerHTML="** Enter your Mobile number";
        return false;
    }

    
}