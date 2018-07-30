// Your job is to create an object that represents a financial advisor and has the following properties and methods.

// Company (enumerable, writable, property)
// Specialty (enumerable, writable, property)
// Name (enumerable, property)
// Portfolio (non-enumerable, property) - Should display the stocks the advisor currently holds
// Worth (non-enumerable, method)
// Purchase (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
// Sell (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
// When sell() or purchase() are invoked, then the stock portfolio should be modified accordingly. Start off with making portfolio property an array that holds transactions.

// When you invoke the worth() method, it should look at every transaction and calculate the advisor's current worth.


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
    worth: {
        value:function(){
            let worth = this.portfolio.reduce((accumulator, stock) => {
                return accumulator + (stock.price * stock.quantity);
            }, 0);
            return worth;
        },
        enumerable: false
    },
    purchase: {
        value: function(symbol, quantity, price){
            let newPurchase = {
                symbol: symbol,
                quantity: quantity,
                price: price,
                sold: false
            };
            this.portfolio.push(newPurchase);
        },
        enumerable: true
    },
    sell: {
        value: function(symbol, quantity, price){

            let findStock = this.portfolio.find(stock => {
                return stock.symbol === symbol && stock.sold === false;
            })
            
            if(findStock.quantity < quantity){
                alert(`You do not have that much stock in ${symbol}!`);
            }else{
                let index = this.portfolio.indexOf(findStock);
    
                this.portfolio.splice(index, 1);
    
                let soldStock = {
                    symbol: symbol,
                    quantity: quantity,
                    price: price,
                    sold: true
                }
    
                let updatedStock = {
                    symbol: findStock.symbol,
                    quantity: findStock.quantity - soldStock.quantity,
                    price: soldStock.price,
                    sold: false
                }
    
                this.portfolio.push(soldStock, updatedStock);
            }

        },
        enumerable: false
    }
});

advisor.purchase("AAPL", 534, 3636);
advisor.purchase("AMZN", 346, 3399);
advisor.purchase("SBUX", 324, 9987);
advisor.sell("AAPL", 500, 3109);
console.log(advisor);





///CHALLENGE

let output = document.querySelector("#output");

let fragment = document.createDocumentFragment()

let nameEl = document.createElement("H1")
nameEl.textContent = advisor.name;
fragment.appendChild(nameEl)

let comapanyEl = document.createElement("H1")
comapanyEl.textContent = advisor.specialty;
fragment.appendChild(comapanyEl)

output.appendChild(fragment)




