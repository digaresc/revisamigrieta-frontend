var callback = function (error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
    }
};

function postAppData(token) {

    var mas20porciento =  document.grietaForm.ubicacion.value === "SI"  ? true : false;
    var comentario = document.getElementById('comentario').value;
    var desplomes =  document.grietaForm.desplomes.value === "SI"  ? true : false;;
    var desprendimiento =  document.grietaForm.desprendimiento.value === "SI"  ? true : false;;
    var golpeteo =  document.grietaForm.golpeteo.value === "SI"  ? true : false;;
    var hundimiento =  document.grietaForm.hundimiento.value === "SI"  ? true : false;;

    var pisosHuecos =  document.grietaForm.pisosHuecos.value === "SI"  ? true : false;;
    var vibraciones =  document.grietaForm.vibraciones.value === "SI"  ? true : false;;
    var latitude = 32.1;
    var longitude = 2.3;


    var diagonales = document.grietaForm.diagonales.value === "SI"  ? true : false;;
    var paralelas = document.grietaForm.paralelas.value === "SI"  ? true : false;;
    var tipo = document.grietaForm.tipo.value === "SI"  ? 1 : 0;;
    var ubicacion = document.grietaForm.ubicacion.value === "SI"  ? 1 : 0;;

    var grieta = {
        "mas20porciento": mas20porciento,
        "comentario": "comentario",
        "desplomes": desplomes,
        "desprendimiento": desprendimiento,
        "golpeteo": golpeteo,
        "hundimiento": hundimiento,
        "pisosHuecos": pisosHuecos,
        "vibraciones": vibraciones,
        "latitude": latitude,
        "longitude": longitude,
        "diagonales": diagonales,
        "paralelas": paralelas,
        "tipo": tipo,
        "ubicacion": ubicacion
    };
    console.log(grieta);

    var data = JSON.stringify(grieta);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 1 || this.readyState === 2 || this.readyState === 3) {
            console.log("success");
        }

        if (this.readyState === 4) {
            console.log(this.status)
            if (this.status === 204) {
                console.log("success");
            } else {
                console.log("fail");
            }


        }


    });

    xhr.open("POST", BASE_URL + "/grietas");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("authorization", "Bearer " + token);
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
}

function postGrietaNueva() {
    firebase.auth().currentUser.getToken().then(function (token) {
        postAppData(token);
    });

}