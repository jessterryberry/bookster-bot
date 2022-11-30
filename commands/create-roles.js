const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('createroles')
		.setDescription('Loads the predefined user roles.'),
	async execute(interaction) {
	// Verifying that roles don't exist already, and then creating them
    if(interaction.guild.roles.cache.find(r=> r.name == 'Admin') === undefined){
        interaction.guild.roles.create(
            {   
                name: 'Admin', 
                permissions: [PermissionsBitField.Flags.Administrator, PermissionsBitField.Flags.MentionEveryone,
                PermissionsBitField.Flags.SendMessages] 
            });
    }    
    if(interaction.guild.roles.cache.find(r=> r.name == 'Mod') === undefined){
        interaction.guild.roles.create(
            { 
                name: 'Mod', 
                permissions: [PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.KickMembers, 
                PermissionsBitField.Flags.BanMembers, PermissionsBitField.Flags.ModerateMembers] 
            });
    }
    if(interaction.guild.roles.cache.find(r=> r.name == 'Audio-Bookie') === undefined){
        interaction.guild.roles.create(
            { 
                name: 'Audio-Bookie', 
                permissions: [PermissionsBitField.Flags.AttachFiles, PermissionsBitField.Flags.CreatePublicThreads] 
            });
    }
    if(interaction.guild.roles.cache.find(r=> r.name == 'E-Bookie') === undefined){
        interaction.guild.roles.create(
            { 
                name: 'E-Bookie', 
                permissions: [PermissionsBitField.Flags.AttachFiles, PermissionsBitField.Flags.CreatePublicThreads] 
            });
    }
    if(interaction.guild.roles.cache.find(r=> r.name == 'Paper Bookie') === undefined){
        interaction.guild.roles.create(
            { 
                name: 'Paper Bookie', 
                permissions: [PermissionsBitField.Flags.AttachFiles, PermissionsBitField.Flags.CreatePublicThreads] 
            });
    }
    if(interaction.guild.roles.cache.find(r=> r.name == 'Fantasy') === undefined){
        interaction.guild.roles.create(
            { 
                name: 'Fantasy', 
                permissions: [PermissionsBitField.Flags.AttachFiles, PermissionsBitField.Flags.CreatePublicThreads] 
            });
    }
    if(interaction.guild.roles.cache.find(r=> r.name == 'Mystery/Thriller') === undefined){
        interaction.guild.roles.create(
            { 
                name: 'Mystery/Thriller', 
                permissions: [PermissionsBitField.Flags.AttachFiles, PermissionsBitField.Flags.CreatePublicThreads] 
            });
    }
    if(interaction.guild.roles.cache.find(r=> r.name == 'Horror') === undefined){ 
        interaction.guild.roles.create(
            { 
                name: 'Horror', 
                permissions: [PermissionsBitField.Flags.AttachFiles, PermissionsBitField.Flags.CreatePublicThreads] 
            });
    }
    if(interaction.guild.roles.cache.find(r=> r.name == 'Sci-Fi') === undefined){
        interaction.guild.roles.create(
            { 
                name: 'Sci-Fi', 
                permissions: [PermissionsBitField.Flags.AttachFiles, PermissionsBitField.Flags.CreatePublicThreads] 
            });
    }
    if(interaction.guild.roles.cache.find(r=> r.name == 'Autobiography') === undefined){
        interaction.guild.roles.create(
            { 
                name: 'Autobiography', 
                permissions: [PermissionsBitField.Flags.AttachFiles, PermissionsBitField.Flags.CreatePublicThreads] 
            });
    }
    if(interaction.guild.roles.cache.find(r=> r.name == 'Fiction') === undefined){
        interaction.guild.roles.create(
            { 
                name: 'Fiction', 
                permissions: [PermissionsBitField.Flags.AttachFiles, PermissionsBitField.Flags.CreatePublicThreads] 
            });
    }
    if(interaction.guild.roles.cache.find(r=> r.name == 'Non-Fiction') === undefined){
        interaction.guild.roles.create(
            { 
                name: 'Non-Fiction', 
                permissions: [PermissionsBitField.Flags.AttachFiles, PermissionsBitField.Flags.CreatePublicThreads] 
            });
    }
		return interaction.reply('Predefined roles have been created!');
	},
};