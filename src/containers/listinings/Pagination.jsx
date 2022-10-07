import React from 'react';
import PropTypes from 'prop-types';

const Pagination = (props) => {
  const getNumbers = () => {
    let numbers = [];
    let itemsPerPage = props.itemsPerPage;
    let pageNumber = 1;

    for (let i = 0; i < props.count; i += itemsPerPage) {
      const page = pageNumber;
      let content = null;

      if (props.active === page) {
    
        content = (
          <button key={i} className='bg-success p-2 m-2'>
            {pageNumber}
          </button>
        );
      }
      else {
        content = (
          <button key={i} onClick={() => props.visitPage(page)} className='p-2 m-2'>
            {pageNumber}
          </button>
        );
      }
      numbers.push(
        content
      );
      pageNumber++;
    }
    return numbers;
  };
  return (
    <div className='pagination '>
      <div className="mx-auto ">
      <button onClick={() => props.previous()} className='pagination__number  p-2 m-2'>
        <i className="fas fa-angle-left"></i>
      </button>
      {getNumbers()}
      <button onClick={() => props.next()} className='pagination__number  p-2 m-2'>
        <i className="fas fa-angle-right"></i>
      </button></div>
    </div>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
  visitPage: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

export default Pagination;
