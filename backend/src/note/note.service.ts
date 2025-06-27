import { Injectable } from "@nestjs/common";
import { v4 as uuid } from "uuid";

export interface Note {
  id: string;
  userId: string;
  content: string;
}

// business logic => get the datas, calculate...
// save datas in In-memory (RAM)
// temporary save, just for duration away after restart, faster

@Injectable() // dependence
export class NoteService {
  private notes: Note[] = [];

  createNote(userId: string, content: string): Note {
    const newNote = { id: uuid(), userId, content };
    this.notes.push(newNote);
    return newNote;
  }

  getNotes(): Note[] {
    return this.notes;
  }

  getNotesByUserId(userId: string) {
    return this.notes.filter((note) => note.userId === userId);
  }

  deleteNote(noteId: string): boolean {
    const index = this.notes.findIndex((note) => note.id === noteId);
    if (index !== -1) {
      this.notes.splice(index, 1);
      return true;
    }
    return false;
  }

  updateNoteContent(noteId: string, content: string) {
    const note = this.notes.find((n) => n.id === noteId);
    if (note) {
      note.content = content;
      return note;
    }
    throw new Error("Notiz nicht gefunden");
  }
}
