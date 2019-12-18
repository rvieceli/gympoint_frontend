import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import LinkButton from '../../components/LinkButton';
import Link from '../../components/Link';
import ButtonLink from '../../components/ButtonLink';
import Paginate from '../../components/Paginate';
import AlertActions from '../../components/AlertActions';

import api from '../../services/api';

import { Container, Header, Grid, Head, Item, Options } from './styles';

export default function Student({ match }) {
  const { page = 1 } = match.params;
  const [students, setStudents] = useState({});

  async function load() {
    const { data } = await api.get('/students', {
      params: { page, pageSize: 10 },
    });

    setStudents(data);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  function handleDelete(id) {
    AlertActions.destroy(() => api.delete(`/students/${id}`), load);
  }

  return (
    <Container>
      <Header>
        <strong>Gerenciando alunos</strong>
        <div>
          <LinkButton
            to="/students/new"
            title="CADASTRAR"
            icon={<FaPlus size={16} color="#fff" style={{ marginRight: 10 }} />}
          />
        </div>
      </Header>

      <Grid>
        <table>
          <thead>
            <tr>
              <Head>NOME</Head>
              <Head>E-MAIL</Head>
              <Head align="center">IDADE</Head>
              <Head> </Head>
            </tr>
          </thead>
          <tbody>
            {students.rows &&
              students.rows.map(student => (
                <tr key={student.id}>
                  <Item>{student.name}</Item>
                  <Item>{student.email}</Item>
                  <Item align="center">{student.age}</Item>
                  <Options>
                    <Link
                      color="blue"
                      title="editar"
                      to={`/students/${student.id}/edit`}
                    />
                    <ButtonLink
                      title="apagar"
                      onClick={() => handleDelete(student.id)}
                    />
                  </Options>
                </tr>
              ))}
          </tbody>
        </table>

        {students.pages > 0 && (
          <Paginate
            url="/students"
            page={students.page}
            pages={students.pages}
          />
        )}
      </Grid>
    </Container>
  );
}

Student.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }).isRequired,
};
