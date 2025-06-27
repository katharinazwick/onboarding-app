export interface User {
  id: string;
  name: string;
}

export interface Note {
  id: string;
  userId: string;
  content: string;
}
