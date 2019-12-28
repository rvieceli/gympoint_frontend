import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';

import { Container, Refresh } from './styles';
import { formatDistanceDateToNow } from '../../utils/format';

import animationEmpty from '../../assets/lottie-search-empty.json';

import api from '../../services/api';

export default function LastCheckIns() {
  const [checkIns, setCheckIns] = useState([]);
  const [loading, setLoading] = useState(false);

  async function load() {
    setLoading(true);
    const { data } = await api.get(`/checkins`);

    setCheckIns(data.rows);
    setLoading(false);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <div className="header">
        <strong>ÚLTIMOS CHECK-INS</strong>
        <Refresh
          size={20}
          color="#666"
          loading={loading ? 1 : 0}
          onClick={load}
        />
      </div>

      {!checkIns || checkIns.length === 0 ? (
        <div className="empty">
          <Lottie
            options={{
              loop: true,
              autoPlay: true,
              animationData: animationEmpty,
            }}
            height={200}
          />
        </div>
      ) : (
        <ul>
          {checkIns.map(checkIn => (
            <li key={String(checkIn.id)}>
              <strong>{checkIn.student.name}</strong>
              <span>{formatDistanceDateToNow(checkIn.createdAt)}</span>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
