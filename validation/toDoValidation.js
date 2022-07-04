const Validator = require("validator");
const isEmpty = require("./isEmpty");

const validateToDoInput = (data) => {
  let errors = {};

  //   check content field
  if (isEmpty(data.content)) {
    errors.content = "Content field can not be empty";
  } else if (!Validator.isLength(data.content, { min: 2, max: 300 })) {
    errors.content = "invalid content data";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateToDoInput;
