document.getElementById('btn').disabled=true;
function valid_first(){
    let first=document.getElementById('first').value;
    let err_first=document.getElementById('err_first');
    let btn=document.getElementById('btn');
    reg=/^([A-Za-z\s]{3,10})$/i;
    res=reg.test(first);
    if(res){
        btn.disabled=false;
        err_first.style.display="none";
    }else{
        btn.disabled=true;
        err_first.style.display="block";
    }
}


function valid_last(){
    let last=document.getElementById('last').value;
    let err_last=document.getElementById('err_last');
    let btn=document.getElementById('btn');
    reg=/^([A-Za-z\s]{3,10})$/i;
    res=reg.test(first);
    if(res){
        btn.disabled=false;
        err_last.style.display="none";
    }else{
        btn.disabled=true;
        err_last.style.display="block";
    }
}


function valid_phone(){
    let phone=document.getElementById('phone').value;
    let err_phone=document.getElementById('err_phone');
    let btn=document.getElementById('btn');
    reg=/^([0-9]{11})$/i;
    res=reg.test(phone);
    if(res){
        btn.disabled=false;
        err_phone.style.display="none";
    }else{
        btn.disabled=true;
        err_phone.style.display="block";
    }
}



function valid_email(){
    let email=document.getElementById('email').value;
    let err_email=document.getElementById('err_email');
    let btn=document.getElementById('btn');
    // accept start of digit
    reg=/^\w+([\.-]?\w+)* @\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //ali@client.can.eg.edu
    // not accept start of digit
    //reg=/^[A-Za-z]+([0-9]*)([\.-_]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    res=reg.test(email);
    if(res){
        btn.disabled=false;
        err_email.style.display="none";
    }else{
        btn.disabled=true;
        err_email.style.display="block";
    }
}




function valid_pass(){
    let pass=document.getElementById('pass').value;
    let err_pass=document.getElementById('err_pass');
    let btn=document.getElementById('btn');
    // accept start of digit
    reg=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\._=+@*#$%^&-(){}/~!]).{8,16}$/i; 
    res=reg.test(pass);
    if(res){
        btn.disabled=false;
        err_pass.style.display="none";
    }else{
        btn.disabled=true;
        err_pass.style.display="block";
    }
}
function valid_confirm(){
    let pass=document.getElementById('pass').value;
    let confirm_pass=document.getElementById('confirm_pass').value;
    let error=document.getElementById('err_confirm');
    let btn=document.getElementById('btn');
    if(pass == confirm_pass){
        btn.disabled=false; 
        error.style.display="none";
    }else{
        btn.disabled=true;
        error.style.display="block";
    }
    
}

function showfile(){
    let f=document.getElementById('file');
    f.click();
}

function readimage(event){
    let img=document.getElementById('image');
    let reader=new FileReader();
    reader.onload=function(){
        img.src=reader.result
    }
    reader.readAsDataURL(event.target.files[0]);
    
}





