type Shield = {
  name: string;
  price: number;
  typeTibar: TypesTibar;
  CABonus: number;
  armorPenalty: number;
  weight: number;
};

const lightShield: Shield = {
  name: 'Escudo Leve',
  price: 5,
  typeTibar: 'goldTibar',
  CABonus: 1,
  armorPenalty: 2,
  weight: 3,
};

const heavyShield: Shield = {
  name: 'Escudo Pesado',
  price: 15,
  typeTibar: 'goldTibar',
  CABonus: 2,
  armorPenalty: 2,
  weight: 7,
};

const ListLightShield: Shield[] = [lightShield];

const ListHeavyShield: Shield[] = [heavyShield];

const listShields: Shield[] = [...ListLightShield, ...ListHeavyShield];
