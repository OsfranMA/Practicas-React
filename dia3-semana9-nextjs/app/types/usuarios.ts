export interface Usuario {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}