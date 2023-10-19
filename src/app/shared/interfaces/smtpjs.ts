declare module 'smtpjs' {
  export const Email: {
    send: (emailData: {
      SecureToken: string;
      To: string;
      From: string;
      Subject: string;
      Body: string;
    }) => Promise<any>;
  };
}
