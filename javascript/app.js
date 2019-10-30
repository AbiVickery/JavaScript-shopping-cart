let cart = []

function addToCart(item, price) {
    let cart = []
    if (!cart.length) {
        //empty
        cart.push({
            qty: 1,
            name: item,
            price: price
        });
    } else {
        let found = false;
        cart.forEach(cartItem => {
            if (cartItem.name == item) {
                cartItem.qty++;
                found = true;
            }
        });

        if (!found) {
            cart.push({
                qty: 1,
                name: item,
                price: price
            });
        }
    }
    updateCart(cart)
}