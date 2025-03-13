let userLabel = document.querySelector("#user-label");

document.querySelector("#user").addEventListener("input", (event)=>{
    if (event.target.validity.patternMismatch) {
        userLabel.style.color = "red"; 
        event.target.setCustomValidity("El usuario tiene que tener un minimo de 6 caracteres y la primera letra mayuscula.");
    } else {
        event.target.setCustomValidity("");
        userLabel.style.color = "black"; 
    }
});

let hobbies_number = document.querySelector("#hobbies-number");

hobbies_number.addEventListener("input",(event)=>{
    if (event.target.validity.patternMismatch) {
        event.target.setCustomValidity("Debes elegir un número entre 2 y 4");
    }
    else {
        event.target.setCustomValidity("");
    }
});

let aficiones = document.querySelectorAll(".hobbies");

aficiones.forEach(chk => {
    chk.addEventListener("change", (event)=> {
        let numeroAficiones = Number(hobbies_number.value);
        if (cuantasActivadas() == numeroAficiones) {
            console.log(event.target.checked);
            desactivarCheckboxs();
        } 
    })
})

function desactivarCheckboxs() {
    aficiones.forEach(chk => {
        if (!chk.checked) {
            chk.disabled = true;
        }
    });
}

function cuantasActivadas() {
    let numeroAficiones = 0;
    aficiones.forEach(chk => {
        if (chk.checked) {
            numeroAficiones++;
        }
    })
    console.log(numeroAficiones)
    return numeroAficiones;
};