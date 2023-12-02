export interface User {
    [propName: string]: any;
    id: number | string | null;
    name?: string;
    username?: string;
    avatar?: string;
    role?: string;
  }
  
  export interface Token {
    access_token?: string;
    token?: string;
    token_type?: string;
  }
  
  export const guest: User = {
    id: null,
    name: 'unknown',
    username: 'unknown',
    avatar: './assets/images/avatar-default.jpg',
  };