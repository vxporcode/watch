const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'Moderation', []);
  }

  run(client, message, args) {
    const sectionEmbed = new Discord.MessageEmbed()
   .setTitle('Bucket Help Commands: ')
   .addField(`Join our discord:  https://discord.gg/bucket`)
   .setColor('#808080')

 
if (!args[0]) return message.channel.send(sectionEmbed);

  }
}