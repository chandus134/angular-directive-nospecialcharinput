angular.module('app', [])
  .controller('myCtrl', function($scope) {
    $scope.username = '';
    $scope.firstname = '';
   // $scope.flag = false
  })
  .directive('noSpecialChar', function() {
    return {
      require: 'ngModel',
      restrict: 'A',
      // link: function(scope, element, attrs, modelCtrl) {
      //   modelCtrl.$parsers.push(function(inputValue) {
      //     if (inputValue == undefined)
      //       return ''
      //     cleanInputValue = inputValue.replace(/[^\w\s]/gi, '');
      //     scope.flag = false;
      //         scope.$apply();
      //     if (cleanInputValue != inputValue) {
      //       modelCtrl.$setViewValue(cleanInputValue);
      //       modelCtrl.$render();
      //       scope.flag = true
      //         scope.$apply();
      //     }
      //     return cleanInputValue;
      //   });
      // }
      
      link: function(scope, element, attrs, modelCtrl) {
				  
        modelCtrl.$parsers.push(function(inputValue) {
          if (inputValue == undefined)
            return ''
          cleanInputValue = inputValue.replace(/[^\w\s]/gi, '');
          var regex = /[^\w\s]/gi
          if (cleanInputValue != inputValue) {
            modelCtrl.$setViewValue(cleanInputValue);
            modelCtrl.$render();
             }
          modelCtrl.$setValidity('noSpecialChar', regex.test(inputValue));
          return cleanInputValue;
        });
      }
    }
  });
