var $password = $("#password");
var $confirmpassword = $("#confirmpassword");

$("form span").hide();

function checkifgreatthan(){
    return $password.val().length > 6 ;
}

function checkifequal(){
    return $password.val() === $confirmpassword.val();
}


function checkpassword(){
    if ($password.val().length > 6 ){
        $password.next().hide();
    }else{
                $password.next().show();
    }
}

function confirmpasswordcheck(){
    if($password.val() === $confirmpassword.val()  ){
        $confirmpassword.next().hide();
    }else{
                $confirmpassword.next().show();
    }
}

$password.focus(checkpassword).keyup(checkpassword);

$confirmpassword.focus(confirmpasswordcheck).keyup(confirmpasswordcheck);


$(document).ready(function() {
  function checkFormValidity() {
    var name = $("input[name='name']").val();
    var username = $("input[name='username']").val();
    var password = $("input[name='password']").val();
    var confirmPassword = $("input[name='confirmPassword']").val();
 
    var isFormValid = name !== "" && username !== "" && password !== "" && confirmPassword !== "";
    
    $("#button").prop("disabled", !isFormValid);
  }
 
  $("input").on("input", function() {
    checkFormValidity();
  });
 
  checkFormValidity();
});