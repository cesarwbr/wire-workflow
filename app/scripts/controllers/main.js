'use strict';

function updateTransictions(scope) {
  //var workflowEl = angular.element('.workflow')[0];
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
      top = stepFrom.offsetTop + Math.round(stepFrom.offsetHeight / 2);
      left = (stepFrom.offsetWidth + 23) - (transictionEl.prev().length * 17);
      height = stepTo.offsetTop + Math.round(stepTo.offsetHeight / 2) - top;

      transictionEl.css('margin-top', top + 'px');
      transictionEl.css('left', left + 'px');
      transictionEl.css('height', height + 'px');
    } else {
      top = stepTo.offsetTop + Math.round(stepTo.offsetHeight / 2);
      height = stepFrom.offsetTop;
      transictionEl.css('margin-top', top + 'px');
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


    $scope.addTransition = function(currentStep) {
      console.log(currentStep);
      $scope.workflow.currentItem
      $scope.workflow.transictions.push({
        id: $scope.workflow.transictions.length,
        stepFrom: $scope.workflow.currentItem.step.id,
        stepTo: currentStep.name.id
      });

    };

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
      restriction: {
        type: 'and',
        conditions: [{
          type: 'expression',
          conditions: []
        }]
      },
      transictions: [{
        id: '2',
        stepFrom: '2',
        stepTo: '4'
      }, {
        id: '3',
        stepFrom: '3',
        stepTo: '1'
      }],
      steps: [{
        id: 1,
        name: 'Step ' + 1,
        show: false,
        actions: []
      }, {
        id: 2,
        name: 'Step ' + 2,
        show: false,
        actions: []
      }, {
        id: 3,
        name: 'Step ' + 3,
        show: false,
        actions: []
      }, {
        id: 4,
        name: 'Step ' + 4,
        show: false,
        actions: []
      }]
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

              transictionEl.css('left', '-30px');
              transictionEl.css('margin-top', top + 'px');
              transictionEl.css('height', height + 'px');
            }
          });
        },
        templateUrl: '/views/transiction.html'
      };
    }
  ])
  .directive('onRepeatDone', function($timeout) {
    return {
      priority: 10,
      restriction: 'A',
      link: function(scope, element, attributes) {
        if (scope.$last === true) {
          $timeout(function() {
            scope.$emit(attributes.onRepeatDone || 'repeat_done', element);
          });
        }

      }
    };
  })
  .directive('workflowRestriction', function($compile) {
    return {
      restriction: 'A',
      scope: {
        restriction: '=restriction'
      },
      link: function(scope, element) {
        var template;
        if (scope.restriction.type === '') {
          template = '<a ng-click="addExpression(restriction)">Expression</a> <a>And</a> <a>Or</a>';
        } else if (scope.restriction.type === 'expression') {
          template = '<label>Codition</label><select><option>Codition 1</option><option>Codition 2</option><option>Codition 3</option></select><div>Link to modal</div>';
        } else {
          template = '<div ng-repeat="condition in restriction.conditions"><div>{{restriction.type}}</div><div workflow-restriction restriction="condition"></div></div>';
        }
        element.append(template);
        $compile(element.contents())(scope.$new());

        scope.addExpression = function(restriction) {
          restriction.type = 'expression';
          restriction.conditions = [];

          var template;
          if (scope.restriction.type === '') {
            template = '<a ng-click="addExpression(restriction)">Expression</a> <a>And</a> <a>Or</a>';
          } else if (scope.restriction.type === 'expression') {
            template = '<label>Codition</label><select><option>Codition 1</option><option>Codition 2</option><option>Codition 3</option></select><div>Link to modal</div>';
          } else {
            template = '<div ng-repeat="condition in restriction.conditions"><div>{{restriction.type}}</div><div workflow-restriction restriction="condition"></div></div>';
          }
          element.append(template);
          $compile(element.contents())(scope.$new());
        };
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
        };

        scope.showAction = function(action) {
          scope.workflow.currentAction = action;
          scope.workflow.template.url = 'views/action-details.html';
        };

        scope.showItem = function(item) {
          scope.workflow.currentItem = item;
          if (item.type === 'codition') {
            scope.workflow.template.url = 'views/codition-details.html';
          } else if (item.type === 'result') {
            scope.workflow.template.url = 'views/result-details.html';
          } else {
            scope.workflow.template.url = 'views/item-details.html';
          }
        };

        scope.addItem = function(item, step) {
          if (item.type === 'codition') {
            scope.workflow.currentItem = {
              step: step,
              name: item.name + ' ' + (item.items.length + 1),
              type: item.type,
              restriction: {
                type: '',
                conditions: []
              }
            };
            item.items.push(scope.workflow.currentItem);
            scope.workflow.template.url = 'views/codition-details.html';
          } if (item.type === 'result') {
            scope.workflow.currentItem = {
              step: step,
              name: item.name + ' ' + (item.items.length + 1),
              type: item.type
            };
            item.items.push(scope.workflow.currentItem);
            scope.workflow.template.url = 'views/result-details.html';
          } else {
            scope.workflow.currentItem = {
              step: step,
              name: item.name + ' ' + (item.items.length + 1),
              type: item.type
            };
            item.items.push(scope.workflow.currentItem);
            scope.workflow.template.url = 'views/item-details.html';
          }
          item.show = true;
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
