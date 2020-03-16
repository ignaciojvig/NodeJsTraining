const messages = [];

const helloWorldService = {
  getTexts: () => {
    return messages;
  },
  addText: message => {
    messages.push(message);
    return message;
  }
};

module.exports = helloWorldService;
