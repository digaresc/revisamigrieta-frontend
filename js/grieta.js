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

    xhr.open("GET", BASE_URL + "/grietas/" + grietaId + "/revisiones");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send();


}

function grietasJsonToHTML(json){
    console.log(JSON.stringify(json));

for( var i=0; i < json['items'].length; i++ ){
        var strVar = "";
        strVar += "<div class=\"col-lg-4 col-md-6 mb-4\">";
        strVar += "                    <div class=\"card h-100\">";
        strVar += "                        <a href=\"#\"><img class=\"card-img-top\" src=\"http:\/\/placehold.it\/700x400\" alt=\"\"><\/a>";
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

        document.getElementById('grietas-listado').innerHTML = document.getElementById('grietas-listado').innerHTML + strVar;
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




window.onload = function () {
    var grietaId = decodeURIComponent(getAllUrlParams().id);
    loadGrietas(grietaId);
}