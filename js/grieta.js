function loadGrietas(grietaId) {

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var d = JSON.parse(this.responseText);
            if (this.status === 404 && d.error.message === "Required user profile is missing.") {
                $("#con-close-modal").modal();
            } else {
                if (Object.getOwnPropertyNames(d).length > 0) {
                    console.log(d);
                    grietasJsonToHTML(d);

                }

            }

        }
    });

    xhr.open("GET", BASE_URL + "/grietas/" + grietaId );
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send();


}

function grietasJsonToHTML(json) {
    console.log(JSON.stringify(json));

    for (var i = 0; i < json['files'].length; i++) {
        var imagenGrietaThumb = json['files'][i].split(".")[0] + "-thumb.JPG";
        var activeSlide = i == 0 ? "active": "";
        var strVar = "";
        strVar += "<div class=\"carousel-item "+ activeSlide +"\">";
        strVar += "                            <img class=\"d-block img-fluid\" src=\"https:\/\/storage.googleapis.com\/revisamigrieta-images\/" +  imagenGrietaThumb + "\" alt=\"First slide\">";
        strVar += "                        <\/div>";

        document.getElementById('carousel-item').innerHTML = document.getElementById('carousel-item').innerHTML + strVar;
    }


}


function grietasRevisionesJsonToHTML(json) {
    console.log(JSON.stringify(json));

    for (var i = 0; i < json['items'].length; i++) {
        var comentarios = json['items'][i].comentarios;


        var strVar="";
        strVar += "<p>" + comentarios + "<\/p>";
        strVar += "                    <small class=\"text-muted\">Revisión por: Anonymous el 3\/1\/17<\/small>";
        strVar += "                    <hr>";


        document.getElementById('lista-revisiones').innerHTML = document.getElementById('lista-revisiones').innerHTML + strVar;
    }


}


function getAllUrlParams(url) {
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
    var obj = {};
    if (queryString) {

        queryString = queryString.split('#')[0];
        var arr = queryString.split('&');

        for (var i = 0; i < arr.length; i++) {
            var a = arr[i].split('=');
            var paramNum = undefined;
            var paramName = a[0].replace(/\[\d*\]/, function (v) {
                paramNum = v.slice(1, -1);
                return '';
            });

            var paramValue = typeof(a[1]) === 'undefined' ? true : a[1];
            paramName = paramName.toLowerCase();
            paramValue = paramValue.toLowerCase();

            if (obj[paramName]) {
                if (typeof obj[paramName] === 'string') {
                    obj[paramName] = [obj[paramName]];
                }
                if (typeof paramNum === 'undefined') {
                    obj[paramName].push(paramValue);
                }
                else {
                    obj[paramName][paramNum] = paramValue;
                }
            }
            else {
                obj[paramName] = paramValue;
            }
        }
    }
    return obj;
}


function loadRevisionesGrietas(grietaId) {

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var d = JSON.parse(this.responseText);
            if (this.status === 404 && d.error.message === "Required user profile is missing.") {
                $("#con-close-modal").modal();
            } else {
                if (Object.getOwnPropertyNames(d).length > 0) {
                    console.log(d);
                    grietasRevisionesJsonToHTML(d);

                }

            }

        }
    });

    xhr.open("GET", BASE_URL + "/grietas/" + grietaId  + "/revisiones");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send();


}



window.onload = function () {
    var grietaId = decodeURIComponent(getAllUrlParams().id);
    loadGrietas(grietaId);
    loadRevisionesGrietas(grietaId);
}