// using prototype

const personPrototypes =
{
    greetings: function()
    {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }, //1st property
    getsMarried: function(newLastName)
    {
        this.lastName = newLastName
    } //2nd property
}

const Mary = Object.create(personPrototypes);


Mary.firstName = 'Kristopher';
Mary.lastName = 'Morissette';
Mary.age = 21;

Mary.getsMarried('Green');


console.log(Mary.greetings())


const bob = Object.create(personPrototypes,
{
    firstName:
    {
        value: 'Bobby'
    },
    lastName: 
    {
        value: 'Ferrer'
    },
    age:
    {
    value: 36
    }
}
);

// console.log(bob); //Output: line 27-41
console.log(bob.greetings());
