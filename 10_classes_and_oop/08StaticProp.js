class User{
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return (Math.floor(Math.random() * 1000 + 1));
    }
}

const satyam = new User("satyam");
satyam.logMe();
// console.log(satyam.createId());  //not accessible because of static keyword.

class Teacher extends User{
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");
// console.log(iphone.createId()); //not accessible because static in parent;

iphone.logMe();