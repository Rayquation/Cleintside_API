const WEBurl="https://api.genderize.io/?name=";

async function getGenderAPI(){
    const userInput = document.getElementById("userInput").value;
    const response = await fetch(WEBurl+userInput).then(response => response.json());

    console.log(response);

    const user= response;
    let gender = user.gender;
    let count = user.count;
    let name = user.name;
    let prob = user.probability;
    
    document.getElementById("gender").innerText = "Gender: "+gender;
    document.getElementById("count").innerHTML = "Count: "+count;
    document.getElementById("name").innerHTML = "Name: "+name;
    document.getElementById("prob").innerHTML = "Probability: "+(prob*100)+"%";
}
