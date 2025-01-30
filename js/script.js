const textBox = document.getElementById('textBox')


document.addEventListener('keyup' , function(event){
    

    appendValueToDom(event)

    let keyCode = event.key.toUpperCase()
    let mainElem = document.getElementById(keyCode)
   
        
        mainElem.classList.add('hit')
        
    
        mainElem.addEventListener('animationend', function(){
            mainElem.classList.remove('hit')
        })
})

function appendValueToDom(event){
    if(event.code === 'Backspace'){
        textBox.innerHTML = textBox.innerHTML.slice(0,-1)
        return
    }
    textBox.innerHTML += event.key
}











