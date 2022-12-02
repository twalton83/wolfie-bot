import 'discord.js';

declare module 'discord.js' {
  interface MyClient extends Client {
    commands: Collection<unknown, any>
  }
}
