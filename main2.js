// Your job is to create an object that represents a financial advisor and has the following properties and methods.

// Company (enumerable, writable, property)
// Specialty (enumerable, writable, property)
// Name (enumerable, property)
// Portfolio (non-enumerable, property) - Should display the stocks the advisor currently holds
// Worth (non-enumerable, method)
// Purchase (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
// Sell (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
// When sell() or purchase() are invoked, then the stock portfolio should be modified accordingly. Start off with making portfolio property an array that holds transactions.

// When you invoke the worth() method, it should look at every transaction and calculate the advisor's net worth.


let advisor = Object.create({}, {
    company: {
        value:"Kao Jai LLC",
        enumerable: true,
        writable: true
    },
    specialty: {
        value:"coffee loans",
        enumerable: true,
        writable: true
    },
    name: {
        value:"Meg Ducharme",
        enumerable: true,
        writable: true
    },
    portfolio: {
        value:[],
        enumerable: false
    },
    purchase: {
        value: function(symbol, quantity, price){
            let purchasedStock = {
                company: symbol,
                quantity: quantity,
                price:price
            };
            this.portfolio.push(purchasedStock);
        },
        enumerable: false
    },
    sell: {
        value: function(symbol, quantity, price){
            let portfolio = this.portfolio;
            for(let i = 0; i < portfolio.length; i++){
                if(portfolio[i].company === symbol && portfolio[i].quantity === quantity && portfolio[i].price === price){
                    portfolio.splice(i, 1);
                }
            }
        }
    },
    worth: {
        value: function(){
            let total = 0;
            for(let i = 0; i < this.portfolio.length; i++){
                let stockValue = this.portfolio[i].quantity * this.portfolio[i].price;
                total += stockValue;
            }
            return total;
        }
    }
});


advisor.purchase("SBUX", 1000, 300);
advisor.purchase("AAPL", 2000, 400);
console.log(advisor);
advisor.sell("SBUX", 1000, 300);
console.log(advisor);

console.log(advisor.worth());
