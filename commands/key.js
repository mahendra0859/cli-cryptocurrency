const inquire = require("inquirer");
require("colors");
const KeyManager = require("../lib/KeyManager");
const { isRequired } = require("../utils/validation");

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquire.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter the API Key".green + "https://nomics.com",
        validate: isRequired,
      },
    ]);
    const key = keyManager.setKey(input.key);
    if (key) {
      console.log("API key set".blue);
    }
  },
  show() {
    try {
      const keyManger = new KeyManager();
      const key = keyManger.getKey();
      console.log("Current API Key: ", key.red);
      return key;
    } catch (err) {
      console.error(err.message.red);
    }
  },
  remove() {
    try {
      const keyManager = new KeyManager();
      keyManager.deleteKey();
      console.info("Current API Key removed".blue);
      return;
    } catch (err) {
      console.error(err.message.red);
    }
  },
};

module.exports = key;
