const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class PurgeCommand extends BaseCommand {
  constructor() {
    super('purge', 'moderation', []);

  }

  async run(client, message, args) {
    if (!args[0]) return message.channel.send('State a number of messages to purge. \`;purge number\`');
    const amountToDelete = Number(args[0], 10);

    if (isNaN(amountToDelete)) return message.channel.send('Number stated is not a valid number.');
    if (!Number.isInteger(amountToDelete)) return message.channel.send('Numeber stated has to be a whole number.');
    if (!amountToDelete || amountToDelete < 2 || amountToDelete > 100) return message.channel.send('The number sated must be between 2 and 100.');
    const fetched = await message.channel.messages.fetch({
      limit: amountToDelete
    });

    try {
      await message.channel.bulkDelete(fetched)
      .then (messages => message.channel.send(`Deleted ${messages.size} messages.`));
    } catch (err) {
      console.log(err)
      message.channel.send('I was unable to delete the amount stated make sure they are within 14 days old.');
    }

  }

}