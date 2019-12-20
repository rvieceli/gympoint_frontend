import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ButtonLink, Paginate, EmptyPage } from '../../components';

import Answer from './Answer';

import { formatDistanceDateToNow } from '../../utils/format';

import api from '../../services/api';

import {
  Container,
  Header,
  Grid,
  Head,
  Item,
  Options,
} from '../Student/styles';

export default function Plan({ match }) {
  const [answer, setAnswer] = useState();
  const { page = 1 } = match.params;
  const [helpOrders, setHelpOrders] = useState({});

  async function load() {
    const { data } = await api.get('/help-orders', {
      params: { page, pageSize: 10 },
    });

    setHelpOrders(data);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  function handleAnswer(helpOrder) {
    setAnswer(helpOrder);
  }

  function handleAnswered(cancelled) {
    if (!cancelled) {
      load();
    }
    setAnswer(null);
  }

  return (
    <Container>
      <Header>
        <strong>Pedidos de auxílio</strong>
      </Header>

      {!helpOrders.rows || helpOrders.rows.length === 0 ? (
        <EmptyPage
          entity="Não há pedido de auxílio para responder!"
          success
          loading={!helpOrders.rows}
        />
      ) : (
        <Grid>
          <table>
            <thead>
              <tr>
                <Head>ALUNO</Head>
                <Head />
                <Head style={{ width: 100 }}> </Head>
              </tr>
            </thead>
            <tbody>
              {helpOrders.rows &&
                helpOrders.rows.map(helpOrder => (
                  <tr key={helpOrder.id}>
                    <Item>{helpOrder.student.name}</Item>
                    <Item>{formatDistanceDateToNow(helpOrder.createdAt)}</Item>
                    <Options>
                      <ButtonLink
                        title="responder"
                        classColor="blue"
                        onClick={() => handleAnswer(helpOrder)}
                      />
                    </Options>
                  </tr>
                ))}
            </tbody>
          </table>

          {helpOrders.pages > 0 && (
            <Paginate
              url="/help-orders"
              page={helpOrders.page}
              pages={helpOrders.pages}
            />
          )}
          {answer && <Answer helpOrder={answer} onExit={handleAnswered} />}
        </Grid>
      )}
    </Container>
  );
}

Plan.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }).isRequired,
};
