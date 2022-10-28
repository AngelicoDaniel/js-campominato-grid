const griglia = document.getElementById('griglia')
console.log(griglia)

function creazioneBox(){
    const div = document.createElement('div')
    div.classList.add('square')
    return div;
}

console.log( creazioneBox() )

for (let i = 0; i < 100; i++){

    let element = creazioneBox();
    console.log(element)
    element.addEventListener('click', function() {
        console.log(this)
        this.classList.toggle('active')
        
    })

    griglia.append (element)
}