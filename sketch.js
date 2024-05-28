function setup() { //é uma função de preparo (setup)
  createCanvas(600, 600); //Canvas é como se fosse uma tela/quadro de pintura
  background("gray"); // posso colocar valores ou escrever a cor em inglês c/""
}

function draw() { // aqui é a fase de desenhar (draw)
  
  
  stroke("blue"); //borda do retangulo
  fill("red"); //preenchimento
  
  if(mouseIsPressed){
    rect(mouseX, mouseY, 20, 35);// posição, posição, l, a
  }
  
  
  
}

