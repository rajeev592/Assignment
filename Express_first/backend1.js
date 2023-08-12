const http = require('http');


const PORT = 3535;
const HOSTNAME = 'localhost';


// Sample Product Data

const menProducts = [{
    "id": "1",
    "name": "Men's T-shirt",
    "brand": "ABC",
    "price": 19.99,
    "color": "Blue",
    "size": "M",
    "category": "Clothing"
},
{
    "id": "2",
    "name": "Men's T-shirt",
    "brand": "ABC",
    "price": 11.99,
    "color": "yellow",
    "size": "L",
    "category": "Clothing"
},
{
    "id": "3",
    "name": "Men's T-shirt",
    "brand": "ABC",
    "price": 18.99,
    "color": "green",
    "size": "s",
    "category": "Clothing"
},
{
    "id": "4",
    "name": "Men's T-shirt",
    "brand": "ABC",
    "price": 199.99,
    "color": "Blue",
    "size": "XL",
    "category": "Clothing"
},
{
    "id": "5",
    "name": "Men's T-shirt",
    "brand": "ABC",
    "price": 179.99,
    "color": "Red",
    "size": "XL",
    "category": "Clothing"
},
{
    "id": "6",
    "name": "Men's T-shirt",
    "brand": "ABC",
    "price": 79.99,
    "color": "black",
    "size": "XL",
    "category": "Clothing"
},
{
    "id": "7",
    "name": "Men's T-shirt",
    "brand": "ABC",
    "price": 99.99,
    "color": "orange",
    "size": "XL",
    "category": "Clothing"
},

{
    "id": "8",
    "name": "Men's T-shirt",
    "brand": "ABC",
    "price": 139.99,
    "color": "Blue",
    "size": "XL",
    "category": "Clothing"
},

{
    "id": "9",
    "name": "Men's T-shirt",
    "brand": "ABC",
    "price": 169.99,
    "color": "Brown",
    "size": "XL",
    "category": "Clothing"
},
{
    "id": "10",
    "name": "Men's T-shirt",
    "brand": "ABC",
    "price": 159.99,
    "color": "Whit",
    "size": "XL",
    "category": "Clothing"
}


];
const womenProducts = [{
    "id": "1",
    "name": "Women's T-shirt",
    "brand": "ABC",
    "price": 29.99,
    "color": "pink",
    "size": "M",
    "category": "Clothing"
},
{
    "id": "2",
    "name": "Women's T-shirt",
    "brand": "ABC",
    "price": 11.99,
    "color": "yellow",
    "size": "L",
    "category": "Clothing"
},
{
    "id": "3",
    "name": "Women's T-shirt",
    "brand": "ABC",
    "price": 18.99,
    "color": "green",
    "size": "s",
    "category": "Clothing"
},
{
    "id": "4",
    "name": "Women's T-shirt",
    "brand": "ABC",
    "price": 199.99,
    "color": "Blue",
    "size": "XL",
    "category": "Clothing"
},
{
    "id": "5",
    "name": "Women's T-shirt",
    "brand": "ABC",
    "price": 179.99,
    "color": "Red",
    "size": "XL",
    "category": "Clothing"
},
{
    "id": "6",
    "name": "Women's T-shirt",
    "brand": "ABC",
    "price": 79.99,
    "color": "black",
    "size": "XL",
    "category": "Clothing"
},
{
    "id": "7",
    "name": "Women's T-shirt",
    "brand": "ABC",
    "price": 99.99,
    "color": "orange",
    "size": "XL",
    "category": "Clothing"
},

{
    "id": "8",
    "name": "Women's T-shirt",
    "brand": "ABC",
    "price": 139.99,
    "color": "Blue",
    "size": "XL",
    "category": "Clothing"
},

{
    "id": "9",
    "name": "WoMen's T-shirt",
    "brand": "ABC",
    "price": 169.99,
    "color": "Brown",
    "size": "XL",
    "category": "Clothing"
},
{
    "id": "10",
    "name": "WoMen's T-shirt",
    "brand": "ABC",
    "price": 159.99,
    "color": "Whit",
    "size": "XL",
    "category": "Clothing"
}

];


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to Men & Women Dummy Data');
      } else if (req.url === '/men') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(menProducts.slice(0, 10)));
      } else if (req.url === '/women') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(womenProducts.slice(0, 10)));
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
      }
})
server.listen(PORT, () => {
    console.log(`Server running on ${HOSTNAME}:${PORT}`);
})