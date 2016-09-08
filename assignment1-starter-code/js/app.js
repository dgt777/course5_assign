(function() {

angular.module("LunchChecker", [])
.controller("MainCtrl",MainCtrl);

MainCtrl.$inject=['$scope'];

function MainCtrl($scope) {

	

	$scope.checkNoOfItems=function() {

		if($scope.items && $scope.items!="") {
		
			var str=$scope.items;
			var items=str.trim();
			var array=items.split(',');
		    var len=array.length;
		    
		    if(array[--len]!="")
		    	++len;

		
			if(len > 0 && len <= 3)
				$scope.message="Enjoy!";
			else if (len > 3)
				$scope.message="Too much!";
			

		} else {
			$scope.message = "Please enter data first";
		}
	};
}



})();