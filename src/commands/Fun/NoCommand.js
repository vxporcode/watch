const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class NoCommand extends BaseCommand {
  constructor() {
    super('no', 'Fun', []);
  }

  run(client, message, args) {
    message.channel.send('Yes');
  }
}