// getAgencyByName
// @param {string} - name
// @return {Object} - agency object
getAgencyByName = (name) => {

};

// getAgencyIdByName
// @param {String} - name
// @return {String} - agencyId
getAgencyIdByName = function (name) {

};

// getAllAgenciesName
// @return {string[]} - agenciesNameArr - Array of all agencies name
getAllAgenciesName = function () {

};

// getAllCarToBuy
// @return {object[]} - allCarsToBuy - arrays of all cars objects
getAllCarToBuy = function () {

};

// getAllCarToBuyByAgencyId
// @param {string} - id of agency
// @return {object[]} - carsArray - arrays of all models objects of specific agency
getAllCarToBuyByAgencyId = function (agencyId) {

};

// getAllBrandsToBuyAgencyId
// @param {string} - agencyId -  id of agency
// @return {string[]} - arrOfBrands - arrays of all brands name in specific agency
getAllBrandsToBuyAgencyId = function (agencyId) {

};

// getCustomerByName
// @param {string} - name
// @return {Object} - customer
getCustomerByName = (name) => {

};

// getCustomerIdByName
// @param {name}
// @return {String} - customerId - The customer id
getCustomerIdByName = function (name) {

};

// getAllCustomersNames
// @return {string[]} - customersNameArr -  Array of all customers name
getAllCustomersNames = function (name) {

};

// getAllCustomerCars
// @param {id} - costumerId - costumer id
// @return {object[]} - customerCarsArr -  Array of all customer cars object
getAllCustomerCars = function (id) {

};

// getCustomerCash
// @param {id} - costumerId - costumer id
// @return {number} - CustomerCash
getCustomerCash = function (id) {

};

// setPropertyBrandToAllCars
// set all cars model object the current brand
setPropertyBrandToAllCars = function () {

};

// setNewCarToAgency
// @param {string} - id of agency
// @param {object} - carObject
setNewCarToAgency = function (agencyId, carObject) {

};

// deleteCarFromAgency
// @param {string} - id of agency
// @param {string} -  Car id
deleteCarFromAgency = function (marketObj, agencyId, carId) {

};

// decrementOrIncrementCashOfAgency
// @param {string} - agencyId
// @param {number} - amount - negative or positive amount
// @return {number} - agencyCash
decrementOrIncrementCashOfAgency = function (
  marketObj,
  agencyId,
  amount
) {

};

// decrementOrIncrementCreditOfAgency
// @param {string} - agencyId
// @param {number} - amount - negative or positive amount
// @return {number} - agencyCash
decrementOrIncrementCreditOfAgency = function (
  marketObj,
  agencyId,
  amount
) {

};

// setAmountOfCarsToBuyToAllAgency's
// set a new property amountOfCars to all agency's, that represent the amount of cars available in the agency.
// @return {objects[]} - sellers - array of all agency's
setAmountOfCarsToBuyToAllAgency = function (carMarket) {

};

// setCarToCostumer
// @param {string} - costumerId
// @param {object} - carObject
// @return {object[]} - allCarsOfCostumer
setCarToCostumer = function (marketObj, customerId, carObj) {

};

// deleteCarOfCostumer
// @param {string} - costumerId
// @param {string} - carId
// @return {object[]} - allCarsOfCostumer
deleteCarOfCostumer = function (marketObj, customerId, carId) {

};

// decrementOrIncrementCashOfCostumer
// @param {string} - costumerId
// @param {number} - amount - negative or positive amount
// @return {number} - costumerCash
decrementOrIncrementCashOfCostumer = function (
  marketObj,
  customerId,
  amount
) {

};

//   sortAndFilterByYearOfProduction
//   filter and Sort in a Ascending or Descending order all vehicles for sale by year of production.
//   @param {object[]} - arrOfCars - array of cars
//   @param {number} - fromYear - Will display vehicles starting this year
//   @param {number} - toYear - Will display vehicles up to this year
//   @param {boolean} - isAscendingOrder - true for ascending order, false for descending order
//   @return {object[]} - arrayOfModels - array of sorted cars
sortAndFilterByYearOfProduction = function (
  carArray,
  fromYear,
  toYear,
  isAscendingOrder
) {

};

//   sortAndFilterByPrice
//   filter and Sort in a Ascending or Descending order all vehicles for sale by price of the cars.
//   @param {object[]} - arrOfCars - array of cars
//   @param {number} - fromPrice - Will display vehicles starting at this price
//   @param {number} - fromPrice - Will display vehicles up to this price
//   @param {boolean} - isAscendingOrder - true for ascending order, false for descending order
//   @return {object[]} - arrayOfModels - array of sorted cars
sortAndFilterByPrice = function (
  carArray,
  fromPrice,
  toPrice,
  isAscendingOrder
) {

};

//   searchCar
//   @param {object[]} - arrOfCars - array of cars
//   @param {number} - fromYear - Will display vehicles starting this year
//   @param {number} - toYear - Will display vehicles up to this year
//   @param {number} - fromPrice - Will display vehicles starting at this price
//   @param {number} - fromPrice - Will display vehicles up to this price
//   optional @param {string} - brand - Look only for cars of this brand
searchCar = function (
  carArray,
  fromYear,
  toYear,
  fromPrice,
  toPrice,
  brand
) {

};

//   Sell ​​a car to a specific customer
//   @param {string} - agencyId
//   @param {string} - customerId
//   @param {string} - carModel
//   @return {object} - The object of the car purchased by the customer or an explanation message

//      Instructions for handling taxes:
//      - a. Subtract the vehicle amount + 17% (tax) from the customer's cash.
//      - b. Add the vehicle value to the car agency cash.
//      - c. Change the car owner's id to the customer's id.
//      - d. Remove the car from the array of the agency's car models.
//      - e. Add the car to the client cars array.
// 
//      Taxes Authority:
//      - f. Pay 17 percent of the vehicle value to the tax authority. (add the amount to totalTaxesPaid)
//      - g. Increase the number of transactions made in one (numberOfTransactions)
//      - h. Add the vehicle amount + tax to sumOfAllTransactions
//     - Check that there is the requested vehicle at the agency in not return 'The vehicle does not exist at the agency'
//     - Check that the customer has enough money to purchase the vehicle, if not return 'The customer does not have enough money'
sellCar = function (marketObj, agencyId, customerId, carModel) {

};
