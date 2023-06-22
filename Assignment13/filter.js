function filterByCategory(products) {
    return function(category) {
        return products.filter(product => product.category=== category);
    };
};

const productsArray = [
    {name: "Product 1", category: "Electronics"},
    {name: "Product 2", category: "Clothing"},
    {name: "Product 3", category: "Electronics"},
    {name: "Product 4", category: "Home Decor"},
    {name: "Product 5", category: "Clothing"},

];

const filterProductsByCategory = filterByCategory(productsArray);

const electronicsProducts = filterProductsByCategory("Electronics");
console.log(electronicsProducts);

const clothingProducts = filterProductsByCategory("Clothing");
console.log(clothingProducts);