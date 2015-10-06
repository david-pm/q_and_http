angular.module('app', [])
  
  .controller('UsersController', [ '$log', '$scope', 'usersService', 'usersServiceAll',
    function($log, $scope, usersService, usersServiceAll) {
     
     $scope.getUsers = function() {
       usersService.getUsers('data3.json')
        .then(
          function(data) { 
              $scope.userData = data;
          },
          null, 
          function(notify) {
            $log.debug("Promise notification: " + notify);
          }
        )
        .catch(
          function(errorPayload) {
            $log.warn(errorPayload);
          }
        )
        .finally(
          function() {
            $log.info("Its all over, Carlos.");
          }
        );
     
     }; // getUser()


    $scope.getAllUsers = function() {

      usersServiceAll.getUsersAll()
        .then(
          function(data) { 
            $scope.allUsers = data;
          },
          function(errorPayload) {
            $log.warn('Failure loading user info', errorPayload);
          }
        );
    }; // getAllUsers()
  }]);
  
  