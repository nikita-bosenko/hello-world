class StoreController {
  constructor($http) {
    this.name = 'store';
    this.books = null;
    this.orderProp = 'age';
    this.getBooksList($http);
  }

  getBooksList($http) {
    let t = this;

    $http.get('https://www.googleapis.com/books/v1/users/117830434221388092125/bookshelves/1001/volumes?maxResults=40').success(function (data) {
      let data0 = [];
      let data1 = data.items;
      let data2 = data.items;
      t.books = data0.concat(data1, data2); //чтобы в store было больше книг, т.к ограничени гугля = 40 штук в ответе
    });
  }
}
StoreController.$inject = ['$http'];
export default StoreController;



