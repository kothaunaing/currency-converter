const factors = [
  {
    name: 'length',
    units: [
      {
        name: 'KM',
        rates: {
          M: 1000,
          CM: 100000,
          MM: 1000000,
          MI: 0.62137119224,
          YD: 1093.61329833771,
          FT: 3280.83989591312,
          IN: 39370.07874015748
        }
      },
      {
        name: 'M',
        rates: {
          KM: 1 / 1000,
          CM: 100,
          MM: 1000,
          MI: 0.00062137119,
          YD: 1.09361329834,
          FT: 3.28083989501,
          IN: 39.37007874016
        }
      },
      {
        name: 'CM',
        rates: {
          M: 0.01,
          KM: 1 / 100000,
          MM: 10,
          MI: 0.00000621371,
          YD: 0.01093613298,
          FT: 0.03280839895,
          IN: 0.3937007874
        }
      },
      {
        name: 'MM',
        rates: {
          M: 0.001,
          KM: 1 / 1000000,
          CM: 1 / 10,
          MI: 0.00000062137,
          YD: 0.0010936133,
          FT: 0.0032808399,
          IN: 0.03937007874
        }
      },
      {
        name: 'MI',
        rates: {
          M: 1 / 0.62137119224,
          KM: 1.609344,
          CM: 160934.4,
          MM: 1609344,
          YD: 1760,
          FT: 5280,
          IN: 63360
        }
      },
      {
        name: 'YD',
        rates: {
          M: 0.9144,
          KM: 1 / 1093.61329833771,
          CM: 91.44,
          MM: 914.4,
          MI: 0.00056818182,
          FT: 3,
          IN: 36
        }
      },
      {
        name: 'FT',
        rates: {
          M: 1 / 3.28083989501,
          KM: 1 / 3280.83989591312,
          CM: 1 / 0.03280839895,
          MM: 1 / 0.0032808399,
          MI: 1 / 5280,
          YD: 1 / 3,
          IN: 12
        }
      },
      {
        name: 'IN',
        rates: {
          M: 1 / 39.37007874016,
          KM: 1 / 39370.07874015748,
          CM: 1 / 0.3937007874,
          MM: 1 / 0.03937007874,
          MI: 1 / 63360,
          YD: 1 / 36,
          FT: 1 / 12,
        }
      },
    ]
  },
  {
    name: 'area',
    units: [
      {
        name: 'Sq KM',
        rates: {
          'Sq KM': 1,
          'Sq M': 1000000,
          'Sq CM': 10000000000,
          'Sq MM': 1000000000000,
          'Sq MI': 0.38610215854,
          'Sq YD': 1195990.04630108026,
          'Sq FT': 10763910.41670972231,
          'Sq IN': 1550003100.0062000124,
          HA: 100,
          AC: 247.10538146717
        }
      },
      {
        name: 'Sq M',
        rates: {
          'Sq KM': 1 / 1000000,
          'Sq M': 1,
          'Sq CM': 10000,
          'Sq MM': 1000000,
          'Sq MI': 0.0000003861,
          'Sq YD': 1.1959900463,
          'Sq FT': 10.76391041671,
          'Sq IN': 1550.0031000062,
          HA: 0.0001,
          AC: 0.00024710538
        }
      },
      {
        name: 'Sq CM',
        rates: {
          'Sq KM': 1 / 10000000000,
          'Sq M': 1 / 10000,
          'Sq CM': 1,
          'Sq MM': 100,
          'Sq MI': 1 / 25899881103.36,
          'Sq YD': 0.000119599,
          'Sq FT': 0.00107639104,
          'Sq IN': 0.15500031,
          HA: 0.00000001,
          AC: 0.00000002471
        }
      },
      {
        name: 'Sq MM',
        rates: {
          'Sq KM': 1 / 1000000000000,
          'Sq M': 1 / 1000000,
          'Sq CM': 1 / 100,
          'Sq MM': 1,
          'Sq MI': 1 / 2589988110336,
          'Sq YD': 1 / 836127.36,
          'Sq FT': 1 / 92900003.04,
          'Sq IN': 1 / 645.16,
          HA: 1 / 10000000000,
          AC: 1 / 4046856422.4
        }
      },
      {
        name: 'Sq MI',
        rates: {
          'Sq KM': 1 / 0.38610215854,
          'Sq M': 1 / 0.0000003861,
          'Sq CM': 25899881103.36,
          'Sq MM': 2589988110336,
          'Sq MI': 1,
          'Sq YD': 3097600,
          'Sq FT': 27878400,
          'Sq IN': 4011489600,
          HA: 258.9988110336,
          AC: 640
        }
      },
      {
        name: 'Sq YD',
        rates: {
          'Sq KM': 1 / 1195990.04630108026,
          'Sq M': 1 / 1.1959900463,
          'Sq CM': 1 / 0.000119599,
          'Sq MM': 836127.36,
          'Sq MI': 1 / 3097600,
          'Sq YD': 1,
          'Sq FT': 9,
          'Sq IN': 1296,
          HA: 1 / 11959.9004630108,
          AC: 1 / 119.59900463011
        }
      },
      {
        name: 'Sq FT',
        rates: {
          'Sq KM': 1 / 10763910.41670972231,
          'Sq M': 1 / 10.76391041671,
          'Sq CM': 1 / 0.00107639104,
          'Sq MM': 92900003.04,
          'Sq MI': 1 / 27878400,
          'Sq YD': 1 / 9,
          'Sq FT': 1,
          'Sq IN': 144,
          HA: 1 / 107639.10416709722,
          AC: 1 / 43560
        }
      },
      {
        name: 'Sq IN',
        rates: {
          'Sq KM': 1 / 1550003100.0062000124,
          'Sq M': 1 / 1550.0031000062,
          'Sq CM': 1 / 0.15500031,
          'Sq MM': 645.16,
          'Sq MI': 1 / 4011489600,
          'Sq YD': 1 / 1296,
          'Sq FT': 1 / 144,
          'Sq IN': 1,
          HA: 1 / 15500031.00006200012,
          AC: 1 / 6272640
        }
      },
      {
        name: 'HA',
        rates: {
          'Sq KM': 1 / 100,
          'Sq M': 1 / 0.0001,
          'Sq CM': 1 / 0.00000001,
          'Sq MM': 10000000000,
          'Sq MI': 1 / 258.9988110336,
          'Sq YD': 11959.9004630108,
          'Sq FT': 107639.10416709722,
          'Sq IN': 15500031.00006200012,
          HA: 1,
          AC: 2.47105381467
        }
      },
      {
        name: 'AC',
        rates: {
          'Sq KM': 1 / 247.10538146717,
          'Sq M': 1 / 0.00024710538,
          'Sq CM': 1 / 0.00000002471,
          'Sq MM': 4046856422.4,
          'Sq MI': 1 / 640,
          'Sq YD': 119.59900463011,
          'Sq FT': 43560,
          'Sq IN': 6272640,
          HA: 1 / 2.47105381467,
          AC: 1
        }
      },
    ]
  },
  {
    name: 'currency',
    units: [
      {
        name: 'USD',
        rates: {
          MMK: 2095.4433,
          GBP: 0.7859386,
          EUR: 0.91331626,
          INR: 83.155204,
          AUD: 1.4902694,
          THB: 34.655513,
          CAD: 1.3363995,
          JPY: 144.59284,
          CNY: 7.1077814,
        }
      },
      {
        name: 'MMK',
        rates: {
          GBP: 0.00037507033,
          EUR: 0.00043585826,
          INR: 0.039683825,
          AUD: 0.00071119529,
          THB: 0.016538511,
          USD: 0.000477226,
          CAD: 0.00063776457,
          JPY: 0.06900346,
          CNY: 0.003392018,
        }
      },
      {
        name: 'EUR',
        rates: {
          MMK: 2294.3238,
          GBP: 0.8605328,
          INR: 91.047546,
          AUD: 1.6317123,
          THB: 37.944701,
          USD: 1.094911,
          CAD: 1.4632384,
          JPY: 158.31628,
          CNY: 7.7823878,
        }
      },
      {
        name: 'GBP',
        rates: {
          MMK: 2666.1666,
          EUR: 1.1620708,
          INR: 105.80369,
          AUD: 1.8961651,
          THB: 44.094427,
          USD: 1.272364,
          CAD: 1.7003866,
          JPY: 183.97472,
          CNY: 9.0436853,
        }
      },
      {
        name: 'INR',
        rates: {
          MMK: 25.199184,
          GBP: 0.0094514662,
          EUR: 0.010983272,
          AUD: 0.017921541,
          THB: 0.41675699,
          USD: 0.012025706,
          CAD: 0.16071146,
          JPY: 1.7388309,
          CNY: 0.085476086,
        }
      },
      {
        name: 'AUD',
        rates: {
          MMK: 1406.1411,
          GBP: 0.52738151,
          EUR: 0.61302797,
          INR: 55.801056,
          THB: 23.244339,
          USD: 0.67104707,
          CAD: 0.89699241,
          JPY: 97.038784,
          CNY: 4.7676611,
        }
      },
      {
        name: 'CAD',
        rates: {
          MMK: 1567.6176,
          GBP: 0.58794422,
          EUR: 0.68342604,
          INR: 62.209061,
          AUD: 1.1148366,
          THB: 25.91364,
          USD: 0.74810785,
          JPY: 108.18239,
          CNY: 5.3151633,
        }
      },
      {
        name: 'JPY',
        rates: {
          MMK: 14.490506,
          GBP: 0.0054347497,
          EUR: 0.0063173501,
          INR: 0.5750387,
          AUD: 0.010305158,
          THB: 0.23953658,
          USD: 0.006915246,
          CAD: 0.0092436485,
          CNY: 0.049131501,
        }
      },
      {
        name: 'CNY',
        rates: {
          MMK: 294.9331,
          GBP: 0.1106164,
          EUR: 0.12858044,
          INR: 11.704073,
          AUD: 0.20974645,
          THB: 4.8754175,
          USD: 0.14074974,
          CAD: 0.18814097,
          JPY: 20.35354,
        }
      },
      {
        name: 'THB',
        rates: {
          MMK: 60.464934,
          GBP: 0.022678603,
          EUR: 0.026354141,
          INR: 2.3994799,
          AUD: 0.043002376,
          USD: 0.028855438,
          CAD: 0.038562392,
          JPY: 4.1722896,
          CNY: 0.20509815,
        }
      },
    ]
  },
  {
    name: 'temperature',
    units: []
  },
  {
    name: 'time',
    units: [
      {
        name: 'Y',
        rates: {
          Y: 1,
          WK: 52.14285714286,
          D: 365,
          H: 8760,
          MIN: 525600,
          S: 31536000
        }
      },
      {
        name: 'WK',
        rates: {
          Y: 1 / 52.14285714286,
          WK: 1,
          D: 7,
          H: 168,
          MIN: 10080,
          S: 604800
        }
      },
      {
        name: 'D',
        rates: {
          Y: 1 / 365,
          WK: 1 / 7,
          D: 1,
          H: 24,
          MIN: 1440,
          S: 86400
        }
      },
      {
        name: 'H',
        rates: {
          Y: 1 / 8760,
          WK: 1 / 168,
          D: 1 / 24,
          H: 1,
          MIN: 60,
          S: 3600
        }
      },
      {
        name: 'MIN',
        rates: {
          Y: 1 / 525600,
          WK: 1 / 10080,
          D: 1 / 1440,
          H: 1 / 60,
          MIN: 1,
          S: 60
        }
      },
      {
        name: 'S',
        rates: {
          Y: 1 / 31536000,
          WK: 1 / 604800,
          D: 1 / 86400,
          H: 1 / 3600,
          MIN: 1 / 60,
          S: 1
        }
      },
    ]
  },
  {
    name: 'weight',
    units: [
      {
        name: 'KG',
        rates: {
          KG: 1,
          G: 1000,
          TON: 0.00098420653,
          LB: 2.20462262185,
          OZ: 35.27396194958
        }
      },
      {
        name: 'G',
        rates: {
          KG: 1 / 1000,
          G: 1,
          TON: 0.00000098421,
          LB: 0.00220462262,
          OZ: 0.03527396195
        }
      },
      {
        name: 'TON',
        rates: {
          KG: 1 / 0.00098420653,
          G: 1 / 0.00000098421,
          TON: 1,
          LB: 2240,
          OZ: 35840
        }
      },
      {
        name: 'LB',
        rates: {
          KG: 1 / 2.20462262185,
          G: 1 / 0.00220462262,
          TON: 1 / 2240,
          LB: 1,
          OZ: 16
        }
      },
      {
        name: 'OZ',
        rates: {
          KG: 1 / 35.27396194958,
          G: 1 / 0.03527396195,
          TON: 1 / 35840,
          LB: 1 / 16,
          OZ: 1
        }
      },
    ]
  },
  {
    name: 'data-storage',
    units: [
      {
        name: 'B',
        rates: {
          B: 1,
          kB: 1 / 1024,
          MB: 1 / 1048576,
          GB: 1 / 1073741824,
          TB: 1 / 1099511627776,
        }
      },
      {
        name: 'kB',
        rates: {
          B: 1024,
          kB: 1,
          MB: 1024,
          GB: 1 / 1048576,
          TB: 1 / 1073741824,
        }
      },
      {
        name: 'MB',
        rates: {
          B: 1048576,
          kB: 1 / 1024,
          MB: 1,
          GB: 1 / 1024,
          TB: 1 / 1048576,
        }
      },
      {
        name: 'GB',
        rates: {
          B: 1073741824,
          kB: 1048576,
          MB: 1024,
          GB: 1,
          TB: 1 / 1024,
        }
      },
      {
        name: 'TB',
        rates: {
          B: 1099511627776,
          kB: 1073741824,
          MB: 1048576,
          GB: 1024,
          TB: 1,
        }
      },

    ]
  },
]


function getFactors(name, from) {
  let firstItem;
  let secondItem;

  factors.forEach((f) => {
    if (name === f.name) {
      firstItem = f.units;
    }
  });

  firstItem.forEach((fi) => {
    if (from === fi.name) {
      secondItem = fi.rates;
    }
  })

  return secondItem;
}

export default getFactors;