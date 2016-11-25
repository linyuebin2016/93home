/**
 * 多选组织树展示指令
 * Created by xiaojianyong on 2016/11/17.
 */
define(["app"], function(app) {
	
	var deps = ["$parse", "$timeout","$compile"];
	
	function directive($parse, $timeout,$compile) {
		
		return {
			restrict: 'A',
			link: function ($scope, element, attrs) {
				//tree id
				var treeId = attrs.treeId;
	
				//tree model
				var treeModel = attrs.multiTreeModel;
	
				//node id
				var nodeId = attrs.nodeId || 'id';
	
				//node label
				var nodeLabel = attrs.nodeLabel || 'label';
	
				//children
				var nodeChildren = attrs.nodeChildren || 'children';
				
				//tree template
				var template =
				'<ul>' +
				'<li data-ng-repeat="node in ' + treeModel + ' | filter:queryOrg">' +
				'<i class="collapsed" data-ng-show="node.' + nodeChildren + '.length && node.collapsed" data-ng-click="' + treeId + '.selectNodeHead(node)"></i>' +
				'<i class="expanded" data-ng-show="node.' + nodeChildren + '.length && !node.collapsed" data-ng-click="' + treeId + '.selectNodeHead(node)" data-ng-dblclick="' + treeId + '.selectNode()"></i>' +
				'<i class="normal" data-ng-hide="node.' + nodeChildren + '.length"></i> ' +
				'<span data-ng-class="node.selected" data-ng-click="' + treeId + '.selectNodeLabel(node)" data-ng-dblclick="' + treeId + '.selectNode()">{{node.' + nodeLabel + '}}</span>' +
				'<div data-ng-hide="node.collapsed" data-tree-id="' + treeId + '" data-multi-tree-model="node.' + nodeChildren + '" data-node-id=' + nodeId + ' data-node-label=' + nodeLabel + ' data-node-children=' + nodeChildren + '></div>' +
				'</li>' +
				'</ul>';
	
	
				//check tree id, tree model
				if( treeId && treeModel ) {
					//root node
					if( attrs.angularTreeview ) {
						//create tree object if not exists
						$scope[treeId] = $scope[treeId] || {};
			
						//if node head clicks,
						$scope[treeId].selectNodeHead = $scope[treeId].selectNodeHead || function( selectedNode ){
							//Collapse or Expand
							selectedNode.collapsed = !selectedNode.collapsed;
						};
						//if node label clicks,
						$scope[treeId].selectNodeLabel = $scope[treeId].selectNodeLabel || function( selectedNode ){
							//remove highlight from previous node
							if( $scope[treeId].currentNode && $scope[treeId].currentNode.selected ) {
								$scope[treeId].currentNode.selected = undefined;
							}
				
							//set highlight to selected node
							selectedNode.selected = 'selected';
				
							//set currentNode
							$scope[treeId].currentNode = selectedNode;
							
							
						};
						
						//双击事件
						$scope[treeId].selectNode = function(){
							$scope.selecteNote();
						};
					}
		
					//Rendering template.
					element.html('').append( $compile( template )( $scope ) );
				}
			}
		};
	}

	directive.$inject = deps;
	app.lazy.directive("multiTreeModel", directive);
});