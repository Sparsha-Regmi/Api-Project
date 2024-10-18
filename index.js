let newJokesBtn=document.getElementById('new-joke-btn')
newJokesBtn.addEventListener('click',fetchJoke())


function fetchJoke(){
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response=>response.json())
    .then(values=>{
        document.querySelector('#joke-setup').innerText=values.setup
        document.querySelector('#joke-punchsine').innerText=values.punchline
    })
    .catch(errMsg=>{
        console.error("error processing the message",errMsg)
    })
}   

