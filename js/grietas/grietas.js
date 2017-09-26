function Grietas($scope, $http){
  $scope.currentPage = 1;
  $scope.pageSize = 10;
  $scope.grietas = [];

  getResultsPage(1);

  $scope.pagination = {
      current: 1
  };

  $scope.pageChanged = function(newPage) {
      getResultsPage(newPage);
  };

  function getResultsPage(pageNumber) {
      // this is just an example, in reality this stuff should be in a service
      $http.get(BASE_URL + "/grietas?page=" + pageNumber)
          .then(function(result) {
              $scope.totalGrietas = result.data.items.length;
              console.log(result.data.items);
              for (var i = 0; i < $scope.totalGrietas; i++) {
                var grietaImg = document.createElement("IMG");
                grietaImg.src = BASE_URL + result.data.items[i].files[0];
                $scope.grietas.push(
                  "TIPO: " + result.data.items[i].tipo + 
                  " UBICACION: " + result.data.items[i].ubicacion + 
                  " COMENTARIO: " + result.data.items[i].comentario
                );
                
              } 
              console.log($scope.grietas); 
          });
      
  }  
}