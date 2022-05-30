type Weapon = {
  name: string;
  damage: WeaponDamage;
  classification: WeaponCategory;
  category: 'simple' | 'marciais' | 'exotic';
  damageMultiplier?: number;
  weight?: number;
  critical?: number;
  price?: number;
  typeTibar?: TypesTibar;
  size?: number;
  distance?: number;
  type?: TypeWeapon;
  description?: string;
  ammunition?: {
    quantity?: number;
    quantityToBuy: number;
    type: 'arrow' | 'bullets' | 'vigotes' | 'ammunation';
    weight: number;
    price: number;
    typeTibar: TypesTibar;
  };
};

type TypeWeapon =
  | 'perfuracao'
  | 'esmagamento'
  | 'acido'
  | 'especial'
  | 'fogo'
  | 'corte';

type WeaponCategory = 'leves' | 'uma mao' | 'duas maos' | 'distancia';

type WeaponDamage =
  | '1d4'
  | '1d3'
  | '1d6'
  | '1d6/1d6'
  | '1d8'
  | '1d10'
  | '2d4'
  | '2d6'
  | '2d8'
  | '4d6'
  | '1d12'
  | '1d8/1d8';

/* Weapon leves */
const adaga: Weapon = {
  name: 'adaga',
  price: 2,
  typeTibar: 'goldTibar',
  damage: '1d4',
  critical: 19 | 20,
  distance: 3,
  weight: 0.5,
  category: 'simple',
  classification: 'leves',
  type: 'perfuracao',
};

const ataqueDesarmado: Weapon = {
  name: 'ataque desarmado',
  damage: '1d3',
  damageMultiplier: 2,
  category: 'simple',
  classification: 'leves',
  type: 'esmagamento',
};

const espadaCurta: Weapon = {
  name: 'espada curta',
  damage: '1d6',
  price: 10,
  critical: 19 | 20,
  weight: 1,
  typeTibar: 'goldTibar',
  category: 'simple',
  classification: 'leves',
  type: 'perfuracao',
};

const manopla: Weapon = {
  name: 'manopla',
  damage: '1d4',
  price: 5,
  typeTibar: 'goldTibar',
  weight: 1,
  damageMultiplier: 2,
  category: 'simple',
  classification: 'leves',
  type: 'esmagamento',
};

/* Weapon uma mao */
const clava: Weapon = {
  name: 'clava',
  damage: '1d6',
  damageMultiplier: 2,
  weight: 1.5,
  type: 'esmagamento',
  category: 'simple',
  classification: 'uma mao',
};

const lanca: Weapon = {
  name: 'lanca',
  damage: '1d6',
  damageMultiplier: 2,
  price: 2,
  typeTibar: 'goldTibar',
  weight: 1.5,
  distance: 6,
  type: 'perfuracao',
  category: 'simple',
  classification: 'uma mao',
};

const maca: Weapon = {
  name: 'maca',
  damage: '1d8',
  damageMultiplier: 2,
  price: 12,
  typeTibar: 'goldTibar',
  weight: 6,
  type: 'esmagamento',
  category: 'simple',
  classification: 'uma mao',
};

/* Weapon Duas maos */
const bordao: Weapon = {
  name: 'bordao',
  damage: '1d6/1d6',
  damageMultiplier: 2,
  weight: 2,
  type: 'esmagamento',
  category: 'simple',
  classification: 'duas maos',
};

const pique: Weapon = {
  name: 'pique',
  price: 2,
  damage: '1d8',
  damageMultiplier: 2,
  weight: 5,
  type: 'perfuracao',
  category: 'simple',
  classification: 'duas maos',
};

const tacape: Weapon = {
  name: 'tacape',
  damage: '1d10',
  damageMultiplier: 2,
  weight: 4,
  type: 'esmagamento',
  category: 'simple',
  classification: 'duas maos',
};

/* Ataque a distancia */
const acido: Weapon = {
  name: 'acido',

  price: 10,
  typeTibar: 'goldTibar',

  damage: '2d4',
  distance: 3,
  weight: 0.5,
  type: 'acido',
  category: 'simple',
  classification: 'distancia',
};

const aguaBenta: Weapon = {
  name: 'agua benta',
  damage: '2d6',

  price: 25,
  typeTibar: 'goldTibar',

  distance: 3,
  weight: 0.5,
  type: 'especial',
  category: 'simple',
  classification: 'distancia',
};

const arcoCurto: Weapon = {
  name: 'arco curto',

  /* damage */
  damage: '1d6',
  damageMultiplier: 3,

  /* price */
  price: 30,
  typeTibar: 'goldTibar',

  distance: 12,
  weight: 1,

  type: 'perfuracao',
  category: 'simple',
  classification: 'distancia',

  /* ammunation */
  ammunition: {
    quantityToBuy: 20,
    quantity: 0,
    type: 'arrow',
    weight: 1.5,
    price: 5,
    typeTibar: 'goldTibar',
  },
};

const azagaia: Weapon = {
  name: 'azagaia',
  damage: '1d6',
  damageMultiplier: 2,

  price: 1,
  typeTibar: 'goldTibar',

  distance: 9,
  weight: 1,

  /* classification */
  classification: 'distancia',
  category: 'simple',
  type: 'perfuracao',
};

const bestaLeve: Weapon = {
  name: 'besta leve',

  /* damage */
  damage: '1d8',
  damageMultiplier: 19 | 20,

  /* price */
  price: 35,
  typeTibar: 'goldTibar',

  distance: 18,
  weight: 3,

  type: 'perfuracao',
  category: 'simple',
  classification: 'distancia',

  /* ammunation */
  ammunition: {
    quantityToBuy: 10,
    quantity: 0,
    type: 'vigotes',
    weight: 0.5,
    price: 1,
    typeTibar: 'goldTibar',
  },
};

const fogoAlquimico: Weapon = {
  name: 'fogo alquimico',

  price: 10,
  typeTibar: 'goldTibar',

  damage: '1d6',
  damageMultiplier: 2,

  distance: 3,

  weight: 0.5,

  type: 'fogo',
  classification: 'distancia',
  category: 'simple',
};

const funda: Weapon = {
  name: 'funda',

  damage: '1d4',
  damageMultiplier: 2,
  distance: 15,
  weight: 0.25,

  classification: 'distancia',
  category: 'simple',

  ammunition: {
    quantityToBuy: 10,
    quantity: 0,
    type: 'bullets',
    weight: 2,
    price: 1,
    typeTibar: 'goldTibar',
  },
};

const granade: Weapon = {
  name: 'granade',
  damage: '4d6',

  price: 50,
  typeTibar: 'goldTibar',

  distance: 3,
  weight: 0.5,

  type: 'fogo',
  classification: 'distancia',
  category: 'simple',
};

/* martial Leves */
const escudoLeve: Weapon = {
  name: 'escudo leve',
  damage: '1d4',
  damageMultiplier: 2,

  price: 5,
  typeTibar: 'goldTibar',

  weight: 3,
  type: 'esmagamento',
  category: 'marciais',
  classification: 'leves',
};

const machadinha: Weapon = {
  name: 'machadinha',
  damage: '1d6',
  damageMultiplier: 3,
  distance: 3,

  price: 6,
  typeTibar: 'goldTibar',

  weight: 2,

  type: 'corte',
  category: 'marciais',
  classification: 'leves',
};

const martelo: Weapon = {
  name: 'martelo',
  damage: '1d6',
  damageMultiplier: 2,
  distance: 6,

  price: 1,
  typeTibar: 'goldTibar',

  weight: 1,

  type: 'esmagamento',
  category: 'marciais',
  classification: 'leves',
};

/* martial uma mao */
const cimitarra: Weapon = {
  name: 'cimitarra',
  damage: '1d6',
  damageMultiplier: 18 | 20,

  price: 15,
  typeTibar: 'goldTibar',

  weight: 2,

  type: 'corte',
  category: 'marciais',
  classification: 'uma mao',
};

const escudoPesado: Weapon = {
  name: 'escudo pesado',
  damage: '1d6',
  damageMultiplier: 2,

  price: 15,
  typeTibar: 'goldTibar',

  weight: 7,

  type: 'esmagamento',
  category: 'marciais',
  classification: 'uma mao',
};

const espadaLonga: Weapon = {
  name: 'espada longa',
  damage: '1d8',
  damageMultiplier: 19 | 20,

  price: 15,
  typeTibar: 'goldTibar',

  weight: 2,

  type: 'corte',
  category: 'marciais',
  classification: 'uma mao',
};

const florete: Weapon = {
  name: 'florete',
  damage: '1d6',
  damageMultiplier: 18 | 20,

  price: 20,
  typeTibar: 'goldTibar',

  weight: 1,

  type: 'perfuracao',
  category: 'marciais',
  classification: 'uma mao',
};

const machadoDeBatalha: Weapon = {
  name: 'machado de batalha',
  damage: '1d8',
  damageMultiplier: 3,

  price: 10,
  typeTibar: 'goldTibar',

  weight: 3,

  type: 'corte',
  category: 'marciais',
  classification: 'uma mao',
};

const mangual: Weapon = {
  name: 'mangual',
  damage: '1d8',
  damageMultiplier: 2,

  price: 8,
  typeTibar: 'goldTibar',

  weight: 2.5,

  type: 'esmagamento',
  category: 'marciais',
  classification: 'uma mao',
};

const marteloDeGuerra: Weapon = {
  name: 'martelo de guerra',
  damage: '1d8',
  damageMultiplier: 3,

  price: 12,
  typeTibar: 'goldTibar',

  weight: 3,

  type: 'esmagamento',
  category: 'marciais',
  classification: 'uma mao',
};

const picareta: Weapon = {
  name: 'picareta',
  damage: '1d6',
  damageMultiplier: 4,

  price: 8,
  typeTibar: 'goldTibar',

  weight: 3,

  type: 'perfuracao',
  category: 'marciais',
  classification: 'uma mao',
};

const tridente: Weapon = {
  name: 'tridente',
  damage: '1d8',
  damageMultiplier: 2,

  price: 15,
  typeTibar: 'goldTibar',

  weight: 2,

  type: 'perfuracao',
  category: 'marciais',
  classification: 'uma mao',
};

/* Duas maos */
const alabarda: Weapon = {
  name: 'alabarda',
  damage: '1d10',
  damageMultiplier: 3,

  price: 10,
  typeTibar: 'goldTibar',

  weight: 6,

  type: 'corte',
  category: 'marciais',
  classification: 'duas maos',
};

const alfange: Weapon = {
  name: 'alfange',
  damage: '2d4',
  damageMultiplier: 18 | 20,

  price: 75,
  typeTibar: 'goldTibar',

  weight: 4,

  type: 'corte',
  category: 'marciais',
  classification: 'duas maos',
};

const espadaGrande: Weapon = {
  name: 'espada grande',
  damage: '2d6',
  damageMultiplier: 19 | 20,

  price: 50,
  typeTibar: 'goldTibar',

  weight: 4,

  type: 'corte',
  category: 'marciais',
  classification: 'duas maos',
};

const foice: Weapon = {
  name: 'foice',
  damage: '2d4',
  damageMultiplier: 4,

  price: 18,
  typeTibar: 'goldTibar',

  weight: 5,

  type: 'corte',
  category: 'marciais',
  classification: 'duas maos',
};

const lancaMontada: Weapon = {
  name: 'lanca montada',
  damage: '1d8',
  damageMultiplier: 3,

  price: 10,
  typeTibar: 'goldTibar',

  weight: 5,

  type: 'perfuracao',
  category: 'marciais',
  classification: 'duas maos',
};

const machadoGrande: Weapon = {
  name: 'machado grande',
  damage: '1d12',
  damageMultiplier: 3,

  price: 20,
  typeTibar: 'goldTibar',

  weight: 6,

  type: 'corte',
  category: 'marciais',
  classification: 'duas maos',
};

/* Distancia */
const arcoComposto: Weapon = {
  name: 'arco composto',
  damage: '1d6',
  damageMultiplier: 2,

  price: 75,
  typeTibar: 'goldTibar',

  weight: 1,
  distance: 18,

  type: 'perfuracao',
  category: 'marciais',
  classification: 'duas maos',

  ammunition: {
    type: 'arrow',
    weight: 1.5,
    quantityToBuy: 20,
    quantity: 0,
    price: 1,
    typeTibar: 'goldTibar',
  },
};

const arcoLongo: Weapon = {
  name: 'arco longo',
  damage: '1d8',
  damageMultiplier: 3,

  price: 100,
  typeTibar: 'goldTibar',

  weight: 1.5,
  distance: 24,

  type: 'perfuracao',
  category: 'marciais',
  classification: 'duas maos',

  ammunition: {
    type: 'arrow',
    weight: 1.5,
    quantityToBuy: 20,
    quantity: 0,
    price: 1,
    typeTibar: 'goldTibar',
  },
};

const bestaPesada: Weapon = {
  name: 'besta pesada',
  damage: '1d12',
  damageMultiplier: 19 | 20,

  price: 50,
  typeTibar: 'goldTibar',

  weight: 4,
  distance: 27,

  type: 'perfuracao',
  category: 'marciais',
  classification: 'duas maos',

  ammunition: {
    type: 'arrow',
    weight: 0.5,
    quantityToBuy: 20,
    quantity: 0,
    price: 1,
    typeTibar: 'goldTibar',
  },
};

/* Exotic */

const nunchaku: Weapon = {
  name: 'nunchaku',
  damage: '1d6',
  damageMultiplier: 3,

  price: 2,
  typeTibar: 'goldTibar',

  weight: 1,

  type: 'esmagamento',
  category: 'exotic',
  classification: 'leves',
};

const sai: Weapon = {
  name: 'sai',
  damage: '1d6',
  damageMultiplier: 2,

  price: 5,
  typeTibar: 'goldTibar',

  distance: 3,
  weight: 0.5,

  type: 'esmagamento',
  category: 'exotic',
  classification: 'leves',
};

const wakizashi: Weapon = {
  name: 'wakizashi',
  damage: '1d8',
  damageMultiplier: 19 | 20,

  price: 350,
  typeTibar: 'goldTibar',

  weight: 1,

  type: 'corte',
  category: 'exotic',
  classification: 'leves',
};

/* uma mao */

const chicote: Weapon = {
  name: 'chicote',
  damage: '1d3',
  damageMultiplier: 2,

  price: 1,
  typeTibar: 'goldTibar',

  weight: 1,

  type: 'corte',
  category: 'exotic',
  classification: 'uma mao',
};

const espadaBastarda: Weapon = {
  name: 'espada bastarda',
  damage: '1d10',
  damageMultiplier: 19 | 20,

  price: 35,
  typeTibar: 'goldTibar',

  weight: 3,

  type: 'corte',
  category: 'exotic',
  classification: 'uma mao',
};

const katana: Weapon = {
  name: 'katana',
  damage: '1d10',
  damageMultiplier: 19 | 20,

  price: 400,
  typeTibar: 'goldTibar',

  weight: 3,

  type: 'corte',
  category: 'exotic',
  classification: 'uma mao',
};

const machadoAnao: Weapon = {
  name: 'machado anao',
  damage: '1d10',
  damageMultiplier: 3,

  price: 30,
  typeTibar: 'goldTibar',

  weight: 2,

  type: 'corte',
  category: 'exotic',
  classification: 'uma mao',
};

const sabreSerrilhado: Weapon = {
  name: 'sabre serrilhado',
  damage: '1d8',
  damageMultiplier: 19 | 20,

  price: 500,
  typeTibar: 'goldTibar',

  weight: 2,

  type: 'corte',
  category: 'exotic',
  classification: 'uma mao',
};

/* duas maos */

const correnteComCravos: Weapon = {
  name: 'corrente com cravos',
  damage: '2d4',
  damageMultiplier: 2,

  price: 25,
  typeTibar: 'goldTibar',

  weight: 5,

  type: 'perfuracao',
  category: 'exotic',
  classification: 'duas maos',
};

const espadaDuasLaminas: Weapon = {
  name: 'espada duas laminas',
  damage: '1d8/1d8',
  damageMultiplier: 19 | 20,

  price: 100,
  typeTibar: 'goldTibar',

  weight: 2,

  type: 'corte',
  category: 'exotic',
  classification: 'duas maos',
};

const espadaTaurica: Weapon = {
  name: 'espada taurica',
  damage: '2d8',
  damageMultiplier: 2,

  price: 50,
  typeTibar: 'goldTibar',

  weight: 7.5,

  type: 'corte',
  category: 'exotic',
  classification: 'duas maos',
};

const marretaEstilhacadora: Weapon = {
  name: 'marreta estilhacadora',
  damage: '1d12',
  damageMultiplier: 19 | 20,

  price: 50,
  typeTibar: 'goldTibar',

  weight: 7,

  type: 'esmagamento',
  category: 'exotic',
  classification: 'duas maos',
};

/* distancia */

const mosquete: Weapon = {
  name: 'mosquete',
  damage: '2d8',
  damageMultiplier: 19 | 20 | 3,

  price: 500,
  typeTibar: 'goldTibar',

  distance: 45,
  weight: 5,

  type: 'perfuracao',
  category: 'exotic',
  classification: 'distancia',

  ammunition: {
    type: 'ammunation',
    weight: 1,
    quantityToBuy: 10,
    quantity: 0,
    price: 50,
    typeTibar: 'goldTibar',
  },
};

const pistola: Weapon = {
  name: 'pistola',
  damage: '2d6',
  damageMultiplier: 19 | 20 | 3,

  price: 250,
  typeTibar: 'goldTibar',

  distance: 15,
  weight: 1.5,

  type: 'perfuracao',
  category: 'exotic',
  classification: 'distancia',

  ammunition: {
    type: 'ammunation',
    weight: 1,
    quantityToBuy: 10,
    quantity: 0,
    price: 35,
    typeTibar: 'goldTibar',
  },
};

const rede: Weapon = {
  name: 'rede',
  damage: '1d4',

  price: 20,
  typeTibar: 'goldTibar',

  distance: 3,
  weight: 3,

  category: 'exotic',
  classification: 'distancia',
};

const shuriken: Weapon = {
  name: 'shuriken',
  damage: '1d4',
  damageMultiplier: 2,

  price: 1,
  typeTibar: 'goldTibar',

  distance: 3,
  weight: 0.25,

  category: 'exotic',
  classification: 'distancia',
};

const taitai: Weapon = {
  name: 'taitai',
  damage: '2d4',
  damageMultiplier: 2,

  price: 40,
  typeTibar: 'goldTibar',

  distance: 24,
  weight: 2,

  type: 'esmagamento',
  category: 'exotic',
  classification: 'distancia',
};

const simpleListWeapons: Weapon[] = [
  adaga,
  ataqueDesarmado,
  espadaCurta,
  clava,
  lanca,
  maca,
  bordao,
  pique,
  tacape,
  acido,
  aguaBenta,
  arcoCurto,
  azagaia,
  bestaLeve,
  fogoAlquimico,
  funda,
  granade,
];

const martialListWeapons: Weapon[] = [
  escudoLeve,
  machadinha,
  martelo,
  cimitarra,
  escudoPesado,
  espadaLonga,
  florete,
  machadoDeBatalha,
  mangual,
  marteloDeGuerra,
  picareta,
  tridente,
  alabarda,
  alfange,
  espadaGrande,
  foice,
  lancaMontada,
  machadoGrande,
  arcoComposto,
  arcoLongo,
  bestaPesada,
];

const exoticListWeapons: Weapon[] = [
  nunchaku,
  sai,
  wakizashi,
  chicote,
  espadaBastarda,
  katana,
  machadoAnao,
  sabreSerrilhado,
  correnteComCravos,
  espadaDuasLaminas,
  espadaTaurica,
  marretaEstilhacadora,
  mosquete,
  pistola,
  rede,
  shuriken,
  taitai,
];

const allWeapons: Weapon[] = [
  ...simpleListWeapons,
  ...martialListWeapons,
  ...exoticListWeapons,
];
