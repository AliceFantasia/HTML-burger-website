function updateNav(){
    if(localStorage.getItem("currentSignedIn") && localStorage.getItem("currentSignedIn") != ""){
        if(JSON.parse(localStorage.getItem("currentSignedIn")).role == "admin"){
            let navBar = document.getElementsByTagName("nav");
            navBar[0].innerHTML += `
                <a href="/admin_user">User DB</a>
                <a href="/admin_product">Product DB</a>
            `;
        }
    }
}