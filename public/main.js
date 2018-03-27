angular
  .module("scoreboardApp", [])
  .controller("mainController", ($scope) => {
    $scope.team1NameContainer = "";
    $scope.team1DisplayName = "";
    $scope.changeTeam1Name = () => {
      $scope.team1DisplayName = $scope.team1NameContainer
    }
    $scope.team2NameContainer = "";
    $scope.team2DisplayName = "";
    $scope.changeTeam2Name = () => {
      $scope.team2DisplayName = $scope.team2NameContainer
    }
    $scope.team1Score = 0;
    $scope.add1Team1Score = () => {
      $scope.team1Score = $scope.team1Score + 1;
    }
    $scope.sub1Team1Score = () => {
      $scope.team1Score -= 1;
    }
    $scope.team2Score = 0;
    $scope.add1Team2Score = () => {
      $scope.team2Score = $scope.team2Score + 1;
    }
    $scope.sub1Team2Score = () => {
      $scope.team2Score -= 1;
    }
  })