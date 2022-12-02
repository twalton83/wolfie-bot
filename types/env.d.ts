declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DISCORD_TOKEN: string;
      APP_ID: string;
      PUBLIC_KEY: string;
      GUILD_ID: string;
      CLIENT_ID: string;
    }
  }
}

export { }