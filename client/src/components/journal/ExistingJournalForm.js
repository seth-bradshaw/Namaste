import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 80%;
  margin: 2.5% auto;
`;
const StyledHeader2 = styled.h2`
  text-align: center;
  color: #413d15;
  font-family: Poppins;
`;

const StyledHeader3 = styled.h2`
  text-align: center;
  color: #413d15;
  font-family: Poppins;
  margin-bottom: 2%;
  font-size: 18px;
`;

export default function ExistingJournalForm(props) {
  const {
    newJournal,
    setNewJournal,
    handleSubmit,
    closeJournal,
    initialState,
  } = props;
  const activeJournal = useSelector((state) => state.journal.journal);
  const currentDate = new Date();

  const changeHandler = (e, entry) => {
    setNewJournal({ ...newJournal, textBody: entry.getData() });
  };

  return (
    <StyledContainer>
      <StyledHeader2>{activeJournal.title}</StyledHeader2>
      <StyledHeader3>
        {currentDate.getMonth() + 1}/{currentDate.getDate()}/
        {currentDate.getFullYear()}
      </StyledHeader3>
      <CKEditor
        editor={ClassicEditor}
        data={activeJournal.textBody}
        onChange={changeHandler}
      />
      <div
        style={{
          margin: "1% auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          onClick={() => {
            closeJournal();
            setNewJournal(initialState);
          }}
          variant="light"
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          style={{ backgroundColor: "#FE6E00", borderColor: "#FE6E00" }}
        >
          Save
        </Button>
      </div>
    </StyledContainer>
  );
}
