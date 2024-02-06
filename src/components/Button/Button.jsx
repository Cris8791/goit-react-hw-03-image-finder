import React from 'react';

const Button = ({ onLoadMore }) => {
  return (
    <button className="button" onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default Button;
