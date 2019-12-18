import React from 'react';
import PropTypes from 'prop-types';

import {
  MdFirstPage,
  MdChevronLeft,
  MdChevronRight,
  MdLastPage,
  MdMoreHoriz,
} from 'react-icons/md';

import { Container } from './styles';

export default function Paginate({ url, pages, page }) {
  const _page = parseInt(page, 10);
  const _pages = parseInt(pages, 10);

  return (
    <>
      {_pages > 1 && (
        <Container>
          <a href={`${url}/${1}`}>
            <MdFirstPage size={24} color="#fff" />
          </a>

          {_page <= 1 ? (
            <div>
              <MdChevronLeft size={24} color="#fff" />
            </div>
          ) : (
            <a href={`${url}/${_page - 1}`} disabled>
              <MdChevronLeft size={24} color="#fff" />
            </a>
          )}

          <strong>{page}</strong>
          <span>
            <MdMoreHoriz size={24} color="#fff" />
            {pages}
          </span>

          {_page < _pages ? (
            <a href={`${url}/${_page + 1}`}>
              <MdChevronRight size={24} color="#fff" />
            </a>
          ) : (
            <div>
              <MdChevronRight size={24} color="#fff" />
            </div>
          )}

          <a href={`${url}/${pages}`}>
            <MdLastPage size={24} color="#fff" />
          </a>
        </Container>
      )}
    </>
  );
}

Paginate.propTypes = {
  url: PropTypes.string.isRequired,
  page: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  pages: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
