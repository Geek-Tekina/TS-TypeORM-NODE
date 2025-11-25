// using public private in the constructor, creates the property as well as assign the values passed, no need of assignment using this
class User{
    private nickName : string;
    constructor(public firstName : string, public lastName : string, private age : number){};
    // to access private member we need a getter
    get getAge(){
        return this.age;
    }
    get fullName(){
        return this.firstName + " " + this.lastName;
    }
    set setNickName(n : string){
        this.nickName = n;
    }
    static userCount = 0;

}
class Employee extends User{
    constructor(public eId: number, public orgName: string, firstName: string, lastName: string, age : number) {
        super(firstName, lastName, age);  // sending parameters for custom constructor in parent class
    }
}


const max = new User("Maximillian", "Schrader", 38);
// console.log(max.firstName)
console.log(max.getAge);
const users = User.userCount;