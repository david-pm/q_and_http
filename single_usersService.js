angular.module('app')

.factory('usersService', ['$http', '$log', '$q', function($http, $log, $q) {
    return {
      getUsers: getUsers
    };

    function getUsers(url) {
      var deferred = $q.defer();

      $http({
        method: 'get',
        url: url
      })
      .then(function(response){
        if (response.data) { 
          deferred.notify('DATA retrieved');
          deferred.resolve(response.data);
        }
        
      })
      .catch(function(response) {
        deferred.reject('Failure loading users info - ERROR: ' + response.status + ' -- ' + response.statusText);
      });

      return deferred.promise;
    }
    
  
  }]);