function dontClick() {
            
    switch (this.innerHTML) {
        case "don't click this grrrrr!": 
            this.innerHTML = "I told you not to click this grrrr!"
        break;
        
        case "I told you not to click this grrrr!": 
            this.innerHTML = "really stop clicking this omg-"
        break;
        
        case "really stop clicking this omg-": 
            this.innerHTML = "please stop it's not to late"
        break;
        
        case "please stop it's not to late": 
            this.innerHTML = "ok now it really is to late grrrrr!!!!!!"
        break;
        
        case "don't click this grrrrr!": 
            this.innerHTML = "website: *stabs you*"
        break;
        
        default: 
            this.innerHTML = "don't click this grrrrr!"
        break;
    }
}


function getModrinthProjects(username){
    fetch("https://api.modrinth.com/v2/user/"+ username +"/projects")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            a = data.length
            while (a != 0) {
                document.getElementById("modrinthProjects").innerHTML += data[a];
                a = a - 1 
            }
        })
        .catch((error) =>
            console.error("Unable to fetch data:", error));
}



getModrinthProjects("mr0gummy")