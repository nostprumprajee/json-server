// import generator
const generator = require('./generator')

module.exports = () => ({
  customers: generator.customers(50), // create 50 customers
  companies: generator.companies(50), // create 50 companies
})