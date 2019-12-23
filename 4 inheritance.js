// PROTOTYPE INHERITANCE


// PERSON CONSTRUCTOR
function Person(firstName, lastName) 
{
    this.firstName = firstName;
    this.lastName = lastName;
}


// GREETING
Person.prototype.greeting = function() 
{
    return `Hello There ${ this.firstName} ${ this.lastName }`;
}
const person1 = new Person('Marvic', 'Meneses');
console.log(person1.greeting());


// CUSTOMER CONSTRUCTOR
function Customer(firstName, lastName, phone, membership) 
{
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}



// INHERIT THE PERSON PROTOTYPE METHOD()
Customer.prototype = Object.create(Person.prototype);



// MAKE CUSTOMER PROTOTYPE RETURN CUSTOMER()
Customer.prototype.constructor = Customer;



// CREATE CUSTOMER
const customer1 = new Customer('Kim Da', 'Hyun', '958-238-4056', 'Standard');
console.log(customer1);



// CUSTOMER GREETING
Customer.prototype.greeting = function() 
{
    return `Hello Miss. ${ this.firstName } ${ this.lastName } Welcome to my Life`;
}
console.log(customer1.greeting());