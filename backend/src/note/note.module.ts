import { Module } from "@nestjs/common";
import { NoteService } from "./note.service";
import { NoteController } from "./note.controller";
import { UserService } from "../user/user.service";

// summary from all, included
@Module({
  imports: [],
  controllers: [NoteController],
  providers: [NoteService, UserService],
})
export class NoteModule {}
