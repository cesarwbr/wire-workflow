'use strict';

function updateTransictions(scope) {
  var workflowEl = angular.element('.workflow')[0];
  for (var i = 0; i < scope.workflow.transictions.length; i++) {
    var transiction = scope.workflow.transictions[i];
    var transictionEl = angular.element('[transiction="' + transiction.id + '"]');
    var stepFrom = angular.element('[step-id="' + transiction.stepFrom + '"]')[0];
    var stepTo = angular.element('[step-id="' + transiction.stepTo + '"]')[0];

    if (!stepTo || !stepFrom) {
      break;
    }

    var top, left, height;

    if (transiction.stepFrom < transiction.stepTo) {
      top = stepFrom.offsetTop + (stepFrom.offsetHeight / 2);
      left = (stepFrom.offsetWidth + 12) - (transictionEl.prev().length * 17);
      height = stepTo.offsetTop + (stepTo.offsetHeight / 2) - top;

      transictionEl.css('margin-top', (top - workflowEl.offsetHeight - 34) + 'px');
      transictionEl.css('left', 279 + 'px');
      transictionEl.css('height', height + 'px');
    } else {
      top = stepTo.offsetTop + (stepTo.offsetHeight / 2);
      height = stepFrom.offsetTop + (stepFrom.offsetHeight / 2) - top;
      transictionEl.css('margin-top', (top - workflowEl.offsetHeight - 34) + 'px');
      transictionEl.css('height', height + 'px');
    }
  }
}

angular.module('wireWorkflowApp')
  .controller('MainCtrl', function($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var actionItems = [{
      name: 'Pre-Functions',
      type: 'pre-function',
      items: []
    }, {
      name: 'Post-Functions',
      type: 'post-function',
      items: []
    }, {
      name: 'Validators',
      type: 'validator',
      items: []
    }, {
      name: 'Conditions',
      type: 'codition',
      items: []
    }, {
      name: 'Result',
      type: 'result',
      items: []
    }, {
      name: 'Codition Results',
      type: 'condition-result',
      items: []
    }];


    $scope.addStep = function() {
      $scope.workflow.currentStep = {
        id: 1,
        name: 'Step ' + ($scope.workflow.steps.length + 1),
        show: false,
        actions: []
      };
      $scope.workflow.steps.push($scope.workflow.currentStep);
      $scope.workflow.template.url = 'views/step-details.html';
    };

    $scope.showWorkflow = function() {
      $scope.workflow.template.url = 'views/workflow-details.html';
    };


    $scope.workflow = {
      name: 'Testing',
      currentAction: {},
      currentStep: {},
      currentItem: {},
      template: {
        url: 'views/workflow-details.html'
      },
      transictions: [
        /*{
        id: '1',
        stepFrom: '1',
        stepTo: '3'
      }, {
        id: '2',
        stepFrom: '2',
        stepTo: '4'
      }, {
        id: '3',
        stepFrom: '3',
        stepTo: '1'
      }*/
      ],
      steps: []
    };


    $scope.$watch('workflow.steps', function() {
      console.log(angular.element('.workflow-item')[0]);
    });
  })
  .directive('workflowTransiction', [

    function() {
      return {
        priority: 10,
        restrict: 'A',
        link: function($scope) {

          $scope.$on('transictions_done', function(element, el) {
            var transiction = element.targetScope.transiction;
            var transictionEl = el;
            var stepFrom = angular.element('[step-id="' + transiction.stepFrom + '"]')[0];
            var stepTo = angular.element('[step-id="' + transiction.stepTo + '"]')[0];
            var top;
            var height;
            var left;

            if (transiction.stepFrom < transiction.stepTo) {
              top = stepFrom.offsetTop + (stepFrom.offsetHeight / 2);
              left = (stepFrom.offsetWidth + 12) - (transictionEl.prev().length * 17);
              height = stepTo.offsetTop + (stepTo.offsetHeight / 2) - top;

              transictionEl.css('margin-top', top + 'px');
              transictionEl.css('left', 279 + 'px');
              transictionEl.css('height', height + 'px');
            } else {
              top = stepTo.offsetTop + (stepTo.offsetHeight / 2);
              height = stepFrom.offsetTop + (stepFrom.offsetHeight / 2) - top;

              transictionEl.css('left', '-9px');
              transictionEl.css('margin-top', top + 'px');
              transictionEl.css('height', height + 'px');
            }
          });
        },
        templateUrl: '/views/transiction.html'
      };
    }
  ])
  .directive('onRepeatDone', function() {
    return {
      priority: 10,
      restriction: 'A',
      link: function($scope, element, attributes) {
        $scope.$emit(attributes.onRepeatDone || 'repeat_done', element);
      }
    };
  })
  .directive('workflowStep', function() {
    return {
      priority: 100,
      restriction: 'A',
      scope: {
        step: '=workflowStep',
        workflow: '=workflow'
      },
      link: function(scope, element) {
        var actionItems = [{
          name: 'Pre-Functions',
          items: []
        }, {
          name: 'Post-Functions',
          items: []
        }, {
          name: 'Validators',
          items: []
        }, {
          name: 'Conditions',
          items: []
        }, {
          name: 'Result',
          items: []
        }, {
          name: 'Codition Results',
          items: []
        }];

        scope.addAction = function(step) {
          scope.workflow.currentAction = {
            name: 'Action ' + (step.actions.length + 1),
            actionItems: actionItems
          };

          step.actions.push(scope.workflow.currentAction);
          step.show = true;
          scope.workflow.template.url = 'views/action-details.html';
        };



        scope.showStep = function(step) {
          scope.workflow.currentStep = step;
          scope.workflow.template.url = 'views/step-details.html';
        }

        scope.showAction = function(action) {
          scope.workflow.currentAction = action;
          scope.workflow.template.url = 'views/action-details.html';
        }

        scope.showItem = function(item) {
          scope.workflow.currentItem = item;
          scope.workflow.template.url = 'views/item-details.html';
        };

        scope.addItem = function(item) {
          scope.workflow.currentItem = {
            name: item.name + ' ' + (item.items.length + 1)
          };
          item.items.push(scope.workflow.currentItem);
          item.show = true;
          scope.workflow.template.url = 'views/item-details.html';
        };

        scope.$watch(function() {
          updateTransictions(scope.$parent.$parent);
          return element.find('.workflow-item').offset().top;
        }, function(newValue) {
          return newValue;
        });
        return element;
      },
      templateUrl: '/views/step.html'
    };
  });
