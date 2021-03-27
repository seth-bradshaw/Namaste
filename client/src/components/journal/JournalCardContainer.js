import React, { useState } from "react";
import styled from "styled-components";
import { CardColumns, Card, Button, Form, Col } from "react-bootstrap";
import JournalCard from "./JournalCard";

const StyledCardContainer = styled.div`
  width: 100%;
  padding: 1%;
`;

const StyledContainer = styled.div`
  width: 85%;
  margin: 3% auto;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const StyledMenuBar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #414a4c;
  border-radius: 5px;
`;

const StyledHeader = styled.h2`
  text-align: center;
  color: #413d15;
  font-family: Poppins;
  margin: 2% auto;
`;

export default function JournalCardContainer(props) {
  const { journals, handleJournalOpen, openModal, activeUser } = props;
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    if (searchInput === "") {
      setSearched(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    setResults(
      journals.filter((journal) =>
        journal.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
    setSearched(true);
  };

  return (
    <>
      <StyledHeader>{activeUser.username}'s Journals</StyledHeader>
      <StyledContainer>
        <StyledMenuBar>
          <Form
            style={{
              width: "25%",
              margin: "auto",
              padding: "1%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Form.Control
              type="text"
              placeholder="Search by title"
              onChange={(e) => {
                handleChange(e);
              }}
            ></Form.Control>
            <Button
              variant="light"
              style={{
                color: "#413d15",
                marginLeft: "1%",
              }}
              onClick={(e) => handleSearch(e)}
            >
              Search
            </Button>
          </Form>
        </StyledMenuBar>
        <StyledCardContainer>
          <CardColumns>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title style={{ fontFamily: "Poppins" }}>
                  Add New Journal
                </Card.Title>
                <Button
                  variant="light"
                  style={{ fontWeight: "bolder", color: "#232b2b" }}
                  onClick={() => openModal()}
                >
                  +
                </Button>
              </Card.Body>
            </Card>
            {journals.length > 0 ? (
              !searched ? (
                journals.map((journal) => {
                  return (
                    <>
                      <JournalCard
                        handleJournalOpen={handleJournalOpen}
                        journal={journal}
                      />
                    </>
                  );
                })
              ) : (
                results.map((journal) => {
                  return (
                    <>
                      <JournalCard
                        handleJournalOpen={handleJournalOpen}
                        journal={journal}
                      />
                    </>
                  );
                })
              )
            ) : (
              <p>loading...</p>
            )}
          </CardColumns>
        </StyledCardContainer>
      </StyledContainer>
    </>
  );
}
