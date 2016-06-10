class StoreController {
  constructor($http) {
    this.name = 'store';
    this.books = null;
    this.orderProp = 'age';
    this.getBooksList($http);
  }
  getBooksList($http) {
    let t = this;
    $http.get('books/books.json').success(function(data) {
      t.books = data;
    });
  }
}
StoreController.$inject = ['$http'];
export default StoreController;
