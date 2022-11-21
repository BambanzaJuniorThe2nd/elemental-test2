export interface User {
  _id: string;
  name: string;
  email: string;
  title: string;
  birthdate: Date;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface AppMessage {
  type: string;
  message: string;
}

export interface LoginResult {
  user: User;
  token: string;
}

export interface KnowledgeCategory {
  id: string;
  title: string;
  description: string;
  like: string;
  cat: string;
}

export interface ContactDataPostArgs {
  name: string;
  email: string;
  phone: string;
}
