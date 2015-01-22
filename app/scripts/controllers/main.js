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

var addSortableToAll = function() {
  // Add sortable to all items
  angular.element('.steps').sortable();
  angular.element('.actions').sortable();
  angular.element('.actions-items').sortable();
  angular.element('.items').sortable();
};

angular.module('wireWorkflowApp')
  .controller('MainCtrl', function($scope) {

    $scope.filteredScreenList = [];
    $scope.choseType = function() {
      $scope.workflow.currentAction.filteredScreenList = $scope.screenList.filter(function(element) {
        return element.name === $scope.workflow.currentAction.selectedScreenName;
      });

    };

    $scope.screenList = [{
      id: 21,
      name: 'Fechar',
      description: 'Solicitação de Serviço',
      url: '/service-request/screens/close',
      screenTypeId: 1,
      pluginId: 1
    }, {
      id: 43,
      name: 'Retorno ao Clente',
      description: 'Solicitação de Serviço',
      url: '/service-request/screens/recurrence',
      screenTypeId: 1,
      pluginId: 1
    }, {
      id: 22,
      name: 'screen de ocorrência',
      description: 'tela para transição de ocorrência',
      url: '/service-request/screens/occurrence',
      screenTypeId: 1,
      pluginId: 1
    }, {
      id: 583,
      name: 'Encaminhar',
      description: 'Solicitação de Serviço',
      url: '/service-request/mobile-technical-complaint/screens/forward',
      screenTypeId: 1,
      pluginId: 1
    }, {
      id: 721,
      name: 'Acertar Cadastro',
      description: 'Solicitação de Serviço',
      url: '/service-request/postpaid-contestation-complaint/screens/hit-record',
      screenTypeId: 1,
      pluginId: 1
    }, {
      id: 1,
      name: 'Cancelar',
      description: 'Solicitação de Serviço',
      url: '/service-request/screens/cancel',
      screenTypeId: 1,
      pluginId: 1
    }, {
      id: 441,
      name: 'Fechar',
      description: 'Solicitação de Serviço',
      url: '/service-request/customer-service-complaint/screens/close',
      screenTypeId: 1,
      pluginId: 1
    }, {
      id: 461,
      name: 'Resolver',
      description: 'Solicitação de Serviço',
      url: '/service-request/wrong-sale-complaint/screens/resolve',
      screenTypeId: 1,
      pluginId: 1
    }, {
      id: 562,
      name: 'Resolver',
      description: 'Solicitação de Serviço',
      url: '/service-request/undue-blocking-complaint/screens/resolve',
      screenTypeId: 1,
      pluginId: 1
    }, {
      id: 601,
      name: 'Encaminhar',
      description: 'Solicitação de Serviço',
      url: '/service-request/postpaid-contestation-complaint/screens/forward',
      screenTypeId: 1,
      pluginId: 1
    }, {
      id: 701,
      name: 'Devolver em Dobro',
      description: 'Solicitação de Serviço',
      url: '/service-request/postpaid-contestation-complaint/screens/double-return',
      screenTypeId: 1,
      pluginId: 1
    }, {
      id: 882,
      name: 'Fechar',
      description: 'Solicitação de Serviço',
      url: '/service-request/screens/positiveflag',
      screenTypeId: 1,
      pluginId: 1
    }, {
      id: 923,
      name: 'Retorno ao Clente',
      description: 'Solicitação de Serviço',
      url: '/service-request/cancel-complaint/screens/forward',
      screenTypeId: 1,
      pluginId: 1
    }, {
      id: 481,
      name: 'Encaminhar 2 nivel',
      description: 'Solicitação de Serviço',
      url: '/service-request/recharge-failure-complaint/screens/forward',
      screenTypeId: 1,
      pluginId: 1
    }, {
      id: 521,
      name: 'Fechar',
      description: 'Solicitação de Serviço',
      url: '/service-request/csp12-technical-complaint/screens/close',
      screenTypeId: 1,
      pluginId: 1
    }, {
      id: 771,
      name: 'Encaminhar',
      description: 'Solicitação de Serviço',
      url: '/service-request/repayment-request/screens/repayment',
      screenTypeId: 1,
      pluginId: 1
    }, {
      id: 772,
      name: 'Ajustar',
      description: 'Solicitação de Serviço',
      url: '/service-request/repayment-request/screens/adjustment',
      screenTypeId: 1,
      pluginId: 1
    }, {
      id: 803,
      name: 'Retorno ao Clente',
      description: 'Solicitação de Serviço',
      url: '/service-request/wrong-sale-complaint-2/screens/resolve',
      screenTypeId: 1,
      pluginId: 1
    }, {
      id: 804,
      name: 'Encaminhar',
      description: 'Solicitação de Serviço',
      url: '/service-request/wrong-sale-complaint-2/screens/forward',
      screenTypeId: 1,
      pluginId: 1
    }, {
      id: 641,
      name: 'Apurar',
      description: 'Solicitação de Serviço',
      url: '/service-request/postpaid-contestation-complaint/screens/repayment',
      screenTypeId: 1,
      pluginId: 1
    }];

    $scope.stepName = '';

    $scope.sections = {
      steps: {
        show: false
      },
      initialActions: {
        show: false
      },
      globalActions: {
        show: false
      },
      splits: {
        show: false
      },
      joins: {
        show: false
      }
    };

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
      noAdd: false,
      hasConfig: true,
      items: [{
        name: 'Pre-Functions',
        type: 'pre-function',
        items: [],
        notRemovable: true
      }, {
        name: 'Post-Functions',
        type: 'post-function',
        items: [],
        notRemovable: true
      }, {
        name: 'Validators',
        type: 'validator',
        items: [],
        notRemovable: true
      }]
    }, {
      name: 'Codition Results',
      type: 'condition-result',
      items: []
    }];

    $scope.addMetaAttribute = function(elem) {
      elem.metaAttributes.push({
        name: '',
        value: ''
      });
    };

    $scope.removeMetaAttribute = function(elem, attribute) {
      var index = elem.metaAttributes.indexOf(attribute);
      elem.metaAttributes.splice(index, 1);
    };

    $scope.showHide = function(sectionName, type) {

      for (var section in $scope.sections) {
        if (section !== sectionName) {
          $scope.sections[section].show = false;
        }
      }

      if (!type) {
        $scope.sections[sectionName].show = $scope.sections[sectionName].show ? false : true;
      } else {
        if (type === 'show') {
          $scope.sections[sectionName].show = true;
        } else if (type === 'hide') {
          $scope.sections[sectionName].show = false;
        }
      }
    };


    $scope.addTransition = function(currentStep) {
      console.log(currentStep);
      // $scope.workflow.transictions.push({
      //   id: $scope.workflow.transictions.length,
      //   stepFrom: $scope.workflow.currentItem.step.id,
      //   stepTo: currentStep.name.id
      // });

    };

    $scope.addStep = function() {
      $scope.workflow.currentStep = {
        id: $scope.workflow.steps.length + 1,
        name: 'Step ' + ($scope.workflow.steps.length + 1),
        show: false,
        actions: [],
        metaAttributes: []
      };
      $scope.workflow.steps.push($scope.workflow.currentStep);
      $scope.workflow.template.url = 'views/details/step-details.html';
      $scope.showHide('steps', 'show');
      addSortableToAll();
    };



    $scope.addInitialAction = function() {
      $scope.workflow.currentAction = {
        name: 'Action ' + ($scope.workflow.initialActions.length + 1),
        actionItems: actionItems,
        show: false,
        finish: false,
        screen: {
          plugin: ''
        }
      };

      $scope.workflow.initialActions.push($scope.workflow.currentAction);
      $scope.workflow.template.url = 'views/details/action-details.html';
      $scope.showHide('initialActions', 'show');
      addSortableToAll();
    };

    $scope.addGlobalAction = function() {
      $scope.workflow.currentAction = {
        name: 'Action ' + ($scope.workflow.globalActions.length + 1),
        actionItems: actionItems,
        show: false,
        finish: false,
        screen: {
          plugin: ''
        }
      };

      $scope.workflow.globalActions.push($scope.workflow.currentAction);
      $scope.workflow.template.url = 'views/details/action-details.html';
      $scope.showHide('globalActions', 'show');
      addSortableToAll();
    };

    $scope.showWorkflow = function() {
      $scope.workflow.template.url = 'views/details/workflow-details.html';
    };


    $scope.workflow = {
      name: 'Testing',
      initialActions: [{
        name: 'Initial Action',
        actionItems: [{
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
          noAdd: false,
          hasConfig: true,
          items: [{
            name: 'Pre-Functions',
            type: 'pre-function',
            items: [],
            notRemovable: true
          }, {
            name: 'Post-Functions',
            type: 'post-function',
            items: [],
            notRemovable: true
          }, {
            name: 'Validators',
            type: 'validator',
            items: [],
            notRemovable: true
          }]
        }, {
          name: 'Codition Results',
          type: 'condition-result',
          items: []
        }],
        show: false,
        finish: false,
        notRemovable: true,
        screen: {
          plugin: ''
        }
      }],
      globalActions: [],
      currentAction: {},
      currentStep: {},
      currentItem: {},
      template: {
        url: 'views/details/workflow-details.html'
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
      steps: [
        /*{
                        id: 1,
                        name: 'Step ' + 1,
                        show: false,
                        actions: [],
                        metaAttributes: []
                      }, {
                        id: 2,
                        name: 'Step ' + 2,
                        show: false,
                        actions: [],
                        metaAttributes: []
                      }, {
                        id: 3,
                        name: 'Step ' + 3,
                        show: false,
                        actions: [],
                        metaAttributes: []
                      }, {
                        id: 4,
                        name: 'Step ' + 4,
                        show: false,
                        actions: [],
                        metaAttributes: []
                      }*/
      ]
    };


    // $scope.$watch('workflow.steps', function() {
    //   console.log(angular.element('.workflow-item')[0]);
    // });
  })
  .filter('unique', function() {

    return function(items, filterOn) {

      if (filterOn === false) {
        return items;
      }

      if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
        var newItems = [];

        var extractValueToCompare = function(item) {
          if (angular.isObject(item) && angular.isString(filterOn)) {
            return item[filterOn];
          } else {
            return item;
          }
        };

        angular.forEach(items, function(item) {
          var isDuplicate = false;

          for (var i = 0; i < newItems.length; i++) {
            if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
              isDuplicate = true;
              break;
            }
          }
          if (!isDuplicate) {
            newItems.push(item);
          }

        });
        items = newItems;
      }
      return items;
    };
  })
  .directive('addAction', [function() {
    return {
      restrict: 'A',
      templateUrl: '/views/add-action.html',
      link: function(scope) {
        var closeAddActionModal = function() {
          angular.element('#addActionItem').modal('hide');
          scope.newItem = {
            items: []
          };
        };

        scope.addItem = function(item, step) {
          var currentActionItem = scope.workflow.currentAction.actionItems.filter(function(obj) {
            return obj.type === item.type;
          });
          currentActionItem = currentActionItem[0];

          switch (item.type) {
            case 'post-function':
            case 'pre-function':
              scope.workflow.currentItem = {
                step: step,
                name: item.name,
                metaAttributes: [],
                type: item.type
              };

              currentActionItem.items.push(scope.workflow.currentItem);
              scope.workflow.template.url = 'views/details/function-details.html';
              break;
            case 'validator':
              scope.workflow.currentItem = {
                step: step,
                name: item.name,
                metaAttributes: [],
                type: item.type
              };

              currentActionItem.items.push(scope.workflow.currentItem);
              scope.workflow.template.url = 'views/details/validator-details.html';
              break;
            case 'condition':
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
              scope.workflow.template.url = 'views/details/codition-details.html';
              break;
            case 'result':
              angular.element('#addActionItem').modal('show');
              break;
            default:
              scope.workflow.currentItem = {
                step: step,
                name: item.name,
                type: item.type
              };
              currentActionItem.items.push(scope.workflow.currentItem);
              scope.workflow.template.url = 'views/details/item-details.html';
          }

          item.show = true;
          addSortableToAll();
          closeAddActionModal();
        };
      }
    };
  }])
  .directive('addResultItem', [function() {
    return {
      restrict: 'A',
      templateUrl: '/views/add-result-item.html',
      link: function(scope) {
        var closeAddResultItemModal = function() {
          angular.element('#addResultItem').modal('hide');
          scope.newItem = {
            items: []
          };
        };

        scope.addResultItem = function(item, step) {
          var currentItem = scope.workflow.currentActionItem.items.filter(function(obj) {
            return obj.type === item.type;
          });
          currentItem = currentItem[0];
          scope.workflow.currentItem = {
            step: step,
            name: item.name,
            type: item.type
          };
          currentItem.items.push(scope.workflow.currentItem);
          scope.workflow.template.url = 'views/details/item-details.html';

          item.show = true;
          addSortableToAll();
          closeAddResultItemModal();
        };
      }
    };
  }])
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
  .directive('steps', function() {
    return {
      restriction: 'A',
      templateUrl: '/views/steps.html'
    };
  })
  .directive('initialActions', function() {
    return {
      restriction: 'A',
      templateUrl: '/views/initial-actions.html'
    };
  })
  .directive('globalActions', function() {
    return {
      restriction: 'A',
      templateUrl: '/views/global-actions.html'
    };
  })
  .directive('action', function() {
    return {
      restriction: 'A',
      scope: {
        action: '=',
        workflow: '=workflow',
        actionarray: '=actionarray',
        step: '=step'
      },
      templateUrl: '/views/action.html',
      link: function(scope) {
        scope.newItem = {
          items: []
        };

        scope.addActionItem = function(action) {
          scope.workflow.currentAction = action;
          angular.element('#addActionItem').modal('show');
        };

        scope.showSubItems = function(item) {
          if (item.items && item.items.length > 0) {
            return true;
          }

          if (item.items === undefined) {
            return true;
          }

          return false;
        };

        scope.hasSubItems = function(item) {
          if (item.items && item.items.length > 0) {
            return true;
          }

          return false;
        };

        scope.showAction = function(action) {
          scope.workflow.currentAction = action;
          scope.workflow.template.url = 'views/details/action-details.html';
        };

        scope.removeAction = function(action) {
          var index = scope.actionarray.indexOf(action);
          if (index >= 0) {
            scope.actionarray.splice(index, 1);
          }
        };

        scope.showActionItem = function(actionItem, action) {
          scope.workflow.currentStep = scope.step;
          scope.workflow.currentAction = action;
          scope.workflow.currentActionItem = actionItem;
          scope.workflow.template.url = 'views/details/result-details.html';
        };

        scope.showItem = function(item, action) {
          scope.workflow.currentStep = scope.step;
          scope.workflow.currentAction = action;
          scope.workflow.currentItem = item;

          switch (item.type) {
            case 'post-function':
            case 'pre-function':
              scope.workflow.template.url = 'views/details/function-details.html';
              break;
            case 'validator':
              scope.workflow.template.url = 'views/details/validator-details.html';
              break;
            case 'condition':
              scope.workflow.template.url = 'views/details/codition-details.html';
              break;
            case 'result':
              scope.workflow.template.url = 'views/details/result-details.html';
              break;
            default:
              scope.workflow.template.url = 'views/details/item-details.html';
          }
        };

        scope.removeItem = function(item, list) {
          var index = list.indexOf(item);
          if (index >= 0) {
            list.splice(index, 1);
          }
        };

        var closeAddActionModal = function() {
          angular.element('#addActionItem').modal('hide');
          scope.newItem = {
            items: []
          };
        };

        scope.addItem = function(item, action) {
          var currentActionItem = action.actionItems.filter(function(obj) {
            return obj.type === item.type;
          });

          currentActionItem = currentActionItem[0];
          scope.workflow.currentActionItem = currentActionItem;
          if (item.type === 'codition') {
            scope.workflow.currentItem = {
              name: item.name + ' ' + (item.items.length + 1),
              type: item.type,
              restriction: {
                type: '',
                conditions: []
              }
            };
            currentActionItem.items.push(scope.workflow.currentItem);
            scope.workflow.template.url = 'views/details/codition-details.html';
          }
          if (item.type === 'result') {
            angular.element('#addResultItem').modal('show');
          } else {
            scope.workflow.currentItem = {
              name: item.name,
              type: item.type
            };
            currentActionItem.items.push(scope.workflow.currentItem);
            scope.workflow.template.url = 'views/details/item-details.html';
          }
          item.show = true;
          closeAddActionModal();
          addSortableToAll();
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
          type: 'condition',
          items: []
        }, {
          name: 'Result',
          type: 'result',
          hasConfig: true,
          noAdd: false,
          items: [{
            name: 'Pre-Functions',
            type: 'pre-function',
            items: [],
            notRemovable: true
          }, {
            name: 'Post-Functions',
            type: 'post-function',
            items: [],
            notRemovable: true
          }, {
            name: 'Validators',
            type: 'validator',
            items: [],
            notRemovable: true
          }]
        }, {
          name: 'Codition Results',
          type: 'condition-result',
          items: []
        }];

        scope.addAction = function(step) {
          scope.workflow.currentAction = {
            name: 'Action ' + (step.actions.length + 1),
            actionItems: actionItems,
            finish: true,
            screen: {
              plugin: '',
              screenUrl: ''
            }
          };

          step.actions.push(scope.workflow.currentAction);
          step.show = true;
          scope.workflow.template.url = 'views/details/action-details.html';
          addSortableToAll();
        };

        scope.showStep = function(step) {
          scope.workflow.currentStep = step;
          scope.workflow.template.url = 'views/details/step-details.html';
        };

        scope.showConnections = function() {
          element.children().first().popover('show');
        };

        scope.removeStep = function(step) {
          var index = scope.workflow.steps.indexOf(step);
          if (index >= 0) {
            scope.workflow.steps.splice(index, 1);
          }
        };

        scope.showAction = function(action) {
          scope.workflow.currentAction = action;
          scope.workflow.template.url = 'views/details/action-details.html';
        };

        scope.showActionItem = function(actionItem) {
          scope.workflow.currentActionItem = actionItem;
          scope.workflow.template.url = 'views/details/result-details.html';
        };

        scope.showItem = function(item) {
          scope.workflow.currentItem = item;
          switch (item.type) {
            case 'pre-function':
              scope.workflow.template.url = 'views/details/function-details.html';
              break;
            case 'condition':
              scope.workflow.template.url = 'views/details/codition-details.html';
              break;
            case 'result':
              scope.workflow.template.url = 'views/details/result-details.html';
              break;
            default:
              scope.workflow.template.url = 'views/details/item-details.html';
          }
        };


        scope.addItem = function(item, step) {
          var currentActionItem = scope.workflow.currentAction.actionItems.filter(function(obj) {
            return obj.type === item.type;
          });
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
            scope.workflow.template.url = 'views/details/codition-details.html';
          }
          if (item.type === 'result') {
            scope.workflow.currentItem = {
              step: step,
              name: item.name + ' ' + (item.items.length + 1),
              type: item.type
            };
            item.items.push(scope.workflow.currentItem);
            scope.workflow.template.url = 'views/details/result-details.html';
          } else {

            scope.workflow.currentItem = {
              step: step,
              name: item.name,
              type: item.type
            };
            currentActionItem.items.push(scope.workflow.currentItem);
            scope.workflow.template.url = 'views/details/item-details.html';
          }
          item.show = true;
          addSortableToAll();
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
