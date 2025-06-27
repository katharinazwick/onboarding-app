import { Suspense } from "react";
import NoteSection from "./components/NoteSection";
import Sidebar from "./components/Sidebar";
import { SelectedUserProvider } from "./providers/SelectedUserProvider";
import { fetchNotes } from "./helpers/notes";
import LoadingNotes from "./components/NoteSection/NoteStatus/LoadingNotes";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {

  return (
    <div className="h-screen flex">
      <SelectedUserProvider>
        <ErrorBoundary>
          <Sidebar />
          <Suspense fallback={<LoadingNotes />}>
              <NoteSection notesPromise={fetchNotes()} />
          </Suspense>
        </ErrorBoundary>
      </SelectedUserProvider>
    </div>
  );
}

export default App;
