const Validator = require("validator");
const isEmpty = require("./isEmpty");

const validateRegisterInput = (data) => {
  let errors = {};

  if (isEmpty(data.email)) {
    errors.email = "Email field can not be empty";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (isEmpty(data.name)) {
    errors.name = "Name field can not be empty";
  } else if (!Validator.isLength(data.name, { min: 3, max: 40 })) {
    errors.name = "Name length must be minimum of 3 characters long";
  }

  if (isEmpty(data.password)) {
    errors.password = "Password field can not be empty";
  } else if (!Validator.isLength(data.password, { min: 6, max: 120 })) {
    errors.password = "Password length must be minimum of 6 characters long";
  }

  if (isEmpty(data.confirmPassword)) {
    errors.confirmPassword = "Confirm Password field can not be empty";
  } else if (!Validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = "Passwords do not match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateRegisterInput;
