class BookController {
  constructor($scope, $stateParams, $http) {

    this.$scope = $scope;
    this.$stateParams = $stateParams;
    this.$http = $http;

    this.name = 'book';
    this.$scope.bookId = this.$stateParams.bookId;
    this.getBookInfo();
  }

  getBookInfo() {
    let t = this;
    this.$http.get('books/' + this.$stateParams.bookId + '.json').success(function (data) {
      t.$scope.book = data;
      t.$scope.mainImageUrl = data.images[0];
    });
  }

  setImage(imageUrl) {
    this.$scope.mainImageUrl = imageUrl;
  }
}
BookController.$inject = ['$scope', '$stateParams', '$http'];

export default BookController;
