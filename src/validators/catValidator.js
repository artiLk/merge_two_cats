const validator = require("validator");

exports.catValidator = ({ greeting, who, color, width, height, size }) => {
  let errors = {};
  let isValid = null;

  if (!greeting || validator.isEmpty(greeting, { ignore_whitespace: true })) {
    errors.greetingErr = "Greeting is required";
  }

  if (!who || validator.isEmpty(who, { ignore_whitespace: true })) {
    errors.whoErr = "Who is required";
  }

  if (!color || validator.isEmpty(color)) {
    errors.colorErr = "Color is required";
  } else if (!validator.isAlpha(color)) {
    errors.colorErr = "Color is invalid";
  }

  if (!width || validator.isEmpty(width)) {
    errors.widthErr = "Width is required";
  } else if (!validator.isDivisibleBy(width, 1)) {
    errors.widthErr = "Width is invalid";
  }

  if (!height || validator.isEmpty(height)) {
    errors.heightErr = "Height is required";
  } else if (!validator.isDivisibleBy(height, 1)) {
    errors.heightErr = "Height is invalid";
  }

  if (!size || validator.isEmpty(size)) {
    errors.sizeErr = "Size is required";
  } else if (!validator.isDivisibleBy(size, 1)) {
    errors.sizeErr = "Size is invalid";
  }

  if (typeof errors === "object" && Object.keys(errors).length === 0) {
    isValid = true;
  } else isValid = false;

  return {
    errors,
    isValid,
  };
};
