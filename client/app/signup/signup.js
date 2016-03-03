var MAX_PASSWORD_LENGTH = 20;
var MAX_EMAIL_LENGTH = 30;
var MAX_USERNAME_LENGTH = 20;
var MAX_FIRST_AND_LAST_NAME_LENGTH = 25;

app.controller("SignupController", function($scope, Auth, Nav, $location, $window){

  Nav.setPage(4);

  // $scope.showText = false;
  // $scope.passwordLength = MAX_PASSWORD_LENGTH;
  // $scope.confirmPasswordLength = MAX_PASSWORD_LENGTH;
  // $scope.emailLength = MAX_EMAIL_LENGTH;
  // $scope.usernameLength = MAX_USERNAME_LENGTH;
  // $scope.firstNameLength = MAX_FIRST_AND_LAST_NAME_LENGTH;
  // $scope.lastNameLength = MAX_FIRST_AND_LAST_NAME_LENGTH;
  //
  // $scope.$watch('user.password', function(newValue, oldValue){
  //   if(newValue){
  //     if(newValue.length > MAX_PASSWORD_LENGTH){
  //       $scope.user.password = oldValue;
  //     }
  //     $scope.passwordLength = MAX_PASSWORD_LENGTH - newValue.length;
  //   }
  // });
  //
  // $scope.$watch('user.email', function(newValue, oldValue){
  //   if(newValue){
  //     if(newValue.length > MAX_EMAIL_LENGTH){
  //       $scope.user.email = oldValue;
  //     }
  //     $scope.emailLength = MAX_EMAIL_LENGTH - newValue.length;
  //   }
  // });
  //
  // $scope.$watch('user.password', function(newValue, oldValue){
  //   if(newValue){
  //     if(newValue.length > MAX_PASSWORD_LENGTH){
  //       $scope.user.password = oldValue;
  //     }
  //     $scope.passwordLength = MAX_EMAIL_LENGTH - newValue.length;
  //   }
  // });
  //
  // $scope.$watch('user.first_name', function(newValue, oldValue){
  //   if(newValue){
  //     if(newValue.length > MAX_FIRST_AND_LAST_NAME_LENGTH){
  //       $scope.user.first_name = oldValue;
  //     }
  //     $scope.firstNameLength = MAX_FIRST_AND_LAST_NAME_LENGTH - newValue.length;
  //   }
  // });
  //
  // $scope.$watch('user.last_name', function(newValue, oldValue){
  //   if(newValue){
  //     if(newValue.length > MAX_FIRST_AND_LAST_NAME_LENGTH){
  //       $scope.user.last_name = oldValue;
  //     }
  //     $scope.lastNameLength = MAX_FIRST_AND_LAST_NAME_LENGTH - newValue.length;
  //   }
  // });
  //
  // $scope.$watch('user.username', function(newValue, oldValue){
  //   if(newValue){
  //     if(newValue.length > MAX_USERNAME_LENGTH){
  //       $scope.user.username = oldValue;
  //     }
  //     $scope.usernameLength = MAX_USERNAME_LENGTH - newValue.length;
  //   }
  // });
  //
  // $scope.$watch('user.confirm_password', function(newValue, oldValue){
  //   if(newValue){
  //     if(newValue.length > MAX_PASSWORD_LENGTH){
  //       $scope.user.confirm_password = oldValue;
  //     }
  //     $scope.confirmPasswordLength = MAX_PASSWORD_LENGTH - newValue.length;
  //   }
  // })
  //
  // $scope.updateBody = function(event){
  //   return false;
  // };

	$scope.signup = function() {
		Auth.signup($scope.user)
		.then(function (token){
			$window.localStorage.setItem("authentication", token);
			$location.path("/user");
      Nav.setPage(3);
		})
		.catch(function(error) {
			swal({
				title: 'User already exists!',
				text: "This username already exists. Please choose another one.",
				type: "error",
				confirmButtonText: "OK"
			});
		})
	};

	$scope.signin = function () {
	  Auth.signin($scope.user)
	  .then(function (token) {
	    if(token === undefined){
	      swal({
					title: 'User not found!',
					text: 'Double check your username/password or create a new account!',
					type: 'error',
					confirmButtonText: 'OK'
				});
	    } else {
		  	$window.localStorage.setItem("authentication", token);
		  	$location.path("/user");
        Nav.setPage(3);
	    }
	  })
	  .catch(function (error) {
	    console.error(error);
	  });
	};

  // $scope.confirmPassword = function(){
  //   var password = $scope.user.password;
  //   var secondEntryPassword = $scope.user.confirm_password;
  //
  //   if(password === secondEntryPassword){
  //     return false;
  //   }
  //   return true;
  // }
  //
  // $scope.validatePhoneNumber = function(){
	// 	var number = $scope.user.phone_number.replace(/\D/g, '');
	// 	if(number.length===10){
	// 			return false;
	// 		}
	// 	return true;
  //   }

  $scope.validatePassword = function(){
    console.log('INSIDE VALIDATEFORM');
    var password = $scope.user.password;
    var secondEntryPassword = $scope.user.confirm_password;

    if(password !== secondEntryPassword){
      swal({
        title: "Passwords do not match! Please double check.",
        type: "error",
        confirmationButtonText: "OK"
      })
    }
  }
});
