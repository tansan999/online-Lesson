import React from "react";
import styled from "styled-components";
import { defaultNotes } from "../lessons";

const CardWrapper = styled.div`
  background: linear-gradient(135deg, #000 60%, #ffd700 100%);
  color: #ffd700;
  border: 2px solid #ffd700;
  border-radius: 16px;
  padding: 24px;
  max-width: 400px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.7);
`;

const CardTitle = styled.h2`
  margin: 0 0 12px 0;
  font-weight: bold;
  font-size: 1.3rem;
`;

const CardLink = styled.a`
  color: #000;
  background: #ffd700;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #000;
    color: #ffd700;
  }
`;

const React_ = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  padding: 40px;
  min-height: 100vh;
`;

export default function Card_react() {
  return (
    <React_>
      {defaultNotes.map((note, idx) => (
        <CardWrapper key={idx}>
          <CardTitle>{note.title}</CardTitle>
          {note.link && (
            <CardLink
              href={note.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Смотреть видео
            </CardLink>
          )}
        </CardWrapper>
      ))}
    </React_>
  );
}
