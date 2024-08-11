type Product = { name: string; unitPrice?: number };
let table: Product = { name: "Table" };
let chair: Product = { name: "Chair", unitPrice: 40 };

type DiscountedProduct = Product & { discount: number };

let chairOnSale = { name: "Chair on sale", unitPrice: 30, discount: 5 };

// A type alias can also be used to represent a function
type Purchase = (quantity: number) => void;
type NewProduct = {
    name: string,
    unitPrice?: number,
    purchase: Purchase
}

let anotherTable: NewProduct = {
    name: "Table",
    purchase: (quantity) =>
        console.log(`Purchased ${quantity} tables`)
}

anotherTable.purchase(4);

// output
// "Purchased 4 tables" 