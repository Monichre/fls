declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Resend API Configuration
      RESEND_API_KEY: string;
      
      // Next.js Environment
      NEXT_PUBLIC_NODE_ENV: 'development' | 'production' | 'test';
      NEXT_PUBLIC_DOMAIN: string;
      
      // Node Environment
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }
}

export {}; 