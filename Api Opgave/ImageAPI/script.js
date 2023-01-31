const WEBurl="https://dog.ceo/api/breeds/image/random";

async function ImageAPI(){
    const response = await fetch(WEBurl).then(response => response.json());

    console.log(response);

    const user= response;
    let message = user.message;
    let status = user.status;
    
    document.getElementById("message").src = message;
    document.getElementById("status").innerHTML = "Status: "+status;
}

ImageAPI();