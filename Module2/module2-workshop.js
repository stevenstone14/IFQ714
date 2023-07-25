//Step 1: Create a script that first puts the employee and sale examples into objects by using inbuilt functions or creating the objects from scratch. 
let employee = JSON.parse('{"id":1,"firstName":"John", "lastName":"Smith", "gender":"Male", "age":23, "position":"Manager"}');
let sale = JSON.parse('{"staffId":1, "item":"Wi-Fi Adapter", "price":40.00, "date":"01-09-2022"}');

//Step 2: Create functions that output a formatted version of the information for the employee and sale. 
console.log('\n');
console.log(EmployeeDetails());
console.log(SaleDetails());
console.log('\n');

function EmployeeDetails() {
    return `id: ${employee.id}, name: ${employee.firstName} ${employee.lastName}, gender: ${employee.gender}, age: ${employee.age}, position: ${employee.position}`;
}

function SaleDetails() {
    return `staff Id: ${sale.staffId}, item Sold: ${sale.item}, price: ${sale.price}, sale date: ${sale.date}`;
}

//Step 3: Create a constructor for these two object types to make it easier to define new employees and sales in future. Example data to use with the constructors:
//      The employee shown above sold a second Wi-Fi Adapter two days after their first sale.
//      The store also has a female salesperson named Mary Sue, who is 32 years old.
let options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

let newSaleItem = new Sale(1, "Wi-Fi Adapter", 40.00, "03-09-2022")
let newEmployee = new Employee(2, "Mary", "Sue", "Female", 32, "Salesperson");

console.log(newEmployee.showDetails());
console.log(newSaleItem.showDetails());
console.log('\n');

function Employee(id, firstName, lastName, gender, age, position) {
    this.id = id
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.position = position;
    this.showDetails = function() {
        return `id: ${this.id}, name: ${this.firstName} ${this.lastName}, gender: ${this.gender}, age: ${this.age}, position: ${this.position}`;
    };
};

function Sale(staffId, item, price, date){
    this.staffId = staffId;
    this.item = item;
    this.price = price;
    this.date = GetDayOfTheWeek(date);
    this.showDetails = function(){
        return `staff id: ${this.staffId}, item: ${this.item}, price: ${this.price}, sale date: ${ this.date}`;
    };
};

function GetDayOfTheWeek(d) {
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let dateDay = d.slice(3,5);
    let dateMonth = d.slice(0,2);
    let dateYear = d.slice(6,10);
    let formatDate = new Date(`${dateDay}-${dateMonth}-${dateYear}`);
    return days[formatDate.getDay()];
    }
    
//Step 4: Make an array each for the two types of objects you have, with the original objects and the above objects you created in the array.
let listOfEmployees = [
    [employee.id,employee.firstName,employee.lastName, employee.gender, employee.age, employee.position],
    [newEmployee.id, newEmployee.firstName, newEmployee.lastName, newEmployee.gender, newEmployee.age, newEmployee.position]
];

let listOfSales = [
    [sale.staffId, sale.item, sale.price, sale.date],
    [newSaleItem.staffId, newSaleItem.item, newSaleItem.price, newSaleItem.date]
];

console.log(listOfEmployees);
console.log(listOfSales);
console.log('\n');