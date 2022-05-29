window.onload = function(){
    canvas=document.getElementById("canvas")
    ctx = canvas.getContext("2d")

    //variáveis

    snake = []
    positionX = 10
    positionY = 10
    foodX = 15
    fooxY = 15
    velX = 0
    velY = 0
    grid = 20
    tam = 3

    //Chamada da função jogo a cada 100ms
    setInterval(jogo,100)
}

function jogo(){
    //Configuração da tela
    ctx.fillStyle = "#2980B9"
    //Distância da borda horizontal, distância da borda vertical, largura, altura
    ctx.fillRect(0,0,canvas.width, canvas.height)

    //Posicionando a cobra
    snake.push({x: positionX, y: positionY})
    console.log(snake[0])

    //Configuração da Cobra
    ctx.fillStyle = "#00f102"
    for(let i=0; i<snake.length; i++){
        ctx.fillRect(snake[i].x*grid, snake[i].y*grid, grid-1, grid-1)
    }
}