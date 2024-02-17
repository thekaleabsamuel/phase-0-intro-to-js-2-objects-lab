// index.js

// Define the employee object with initial properties
let employee = {
    name: 'Sam', // Initial name property
  };
  
  // Function to update employee with a new key-value pair (destructive)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Updating the original employee with the new key-value pair
    employee[key] = value;
    // Returning the entire updated employee
    return employee;
  }
  
// Function to update employee with a new key-value pair (returns an employee with the original key value pairs and the new key value pair)
function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Creating a new object with the original employee's properties and the new key-value pair
    const updatedEmployee = { ...employee, [key]: value };
    // Returning the updated employee with the original key-value pairs and the new key-value pair
    return updatedEmployee;
  }
  
  // Function to delete a key from a clone of employee (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    // Creating a shallow copy of the original employee object
    const newEmployee = { ...employee };
    // Deleting the specified key from the cloned employee object
    delete newEmployee[key];
    // Returning the new employee without the specified key
    return newEmployee;
  }
  
  // Function to delete a key from the original employee (destructive)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Deleting the specified key from the original employee object
    delete employee[key];
    // Returning the modified original employee
    return employee;
  }
  
  // Exporting the employee object and the functions
  module.exports = {
    employee,
    destructivelyUpdateEmployeeWithKeyAndValue,
    updateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey,
  };
  
  // Adding a "before each" hook for the test cases
  beforeEach(function () {
    // Resetting the employee object to its initial state before each test
    employee = {
      name: 'Sam',
    };
  });
  