import { useState } from "react";

const useJournalEntry = () => {
  const [editorActive, setEditorActive] = useState(false);
  const openEditor = () => setEditorActive(true);
  const closeEditor = () => setEditorActive(false);
  return [editorActive, openEditor, closeEditor];
};

export default useJournalEntry;
