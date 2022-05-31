type armor = {
  name: string;
  price: number;
  typeTibar: TypesTibar;
  CABonus: number;
  dexterityBonus: number;
  armorPenalty: number;
  weight: number;
  type: 'light' | 'medium' | 'heavy';
};

const armaduraAlcochoada: armor = {
  name: 'Armadura Alcochoada',
  price: 5,
  typeTibar: 'goldTibar',
  CABonus: 1,
  dexterityBonus: 8,
  armorPenalty: 0,
  weight: 5,
  type: 'light',
};

const corseleteCouro: armor = {
  name: 'Corselete de Couro',
  price: 19,
  typeTibar: 'goldTibar',
  CABonus: 2,
  dexterityBonus: 6,
  armorPenalty: 0,
  weight: 7,
  type: 'light',
};

const couroBatido: armor = {
  name: 'Couro Batido',
  price: 25,
  typeTibar: 'goldTibar',
  CABonus: 3,
  dexterityBonus: 5,
  armorPenalty: -1,
  weight: 10,
  type: 'light',
};

const camisaCotaMalha: armor = {
  name: 'Camisa de Cota de malha',
  price: 100,
  typeTibar: 'goldTibar',
  CABonus: 4,
  dexterityBonus: 4,
  armorPenalty: -2,
  weight: 12,
  type: 'light',
};

/* medium */

const gibaoPeles: armor = {
  name: 'Gibão de Peles',
  price: 15,
  typeTibar: 'goldTibar',
  CABonus: 3,
  dexterityBonus: 4,
  armorPenalty: -2,
  weight: 12,
  type: 'medium',
};

const brunea: armor = {
  name: 'Brunea',
  price: 50,
  typeTibar: 'goldTibar',
  CABonus: 4,
  dexterityBonus: 3,
  armorPenalty: -3,
  weight: 15,
  type: 'medium',
};

const cotaMalha: armor = {
  name: 'Cota de Malha',
  price: 150,
  typeTibar: 'goldTibar',
  CABonus: 5,
  dexterityBonus: 2,
  armorPenalty: -3,
  weight: 20,
  type: 'medium',
};

const couraca: armor = {
  name: 'Couraca',
  price: 200,
  typeTibar: 'goldTibar',
  CABonus: 5,
  dexterityBonus: 3,
  armorPenalty: -4,
  weight: 15,
  type: 'medium',
};

/* heavy */
const cotaTalas: armor = {
  name: 'Cota de Talas',
  price: 200,
  typeTibar: 'goldTibar',
  CABonus: 6,
  dexterityBonus: 0,
  armorPenalty: -4,
  weight: 20,
  type: 'heavy',
};

const lorigaSegmentada: armor = {
  name: 'Loriga Segmentada',
  price: 250,
  typeTibar: 'goldTibar',
  CABonus: 6,
  dexterityBonus: 1,
  armorPenalty: -4,
  weight: 17,
  type: 'heavy',
};

const meiaArmadura: armor = {
  name: 'Meia Armadura',
  price: 600,
  typeTibar: 'goldTibar',
  CABonus: 7,
  dexterityBonus: 1,
  armorPenalty: -4,
  weight: 22,
  type: 'heavy',
};

const armaduraCompleta: armor = {
  name: 'Armadura Completa',
  price: 1500,
  typeTibar: 'goldTibar',
  CABonus: 8,
  dexterityBonus: 1,
  armorPenalty: -5,
  weight: 25,
  type: 'heavy',
};

const listLightArmor: armor[] = [
  armaduraAlcochoada,
  corseleteCouro,
  couroBatido,
  camisaCotaMalha,
];

const listMediumArmor: armor[] = [gibaoPeles, brunea, cotaMalha, couraca];

const listHeavyArmor: armor[] = [
  cotaTalas,
  lorigaSegmentada,
  meiaArmadura,
  armaduraCompleta,
];

const allArmors: armor[] = [
  ...listLightArmor,
  ...listMediumArmor,
  ...listHeavyArmor,
];
