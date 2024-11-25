const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

// Array of products
let products = [
  { name: 'Product A', inStock: true },
  { name: 'Product B', inStock: false },
  { name: 'Product C', inStock: true },
  { name: 'Product D', inStock: false },
];

function filterInStockProducts(product) {
  return product.inStock === true;
}

app.get('/in-stock-products', (req, res) => {
  let result = products.filter((product) => filterInStockProducts(product));
  res.json(result);
});

// Array of users
let users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 17 },
  { name: 'Dave', age: 16 },
];

function filterAdults(user) {
  return user.age >= 18;
}

app.get('/adult-users', (req, res) => {
  let result = users.filter((user) => filterAdults(user));
  res.json(result);
});

// Array of products with prices
let productPrices = [
  { name: 'Product A', price: 50 },
  { name: 'Product B', price: 150 },
  { name: 'Product C', price: 200 },
  { name: 'Product D', price: 90 },
];

function filterExpensiveProducts(productPrice, price) {
  return productPrice.price > price;
}

app.get('/expensive-products', (req, res) => {
  let price = parseFloat(req.query.price);
  let result = productPrices.filter((productPrice) =>
    filterExpensiveProducts(productPrice, price)
  );
  res.json(result);
});

// Array of articles with word counts
let articles = [
  { title: 'Article A', wordCount: 400 },
  { title: 'Article B', wordCount: 600 },
  { title: 'Article C', wordCount: 700 },
  { title: 'Article D', wordCount: 300 },
];

function filterLongArticles(article, val) {
  return article.wordCount > val;
}

app.get('/long-articles', (req, res) => {
  let val = parseFloat(req.query.val);
  let result = articles.filter((article) => filterLongArticles(article, val));
  res.json(result);
});

// Array of movies with ratings
let movies = [
  { title: 'Movie A', rating: 8.5 },
  { title: 'Movie B', rating: 7.0 },
  { title: 'Movie C', rating: 9.0 },
  { title: 'Movie D', rating: 6.5 },
];

function filterHighRatedMovies(movie, rate) {
  return movie.rating > rate;
}

app.get('/high-rated-movies', (req, res) => {
  let rate = parseFloat(req.query.rate);
  let result = movies.filter((movie) => filterHighRatedMovies(movie, rate));
  res.json(result);
});

// Array of employees with experience in years
let employees = [
  { name: 'Employee A', experience: 3 },
  { name: 'Employee B', experience: 6 },
  { name: 'Employee C', experience: 10 },
  { name: 'Employee D', experience: 2 },
];

function filterExperiencedEmployees(employee, years) {
  return employee.experience > years;
}

app.get('/experienced-employees', (req, res) => {
  let years = parseFloat(req.query.years);
  let result = employees.filter((employee) =>
    filterExperiencedEmployees(employee, years)
  );
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
