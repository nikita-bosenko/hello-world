var _state = new WeakMap(); //https://habrahabr.ru/post/265847/
var _Authorization = new WeakMap();

class AuthController {
  constructor($state, Authorization) {
    this.name = 'auth';
    _state.set(this, $state);
    _Authorization.set(this, Authorization);
      }
  onLogin() {
    let credLogin = 'bosenko';
    let credPassword = '555444';
    let $login = $('.form-auth').find('.form-auth__input-login').val();
    let $password = $('.form-auth').find('.form-auth__input-password').val();
   
    if (credLogin !== $login || credPassword !== $password) {
      alert('Incorrect credentials!');
      return;
    }
    _Authorization.get(this).go('home');

  }
 }
AuthController.$inject = ['$state', 'Authorization'];
export default AuthController;
