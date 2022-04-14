let axios = require("axios");

exports.getCatImage = async (url) => {
  return await axios
    .request({
      method: "GET",
      url,
      responseType: "arraybuffer",
      responseEncoding: "binary",
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};
