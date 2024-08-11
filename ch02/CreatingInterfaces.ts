interface Purchase { (quantity: number): void }

interface Product {
    name: string;
    unitPrice?: number;
    purchase: Purchase
}

interface DiscountedProduct extends Product {
    discount: number;
}

let chairOnSale = { name: "Chair on sale", unitPrice: 30, discount: 5 };

let table: Product = {
    name: "Table",
    purchase: (quantity: number) =>
        console.log(`Purchased ${quantity} tables`)
}

table.purchase(4);