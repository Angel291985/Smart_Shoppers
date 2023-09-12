let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'grey tshirt',
        tag: 'kids',
        price: 15,
        inCart: 0
    },
    {
        name: 'grey tshirt',
        tag: 'kids',
        price: 15,
        inCart: 0
    },
    {
        name: 'grey tshirt',
        tag: 'kids',
        price: 15,
        inCart: 0
    },
    {
        name: 'grey tshirt',
        tag: 'kids',
        price: 15,
        inCart: 0
    },
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        console.log("add to cart");
    })
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cat span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cat span').textContent = 1;
    }
}
