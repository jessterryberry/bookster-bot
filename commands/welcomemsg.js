const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('welcomemessage')
        .setDescription('Diplays a welcome message to the server.'),
    async execute(interaction) {
        await interaction.reply(`Please assign yourself a role using the emojis.\n🎧 - Audio Bookie\n📱 E-Bookie\n📖 Paper Bookie\n🐉 Fantasy\n🕵️ Mystery/Thriller\n🧛 Horror\n👽 Sci-Fi\n👤 Autobiographgy\n📚 Fiction\n📒 Non-Fiction`);
        const message = await interaction.fetchReply();
        message.react('🎧');
        message.react('📱');
        message.react('📖');
        message.react('🐉');
        message.react('🕵️');
        message.react('🧛');
        message.react('👽');
        message.react('👤');
        message.react('📚');
        message.react('📒');
        
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