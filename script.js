const jokeText = document.querySelector('p')
const newjokebtn = document.querySelector('button')
const tweetbtn = document.querySelector('a')
newjokebtn.addEventListener('click' , getJoke)

function getJoke(){
    fetch('https://icanhazdadjoke.com/' , {
    headers : {
        'Accept' : 'application/json'
    }
    }).then(function(response){
        return response.json()
    }).then(function(data){
        jokeText.innerText = data.joke
        tweetbtn.setAttribute('href' , `https://twitter.com/share?text=${data.joke}`)
     
    }).catch(function(error){
        jokeText.innerText = "sorry, some error occured"
        tweetbtn.removeAttribute('href')
        console.log(error)
    })
}

