const container = document.querySelector('.container');

document.getElementById('play').addEventListener('click', function(){
    play();
})

function play(){
   const livSelezionato = document.getElementById('level');
}

function addBox(){
    const nodo = document.createElement('div');
    nodo.className ='box';
    return nodo;
}

for(let i = 1; i <= 100; i++){
    const divBox = addBox();
    divBox.innerHTML = i;
    container.appendChild(divBox);
    divBox.addEventListener('click', function(){
      divBox.classList.add('cliccato-true');
      console.log('click');
    });
    
}





// ***** soluzione col radio button
// const radioButton = document.querySelector('.check');
// radioButton.addEventListener('click', function(){
//   alert(radioButton.value);
// })
// console.log(radioButton)