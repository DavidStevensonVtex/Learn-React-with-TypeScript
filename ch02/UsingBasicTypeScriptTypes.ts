function getTotal(
    unitPrice: number,
    quantity: number,
    discount: number
): number {
    const priceWithoutDiscount = unitPrice * quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
}

let total: string = getTotal(100, "one", 0.1);

// Errors in code
// Type 'number' is not assignable to type 'string'.
// Argument of type 'string' is not assignable to parameter of type 'number'.