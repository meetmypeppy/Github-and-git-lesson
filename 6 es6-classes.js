// ES6 standard 


class Person // class object
{
    constructor(firstName, lastName, dob) //!
    {
        this.firstName = firstName; // firstName comes from the parameters
        this.lastName = lastName; // lastName comes form the parameters
        this.birthday = new Date(dob);
    }
    
    
    greeting()
    {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }


    calculateAge()
    {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }


    getsMarried(newLastName)
    {
        this.lastName = newLastNamed //newLastNamed comes from the parameter AGAIN!
    }


    static addNumber(x, y)
    {
        return x + y;
    }
}


const Kirk = new Person('Deontae', 'Gutmann' , '11-20-88') // new Person (firstName, lastName, dob)


console.log(Kirk.addNumber());
console.log(Kirk.greeting());