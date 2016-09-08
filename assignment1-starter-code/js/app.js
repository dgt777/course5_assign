(function() {

angular.module("LunchCheck", [])
.controller("LunchCheckController",LunchCheckController);

LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope) {

	
	$scope.messageId=3;
	$scope.checkNoOfItems=function() {

		if($scope.items && $scope.items!="") {
		
			var str=$scope.items;
			var items=str.trim();
			var array=items.split(',');
		    var len=array.length;
		    
		    if(array[--len]!="")
		    	++len;

			$scope.messageId=1;
			if(len > 0 && len <= 3)
				$scope.message="Enjoy!";
				
			else if (len > 3)
				$scope.message="Too much!";
				

		} else {
			$scope.message = "Please enter data first";
			$scope.messageId=2;
		}
	};
}



})();