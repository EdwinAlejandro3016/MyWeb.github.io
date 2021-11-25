const frase = document.querySelector('#animation');
const form = document.querySelector('.form');
let fraseCOMPLETA =  "Edwin Albarracin"; 
let fraseDESTRUCTURADA = fraseCOMPLETA.split(''); //la llevo a array

let fraseCOMPLETA2 =  "Web Developer";
let fraseDESTRUCTURADA2 = fraseCOMPLETA2.split(''); //la llevo array

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputs =  document.querySelectorAll('form .box');
    let errores = [];

    const addFocus = (obj,msg)=>{ 
        obj.addEventListener('focus',(e)=>{
            e.target.placeholder = msg;
            obj.style.border = 'none';
        })
    }

    const addError = (obj,msg)=>{
        obj.placeholder = msg;
        obj.style.border = '2px solid #f9ca24';
        errores.push({error: msg});
    }

    if(!form.name.value){
       addError(form.name,'Write a name');
       addFocus(form.name,'name');
    }

    if(!form.email.value){
        addError(form.email,'Write a email');
        addFocus(form.email,'email');
    }
    if(!form.message.value){
        addError(form.message,'Write a message');
        addFocus(form.message,'message');
    }

    if(!errores.length > 0){
        inputs.forEach(input=>{
            input.value = '';
        })
        alert('Message Send Succesfuly');
    }
})

const animation = ()=>{
    let posicion = 0;
    let fraseTOTAL = "";
    let letraGuardada1 = "";
    let bandera = false;
    let vuelta = 0;

    const tiempo = setInterval(()=>{
        
        const reset = ()=>{
            posicion = 0;
            bandera= false;
            fraseTOTAL = "";
            vuelta++;
        }

        if (vuelta%2) {
            if(posicion === fraseCOMPLETA2.length || bandera === true){
                bandera = true;
                fraseDESTRUCTURADA2.pop();
                fraseDESTRUCTURADA2 = fraseDESTRUCTURADA2.join('');
                frase.textContent = fraseDESTRUCTURADA2;
                fraseDESTRUCTURADA2 = fraseDESTRUCTURADA2.split('');
                if(fraseDESTRUCTURADA2.length === 0){
                    fraseDESTRUCTURADA2 = fraseCOMPLETA2.split('');
                    reset();
                }
    
             }else{
                letraGuardada1 = fraseDESTRUCTURADA2[posicion];
                fraseTOTAL = fraseTOTAL + letraGuardada1;
                frase.textContent = fraseTOTAL;
                posicion++;
                if(posicion === fraseCOMPLETA2.length){
                    posicion = 0;
                    bandera = true;
                }
            }
        }else{
                if(posicion === fraseCOMPLETA.length || bandera === true){
                    bandera = true;
                    fraseDESTRUCTURADA.pop();
                    fraseDESTRUCTURADA = fraseDESTRUCTURADA.join('');
                    frase.textContent = fraseDESTRUCTURADA;
                    fraseDESTRUCTURADA = fraseDESTRUCTURADA.split('');
                    if(fraseDESTRUCTURADA.length === 0){
                        fraseDESTRUCTURADA = fraseCOMPLETA.split('');
                        reset();
                    }
        
                 }else{
                    letraGuardada1 = fraseDESTRUCTURADA[posicion];
                    fraseTOTAL = fraseTOTAL + letraGuardada1;
                    frase.textContent = fraseTOTAL;
                    posicion++;
                }
        }
    },200)
}

self.addEventListener('load',(e)=>{
    setTimeout(()=>{
        animation();
    },1000)
});

$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    });

    

    // smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:  $($(this).attr('href')).offset().top,

        },
        300, 
        'linear'
        );

    });

});



