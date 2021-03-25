import React, { useEffect, useState } from "react";
import { useEffectAfterMount } from "../hooks/useEffectAfterMount";
import useModal from "../hooks/useModal";
import useJournalEntry from "../hooks/useJournalEntry";
import { useDispatch, useSelector } from "react-redux";
import { actions as journalActions } from "../store/ducks/journalDuck";
import JournalCard from "./JournalCard";
import { CardColumns, Modal, Button, Form, Row, Col } from "react-bootstrap";
import NewJournalForm from "./NewJournalForm";
import ExistingJournalForm from "./ExistingJournalForm";

const initialState = {
  id: 0,
  title: "",
  textBody: "",
  mood: "",
  user: {},
};

function JournalDashboard() {
  const dispatch = useDispatch();
  const [newJournal, setNewJournal] = useState(initialState);
  const [editorActive, openEditor, closeEditor] = useJournalEntry();
  const [singleJournalActive, openJournal, closeJournal] = useJournalEntry();
  const [modalActive, openModal, closeModal] = useModal();
  const { journals, activeJournal } = useSelector((state) => state.journal);
  const activeUser = useSelector((state) => state.user.activeUser);

  useEffect(() => {
    dispatch(journalActions.getJournalsThunk(activeUser.userId));
  }, []);

  useEffectAfterMount(() => {
    dispatch(journalActions.getJournalsThunk(activeUser.userId));
  }, [editorActive]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewJournal({ ...newJournal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      journalActions.postJournalThunk({ ...newJournal, user: activeUser })
    );
    setTimeout(function () {
      closeEditor();
    }, 30);
    setNewJournal(initialState);
  };

  const handleJournalEdit = (e) => {
    e.preventDefault();
    dispatch(journalActions.putJournalThunk(newJournal.journalId, newJournal));
  };

  const handleJournalOpen = (journal) => {
    setNewJournal(journal);
    setTimeout(function () {
      openJournal();
    }, 30);
  };

  return (
    <div>
      <Modal show={modalActive} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <div style={{ width: "95%", margin: "auto" }}>
          <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Title
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  name="title"
                  value={newJournal.title}
                  placeholder="Title"
                  onChange={(e) => handleChange(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalMood">
              <Form.Label column sm={2}>
                Mood
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  name="mood"
                  value={newJournal.mood}
                  placeholder="Mood"
                  onChange={(e) => handleChange(e)}
                />
              </Col>
            </Form.Group>
          </Form>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              closeModal();
              openEditor();
            }}
          >
            New Journal
          </Button>
        </Modal.Footer>
      </Modal>
      {editorActive ? (
        <NewJournalForm
          handleSubmit={handleSubmit}
          newJournal={newJournal}
          setNewJournal={setNewJournal}
        />
      ) : singleJournalActive ? (
        <ExistingJournalForm
          handleSubmit={handleJournalEdit}
          newJournal={newJournal}
          setNewJournal={setNewJournal}
        />
      ) : (
        <div>
          <CardColumns>
            {journals.length > 0 ? (
              journals.map((jnl) => {
                return (
                  <>
                    <JournalCard
                      handleJournalOpen={handleJournalOpen}
                      journal={jnl}
                    />
                  </>
                );
              })
            ) : (
              <p>loading...</p>
            )}
            <button onClick={() => openModal()}>add journal</button>
          </CardColumns>
        </div>
      )}
    </div>
  );
}

export default JournalDashboard;
