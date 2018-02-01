var gApp = angular.module('gApp', []);
    gApp.run(function($rootScope){
    	$rootScope.address = "서울시 금천구 가산디지털2로 115 대륭테크노타운3차";
    	$rootScope.dns = "GooDee";
    	$rootScope.title = "Portfolio";
    	$rootScope.name = "황지민";
    });
	gApp.controller('gCtrl', function($scope) {
		$scope.htmlCheck = false;
		$scope.bodyCheck = false;
		$scope.btCheck = false;
		$scope.projectFlag = false;
		$scope.projectUrl = "";
		$scope.btnActive = 1;
		
		$scope.dropEvent = function() {
			$scope.htmlCheck = !$scope.htmlCheck;
			$scope.bodyCheck = !$scope.bodyCheck;
			$scope.btCheck   = !$scope.btCheck;
		};
		
		$scope.projectEvent = function(rows) {
			$scope.row = rows;
			if($scope.projectUrl == rows.url) {
				$scope.projectUrl = "";
				$scope.projectFlag = false;
			} else {
				$scope.projectUrl = rows.url;
				$scope.projectFlag = true;
			}
		}
		
		$scope.iFrameLink = function(){
			if($scope.iframeView){
				location.href = $scope.iframeView;
			}
		}
		
		$scope.btnList = [
			{filter: "*",      name: "All",      active: true },
			{filter: ".bgOn",  name: "Personal", active: false},
			{filter: ".bgOff", name: "Team",     active: false}
		];
		
		$scope.dataSource = [
			{
			 path: "portfolio/",
			 url : "team/team.pdf", 
			 title: "Team",
			 name: "Impression",
			 img: "team/TeamImpression.png",
             img2: "team/TeamImpression.png",
			 type : true, 
			 contents: "처음으로 형태가 어느 정도 잡힌 웹 페이지를 만드느라 힘들기도 하였고 원하는 대로 작업도 잘 되지 않아서 속상하기도 했지만 그래도 다 같이 고생하면서 제작을 해보니 뿌듯하기도 하고 보람차기도 했습니다."
			},{
			 path: "portfolio/",
			 url : "personal/personal.pdf", 
			 title: "Personal",
			 name: "Impression",
             img: "personal/PersonalImpression.png",
			 img2: "personal/PersonalImpression2.png",
			 type : false,
			 contents: "팀 프로젝트에서 일부분만 담당해서 제작을 하다가 전부 온전히 혼자서 담당하는 개인프로젝트를 진행을 하다 보니 실력도 많이 늘은 것 같고 여러 가지 기능들도 시험하면서 넣을 수 있어서 좋은 경험이 되었던 것 같습니다. 그리고 무엇보다도 제 자신이 흥미를 갖고 제작을 할 수 있는 주제였기 때문에 더 재미있었던 개인프로젝트 개발이었던 것 같습니다. 아직 CSS나 BootStrap을 다루는 것이 미숙해서 디자인에 좀 더 신경을 못 쓴 점이 아쉬워서 추후에 실력을 더 키워 여러 가지 기능을 더 넣어서 작업을 해보고 싶습니다."
			},{
			 path: "media/",
			 url : "personal.mp4", 
			 title: "Personal",
			 name: "Media",
			 img: "personal/PersonalMedia.png",
             img2: "personal/PersonalMedia.png",
			 type : false, 
			 contents: ""
			}
		];
		
		$scope.btnEvnet = function(index){
			$scope.projectUrl = "";
			$scope.projectFlag = false;
			
			for(var i = 0; i < $scope.btnList.length; i++){
				$scope.btnList[i].active = false;
			}
			$scope.btnList[index].active = true;
			$scope.grid.isotope({ filter: $scope.btnList[index].filter });
		}
		
		setTimeout(function(){
			$scope.grid = $('#portfolioGroup').isotope();
		}, 200);
	});
	gApp.directive('resize', function ($window) {
	    return function (scope, element) {
	        var w = angular.element($window);
	        scope.getWindowDimensions = function () {
	            return {
	                'h': w.height(),
	                'w': w.width()
	            };
	        };
	        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
	            if(newValue.w >= 768){
					scope.htmlCheck = false;
					scope.bodyCheck = false;
					scope.btCheck = false;
				}
	        }, true);

	        w.bind('resize', function () {
	            scope.$apply();
	        });
	    }
	});