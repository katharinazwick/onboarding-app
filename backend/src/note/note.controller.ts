import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Put,
} from "@nestjs/common";
import { NoteService } from "./note.service";

// receiving the request (route), call the right logic

@Controller("notes")
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  createNote(@Body("userId") userId: string, @Body("content") content: string) {
    return this.noteService.createNote(userId, content);
  }
  //body extracted the datas

  @Get()
  getNotes() {
    return this.noteService.getNotes();
  }

  @Get("users/:userId")
  getNotesByUserId(@Param("userId") userId: string) {
    return this.noteService.getNotesByUserId(userId);
  }
  //param extracted the route parameter

  @Delete(":noteId")
  deleteNote(@Param("noteId") noteId: string) {
    return { success: this.noteService.deleteNote(noteId) };
  }

  @Put(":noteId")
  updateNote(
    @Param("noteId") noteId: string,
    @Body("content") content: string
  ) {
    return this.noteService.updateNoteContent(noteId, content);
  }
}
