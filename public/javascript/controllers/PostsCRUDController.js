app.controller('PostsCRUDController', function ($scope, $rootScope, $state, $stateParams, PostsService) {
  $scope.post = {
    title: null,
    categories: null,
    content: null,
    created_at: new Date()
  }

  $scope.create = function () {
    PostsService.addPosts($scope.post).success(function (data) {
      $rootScope.$broadcast('new-post')
      $state.go('posts.list')
    })
  }

  $scope.back = function () {
    $state.go('posts.list')
  }

  if ($stateParams.id) {
    PostsService.getPosts($stateParams.id).success((data) => {
      $scope.post = data
    })
  }
})
