class Fbw3 {
    constructor ( students,age,hobby) {
        this.students = students;
        this.age = age;
        this.hobby = hobby;
    }
    studentInfo(){
        console.log('The student is:', this.students)
        console.log ('And the he Like to do ', this.hobby)
    }
    obtainAge(){
        return this.age
    }
}

module.exports = Fbw3;