'use strict';

angular.module('wireWorkflowApp')
  .controller('MainCtrl', function($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    var actionItems = [{
      name: 'Pre-Functions',
      items: [{
        name: 'Function 1'
      }, {
        name: 'Function 2'
      }, {
        name: 'Function 3'
      }]
    }, {
      name: 'Post-Functions'
    }, {
      name: 'Validators'
    }, {
      name: 'Conditions'
    }, {
      name: 'Result'
    }, {
      name: 'Codition Results'
    }];

    $scope.workflow = {
      name: 'Testing',
      transictions: [{
        id: '1',
        type: 'connection-right',
        stepFrom: '1',
        stepTo: '3'
      }],
      steps: [{
        id: 1,
        name: 'Step 1',
        show: false,
        actions: [{
          name: 'Action 1',
          actionItems: actionItems
        }, {
          name: 'Action 2'
        }, {
          name: 'Action 3'
        }, {
          name: 'Action 4'
        }]
      }, {
        id: 2,
        name: 'Step 2',
        show: false,
        actions: []
      }, {
        id: 3,
        name: 'Step 3',
        show: false,
        actions: [{
          name: 'Action 1'
        }, {
          name: 'Action 2'
        }, {
          name: 'Action 3'
        }, {
          name: 'Action 4'
        }]
      }, {
        id: 4,
        name: 'Step 4',
        show: false,
        actions: []
      }]
    };

    // for (var i = 0; i < $scope.workflow.transictions.length; i++) {
    //   var transiction = $scope.workflow.transictions[i];
    //   var stepFrom = angular.element('[step-id="' + transiction.stepFrom + '"]')[0];
    //   var stepTo = angular.element('[step-id="' + transiction.stepTo + '"]')[0];

    //   var transictionEl = angular.element('[transiction="' + transiction.id + '"]');

    //   var top = stepFrom.offsetTop + (stepFrom.offsetHeight / 2);
    //   var left = (stepFrom.offsetWidth + 8) - (transictionEl.prev().length * 17);
    //   var height = stepTo.offsetTop + (stepTo.offsetHeight / 2) - top;

    //   transictionEl.css('top', top + 'px');
    //   transictionEl.css('left', left + 'px');
    //   transictionEl.css('height', height + 'px');
    // }

    $scope.$watch('workflow.steps', function() {
      console.log(angular.element('.workflow-item')[0]);
    });
  })
  .directive('workflowTransiction', [

    function() {
      return {
        restrict: 'A',
        link: function(scope, element) {
          var transictions = angular.element(element).children();
          return transictions;

        },
        templateUrl: '/views/transiction.html'
      };
    }
  ]);
