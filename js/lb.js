var app = angular.module('app', []);

app.controller('cardController',
    ['$scope', '$http', function ($scope, $http) {
        $scope.data = {};
        $scope.ui = {
            contacting: false,
            submitted: false
        };

        $scope.submit = function(){
            $scope.ui.submitted = true;
            $http.post('contact.php', $scope.data)
                .success(function (data, status, headers, config) {
                    $scope.ui.submitted = true;
                })
                .error(function (data, status, header, config) {
                });
        }
    }]);


