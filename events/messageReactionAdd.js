const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageReactionAdd,
    async execute(reaction, user) {
    
        // When a reaction is received, check if the structure is partial
	    if (reaction.partial) {
            // If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
            try {
                await reaction.fetch();
            } catch (error) {
                console.error('Something went wrong when fetching the message:', error);
                // Return as `reaction.message.author` may be undefined/null
                return;
            }
        }

        if (reaction.message.id == '1047551743455674508'){
            var member = reaction.message.guild.members.cache.find(u => u.id == user.id);
            var roleToAdd = null;
            
            switch (reaction.emoji.name){
                case'🎧':
                    roleToAdd = reaction.message.guild.roles.cache.find(r => r.name == "Audio-Bookie");
                    break;
                case'📱':
                    roleToAdd = reaction.message.guild.roles.cache.find(r => r.name == "E-Bookie");
                    break;
                case'📖':
                    roleToAdd = reaction.message.guild.roles.cache.find(r => r.name == "Paper Bookie");
                    break;  
                case'🐉':
                    roleToAdd = reaction.message.guild.roles.cache.find(r => r.name == "Fantasy");
                    break;
                case'🕵️':
                    roleToAdd = reaction.message.guild.roles.cache.find(r => r.name == "Mystery/Thriller");
                    break;
                case'🧛':
                    roleToAdd = reaction.message.guild.roles.cache.find(r => r.name == "Horror");
                    break;
                case'👽':
                    roleToAdd = reaction.message.guild.roles.cache.find(r => r.name == "Sci-Fi");
                    break;
                case'👤':
                    roleToAdd = reaction.message.guild.roles.cache.find(r => r.name == "Autobiography");
                    break;
                case'📚':
                    roleToAdd = reaction.message.guild.roles.cache.find(r => r.name == "Fiction");
                    break; 
                case'📒':
                    roleToAdd = reaction.message.guild.roles.cache.find(r => r.name == "Non-Fiction");
                    break;  
            }

            // if the roleToAdd is not null, we will assign it to a member
            if (roleToAdd != null) {
                member.roles.add(roleToAdd);
            }
            
            /*if (reaction.emoji.name == '📖'){
               var roleToAdd = reaction.message.guild.roles.cache.find(r => r.name == "Paper Bookie");
               console.log(reaction.message.guild.name);
               member.roles.add(roleToAdd);
            }*/
        }
        // Now the message has been cached and is fully available
        console.log(`${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`);
        
        // The reaction is now also fully available and the properties will be reflected accurately:
        console.log(`${reaction.count} user(s) have given the same reaction to this message!`);
    },
};