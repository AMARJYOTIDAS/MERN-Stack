

// let URL = "https://jsonplaceholder.typicode.com/users"

function getUser(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json ())// convert response to json
    .then(data =>{
        let list= document.getElementById("userlist")
        list.innerText ="";
        data.forEach(user => {
            
            let li  = document.createElement("li");
            li.textContent = user.name;
            list.appendChild(li);
        });
    })
    .catch(error =>{
     console.log("error",err)
    });
    
}

