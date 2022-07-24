
function first(i){
    let rat=2;
    let m_one=document.getElementsByClassName('m_one');
    let m_two=document.getElementsByClassName('m_two');
    let m_three=document.getElementsByClassName('m_three');
    let m_fourth=document.getElementsByClassName('m_fourth');
    let m_fifth=document.getElementsByClassName('m_fifth');

    m_one = [].slice.call(m_one);
    m_one.indexOf(i);
    let num = m_one.indexOf(i);
   console.log(num)
   
   m_one[num].style.backgroundColor="gold";
   m_two[num].style.backgroundColor="white";
   m_fourth[num].style.backgroundColor="white";
   m_three[num].style.backgroundColor="white";
   m_fifth[num].style.backgroundColor="white";
}


function first(i){
    let rat=2;
    let m_one=document.getElementsByClassName('m_one');
    let m_two=document.getElementsByClassName('m_two');
    let m_three=document.getElementsByClassName('m_three');
    let m_fourth=document.getElementsByClassName('m_fourth');
    let m_fifth=document.getElementsByClassName('m_fifth');

    m_one = [].slice.call(m_one);
    m_one.indexOf(i);
    let num = m_one.indexOf(i);
   console.log(num)
   
   m_one[num].style.backgroundColor="gold";
   m_two[num].style.backgroundColor="white";
   m_fourth[num].style.backgroundColor="white";
   m_three[num].style.backgroundColor="white";
   m_fifth[num].style.backgroundColor="white";
}



function first(i){
    let rat=2;
    let m_one=document.getElementsByClassName('m_one');
    let m_two=document.getElementsByClassName('m_two');
    let m_three=document.getElementsByClassName('m_three');
    let m_fourth=document.getElementsByClassName('m_fourth');
    let m_fifth=document.getElementsByClassName('m_fifth');

    m_one = [].slice.call(m_one);
    m_one.indexOf(i);
    let num = m_one.indexOf(i);
   console.log(num)
   
   m_one[num].style.backgroundColor="gold";
   m_two[num].style.backgroundColor="white";
   m_fourth[num].style.backgroundColor="white";
   m_three[num].style.backgroundColor="white";
   m_fifth[num].style.backgroundColor="white";
}


function second(i){
    let rat=4;
    let m_one=document.getElementsByClassName('m_one');
    let m_two=document.getElementsByClassName('m_two');
    let m_three=document.getElementsByClassName('m_three');
    let m_fourth=document.getElementsByClassName('m_fourth');
    let m_fifth=document.getElementsByClassName('m_fifth');

    m_two = [].slice.call(m_two);
    m_two.indexOf(i);
    let num = m_two.indexOf(i);
   console.log(num)
   
   m_one[num].style.backgroundColor="gold";
   m_two[num].style.backgroundColor="gold";
   m_fourth[num].style.backgroundColor="white";
   m_three[num].style.backgroundColor="white";
   m_fifth[num].style.backgroundColor="white";
}





function third(i){
    let rat=6;
    let m_one=document.getElementsByClassName('m_one');
    let m_two=document.getElementsByClassName('m_two');
    let m_three=document.getElementsByClassName('m_three');
    let m_fourth=document.getElementsByClassName('m_fourth');
    let m_fifth=document.getElementsByClassName('m_fifth');

    m_three = [].slice.call(m_three);
    m_three.indexOf(i);
    let num = m_three.indexOf(i);
   console.log(num)
   
   m_one[num].style.backgroundColor="gold";
   m_two[num].style.backgroundColor="gold";
   m_three[num].style.backgroundColor="gold";
   m_fourth[num].style.backgroundColor="white";
   m_fifth[num].style.backgroundColor="white";
}


function fourth(i){
    let rat=8;
    let m_one=document.getElementsByClassName('m_one');
    let m_two=document.getElementsByClassName('m_two');
    let m_three=document.getElementsByClassName('m_three');
    let m_fourth=document.getElementsByClassName('m_fourth');
    let m_fifth=document.getElementsByClassName('m_fifth');

    m_fourth = [].slice.call(m_fourth);
    m_fourth.indexOf(i);
    let num = m_fourth.indexOf(i);
   console.log(num)
   
   m_one[num].style.backgroundColor="gold";
   m_two[num].style.backgroundColor="gold";
   m_fourth[num].style.backgroundColor="gold";
   m_three[num].style.backgroundColor="gold";
   m_fifth[num].style.backgroundColor="white";
}



function fifth(i){
    let rat=10;
    let m_one=document.getElementsByClassName('m_one');
    let m_two=document.getElementsByClassName('m_two');
    let m_three=document.getElementsByClassName('m_three');
    let m_fourth=document.getElementsByClassName('m_fourth');
    let m_fifth=document.getElementsByClassName('m_fifth');

    m_fifth = [].slice.call(m_fifth);
    m_fifth.indexOf(i);
    let num = m_fifth.indexOf(i);
   console.log(num)
   
   m_one[num].style.backgroundColor="gold";
   m_two[num].style.backgroundColor="gold";
   m_fourth[num].style.backgroundColor="gold";
   m_three[num].style.backgroundColor="gold";
   m_fifth[num].style.backgroundColor="gold";
}



function run_counter(position) {
    let added=document.getElementsByClassName('cart');
        let btn = $('.gopayment');
        btn = [].slice.call(btn);
        let num = btn.indexOf(position);
    added[num].style.display="block";  
        counter_number = $('#counter').attr('value');
        counter_number++;
        $('#counter').attr('value', counter_number);
       
    }
    

    function inc(i) {
        let inc = document.getElementsByClassName('inc');
        let units = document.getElementsByClassName('unit_value');
        inc = [].slice.call(inc);
        inc.indexOf(i);
        let num = inc.indexOf(i);
        let number = units[num].getAttribute('value');
        number++;
        units[num].setAttribute('value', number);
    
    }
    function dec(i) {
        let dec = document.getElementsByClassName('dec');
        let units = document.getElementsByClassName('unit_value');
        dec = [].slice.call(dec);
        dec.indexOf(i);
        let num = dec.indexOf(i);
        let number = units[num].getAttribute('value');
        number--;
        if (number <= 0) {
            number = 1;
        }
        units[num].setAttribute('value', number);
    }
    
    
    
     