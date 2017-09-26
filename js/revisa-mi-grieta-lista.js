function loadGrietas() {

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var d = JSON.parse(this.responseText);
            if (this.status === 404 && d.error.message === "Required user profile is missing.") {
                $("#con-close-modal").modal();
            } else {
                if (Object.getOwnPropertyNames(d).length > 0) {

                    grietasJsonToHTML(d);

                }

            }

        }
    });

    xhr.open("GET", BASE_URL + "/grietas/pendientes");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send();


}

function grietasJsonToHTML(json){
    console.log(JSON.stringify(json));

for( var i=0; i < json['items'].length; i++ ){
    var imagenGrietaThumb = json['items'][i].files[0].split(".")[0] + "-thumb.JPG";
        var strVar = "";
        strVar += "<div class=\"col-lg-12 col-md-12 mb-12\">";
        strVar += "                    <div class=\"card h-100\" data-id=\""+ json['items'][i].id +"\" >";
        strVar += "                        <a href=\"#\"><img class=\"card-img-top\" src=\"https:\/\/storage.googleapis.com\/revisamigrieta-images\/" + imagenGrietaThumb +"\" alt=\"\"><\/a>";
        strVar += "                        <div class=\"card-body\">";
        strVar += "                            <h4 class=\"card-title\">";
        strVar += "                                <a href=\"grieta.html?id=" + json['items'][i].id +" \"> " + json['items'][i].tipo +"<\/a>";
        strVar += "                            <\/h4>";
        strVar += "                            <h5>"  + json['items'][i].ubicacion + "<\/h5>";
        strVar += "                            <p class=\"card-text\">" + json['items'][i].comentario;
        strVar += "                                <\/p>";
        strVar += "                        <\/div>";
        strVar += "                        <div class=\"card-footer\">";
        strVar += "                            <span>Peligro<\/span>";
        strVar += "                            <small class=\"text-muted\">&#9733; &#9733; &#9733; &#9733; &#9734;<\/small>";
        strVar += "                        <\/div>";
        strVar += "                    <\/div>";
        strVar += "                <\/div>";

        document.getElementById('revisa-grietas-listado').innerHTML = document.getElementById('revisa-grietas-listado').innerHTML + strVar;
    }



}

window.onload = function () {
    initApp();
    loadGrietas();
}