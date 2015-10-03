'use strict';


var DynaCtrl = function(_, util) {
        var obj = this;
        obj.names = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        obj.fileData = {};
        obj.showSettings = true;
        obj.toggleSet = function() {
            obj.showSettings = !obj.showSettings;
        }
        obj.toggleCol = function(idx) {
            obj.table.cols[idx].display = !obj.table.cols[idx].display;
        };
        obj.moveUp = function(idx) {
            if (idx > 0) {
                var currentPos = obj.table.colPosition[idx];
                obj.table.colPosition[idx] = obj.table.colPosition[idx - 1];
                obj.table.colPosition[idx - 1] = currentPos;
            }
        }
        obj.moveDown = function(idx) {
            if (idx < obj.table.colPosition.length) {
                var currentPos = obj.table.colPosition[idx];
                obj.table.colPosition[idx] = obj.table.colPosition[idx + 1];
                obj.table.colPosition[idx + 1] = currentPos;
            }
        }
        obj.tablexx = {
            'colPosition': [0, 1, 2, 3, 4, ],
            'cols': [{
                'display': true,
                'value': 'sno'
            }, {
                'display': false,
                'value': 'mango'
            }, {
                'display': true,
                'value': 'orange'
            }, {
                'display': true,
                'value': 'apple'
            }, {
                'display': true,
                'value': 'banana'
            }, ],
            'rows': [{
                'display': true,
                'value': ['1', 'mango1', 'orange1', 'apple1', 'banana1'],
            }, {
                'display': true,
                'value': ['2', 'mango2', 'orange2', 'apple2', 'banana2'],
            }, {
                'display': true,
                'value': ['3', 'mango3', 'orange3', 'apple3', 'banana3'],
            }, {
                'display': true,
                'value': ['4', 'mango4', 'orange4', 'apple4', 'banana4'],
            }, {
                'display': true,
                'value': ['5', 'mango5', 'orange5', 'apple5', 'banana5'],
            }, {
                'display': true,
                'value': ['6', 'mango6', 'orange6', 'apple6', 'banana6'],
            }, {
                'display': true,
                'value': ['7', 'mango7', 'orange7', 'apple7', 'banana7'],
            }, ]
        };

        obj.streamData = function(data) {
            console.log(data);
            var c = _;
            console.log(_);
            obj.name = data;
            var rawData = _.map(data.split(/\n/), function(rowStr) {
                if (rowStr) {
                    return rowStr.split(',');
                }
            });
            var csvdata = _.filter(rawData, function(row) {
                if (row) {
                    return true;
                }
            });
            var head = _.first(csvdata);
            var body = _.rest(csvdata, 1);
            obj.table = {};
            obj.table.colPosition = _.range(head.length);
            obj.table.cols = _.map(head, function(val) {
                return {
                    'display': true,
                    'value': val
                };
            });
            obj.table.rows = _.map(body, function(val) {
                return {
                    'display': true,
                    'value': val
                };
            });
        }
    }
    /**
     * @ngdoc function
     * @name projectsApp.controller:DynaCtrl
     * @description
     * # DynaCtrl
     * Controller of the projectsApp
     */
angular.module('projectsApp')
    .controller('DynaCtrl', ['_', 'util', DynaCtrl]);
