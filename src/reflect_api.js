//Reflect.get method
var obj = { name: "Chandler" };
var empName = Reflect.get(obj, "name");
console.log(empName);

//Reflect.set method
var obj = { empID: "" };
Reflect.set(obj, "empID", "10120");
console.log(obj.empID);

//Reflect.has method
var obj = { designation: "Developer" };
console.log(Reflect.has(obj, "designation"));

//Reflect.apply method
let target = function getArea(width, height) {
    return `${width * height}${this.units}`;
}
let thisValue = { units: 'm' };
let args = [10, 3.5];
console.log(Reflect.apply(target, thisValue, args));

//Reflect.construct method
let ID = class empEmailID {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    get contact() {
        return `${this.name} <${this.email}>`;
    }
};
let input = [
    'Jill',
    'jill.watson@abccorp.in'
];
let myAccount = Reflect.construct(
    ID,
    input);
console.log(myAccount.contact);

//Reflect.getOwnPropertyDescriptor(object, property) method
var obj = { name: "Amanda" };
var descriptor = Reflect.getOwnPropertyDescriptor(obj, "name");
console.log(descriptor);