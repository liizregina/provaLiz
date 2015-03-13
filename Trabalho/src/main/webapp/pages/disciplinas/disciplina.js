module = angular.module("Prova", []);

module.controller("ManterDisciplina", ["$scope","$http", ManterDisciplina]);


function ManterDisciplina($scope,$http) {
    

    $scope.iniciar = funcaoIniciar;
    $scope.salvar = funcaoSalvar;
    $scope.excluir = funcaoExcluir;
    $scope.editar = funcaoEditar;
    
    $scope.disciplinas = [];
    $scope.disciplina = {};
    $scope.isNovo = true;
    
    function funcaoEditar(vitima) {
        $scope.disciplina = angular.copy(vitima);
        $scope.isNovo = false;
    }

    
    function funcaoExcluir(vitima) {
        $http.remove("/disciplinas" + vitima).success(onSuccess).error(onError);
        
        function onSuccess(data,status) {
            $scope.disciplina = data;
            funcaoCarregar();
        }
        function onError(data,status) {
            alert("Deu erro" + data);
        }
    }
    
    function funcaoSalvar() {
        $http.post
    }
    
    function funcaoCarregar() {
        $http.get("/disciplinas").success(onSuccess).error(onError);
        
        function onSuccess(data, status) {
            $scope.disciplinas = data;       
            console.log(data);
        }
        function onError(data, status) {
            alert("Deu erro: " + data);
        }
    }
    
    function funcaoIniciar() {
        funcaoCarregar();
        console.log(">>> disciplinas carregadas....");
    }
        
}
