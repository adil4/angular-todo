(function(){

    'use strict';

    angular
        .module('todo', [])
        .controller('TodoList', TodoList);

    //function HomeController ($scope){
    //
    //    var vm = $scope;
    //
    //    vm.show = true;
    //
    //    //vm.invisible = function(){
    //    //    vm.show = false;
    //    //};
    //    //vm.visible = function(){
    //    //    vm.show = true;
    //    //};
    //}

    function TodoList ($scope){

        console.log('TodoListCTRL');

        var vm = $scope;
        vm.isShow = true;
        vm.value = '';
        vm.showValue = '';
        vm.array = [];
        vm.obj ={name:'adil',email:'adil.98@live.com',number:1234567,address:'model'};

        vm.save = function(obj){
            vm.showValue = vm.value ;
            vm.array.push(obj);
            vm.obj ={name:'',email:'',number:'',address:''};
            console.log('arr',vm.array)
        };
        vm.delete = function(index){
            vm.array.splice(index,1)
        };
        vm.edit = function(index){
            vm.isShow = false;
            vm.obj =  vm.array[index];
            //console.log(vm.array[index])
        };
        vm.saving = function(){
            vm.obj ={name:'',email:'',number:'',address:''};

        };
    }
})();