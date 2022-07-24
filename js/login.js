
function valid_email(){
    let email=document.getElementById('email').value;
    let err_email=document.getElementById('err_email');
    let btn=document.getElementById('btn');
    reg=/^\w+([\.-]?\w+)* @\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    res=reg.test(email);
    if(res){
        btn.disabled=false;
        err_email.style.display="none";
    }else{
        btn.disabled=true;
        err_email.style.display="block";
    }
}

