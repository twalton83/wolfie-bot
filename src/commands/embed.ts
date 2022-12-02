import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';
import type { CommandInteraction, GuildMember } from 'discord.js'

const data = new SlashCommandBuilder()
  .setName('embed')
  .setDescription('creates embed');

async function execute(interaction: CommandInteraction): Promise<void> {
  await interaction.reply(`This command was run by ${interaction.user.username}, who joined on .`);
}


export { data, execute }
