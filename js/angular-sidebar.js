angular.module('angular-sidebar', [])
    .directive('sidebar', sidebar);

function sidebar(){

    return {
        restrict: 'A',
        link: function($scope, $element, $attrs){

            $($element).sidebar($scope.$eval($attrs.sidebar));

        }
    }

}