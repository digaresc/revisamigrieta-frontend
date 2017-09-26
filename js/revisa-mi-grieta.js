var callback = function (error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
    }
};

function postAppData(token,id) {


    var comentario = document.getElementById('comentario').value;

    var diagonalesLosa = document.grietaForm.diagonales.value === "SI"  ? true : false;
    var diagonalesPiso = document.grietaForm.diagonales.value === "SI"  ? true : false;
    var paralelasPiso = document.grietaForm.paralelas.value === "SI"  ? true : false;
    var peligroInminente = document.grietaForm.peligroInminente.value === "SI"  ? true : false;


    var revision = {
        "comentarios": comentario,
        "diagonalesLosa": diagonalesLosa,
        "diagonalesPiso": diagonalesPiso,
        "paralelasPiso": paralelasPiso,
        "peligroInminente": peligroInminente
    };
    console.log(revision);

    var data = JSON.stringify(revision);

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

    xhr.open("POST", BASE_URL + "/grietas/" + id + "/revisiones");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("authorization", "Bearer " + token);
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
}

function postRevisionNueva() {
    firebase.auth().currentUser.getToken().then(function (token) {
        var el = document.querySelector('.card');

        postAppData(token,el.dataset.id);
    });

}