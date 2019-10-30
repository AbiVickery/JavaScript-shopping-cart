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
    updateCart(cart);
} 

function updateCart(cart) {
    var total = 0;
    var cartOutput = document.getElementById('cart');
    cart.forEach(item => {
        total += item.qty;
    });
    cartOutput.innerText = '(${total})';
    console.log(cart);
}

function checkout(cart) {
    var items = document.getElementById('items');
    items.classList.add("hidden");
    var checkout = document.getElementById('checkout');
    checkout.classList.remove("hidden");
}