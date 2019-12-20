import React from 'react';
import { MdDone, MdChevronLeft } from 'react-icons/md';
import { Form as Unform } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import Button from '../Button';
import LinkButton from '../LinkButton';
import { Inline } from '../Inline';

import { Container, Header, Content } from './styles';

export default function Form({ children, backUrl, onSubmit, title, ...rest }) {
  return (
    <Container>
      <Unform onSubmit={onSubmit} {...rest}>
        <Header>
          <strong>{title}</strong>
          <Inline>
            {backUrl && (
              <LinkButton
                title="VOLTAR"
                icon={
                  <MdChevronLeft
                    size={20}
                    color="#fff"
                    style={{ marginRight: 10 }}
                  />
                }
                classColor="gray"
                to={backUrl}
              />
            )}
            <Button
              type="submit"
              title="SALVAR"
              icon={
                <MdDone size={20} color="#fff" style={{ marginRight: 10 }} />
              }
            />
          </Inline>
        </Header>
        <Content>{children}</Content>
      </Unform>
    </Container>
  );
}

Form.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  onSubmit: PropTypes.func.isRequired,
  backUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Form.defaultProps = {
  backUrl: null,
};
