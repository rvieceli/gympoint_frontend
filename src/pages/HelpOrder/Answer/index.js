import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import Button from '../../../components/Button';

import api from '../../../services/api';

export default function Answer({ helpOrder: { question, id }, onExit }) {
  const [answer, setAnswer] = useState();
  const [error, setError] = useState();

  async function handleAnswer() {
    if (!answer) return;

    try {
      await api.post(`/help-orders/${id}/answer`, {
        answer,
      });
      onExit(false);
    } catch (err) {
      setError(err.response.data.error);
    }
  }

  function handleClose(event) {
    if (event.target.id !== 'answerModal') return;

    onExit(true);
  }

  return (
    <Container id="answerModal" onClick={handleClose}>
      <div>
        <strong>PERGUNTA DO ALUNO</strong>
        <p>{question}</p>
        <strong>SUA RESPOSTA</strong>
        <textarea
          name="answer"
          id="answer"
          placeholder="Resposta para o aluno"
          onChange={e => setAnswer(e.target.value)}
        />
        {error && <span>{error}</span>}
        <Button title="Responder aluno" onClick={handleAnswer} />
      </div>
    </Container>
  );
}

Answer.propTypes = {
  helpOrder: PropTypes.shape({
    question: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  onExit: PropTypes.func.isRequired,
};
