import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';

import { Container, Refresh } from './styles';

import student from '../../assets/lottie-gympass-jump-rope-girl.json';
import plan from '../../assets/lotie-under-construction.json';
import registration from '../../assets/lottie-calculating.json';
import question from '../../assets/lottie-risinghand.json';

import api from '../../services/api';

export default function Statistics() {
  const [statistics, setStatistics] = useState({});
  const [loading, setLoading] = useState(false);

  async function load() {
    setLoading(true);
    const { data } = await api.get(`/statistics`);

    setStatistics(data);
    setLoading(false);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <div>
        <strong>ESTATÍSTICAS</strong>
        <Refresh
          size={20}
          color="#666"
          loading={loading ? 1 : 0}
          onClick={load}
        />
      </div>

      <ul>
        <li>
          <strong>Alunos</strong>
          <Lottie
            options={{
              loop: true,
              autoPlay: true,
              animationData: student,
            }}
            height={200}
          />
          <span>{statistics.students}</span>
        </li>
        <li>
          <strong>Planos</strong>
          <Lottie
            options={{
              loop: true,
              autoPlay: true,
              animationData: plan,
            }}
            height={120}
          />
          <span>{statistics.plans}</span>
        </li>
        <li>
          <strong>Matrículas</strong>
          <Lottie
            options={{
              loop: true,
              autoPlay: true,
              animationData: registration,
            }}
            height={120}
          />
          <span>{statistics.registrations}</span>
        </li>
        <li>
          <strong>Perguntas</strong>
          <Lottie
            options={{
              loop: true,
              autoPlay: true,
              animationData: question,
            }}
            height={150}
          />
          <span>{statistics.questions}</span>
        </li>
      </ul>
    </Container>
  );
}
