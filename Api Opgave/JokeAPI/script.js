const WEBurl="https://official-joke-api.appspot.com/random_joke";

async function getJokeAPI(){
    const response = await fetch(WEBurl).then(response => response.json());

    const user= response;
    let type = user.type;
    let setup = user.setup;
    let punchline = user.punchline;
    let id = user.id;
    
    document.getElementById("type").innerText = "Type: "+type;
    document.getElementById("setup").innerHTML = "Setup: "+setup;
    document.getElementById("punchline").innerHTML = "Punchline: "+punchline;
    document.getElementById("id").innerHTML = "Id: "+id;
}
