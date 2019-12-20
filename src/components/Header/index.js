import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import logo from '../../assets/logo_small.svg';

import { signOut } from '../../store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector(store => store.user);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gympoint" />

          <ul>
            <li>
              <Link to="/dashboard" className="logo">
                GYMPOINT
              </Link>
            </li>
            <li>
              <Link to="/students" className="principal">
                ALUNOS
              </Link>
            </li>
            <li>
              <Link to="/plans">PLANOS</Link>
            </li>
            <li>
              <Link to="/registrations">MATRÍCULAS</Link>
            </li>
            <li>
              <Link to="/help-orders">PEDIDOS DE AUXÍLIO</Link>
            </li>
          </ul>
        </nav>

        <aside>
          <Profile>
            <strong>{user.name}</strong>
            <button type="button" onClick={handleSignOut}>
              sair do sistema
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
