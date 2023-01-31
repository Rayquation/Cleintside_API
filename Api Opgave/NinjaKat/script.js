const WEBurl="https://catfact.ninja/fact";

async function getFact(){
    const response = await fetch(WEBurl).then(response => response.json());

    console.log(response);

    const facts= response;
    let fact = facts.fact;
    let length = facts.length;
    
    document.getElementById("head").innerText = "Fact: "+fact;
    document.getElementById("length").innerHTML = "Length: "+length;
}

getFact();