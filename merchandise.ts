type Merchandise = {
  name: string;
  price: number;
  typeTibar: TypesTibar;
  weight?: number;
  meters?: number;
};

/* Tibar */
const trigo: Merchandise = {
  name: 'Trigo',
  price: 2,
  typeTibar: 'tibar',
  weight: 1,
};

const farinha: Merchandise = {
  name: 'Farinha',
  price: 4,
  typeTibar: 'tibar',
  weight: 1,
};

const galinha: Merchandise = {
  name: 'Farinha',
  price: 4,
  typeTibar: 'tibar',
  weight: 1,
};

/* Platinum Tibar */
const iron: Merchandise = {
  name: 'iron',
  price: 4,
  typeTibar: 'platinumTibar',
  weight: 1,
};

const tabaco: Merchandise = {
  name: 'tabaco',
  price: 4,
  typeTibar: 'platinumTibar',
  weight: 0.5,
};

/* Gold Tibar */
const cobre: Merchandise = {
  name: 'cobre',
  price: 1,
  typeTibar: 'goldTibar',
  weight: 1,
};

const canela: Merchandise = {
  name: 'canela',
  price: 1,
  typeTibar: 'goldTibar',
  weight: 0.5,
};

const bode: Merchandise = {
  name: 'bode',
  price: 1,
  typeTibar: 'goldTibar',
  weight: 0,
};

const gengibre: Merchandise = {
  name: 'gengibre',
  price: 2,
  typeTibar: 'goldTibar',
  weight: 0.5,
};

const pimenta: Merchandise = {
  name: 'primenta',
  price: 2,
  typeTibar: 'goldTibar',
  weight: 0.5,
};

const ovelha: Merchandise = {
  name: 'ovelha',
  price: 2,
  typeTibar: 'goldTibar',
  weight: 0,
};

const chocolate: Merchandise = {
  name: 'chocolate (gorad)',
  price: 3,
  typeTibar: 'goldTibar',
  weight: 0.5,
};

const porco: Merchandise = {
  name: 'porco',
  price: 3,
  typeTibar: 'goldTibar',
  weight: 0,
};

const linho: Merchandise = {
  name: 'cobre',
  price: 4,
  typeTibar: 'goldTibar',
  meters: 1,
};

const sal: Merchandise = {
  name: 'sal',
  price: 5,
  typeTibar: 'goldTibar',
  weight: 0.5,
};

const prata: Merchandise = {
  name: 'sal',
  price: 5,
  typeTibar: 'goldTibar',
  weight: 0.5,
};

const seda: Merchandise = {
  name: 'seda',
  price: 10,
  typeTibar: 'goldTibar',
  meters: 1,
};

const vaca: Merchandise = {
  name: 'vaca',
  price: 10,
  typeTibar: 'goldTibar',
};

const acafrao: Merchandise = {
  name: 'acafrao',
  price: 15,
  typeTibar: 'goldTibar',
  weight: 0.5,
};

const alho: Merchandise = {
  name: 'alho',
  price: 15,
  typeTibar: 'goldTibar',
  weight: 0.5,
};

const boi: Merchandise = {
  name: 'boi',
  price: 15,
  typeTibar: 'goldTibar',
};

const trobo: Merchandise = {
  name: 'trobo (passaro touro)',
  price: 15,
  typeTibar: 'goldTibar',
};

const ouro: Merchandise = {
  name: 'ouro',
  price: 50,
  typeTibar: 'goldTibar',
  weight: 0.5,
};

const platina: Merchandise = {
  name: 'platina',
  price: 500,
  typeTibar: 'goldTibar',
  weight: 0.5,
};

export const listMerchandise: Merchandise[] = [
  trigo,
  farinha,
  galinha,
  iron,
  tabaco,
  cobre,
  canela,
  bode,
  gengibre,
  pimenta,
  ovelha,
  chocolate,
  porco,
  linho,
  sal,
  prata,
  seda,
  vaca,
  acafrao,
  alho,
  boi,
  trobo,
  ouro,
  platina,
];
