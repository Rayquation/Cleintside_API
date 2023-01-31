const WEBurl="https://api.agify.io/?name=";

async function getAgifyApi(){
    const userInput = document.getElementById("userInput").value;
    const response = await fetch(WEBurl+userInput).then(response => response.json());

    console.log(response);

    const user= response;
    let age = user.age;
    let count = user.count;
    let name = user.name;
    
    document.getElementById("age").innerText = "Age: "+age;
    document.getElementById("count").innerHTML = "Count: "+count;
    document.getElementById("name").innerHTML = "Name: "+name;
}
