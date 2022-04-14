const { catValidator } = require("../validators/catValidator");
const catService = require("../services/catService");

// merge two cats images
exports.mergeCats = async (req, res) => {
  const queryParams = req.query;
  const { errors, isValid } = catValidator(queryParams);

  if (!isValid) {
    res.status(400).json(errors);
  } else {
    await catService.mergeCats(res, queryParams);
  }
};
