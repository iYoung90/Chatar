angular.module('angularfireSlackApp')
	.controller('AuthCtrl', function(Auth, $state, $scope){
		var authCtrl = this;

		$scope.date = new Date();

		authCtrl.user = {
			email:'',
			password:''
			//displayName: ''
		};

		authCtrl.login = function(){

			Auth.$signInWithEmailAndPassword(authCtrl.user.email, authCtrl.user.password).then(function (auth){
				$state.go('home');
				//or
				//$state.go('userHome');
			}, function(error){
				authCtrl.error = error;
			});
		};

		authCtrl.register = function(){

			Auth.$createUserWithEmailAndPassword(authCtrl.user.email, authCtrl.user.password).then(function(user){
				//authCtrl.login();
				$state.go('home');
				//$state.go('login');
				/* to not login automatically after registration, use $state.go('home') instead of authCtrl.login() */
			}, function(error){
				authCtrl.error = error;
			});
		};
	});

