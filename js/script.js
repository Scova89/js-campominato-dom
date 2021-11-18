

document.getElementById('play').addEventListener('click', function(){
    play();
})

function play(){
   document.querySelector('.container').innerHTML = ''; 
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

   addBoxes ();

   function addBoxes(){
        const size = `calc(100% / ${boxForSide})`;
        const container = document.querySelector('.container');
        

        for(let i = 1; i <= boxNumber; i++){
            const nodo = document.createElement('div');
            nodo.className ='box';
            nodo.innerHTML = i;
            nodo.style.width = size;
            nodo.style.height = size;

            container.appendChild(nodo);
              
        }
   }
   
}






