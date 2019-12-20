import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdAdd, MdCheckCircle } from 'react-icons/md';

import {
  LinkButton,
  Link,
  ButtonLink,
  Paginate,
  AlertActions,
  EmptyPage,
} from '../../components';

import api from '../../services/api';

import { formatDate } from '../../utils/format';

import {
  Container,
  Header,
  Grid,
  Head,
  Item,
  Options,
} from '../Student/styles';

export default function Registration({ match }) {
  const { page = 1 } = match.params;
  const [registrations, setRegistrations] = useState({});

  async function load() {
    const { data } = await api.get('/registrations', {
      params: { page, pageSize: 10 },
    });

    const rows = data.rows.map(registration => ({
      ...registration,
      startDate: formatDate(registration.startDate),
      endDate: formatDate(registration.endDate),
    }));

    setRegistrations({ ...data, rows });
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  function handleDelete(id) {
    AlertActions.destroy(() => api.delete(`/registrations/${id}`), load);
  }

  return (
    <Container>
      <Header>
        <strong>Gerenciando Matrículas</strong>
        <div>
          <LinkButton
            to="/registrations/new"
            title="CADASTRAR"
            icon={<MdAdd size={20} color="#fff" style={{ marginRight: 10 }} />}
          />
        </div>
      </Header>

      {!registrations.rows || registrations.rows.length === 0 ? (
        <EmptyPage
          entity="Matrícula"
          newUrl="/registrations/new"
          loading={!registrations.rows}
        />
      ) : (
        <Grid>
          <table>
            <thead>
              <tr>
                <Head>ALUNO</Head>
                <Head align="center">PLANO</Head>
                <Head align="center">INÍCIO</Head>
                <Head align="center">TÉRMINO</Head>
                <Head align="center">ATIVA</Head>
                <Head style={{ width: 100 }}> </Head>
              </tr>
            </thead>
            <tbody>
              {registrations.rows &&
                registrations.rows.map(registration => (
                  <tr key={registration.id}>
                    <Item>{registration.student.name}</Item>
                    <Item align="center">{registration.plan.title}</Item>
                    <Item align="center">{registration.startDate}</Item>
                    <Item align="center">{registration.endDate}</Item>
                    <Item align="center">
                      <MdCheckCircle
                        size={20}
                        color={registration.active ? '#42CB59' : '#ddd'}
                        style={{ marginRight: 10 }}
                      />
                    </Item>
                    <Options>
                      <Link
                        color="blue"
                        title="editar"
                        to={`/registrations/${registration.id}/edit`}
                      />
                      <ButtonLink
                        title="apagar"
                        onClick={() => handleDelete(registration.id)}
                      />
                    </Options>
                  </tr>
                ))}
            </tbody>
          </table>

          {registrations.pages > 0 && (
            <Paginate
              url="/registrations"
              page={registrations.page}
              pages={registrations.pages}
            />
          )}
        </Grid>
      )}
    </Container>
  );
}

Registration.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }).isRequired,
};
