(function () {
  angular.module('controllers', [])
    .controller('AttendesController', function ($scope) { // $injector

      $scope.attende = {
        name: 'Roberto Aguilar',
        email: 'roberto.aguilar@mexicoder.com.mx'
      };

      $scope.attendes = [];

      $scope.addAttende = function () {
        var attende = angular.copy($scope.attende);
        $scope.attendes.push(attende);
      };
      
    });

})();
