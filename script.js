document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const products = [
    { name: "Apples", price: "$1.50/kg" },
    { name: "Bananas", price: "$0.90/kg" },
    { name: "Carrots", price: "$1.20/kg" },
    { name: "Tomatoes", price: "$2.00/kg" },
    { name: "Milk", price: "$1.00/L" },
];

const productList = document.getElementById("product-list");

products.forEach(product => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - ${product.price}`;
    productList.querySelector("ul").appendChild(li);
});
