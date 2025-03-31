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
