
(function(){
    'use strict';

    angular
        .module('todoApp',[])
        .controller('todoList',todoList);

    function todoList ($scope){
        var ds = $scope;

       //ds.isShow = true;
        ds.value = '';
        ds.showValue = '';
        ds.array = [];
        ds.obj={name:'adilismail',email:'adilismail4@gmail.com',number:'03242140215',address:'model colony karachi'};

        ds.save = function(obj){
            console.log(obj);
            ds.showValue = ds.value;
            ds.array.push(obj);
            ds.obj={name:'',email:'',number:'',address:''};
        };

        ds.delete = function(index){
            ds.array.splice(index,1)
        };

        ds.edit = function(index){
            //ds.isShow = false;
            ds.obj = ds.array[index];
        };
        ds.saving = function(){
            ds.obj={name:'',email:'',number:'',address:''};
        }
    }

})();































