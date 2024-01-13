/** @format */
import currencyRates from '../../assets/data/rates';
import currencies from '../../assets/data/currencies';
import getIcons from '../../assets/utils/getIcons';

const Rates = ({ data }) => {
  const { getCurrencyShort, getText, getNumber } = data;

  let firstItem;
  let secondItem;

  return (
    <div className='Rates'>
      {currencyRates.map((r) => {
        firstItem = getInformation(r.name);

        return (
          <div key={firstItem.name}>
            <div className='currency-title f-1-2 tb'>
              <img className='icons' src={getIcons(firstItem.flag)} />
              <div>{getText(firstItem.currency)}</div>
            </div>
            <div className='rates-container'>
              {currencyRates.map((b, i) => {
                secondItem = getInformation(b.name);

                if (r.name !== b.name) {
                  return (
                    <div key={`key-${i + 1}`} className='rate-container'>
                      <div>
                        {getNumber(1)} {getCurrencyShort(firstItem.currency)}{' '}
                        {'=>'}
                      </div>
                      <img className='icons' src={getIcons(secondItem.flag)} />
                      <div>
                        {getNumber(r.rates[secondItem.currency])}{' '}
                        {getCurrencyShort(secondItem.currency)}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

function getInformation(name) {
  let matchingItem;
  currencies.forEach((item) => {
    if (name === item.currency) {
      matchingItem = item;
    }
  });

  return matchingItem;
}

export default Rates;
