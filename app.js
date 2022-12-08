//1

function text() {
    if (document.querySelector('h1').innerHTML === 'Text') {
        document.querySelector('h1').innerHTML = ''
    }else{
        document.querySelector('h1').innerHTML = 'Text'
    }
}

//2


document.body.insertAdjacentHTML(
    "afterend", 
    "<div id='card'><h2>Vaniko</h2><a href='#'>Go to profile</a><div>");


//3

document.body.style.backgroundColor = 'red'