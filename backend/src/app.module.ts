import { Module } from "@nestjs/common";
import { NoteModule } from "src/note/note.module";
import { UserModule } from "src/user/user.module";
import { DraftController } from './draft/draft/draft.controller';
import { DraftModule } from './draft/draft/draft.module';
import { DraftModule } from './draft/draft.module';

// all files in one
@Module({
  imports: [NoteModule, UserModule, DraftModule],
  providers: [],
})
export class AppModule {}

//neues modul für exent links ohne autentifizierung
//auf links klicken nichts sehen aber theoretisch da
//uniq datenbank nest js type om (oam statt sql) => klasse definieren (wie integriert in js) nicht löschen aber deaktivieren, einzigartig, funktionieren
//hinzufügen exponaration (für welches model public exet link) route zum abrufen und deaktivieren