let string="";
let buttonsg= document.querySelectorAll('.button-g');
let buttonso= document.querySelectorAll('.button-o');
let buttonsd= document.querySelectorAll('.button-d');

Array.from(buttonsg).forEach(button=>{
    button.addEventListener('click' ,(e)=>{
        if(e.target.innerHTML == '='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else{
            console.log(e.target)
                string=string+e.target.innerHTML;
                document.querySelector('input').value=string;
        }
    })
})
Array.from(buttonso).forEach(button=>{
    button.addEventListener('click' ,(e)=>{
            console.log(e.target)
                string=string+e.target.innerHTML;
                document.querySelector('input').value=string;
    })
})
Array.from(buttonsd).forEach(button=>{
    button.addEventListener('click' ,(e)=>{
       
        if(e.target.innerHTML== 'AC') {
            string=""
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML== 'DE'){
            string=string.slice(0,-1);;
            document.querySelector('input').value=string;
        }
        else{
            console.log(e.target)
                string=string+e.target.innerHTML;
                document.querySelector('input').value=string;
        }
        
    })
})
