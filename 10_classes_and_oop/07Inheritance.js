class User{
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const t = new Teacher("satyam", "satyam@gmail.com", "123");
// t.addCourse();
// t.logMe();
const c = new User("chai");
// c.addCourse();//not accessible
// c.logMe();
console.log(t === c);  //false
console.log(c instanceof User);  //true
console.log(c instanceof Teacher);  //false
console.log(t instanceof User);  //true
console.log(t instanceof Teacher);  //true
console.log(Teacher instanceof User); //false

// const satyam = new User("satyam");
// console.log(satyam);

// satyam.constructo("satyam");

// satyam.logMe();