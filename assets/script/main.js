const griglia = document.getElementById('griglia')
let button = document.getElementById('button')
button.addEventListener('click', game)

function creazioneBox(){
    div = document.createElement('div')
    div.classList.add('square')  
    return div;
}

console.log( creazioneBox() )
function game(){
for (let i = 0; i < 100; i++){
    
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