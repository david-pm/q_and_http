angular.module('app')

.factory('usersServiceAll', ['$http', '$log', '$q', 'usersService', 
  function($http, $log, $q, usersService) {
    return {
      getUsersAll: getUsersAll
    };

    function getUsersAll() {
      var deferred = $q.defer();      
      var urls = [ 'data1.json', 'data2.json', 'data3.json'];
      var urlCalls = [];

      angular.forEach(urls, function(url) {
        urlCalls.push(usersService.getUsers(url));
      });

      $q.all(urlCalls)
        .then(function(results){
          if (results) {
            deferred.resolve(results);
          }
      }, function(errors) {
          deferred.reject(errors);
      });
      
      return deferred.promise;
    }
  
  }]);