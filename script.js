let button = document.getElementById('button');
let form = document.getElementById('form');
let message = document.getElementById('message');
let link = document.getElementById('link');

const secretNombre = Math.floor(Math.random() * 100);
let attemps = 3;
button.onclick = function(){
    
    const input= document.getElementById('input')
    if (input.value != ""){

        if (input.value < secretNombre){
            message.innerText = 'Le nombre est plus grand que ' + input.value +'';
            message.style.color = "#999";
        }else if (input.value > secretNombre) {
            message.innerText = 'Le nombre est plus petit que ' + input.value +'';
            message.style.color = "#999";
        }

        if (attemps === 0){
            message.innerText = 'Vous avez perdu, il fallait trouver ' + secretNombre +'';
            message.style.color = "red";
            form.style.display = 'none';
            link.style.display = 'flex';
        }
        attemps--;
         
        if (input.value == secretNombre){
            message.innerText = 'Bravo,vous avez trouver le nombre qui est ' + secretNombre + '!';
            message.style.color = "green";
            form.style.display = 'none';
            link.style.display = 'flex';
        }

    }else{
        message.innerText = 'Le champ est vide! ';
        message.style.color = "red";
    }
    
}