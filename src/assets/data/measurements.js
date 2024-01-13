const measurements = [
  {
    name: 'length',
    units: [
      {
        id: 1,
        name: 'Kilometer (KM)',
        short: 'KM'
      },
      {
        id: 2,
        name: 'Meter (M)',
        short: 'M',
      },
      {
        id: 3,
        name: 'Centimeter (CM)',
        short: 'CM'
      },
      {
        id: 4,
        name: 'Millimeter (MM)',
        short: 'MM'
      },
      {
        id: 5,
        name: 'Mile (MI)',
        short: 'MI'
      }
      ,
      {
        id: 6,
        name: 'Yard (YD)',
        short: 'YD'
      },
      {
        id: 7,
        name: 'Foot (FT)',
        short: 'FT'
      }
      ,
      {
        id: 8,
        name: 'Inch (IN)',
        short: 'IN'
      }
    ]
  },
  {
    name: 'area',
    units: [
      {
        id: 1,
        name: 'Square Kilometer (Sq KM)',
        short: 'Sq KM'
      },
      {
        id: 2,
        name: 'Square Meter (Sq M)',
        short: 'Sq M',
      },
      {
        id: 3,
        name: 'Square Centimeter (Sq CM)',
        short: 'Sq CM'
      },
      {
        id: 4,
        name: 'Square Millimeter (Sq MM)',
        short: 'Sq MM'
      },
      {
        id: 5,
        name: 'Square Mile (Sq MI)',
        short: 'Sq MI'
      }
      ,
      {
        id: 6,
        name: 'Square Yard (Sq YD)',
        short: 'Sq YD'
      },
      {
        id: 7,
        name: 'Square Foot (Sq FT)',
        short: 'Sq FT'
      }
      ,
      {
        id: 8,
        name: 'Square Inch (Sq IN)',
        short: 'Sq YD'
      },
      {
        id: 9,
        name: 'Hectare (HA)',
        short: 'HA'
      },
      {
        id: 10,
        name: 'Acre (AC)',
        short: 'AC'
      }
    ]
  },
  {
    name: 'currency',
    units: [
      {
        id: 1,
        name: 'USD - USD Dollar',
        flag: 'usd',
        symbol: '$',
        short: 'USD',
      },
      {
        id: 2,
        name: 'MMK - Myanmar Kyat',
        flag: 'mmk',
        symbol: 'Ks',
        short: 'MMK',
      },
      {
        id: 3,
        name: 'GBP - British Pound',
        flag: 'gbp',
        symbol: '₤',
        short: 'GBP',
      },
      {
        id: 4,
        name: 'EUR - Euro',
        flag: 'euro',
        symbol: 'Euro',
        short: 'EUR',
      },
      {
        id: 5,
        name: 'INR - Indian Rupee',
        flag: 'inr',
        symbol: 'Rupee',
        short: 'INR',
      },
      {
        id: 6,
        name: 'AUD - Australian Dollar',
        flag: 'aud',
        symbol: '$',
        short: 'AUD',
      },
      {
        id: 7,
        name: 'CAD - Canadian Dollar',
        flag: 'cad',
        symbol: '$',
        short: 'CAD',
      },
      {
        id: 8,
        name: 'JPY - Japanese Yen',
        flag: 'jpy',
        symbol: 'Yen',
        short: 'JPY',
      },
      {
        id: 9,
        name: 'CNY - Chinese Yuan',
        flag: 'cny',
        symbol: 'Yuan',
        short: 'CNY',
      },
      {
        id: 10,
        name: 'THB - Thai Baht',
        flag: 'thb',
        symbol: 'Baht',
        short: 'THB',
      }
    ]
  },
  {
    name: 'temperature',
    units: [
      {
        id: 1,
        name: 'Celsius (˚C)',
        short: '˚C'
      },
      {
        id: 2,
        name: 'Fahrenheit (˚F)',
        short: '˚F',
      },
      {
        id: 3,
        name: 'Kelvin (K))',
        short: 'K'
      },
    ]
  },
  {
    name: 'time',
    units: [
      {
        id: 1,
        name: 'Year (Y)',
        short: 'Y'
      },
      {
        id: 2,
        name: 'Week (WK)',
        short: 'WK',
      },
      {
        id: 3,
        name: 'Day (D)',
        short: 'D'
      },
      {
        id: 4,
        name: 'Hour (H)',
        short: 'H'
      },
      {
        id: 5,
        name: 'Minute (MIN)',
        short: 'MIN'
      }
      ,
      {
        id: 6,
        name: 'Second (S)',
        short: 'S'
      },
    ]
  },
  {
    name: 'weight',
    units: [
      {
        id: 1,
        name: 'Kilogram (KG)',
        short: 'KG'
      },
      {
        id: 2,
        name: 'Gram (G)',
        short: 'G',
      },
      {
        id: 3,
        name: 'Ton (TON)',
        short: 'TON'
      },
      {
        id: 4,
        name: 'Pound (LB)',
        short: 'LB'
      },
      {
        id: 5,
        name: 'Once (OZ)',
        short: 'OZ'
      }
    ]
  },
  {
    name: 'data-storage',
    units: [
      {
        id: 1,
        name: 'Byte (B)',
        short: 'B'
      },
      {
        id: 2,
        name: 'Kilobyte (kB)',
        short: 'kB',
      },
      {
        id: 3,
        name: 'Megabyte (MB)',
        short: 'MB'
      },
      {
        id: 4,
        name: 'Gigabyte (GB)',
        short: 'GB'
      },
      {
        id: 5,
        name: 'Terabyte (TB)',
        short: 'TB'
      }
    ]
  },
];

function getMeasurement(name) {
  let item;

  measurements.forEach((m) => {
    if (name === m.name) {
      item = m;
    }
  })
  return item.units;
}

export default getMeasurement;