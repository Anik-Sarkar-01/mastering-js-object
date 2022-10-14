//Understanding Method
const student = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    //Declaring Method
    //When we are calling a object property from a method of that function, then we need to include - this.
    //Method can even return instead of console.log
    //we can use the property of an object inside a method
    exam: function(){
        // console.log(this.name, 'is participating in an exam');
        return this.name + 'is participating in an exam';
    },
    //We can call a method from another Method 
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    //we can set the value of a property using method
    treatDey: function(amount){
        this.money = this.money - amount;
        return this.money;
    }
}
// Calling the method
// student.exam();
const output = student.exam();
// console.log(output);
const reExam = student.improveExam('Algebra');
// console.log(reExam);
const remaining = student.treatDey(900);
// console.log(remaining);