// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.name =  attributes.name;
        this.age =  attributes.age;
        this.location = attributes .location
    }
    speak(){
        return `Hello my name is {this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes)
        this.specialty = instructorAttributes.specialty
        this.favLanguage = instructorAttributes.favLanguage
        this.catchPhrase = instructorAttributes.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`

    }
}

class Student extends Person{
    constructor(studentAttr){
        super(studentAttr)
        this.previousBackground = studentAttr.previousBackground
        this.className = studentAttr.className
        this.favSubjects = studentAttr.favSubjects
    }
        listSubjects(){
            return this.favSubjects
        }
        PRAssignment(subject){
            `${this.name} has submitted a PR for ${subject}.`
        }
        sprintChallenge(subject){
            `${this.name} has begun sprint challenge on ${subject}.`
        }
        
}

class ProjectManager extends Instructor{
    constructor(projectManagerAttr){
        super(projectManagerAttr)
        this.gradClassName = projectManagerAttr.gradClassName
        this.favInstructor = projectManagerAttr.favInstructor
    }
    standUp(slackChannel){
        return `${this.name} announces to ${slackChannel}, @channel standy times!`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}