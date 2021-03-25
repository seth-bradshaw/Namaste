import React from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function ExistingJournalForm(props) {
  const { newJournal, setNewJournal, handleSubmit } = props;

  const changeHandler = (e) => {
    console.log(e);
    setNewJournal({ ...newJournal, textBody: e });
  };

  return (
    <>
      {/* <Editor
        editorState={newJournal.textBody}
        onEditorStateChange={(e) => changeHandler(e)}
      /> */}
      <Editor
        apiKey="0oe1t99rtkk3vloy16bw40kolz86qu609gpp74um6pccq5ic"
        selector="textarea"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
        }}
        value={newJournal.textBody}
        onEditorChange={(e) => changeHandler(e)}
        onSubmit={(e) => handleSubmit(e)}
      />

      <button onClick={(e) => handleSubmit(e)}></button>
    </>
  );
}
