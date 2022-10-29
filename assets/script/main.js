const griglia = document.getElementById('griglia')
let button = document.getElementById('button')
let difficulty = document.getElementById('difficulty')
button.addEventListener('click', game)

function creazioneBox(){
    div = document.createElement('div');
    div.classList.add('square');
    div.style.width = "calc(100%/"+difficulty.value+")";
    return div;
    //var aggettivo = "scemo";
    //var frase = "daniel è " + aggettivo + "!";
}


console.log( creazioneBox() )
function game(){
var squareToCreate = difficulty.value*difficulty.value;
for (let i = 1; i <= squareToCreate; i++){
    
    let element = creazioneBox();
    console.log(element)

    element.addEventListener('click', function() {
    console.log(this)
    this.classList.toggle('active')
        
    })

    griglia.append (element)
    element.innerHTML += `${i}`

}
}