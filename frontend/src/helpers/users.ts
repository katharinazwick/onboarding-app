import { API_URL } from "../contants";
import { User } from "../types";

const USERS_API_URL = `${API_URL}/users`;

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(USERS_API_URL);
    const users = await response.json();
    return users;
  } catch {
    throw new Error("Server error. Try again later...")
  }
};

export const createNewUser = async (
  username: string
): Promise<User> => {
  try {
    const response = await fetch(USERS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
      }),
    });

    const newUser = await response.json();
    return newUser;
  } catch {
    throw new Error("Server error. Try again later...")
  }
};
