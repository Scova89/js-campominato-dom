const container = document.querySelector('.container');


// soluzione con innerHTML
// for(i = 1; i <= 100; i++){
//     items += `
//     <div class="box">${i}</div>
//     `;
// }

// console.log(items);

// container.innerHTML = items;


// soluzione con createElement

// creo la funzione universale per aggiungere i quadrati
function addBox(){
    const nodo = document.createElement('div');
    nodo.className ='box easy';
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


const radioButton = document.querySelector('.check');
radioButton.addEventListener('click', function(){
  alert(radioButton.value);
})
console.log(radioButton)