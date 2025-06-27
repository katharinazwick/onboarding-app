import { API_URL } from "../contants";
import { Note } from "../types";

const NOTES_API_URL = `${API_URL}/notes`;

export const fetchNotes = async (): Promise<Note[]> => {
  try {
    const response = await fetch(NOTES_API_URL);
    const notes = await response.json();
    return notes;
  } catch {
    throw new Error("Can not retrieve notes.");
  }
};

export const createNewNote = async (
  content: string,
  userId: string
): Promise<Note> => {
  try {
    const response = await fetch(NOTES_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        content: content,
      }),
    });

    const newNote = await response.json();
    return newNote;
  } catch {
    throw new Error("Server error. Try again later...");
  }
};

export const deleteExistingNote = async (id: string): Promise<void> => {
  try {
    await fetch(`${NOTES_API_URL}/${id}`, {
      method: "DELETE",
    });
  } catch {
    throw new Error("Server error. Try again later...");
  }
};

export const editExistingNote = async (
  id: string,
  content: string
): Promise<void> => {
  try {
    await fetch(`${NOTES_API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content,
      }),
    });
  } catch {
    throw new Error("Server error. Try again later...");
  }
};
