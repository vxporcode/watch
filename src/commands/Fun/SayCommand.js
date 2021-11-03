const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'Fun', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You cannot use this command.");
    const messageToSay = args.join(" ");
    const sayEmbed = new Discord.MessageEmbed()
     .setDescription(`${messageToSay}`)
     .setFooter(client.user.tag, client.user.displayAvatarURL())
     .setColor("#808080")
     .setTimestamp();
  try {
    await message.channel.send(sayEmbed);
  } catch (err) {
    console.log(err);
    message.channel.send('I am not able to say that.');
  }

  }
}