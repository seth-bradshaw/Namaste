import React, { useEffect, useState } from "react";
import { useEffectAfterMount } from "../hooks/useEffectAfterMount";
import useModal from "../hooks/useModal";
import useJournalEntry from "../hooks/useJournalEntry";
import { useDispatch, useSelector } from "react-redux";
import { actions as journalActions } from "../store/ducks/journalDuck";
import JournalCardContainer from "./JournalCardContainer";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import NewJournalForm from "./NewJournalForm";
import ExistingJournalForm from "./ExistingJournalForm";
import styles from "styled-components";

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
  const { journals, journal } = useSelector((state) => state.journal);
  const activeUser = useSelector((state) => state.user.activeUser);

  useEffect(() => {
    dispatch(journalActions.getJournalsThunk(activeUser.userId));
  }, []);

  useEffectAfterMount(() => {
    dispatch(journalActions.getJournalsThunk(activeUser.userId));
  }, [editorActive, singleJournalActive]);

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
    console.log(newJournal);
    dispatch(
      journalActions.putJournalThunk(journal.journalId, {
        ...journal,
        textBody: newJournal.textBody,
      })
    );
    setTimeout(() => closeJournal(), 50);
    setNewJournal(initialState);
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
          <Modal.Title>Just a few quick details</Modal.Title>
        </Modal.Header>
        <div style={{ width: "95%", margin: "2% auto" }}>
          <Form>
            <Form.Group as={Row}>
              <Col sm={10}>
                <Form.Control
                  name="title"
                  value={newJournal.title}
                  placeholder="Title"
                  onChange={(e) => handleChange(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={10}>
                <Form.Control
                  name="mood"
                  value={newJournal.mood}
                  placeholder="How are you feeling?"
                  onChange={(e) => handleChange(e)}
                />
              </Col>
            </Form.Group>
          </Form>
        </div>
        <Modal.Footer>
          <Button
            variant="light"
            onClick={() => {
              closeModal();
              setNewJournal(initialState);
            }}
          >
            Close
          </Button>
          <Button
            style={{ backgroundColor: "#FE6E00", borderColor: "#FE6E00" }}
            onClick={() => {
              closeModal();
              openEditor();
            }}
          >
            Start
          </Button>
        </Modal.Footer>
      </Modal>
      {editorActive ? (
        <NewJournalForm
          handleSubmit={handleSubmit}
          newJournal={newJournal}
          setNewJournal={setNewJournal}
          closeEditor={closeEditor}
          initialState={initialState}
        />
      ) : singleJournalActive ? (
        <ExistingJournalForm
          handleSubmit={handleJournalEdit}
          newJournal={journal}
          setNewJournal={setNewJournal}
          closeJournal={closeJournal}
          initialState={initialState}
        />
      ) : (
        <JournalCardContainer
          journals={journals}
          handleJournalOpen={handleJournalOpen}
          openModal={openModal}
          activeUser={activeUser}
        />
      )}
    </div>
  );
}

export default JournalDashboard;
