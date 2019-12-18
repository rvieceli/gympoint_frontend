import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import logo from '../../assets/logo_small.svg';

export default function Header() {
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
            <strong>Administrador</strong>
            <Link to="/logout">sair do sistema</Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
