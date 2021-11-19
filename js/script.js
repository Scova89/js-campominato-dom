

document.getElementById('play').addEventListener('click', function(){
    play();
})

function play(){
   document.querySelector('.container').innerHTML = ''; 
   const livSelezionato = parseInt(document.getElementById('level').value);

   let boxNumber;
   let boxForSide;

   const numBombe = 16;

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


   const bombs = genBombe();
   console.log(bombs);

   

   function genBombe(){
      const arrayBombe = [];
      while(arrayBombe.length < numBombe){
         const numRandom = getRndInteger(1,boxNumber);
         if(!arrayBombe.includes(numRandom)){
            arrayBombe.push(numRandom);
         }
      }
      return arrayBombe;
   }

   function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
   }
   

   

   boxForSide = Math.sqrt(boxNumber);

   addBoxes();

   function addBoxes(){
        const size = `calc(100% / ${boxForSide})`;
        const container = document.querySelector('.container');
        

        for(let i = 1; i <= boxNumber; i++){
            const nodo = document.createElement('div');
            nodo.addEventListener('click', function(){
               this.classList.add('cliccato-true');
            })
            nodo.className ='box';
            nodo.innerHTML = i;
            nodo.style.width = size;
            nodo.style.height = size;

            container.appendChild(nodo);
              
        }
   }

   
   
}






