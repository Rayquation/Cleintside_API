const WEBurl="https://api.nationalize.io/?name=";

async function getNationalitetAPI(){
    document.getElementById("countrys").innerHTML="";
    const userInput = document.getElementById("userInput").value;
    const response = await fetch(WEBurl+userInput).then(response => response.json());
    console.log(response);

    const user= response;
    let name = user.name;
    
    document.getElementById("name").innerHTML = "Name: "+name;
    for(const element in user){
        console.log(element)
        if(Array.isArray(user[element])){
            user[element].forEach(element => {
                for(const element2 in element){
                    var newP=document.createElement("p");
                    newP.className="country";
                    newP.innerText=`${element2}: ${element[element2]}`
                    document.getElementById("countrys").appendChild(newP);
                }
                document.getElementById("countrys").insertAdjacentHTML("beforeend","<hr>");
            });
        }

    }
}
