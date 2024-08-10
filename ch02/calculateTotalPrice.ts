function calculateTotalPrice(
    product: { name: string; unitPrice: number },
    quantity: number,
    discount: number) {
    // VSCode: Property 'price' does not exist on type '{ name: string; unitPrice: number; }'.
    const priceWithoutDiscount = product.unitPrice * quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
}