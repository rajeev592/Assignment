class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    get password() {
        return this._password.replace(/./g,"*");
    }

    set password(newpassword) {
        if(newpassword.length >=8 &&/[0-9]/.test(newpassword) &&/[A-Z]/.test(newpassword)) {
            this._password = newpassword;
        } else {
            console.error('Invalid password. password must be at least 8 characters long and contain at least one number and one Uppercase letter.');
        }
    }
}

const user = new User('Rajeev Ranjan','pass1234')
console.log(User.password);

User.password = 'newpass';

User.password = 'Newpass123'
console.log(User.password);