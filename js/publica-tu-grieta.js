var callback = function (error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
    }
};

function postAppData(token) {

    var mas20porciento = document.getElementById('mas20porciento').value;
    var comentario = document.getElementById('comentario').value;
    var desplomes = document.getElementById('desplomes').value;
    var desprendimiento = document.getElementById('desprendimiento').value;
    var golpeteo = document.getElementById('golpeteo').value;
    var hundimiento = document.getElementById('hundimiento').value;

    var pisosHuecos = document.getElementById('pisosHuecos').value;
    var vibraciones = document.getElementById('vibraciones').value;
    var latitude = document.getElementById('latitude').value;

    var diagonales = document.getElementById('diagonales').value;
    var paralelas = document.getElementById('paralelas').value;
    var tipo = document.getElementById('tipo').value;
    var ubicacion = document.getElementById('ubicacion').value;

    var grieta = {
        "mas20porciento": mas20porciento,
        "comentario": "Hola",
        "desplomes": true,
        "desprendimiento": true,
        "golpeteo": true,
        "hundimiento": true,
        "pisosHuecos": true,
        "vibraciones": true,
        "latitude": 3.4,
        "longitude": 3.4,
        "diagonales": true,
        "paralelas": true,
        "tipo": 0,
        "ubicacion": 0
    };

    var data = JSON.stringify(grieta);


    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 1 || this.readyState === 2 || this.readyState === 3) {
            console.log("success");
        }

        if (this.readyState === 4) {
            console.log(this.status)
            if(this.status === 204){
                console.log("success");
            } else{
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