import React from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';
import { MdAdd } from 'react-icons/md';

import animationEmpty from '../../assets/lottie-search-empty.json';
import animationSuccess from '../../assets/lottie-success.json';

import LinkButton from '../LinkButton';
import LoadingPage from '../LoadingPage';

import { Container } from './styles';

export default function EmptyPage({ entity, newUrl, loading, success }) {
  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <Container>
          <Lottie
            options={{
              loop: true,
              autoPlay: true,
              animationData: success ? animationSuccess : animationEmpty,
            }}
            width={426}
            height={290}
          />
          {success ? (
            <span>{entity}</span>
          ) : (
            <span>Não encontramos nenhum {entity}</span>
          )}
          {newUrl && (
            <LinkButton
              to={newUrl}
              title={`Adicionar ${entity}`}
              icon={
                <MdAdd size={20} color="#fff" style={{ marginRight: 10 }} />
              }
            />
          )}
        </Container>
      )}
    </>
  );
}

EmptyPage.propTypes = {
  entity: PropTypes.string.isRequired,
  newUrl: PropTypes.string,
  loading: PropTypes.bool,
  success: PropTypes.bool,
};

EmptyPage.defaultProps = {
  newUrl: null,
  loading: false,
  success: false,
};
