// Question - 1
// you are creating a website for your college. Create a class user with
// 2 properties, name and email. It also has a method called viewData() that allows user to view website data

let data = "here is the normal data of the college -- hehehehhe";
class user {
    constructor(name, email) {
        this.fullName = name;
        this.email = email;
    }
    viewData() {
        console.log(this.fullName);
        console.log(this.email);
        console.log("Data is:  ", data);
    }
}

let dtu = new user("dtu", "@dtu.ac.in");
console.log(dtu.viewData());


// Question - 2
// Create a new class called Admin which inherits from User. Add a new method called editData
// to admin that allows it to edit website data.

class admin extends user{
    editData() {
        let str = prompt("enter data you want to add in the existing data");
        data = data + " " + str;
        console.log("new data is = ", data);
    }
}

let admin1 = new admin("sanoj", "sanoj@gmail.com");
console.log(admin1.editData());