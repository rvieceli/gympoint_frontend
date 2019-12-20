import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdAdd } from 'react-icons/md';
import qs from 'qs';

import {
  InputSearch,
  LinkButton,
  Link,
  ButtonLink,
  Paginate,
  AlertActions,
  Inline,
  EmptyPage,
} from '../../components';

import api from '../../services/api';
import history from '../../services/history';

import { Container, Header, Grid, Head, Item, Options } from './styles';

export default function Student({ match, location }) {
  const { page = 1 } = match.params;
  const { q: query = null } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const [students, setStudents] = useState({});
  const [search, setSearch] = useState(query);

  async function load() {
    const { data } = await api.get('/students', {
      params: { page, pageSize: 10, q: query },
    });

    setStudents(data);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, query]);

  function handleDelete(id) {
    AlertActions.destroy(() => api.delete(`/students/${id}`), load);
  }

  function handleSearch(event) {
    if (event.key === 'Enter') {
      const reload = query === search;

      history.push({
        pathname: `/students`,
        search: search ? `q=${search}` : null,
      });

      if (reload) {
        load();
      }
    }
  }

  return (
    <Container>
      <Header>
        <strong>Gerenciando alunos</strong>
        <Inline>
          <LinkButton
            to="/students/new"
            title="CADASTRAR"
            icon={<MdAdd size={20} color="#fff" style={{ marginRight: 10 }} />}
          />
          <InputSearch
            type="text"
            name="seachr"
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyDown={handleSearch}
          />
        </Inline>
      </Header>

      {!students.rows || students.rows.length === 0 ? (
        <EmptyPage
          entity="Estudante"
          newUrl="/students/new"
          loading={!students.rows}
        />
      ) : (
        <Grid>
          <table>
            <thead>
              <tr>
                <Head>NOME</Head>
                <Head>E-MAIL</Head>
                <Head align="center">IDADE</Head>
                <Head style={{ width: 100 }}> </Head>
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
      )}
    </Container>
  );
}

Student.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};
