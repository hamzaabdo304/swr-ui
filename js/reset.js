

    
     document.getElementById('btn').disabled=true;
       
    

    function check_pass(){
        let pass=document.getElementById('pass').value;
        let confirm_pass=document.getElementById('confirm_pass').value;
        let error=document.getElementById('err');
        let btn=document.getElementById('btn');
        if(pass == confirm_pass){
            btn.disabled=false; 
            error.style.display="none";
        }else{
            btn.disabled=true;
            error.style.display="block";
        }
      
        

        
    }



