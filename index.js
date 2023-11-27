// #1

// function propsCount(currentObject){
//     console.log(Object.keys(currentObject).length)
// };

// let mentor = {
//     course: "JS fundamental",
//     duration: 3,
//     direction: "web development"
//     };
// propsCount( mentor )

// #2

// function showProps (obj) {
//     let properties = [];
//     let keys =[];
//     for(let property in obj) {
//         keys.push(obj[property]);
//         properties.push(property);
//     } ;
//     return console.log(properties, keys)
// };

// let obj = {
//     course: "JS fundamental",
//     duration: 3,
//     direction: "web development",
//     year: 2023,
//     month: "November"
// }
// showProps (obj)

// #3

// class Person {
//     constructor(name, surname){
//         this.name = name;
//         this.surname = surname;
//     }
//     showFullName (){
//         console.log(this.name + ' ' + this.surname )
//     }
// }

// class Student extends Person {
//     constructor(name, surname, year){
//         super(name, surname);
//         this.year = year;
//     }
//     showFullName (middleName){
//        return this.name + ' ' + this.surname + ' ' + middleName
//     }

//     showCourse (){
//         const currentYear = new Date().getFullYear();
//         return currentYear - this.year;
//     }
// }
// const stud1 = new Student("Petro", "Petrenko", 2015);
// console.log(stud1.showFullName("Petrovych"));
//console.log("Current course: " + stud1.showCourse());

// #4

// class Worker {
//     #experience = 1.2;

//     constructor(fullName, dayRate, workingDays) {
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//     }

//     showSalaryWithExperience() {
//         return this.#experience*this.showSalary();
//     }

//     showSalary() {
//         return this.dayRate*this.workingDays;
//     }
//     get experience() { return this.#experience; }

//     set experience(value) { this.#experience = value; }
// }

// let worker1 = new Worker("Tyler Wheatly", 50, 10);
// console.log(worker1.fullName);
// console.log(worker1.fullName + ' salary: ' + worker1.showSalary());
// console.log("New experience: " + worker1.experience);
// console.log(worker1.fullName + ' salary: ' + worker1.showSalaryWithExperience());
// worker1.experience = 1.5;
// console.log("New experience: " + worker1.experience);
// console.log(worker1.fullName + ' salary: ' + worker1.showSalaryWithExperience());

// let worker2 = new Worker("Addison Chasey", 100, 15);
// console.log(worker2.fullName);
// console.log(worker2.fullName + ' salary: ' + worker2.showSalary());
// console.log("New experience: " + worker1.experience);
// console.log(worker2.fullName + ' salary: ' + worker2.showSalaryWithExperience());
// worker2.experience = 1.5;
// console.log("New experience: " + worker1.experience);
// console.log(worker2.fullName + ' salary: ' + worker2.showSalaryWithExperience());

// let worker3 = new Worker("Lillian Morrison", 150, 20);
// console.log(worker3.fullName);
// console.log(worker3.fullName + ' salary: ' + worker3.showSalary());
// console.log("New experience: " + worker1.experience);
// console.log(worker3.fullName + ' salary: ' + worker3.showSalaryWithExperience());
// worker3.experience = 1.5;
// console.log("New experience: " + worker1.experience);
// console.log(worker3.fullName + ' salary: ' + worker3.showSalaryWithExperience());

// function salarySorting(workersArr){
//     return workersArr.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());
// };

// let workers = [worker1, worker2, worker3];

// const sortWorkers = salarySorting(workers);

// for (worker in sortWorkers){
//     console.log(`${sortWorkers[worker].fullName}: ${sortWorkers[worker].showSalaryWithExperience()}`);
// };

// function dynamicSorting(workers, property){
//     return workers.sort((a, b) => a[property] - b[property]);
// };