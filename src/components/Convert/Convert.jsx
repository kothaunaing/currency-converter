/** @format */

import { useEffect, useState } from 'react';
import CustomSelector from './CustomSelector';
import getFactors from '../../assets/data/factors';
import Display from './Display';
import SelectCurrency from '../SelectCurrency/SelectCurrency';
import ConverterTitle from './ConverterTitle';
import getMeasurement from '../../assets/data/measurements';
import getIcons from '../../assets/utils/getIcons';

const Convert = ({ data }) => {
  const { getText, getNumber, getCurrencyShort, measurement, setCurrentPage } =
    data;

  let array;

  try {
    array = getMeasurement(measurement.img);
  } catch (error) {
    console.log(error.message);
  }

  const [from, setFrom] = useState(array ? array[0] : {});
  const [to, setTo] = useState(array ? array[1] : {});
  const [amount, setAmount] = useState(null);
  const [result, setResult] = useState(0);
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectFrom, setSelectFrom] = useState(null);

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  useEffect(() => {
    calResult();
  }, [from, to]);

  useEffect(() => {
    calResult();
  }, [amount]);

  const calResult = () => {
    try {
      if (measurement.img === 'temperature') {
        setResult(calculateTemp(Number(amount), from.short, to.short));
      } else {
        setResult(
          calculateCurrency(amount, measurement.img, from.short, to.short)
        );
      }
    } catch (error) {
      console.log(error.message);
      setCurrentPage('Error');
    }
  };

  if (isSelecting) {
    return (
      <SelectCurrency
        data={{
          isSelecting,
          setIsSelecting,
          array,
          selectFrom,
          setFrom,
          setTo,
          from,
          to,
          getText,
        }}
      />
    );
  } else {
    return (
      <div className='Convert'>
        <ConverterTitle data={{ measurement }} />
        <div>
          <div className='tb'>{getText('amount')}</div>
          <div className='small-container amount-container'>
            {array?.symbol && <div>{from.symbol}</div>}
            <input
              placeholder={getText('enter-amount')}
              className='amount'
              value={amount ? amount : ''}
              onChange={handleAmount}
              maxLength='8'
            />
          </div>
        </div>
        <div>
          <div className='tb'>{getText('from')}</div>
          <CustomSelector
            data={{
              item: from,
              setIsSelecting,
              selected: 'from',
              setSelectFrom,
              getText,
            }}
          />
        </div>
        <div className='swap-container'>
          <button onClick={handleSwap}>
            <img className='icons' src={getIcons('swap')} />
          </button>
        </div>
        <div>
          <div className='tb'>{getText('to')}</div>
          <CustomSelector
            data={{
              item: to,
              setIsSelecting,
              selected: 'to',
              setSelectFrom,
              getText,
            }}
          />
        </div>

        <Display
          data={{
            amount,
            result,
            from,
            to,
            getNumber,
            getCurrencyShort,
            measurement,
          }}
        />
      </div>
    );
  }
};

function calculateCurrency(amount, title, from, to) {
  let factor = getFactors(title, from);
  let result;

  if (from === to) {
    result = amount;
  } else {
    result = factor[to] * Number(amount);
  }

  return result;
}

function calculateTemp(amount, from, to) {
  let item;
  let result;

  const units = [
    {
      name: '˚C',
      formulas: {
        '˚F': (9 / 5) * amount + 32,
        K: amount + 273.15,
      },
    },
    {
      name: '˚F',
      formulas: {
        '˚C': (5 / 9) * (amount - 32),
        K: (5 / 9) * (amount - 32) + 273.15,
      },
    },
    {
      name: 'K',
      formulas: {
        '˚F': (9 / 5) * (amount - 273.15) + 32,
        '˚C': amount - 273.15,
      },
    },
  ];

  units.forEach((u) => {
    if (u.name === from) {
      item = u;
    }
  });

  if (from === to) {
    result = amount;
  } else {
    result = item.formulas[to];
  }

  return result;
}

export default Convert;
