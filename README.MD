## Como comenzar

Ejemplo de como obtener token de firebase, para las peticiones al API de revisaMiGrieta:

[https://github.com/digaresc/revisamigrieta-api-backend](https://github.com/digaresc/revisamigrieta-api-backend)

```
// Initialize Firebase
var config = {
    apiKey: "APIKEY",
    authDomain: "AUTHDOMAIN",
    databaseURL: "databaseURL",
    projectId: "revisamigrieta",
    storageBucket: "revisamigrieta.appspot.com",
    messagingSenderId: "SENDERID"
};
var BASE_URL = "revisamigrieta.appspot.com/_ah/api/v1/";
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

        document.location = "submit_grieta.html";
        
    }
});

firebase.auth().currentUser.getToken().then(function(token) {
    submitDataFunction(token);
});

function submitDataFunction(token){
	console.log("Authorization");
	console.log("Bearer " + token);
	console.log(BASE_URL);
}
```
