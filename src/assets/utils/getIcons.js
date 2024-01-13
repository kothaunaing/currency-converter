/** @format */

// Navbar icons
import convert from '../../icons/convert.svg';
import rates from '../../icons/chart.svg';
import about from '../../icons/about.svg';
import setting from '../../icons/setting.svg';

// Convert Page
import up from '../../icons/up.svg';
import down from '../../icons/down.svg';

// Select Units
import close from '../../icons/close.svg';
// Settings Page
import swap from '../../icons/swap.svg';
// Main Page
import length from '../../icons/length.svg';
import currency from '../../icons/currency.svg';
import temperature from '../../icons/temperature.svg';
import area from '../../icons/area.svg';
import volume from '../../icons/volume.svg';
import time from '../../icons/time.svg';
import weight from '../../icons/weight.svg';
import pressure from '../../icons/pressure.svg';
import force from '../../icons/force.svg';
import acceleration from '../../icons/acceleration.svg';
import speed from '../../icons/speed.svg';
import frequency from '../../icons/frequency.svg';
import dataStorage from '../../icons/data-storage.svg';
import energy from '../../icons/energy.svg';
import power from '../../icons/power.svg';
import electricCurrent from '../../icons/power.svg';
import electricalResistance from '../../icons/electrical-resistance.svg';
import electricalPotential from '../../icons/electrical-potential.svg';
import electricCapacitance from '../../icons/electric-capacitance.svg';
// flags
import usd from '../../flags/usd.svg';
import aud from '../../flags/aud.svg';
import cad from '../../flags/cad.svg';
import cny from '../../flags/cny.svg';
import euro from '../../flags/euro.svg';
import gbp from '../../flags/gbp.svg';
import inr from '../../flags/inr.svg';
import jpy from '../../flags/jpy.svg';
import mmk from '../../flags/mmk.svg';
import nzd from '../../flags/nzd.svg';
import thb from '../../flags/thb.svg';

const iconsObject = {
  close,
  down,
  up,
  swap,
  convert,
  chart: rates,
  about,
  setting,
  length,
  currency,
  temperature,
  area,
  volume,
  time,
  weight,
  pressure,
  force,
  acceleration,
  speed,
  frequency,
  'data-storage': dataStorage,
  energy,
  power,
  'electric-current': electricCurrent,
  'electrical-resistance': electricalResistance,
  'electrical-potential': electricalPotential,
  'electric-capacitance': electricCapacitance,
  // flags
  usd,
  aud,
  cad,
  cny,
  euro,
  gbp,
  inr,
  jpy,
  mmk,
  nzd,
  thb,
};

function getIcons(icon) {
  return iconsObject[icon];
}

export default getIcons;
