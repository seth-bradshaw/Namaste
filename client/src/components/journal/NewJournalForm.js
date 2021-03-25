import React from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function NewJournalForm(props) {
  const { newJournal, setNewJournal, handleSubmit } = props;

  const changeHandler = (e) => {
    setNewJournal({ ...newJournal, textBody: e });
  };

  return (
    // <div style={{ width: "50%", margin: "auto" }}>
    //   <form onSubmit={(e) => handleSubmit(e)}>
    //     <div style={{ border: "red solid 2px" }}>
    //       <p>text editor options</p>
    //     </div>
    //     <div style={{ display: "flex" }}>
    //       <textarea
    //         rows
    //         name="textBody"
    //         value={newJournal.textBody}
    //         onChange={(e) => changeHandler(e)}
    //         style={{
    //           width: "100%",
    //           height: "70vh",
    //           fontSize: "1rem",
    //           outline: "none",
    //         }}
    //       ></textarea>
    //     </div>
    //     <button type="submit"></button>
    //   </form>
    // </div>
    <>
      <Editor
        initialValue="<p>This is the initial content of the editor</p>"
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
        name="textBody"
        value={newJournal.textBody}
        onEditorChange={(e) => changeHandler(e)}
        onSubmit={(e) => handleSubmit(e)}
      />

      <button onClick={(e) => handleSubmit(e)}></button>
    </>
  );
}
