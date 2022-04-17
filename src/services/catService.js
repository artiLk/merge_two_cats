const mergeImg = require("merge-img");
const { createUrl } = require("../helpers/urlHelper");
const { getCatImage } = require("../repository/catRepository");

// merge two cats
exports.mergeCats = async (res, data) => {
  const { greeting, who, color, width, height, size } = data;

  // create catass image urls
  const firstUrl = await createUrl(greeting, color, width, height, size);
  const secondUrl = await createUrl(who, color, width, height, size);

  // catass images
  const image1 = await getCatImage(firstUrl);
  const image2 = await getCatImage(secondUrl);

  // send a bad response when cataas return an error
  if (
    (image1.response && image1.response.status !== 200) ||
    (image1.response && image1.response.status !== 200)
  ) {
    res.status(400).json({ error: "Images not load from cataas" });
  }

  // merge two images
  await mergeImg(
    [
      { src: image1, offsetX: 0, offsetY: 0 },
      { src: image2, offsetX: Number(width), offsetY: 0 },
    ],
    {
      direction: false,
      width: width * 2,
      height: height,
    }
  )
    .then((img) => {
      // Save image as file
      img.write("./cat-card.jpg", () => {
        res.status(200).json({ message: "saved" });
      });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
};
