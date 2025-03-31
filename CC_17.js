// Task 1 

// This class represent a regular customer
class Customer {
    constructor(name, email){
        this.name = name; //name
        this.email = email;//email
        this.purchaseHistory = [];//all purchases
    }
    addPurchase(amount){ //adds new purchase to history
        this.purchaseHistory.push(amount);
    }
    getTotalSpent(){ //calculates total money spent
        return this.purchaseHistory.reduce((total, amt)=> total + amt, 0);
    }
}
//Task 2
class SalesRep {  // Class for sales reps
    constructor(name){
        this.name = name //name
        this.clients = [];//clients
    }
    addClient(customer){ // adds a customer to list
        this.clients.push(customer);
    }
    getClientTotal(name){ // how much money theyve spent
        const client = this.clients.find(c => c.name === name);
        if(client){
            console.log(`Total amount ${client.name}: $${client.getTotalSpent()}`);            
        }
    }
}
