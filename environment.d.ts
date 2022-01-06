declare global {
  namespace NodeJS {
    interface ProcessEnv {
      QUASAR_ELECTRON_PRELOAD: string;
      APP_URL: string;
      [key: string]: string;
    }
  }
}

export {}

