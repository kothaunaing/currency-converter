/** @format */
import { useEffect, useState } from 'react';

const Display = ({ data }) => {
  const { amount, result, from, to, getNumber, getCurrencyShort } = data;

  return (
    <div className='Display'>
      {amount ? (
        <div className='results f-1-2'>
          {getNumber(amount)} {getCurrencyShort(from.short)} ={' '}
          {getNumber(result)} {getCurrencyShort(to.short)}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Display;
