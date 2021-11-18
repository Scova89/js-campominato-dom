const container = document.querySelector('.container');

document.getElementById('play').addEventListener('click', function(){
    play();
})

function play(){
   const livSelezionato = parseInt(document.getElementById('level').value);

   let boxNumber;
   let boxForSide;
   
   switch(livSelezionato){
        case 1:
           boxNumber = 100;
           break;
        case 2:
           boxNumber = 81;
           break;
        case 3:
            boxNumber = 49;
   }

   boxForSide = Math.sqrt(boxNumber);

   const size = `calc(100% / ${boxForSide})`;
   
   let items ='';
   for(let i = 1; i <= boxNumber; i++){
       items +=`
       <div class="box" style="width:${size}"; style="height:${size}">${i}</div>`;
   }
   
   const quadrati = document.querySelector('.container');
   quadrati.innerHTML = items;
}






// function addBox(){
//     const nodo = document.createElement('div');
//     nodo.className ='box';
//     return nodo;
// }

// for(let i = 1; i <= 100; i++){
//     const divBox = addBox();
//     divBox.innerHTML = i;
//     container.appendChild(divBox);
//     divBox.addEventListener('click', function(){
//       divBox.classList.add('cliccato-true');
//       console.log('click');
//     });
    
// }





// ***** soluzione col radio button
// const radioButton = document.querySelector('.check');
// radioButton.addEventListener('click', function(){
//   alert(radioButton.value);
// })
// console.log(radioButton)