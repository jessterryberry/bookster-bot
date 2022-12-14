const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('welcomemessage')
        .setDescription('Diplays a welcome message to the server.'),
    async execute(interaction) {
        await interaction.reply(`Please assign yourself a role using the emojis.\nš§ - Audio Bookie\nš± E-Bookie\nš Paper Bookie\nš Fantasy\nšµļø Mystery/Thriller\nš§ Horror\nš½ Sci-Fi\nš¤ Autobiographgy\nš Fiction\nš Non-Fiction`);
        const message = await interaction.fetchReply();
        message.react('š§');
        message.react('š±');
        message.react('š');
        message.react('š');
        message.react('šµļø');
        message.react('š§');
        message.react('š½');
        message.react('š¤');
        message.react('š');
        message.react('š');
        
        var jsonData = {
            serverId: message.guild.id,
            messageId: message.id
        }
        console.log(jsonData);
        var data = JSON.stringify(jsonData);
        const fs = require('node:fs');
        fs.writeFileSync('data.json', data, "utf8");
    },
};