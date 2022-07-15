
// WHILE // 
let edad=5;
while(edad<5){
    console.log(edad);
    edad++;
}

// DO WHILE // 
let años=0
do{
  console.log(años);
  años++;  
}while(años<5);

// FOR // 

for (let i =0;i<=10;i++){
  if (i%2!=0){
    console.log(i);
    
  }
  
}

// LABELS  -- ETIQUETAS//
inicio:
for(let i=0; i<=20;i++){
  if (i%2==0){
    console.log(i);
    continue inicio;
  }
  
}