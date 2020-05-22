
var employees = [];

function Employee (name, job_title, salary, status = "Full Time") {
    this.name = name;
    this.job_title = job_title;
    this.salary = salary;
    this.status = status;

this.printEmployeeForm = function() {
    console.log(`Name: ${name}, Job Title: ${job_title}, Salary: ${salary}, Status: ${status}`);
}

employees.push(this);
}

var employeeSmith = new Employee("Bob Smith", "Pizza Man", "$500.00/hour");
var employeeBrown = new Employee("Tod Brown", "Salesman", "$1500.00/hour");
var employeeAlford = new Employee("Sandy Alford", "Boss Lady", "$5000.00/hour", "Part Time");

employeeSmith.printEmployeeForm();
employeeBrown.printEmployeeForm();
employeeAlford.printEmployeeForm();

console.log(employees);