angular.module("drivewayShare.directives", []){
  .directive('pwCheck', [function (){
    return {
      require: "ng-model",
      link: function(scope, elem, attrs, ctrl){
        var firstPassword = '#' + attrs.pwCheck;
        elem.add(firstPassword).on('keyup', function(){
          scope.$apply(function(){
            var v = elem.val() === $(firstPassword).val();
            ctrl.$setValidity('pwmatch', v);
          });
        });
      }
    }
  }]);
}
