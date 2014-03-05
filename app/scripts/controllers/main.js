'use strict';

angular.module('wireWorkflowApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var actionItems = [{
      name: 'Pre-Functions',
      items: [ {
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
      steps: [{
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
        name: 'Step 2',
        show: false,
        actions: []
      }, {
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
        name: 'Step 4',
        show: false,
        actions: []
      }]
    };
  });
