import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdAdd } from 'react-icons/md';

import {
  LinkButton,
  Link,
  ButtonLink,
  Paginate,
  AlertActions,
  EmptyPage,
} from '../../components';
import api from '../../services/api';

import { formatCurrency } from '../../utils/format';

import {
  Container,
  Header,
  Grid,
  Head,
  Item,
  Options,
} from '../Student/styles';

export default function Plan({ match }) {
  const { page = 1 } = match.params;
  const [plans, setPlans] = useState({});

  async function load() {
    const { data } = await api.get('/plans', {
      params: { page, pageSize: 10 },
    });

    setPlans(data);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  function handleDelete(id) {
    AlertActions.destroy(() => api.delete(`/plans/${id}`), load);
  }

  return (
    <Container>
      <Header>
        <strong>Gerenciando planos</strong>
        <div>
          <LinkButton
            to="/plans/new"
            title="CADASTRAR"
            icon={<MdAdd size={20} color="#fff" style={{ marginRight: 10 }} />}
          />
        </div>
      </Header>

      {!plans.rows || plans.rows.length === 0 ? (
        <EmptyPage entity="Plano" newUrl="/plans/new" loading={!plans.rows} />
      ) : (
        <Grid>
          <table>
            <thead>
              <tr>
                <Head>TÍTULO</Head>
                <Head align="center">DURAÇÃO</Head>
                <Head align="center">VALOR p/ MÊS</Head>
                <Head style={{ width: 100 }}> </Head>
              </tr>
            </thead>
            <tbody>
              {plans.rows &&
                plans.rows.map(plan => (
                  <tr key={plan.id}>
                    <Item>{plan.title}</Item>
                    <Item align="center">
                      {plan.duration} {plan.duration === 1 ? 'mês' : 'meses'}
                    </Item>
                    <Item align="center">{formatCurrency(plan.price)}</Item>
                    <Options>
                      <Link
                        color="blue"
                        title="editar"
                        to={`/plans/${plan.id}/edit`}
                      />
                      <ButtonLink
                        title="apagar"
                        onClick={() => handleDelete(plan.id)}
                      />
                    </Options>
                  </tr>
                ))}
            </tbody>
          </table>

          {plans.pages > 0 && (
            <Paginate url="/plans" page={plans.page} pages={plans.pages} />
          )}
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
