// const signinBtn=document.querySelector('.signinBtn');
// const signupBtn=document.querySelector('.signupBtn');
// const formBx=document.querySelector('.formBx');
// const body_ele=document.querySelector('body');
const regBtn=document.querySelector('#regBtn');

let reg_password=document.getElementById("password_reg").value;
let reg_username=document.getElementById("username_reg").value;
let reg_email=document.getElementById("email_reg").value;
let re_reg_password=document.getElementById("re_password_reg").value;
const logBtn=document.querySelector('#logBtn');
const signinbtn=document.getElementById('signinbtn');
let log_password=document.getElementById("password_log");
let log_username=document.getElementById("username_log");
const resultBtn=document.querySelector('#result');
var data_register=[];
var user_obj={};
// signupBtn.onclick=function(){
//     formBx.classList.add('active');
//     // body_ele.classList.add('active')
// }
// signinBtn.onclick=function(){
//     formBx.classList.remove('active')
//     // body_ele.classList.remove('active')
// }

regBtn.addEventListener('submit', (e)=> {
    e.preventDefault();
})
regBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    
if(""+reg_password == ""+re_reg_password ){

    localStorage.setItem('reg_username',document.getElementById("username_reg").value);
    localStorage.setItem('reg_password',document.getElementById("password_reg").value);
    localStorage.setItem('reg_email',document.getElementById("email_reg").value );
    document.querySelector(".products #sayhello .h5").innerHTML="hello ya "+localStorage.getItem('reg_username');


  }});
//     // code to excute
let num=[];
let pricearr=[];
let sum=0;
signinbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(localStorage.getItem('reg_username')){
        log_username.value=localStorage.getItem('reg_username');
        log_password.value=localStorage.getItem('reg_password');
    }else{
        localStorage.setItem('reg_username',document.getElementById("username_log").value);
        localStorage.setItem('reg_password',document.getElementById("password_log").value);
      
    }
  
    document.querySelector(".products #sayhello .h5").innerHTML="hello ya "+localStorage.getItem('reg_username');;

});
let list = document.querySelectorAll('.list .item');
list.forEach(item => {
    item.addEventListener('click', function(event){
        if(event.target.classList.contains('add')){
            var itemNew = item.cloneNode(true);
            let checkIsset  = false;

            let listCart = document.querySelectorAll('.cart .item');
            listCart.forEach(cart =>{
                if(cart.getAttribute('data-key') == itemNew.getAttribute('data-key')){
                    checkIsset = true;
                    cart.classList.add('danger');
                    setTimeout(function(){
                        cart.classList.remove('danger');
                    },1000)
                }
            })
            if(checkIsset == false){
                document.querySelector('.listCart').appendChild(itemNew);
                num.push(parseInt(itemNew.querySelector('.count').value));
                itemNew.querySelector('.count').setAttribute('readonly','readonly')
                pricearr.push(parseInt(document.querySelector('.price').innerHTML))
            }

        }
    })
})
function Remove($key){
    let listCart = document.querySelectorAll('.cart .item');
    listCart.forEach(item => {
        if(item.getAttribute('data-key') == $key){
            item.remove();
           num =num.splice(num.indexOf(item.getAttribute('data-key'))) ;
           pricearr=pricearr.splice(num.indexOf(item.getAttribute('data-key')))
            return;
        }
    })
}


resultBtn.addEventListener('click',(e)=>{
    sum=0;
    e.preventDefault();
    // console.log(document.querySelector('.price').innerHTML);
    // console.log(typeof document.querySelector('.price').innerHTML);
  for(let i=0; i<num.length;i++){
    sum+=(num[i]*pricearr[i])
 
   
  }
    
  document.getElementById("res").innerHTML=sum 


});