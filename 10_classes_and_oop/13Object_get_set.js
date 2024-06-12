const User = {
    _email: 's@satyam.com',
    _password: 'abc',

    set email(value) {
        this._email = value;
    },
    
    get email() {
        return this._email.toUpperCase();
    },

    set password(value) {
        this._password = value;
    },

    get password() {
        return this._password.toUpperCase();
    }

}

const satyam = Object.create(User);
console.log(satyam);
console.log(satyam.email);
console.log(satyam.password);
