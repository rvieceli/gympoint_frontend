import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';

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
  const queryString = useLocation().search || '';

  return (
    <>
      {_pages > 1 && (
        <Container>
          <Link to={`${url}/${1}${queryString}`}>
            <MdFirstPage size={24} />
          </Link>

          {_page <= 1 ? (
            <div>
              <MdChevronLeft size={24} />
            </div>
          ) : (
            <Link to={`${url}/${_page - 1}${queryString}`}>
              <MdChevronLeft size={24} />
            </Link>
          )}

          <strong>{page}</strong>
          <span>
            <MdMoreHoriz size={24} />
            {pages}
          </span>

          {_page < _pages ? (
            <Link to={`${url}/${_page + 1}${queryString}`}>
              <MdChevronRight size={24} />
            </Link>
          ) : (
            <div>
              <MdChevronRight size={24} />
            </div>
          )}

          <Link to={`${url}/${pages}${queryString}`}>
            <MdLastPage size={24} />
          </Link>
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
