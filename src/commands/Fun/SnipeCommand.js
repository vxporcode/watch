const BaseCommand = require('../../utils/structures/BaseCommand');
const Dicsord = require('discord.js');

module.exports = class SnipeCommand extends BaseCommand {
  constructor() {
    super('snipe', 'Fun', []);
  }

  async run(client, message, args) {
    const msg = client.snipes.get(message.channel.id);
    if (!msg) return message.channel.send('There is no message to snipe');

    const snipeEmbed = new Dicsord.MessageEmbed()
      .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
      .setDescription(msg.content)
      .setColor("#808080");

    message.channel.send(snipeEmbed);
  }
}