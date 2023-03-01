const fs = require("fs");

const writeDB = async (collection, data) => {
  if (typeof data !== "string") {
    data = JSON.stringify(data);
  }

  try {
    await fs.appendFileSync(collection, data + ", ");
    console.log("Bank account was updated");
  } catch (err) {
    console.log("err", err);
  }
};

const readDB = async (collection) => {
  try {
    const data = await fs.readFileSync(collection, "utf8");

    const convertData = await data.split(", ").map((item) => {
      console.log('"item', item);
      if (item === "") return;
      return JSON.parse(item);
    });

    return convertData;
  } catch (err) {
    console.log("err", err);
  }
};

module.exports = {
  readDB,
  writeDB,
};
