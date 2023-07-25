//Step 1: Create a script that first puts the employee and sale examples into objects by using inbuilt functions or creating the objects from scratch. 
let employee = JSON.parse('{"id":1,"firstName":"John", "lastName":"Smith", "gender":"Male", "age":23, "position":"Manager"}');
let sale = JSON.parse('{"staffId":1, "item":"Wi-Fi Adapter", "price":40.00, "date":"01-09-2022"}');

//Step 2: Create functions that output a formatted version of the information for the employee and sale. 
console.log("\n" + EmployeeFormat());
console.log(SaleFormat()+ "\n");

function EmployeeFormat() {
    return `id: ${employee.id}, name: ${employee.firstName} ${employee.lastName}, gender: ${employee.gender}, age: ${employee.age}, position: ${employee.position}`;
}

function SaleFormat() {
    return `staff Id: ${sale.staffId}, item Sold: ${sale.item}, price: ${sale.price.toFixed(2)}, sale date: ${sale.date}`;
}

//Step 3: Create a constructor for these two object types to make it easier to define new employees and sales in future. Example data to use with the constructors:
let newSaleItem = new Sale(1, "Wi-Fi Adapter", 40.00, "03-09-2022")
let newEmployee = new Employee(2, "Mary", "Sue", "Female", 32, "Salesperson");

//check toString method is working on custom objects
console.log(newSaleItem.toString());
console.log(newEmployee.toString());

function Employee(id, firstName, lastName, gender, age, position) {
    this.id = id
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.position = position;
    this.toString = function() {
        return `id: ${this.id}, name: ${this.firstName} ${this.lastName}, gender: ${this.gender}, age: ${this.age}, position: ${this.position}`;
    };
};

function Sale(staffId, item, price, date){
    this.staffId = staffId;
    this.item = item;
    this.price = price;
    this.date = GetDayOfTheWeek(date);
    this.toString = function(){
        return `staff id: ${this.staffId}, item: ${this.item}, price: ${this.price.toFixed(2)}, sale date: ${this.date}`;
    }
};

//convert the date string in sales object and get that date's day of the week
function GetDayOfTheWeek(d) {
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const dateDay = d.slice(3,5), dateMonth = d.slice(0,2), dateYear = d.slice(6,10);
    const formatDate = new Date(`${dateDay}-${dateMonth}-${dateYear}`);
    return days[formatDate.getDay()];
    }
    
//Step 4: Make an array each for the two types of objects you have, with the original objects and the above objects you created in the array.
let arr = [
    [JSON.stringify(employee),JSON.stringify(newEmployee)],
    [JSON.stringify(sale),JSON.stringify(newSaleItem)]
];

console.log(arr);