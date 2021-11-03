// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
const { messageAttachment } = require('discord.js');
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }
  
  async run(client, member) {

    const welcomeChannel = member.guild.channels.cache.get('902930185228271628');
    welcomeChannel.send(`<@${member.user.id}>, welcome to ${member.guild.name}. Read the rules: ${rulesChannel}`);
    
  }
}