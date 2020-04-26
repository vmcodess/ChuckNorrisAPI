const fetchJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then((res) => {
        res.json()
        .then(data => {
            console.log(data)
    
            // 1. Display the quote
            document.querySelector(".quote").innerHTML = data.value;
            
            // 2. Display IMG
            let image = document.querySelector(".img");
            image.setAttribute("src", data.icon_url);
    
    
    
        })
    })
}


// button addEventListener
let button = document.querySelector(".button")
button.addEventListener("click", fetchJoke);