// SUB CLASSES


class Person
{
    constructor(firstName, lastName,) // this is OBJECT
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }    

    
    greeting ()
    {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person
{
    constructor(firstName, lastName, phone, membership)
    {
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }

    
    static getMembershipCost()
    {
        return 500;
    }
}


const john = new Customer('Raoul','Breitenberg', '1-579-304-9844 x53173','Standard')
console.log(john.greeting(), Customer.getMembershipCost())