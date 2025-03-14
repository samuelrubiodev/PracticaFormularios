let userLabel = document.querySelector("#user-label");
let hobbies_number = document.querySelector("#hobbies-number");
let aficiones = document.querySelectorAll(".hobbies");
let botonSubmit = document.querySelector("#boton-submit");
let mensajeAficiones = document.querySelector(".mensaje-aficiones");
let fieldSet = document.querySelector(".fieldset");

document.querySelector("#user").addEventListener("input", (event)=>{
    if (event.target.validity.patternMismatch) {
        userLabel.style.color = "red"; 
        event.target.setCustomValidity("El usuario tiene que tener un minimo de 6 caracteres y la primera letra mayuscula.");
    } else {
        event.target.setCustomValidity("");
        userLabel.style.color = "black"; 
    }
});

hobbies_number.addEventListener("input",(event)=>{
    if (event.target.validity.patternMismatch) {
        event.target.setCustomValidity("Debes elegir un número entre 2 y 4");
    }
    else {
        event.target.setCustomValidity("");
    }
});

aficiones.forEach(chk => {
    let ultimoActivadas = 0;
    let activado = false;
    chk.addEventListener("change", ()=> {
        let numeroAficiones = Number(hobbies_number.value);
        
        if (cuantasActivadas() == numeroAficiones) {
            fieldSet.style.border = "0.1em solid black";
            mensajeAficiones.textContent = "";
            desactivarCheckboxes();
            ultimoActivadas = cuantasActivadas();
            activado = true;
        } else if (activado && cuantasActivadas() != ultimoActivadas) {
            activarCheckboxes();
            activado = false;
            ultimoActivadas = 0;
        }

        if (cuantasActivadas() != numeroAficiones) {
            fieldSet.style.border = "0.3em dashed red";
        }
    })
});

botonSubmit.addEventListener("click", (event)=>{
    let numeroAficiones = Number(hobbies_number.value);

    if (cuantasActivadas() < numeroAficiones) {
        event.preventDefault();
        mensajeAficiones.textContent = "Debes seleccionar " + numeroAficiones + " aficiones";
        fieldSet.style.border = "0.3em dashed red";
    }
});

function activarCheckboxes() {
    aficiones.forEach(chk => {
        if (chk.disabled) {
            chk.disabled = false;
        }
    });
};

function desactivarCheckboxes() {
    aficiones.forEach(chk => {
        if (!chk.checked) {
            chk.disabled = true;
        }
    });
};

function cuantasActivadas() {
    let numeroAficiones = 0;
    aficiones.forEach(chk => {
        if (chk.checked) {
            numeroAficiones++;
        }
    });
    return numeroAficiones;
};