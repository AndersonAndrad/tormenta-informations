type Tibar = {
  tibar: number /* T$ */;
  silverTibar: number /* TS/TP (silver/prata) */;
  goldTibar: number /* TG/TO (gold/ouro) */;
  platinumTibar: number /* TP/TL (platinum/platina) */;
};

type TypesTibar = 'tibar' | 'silverTibar' | 'goldTibar' | 'platinumTibar';

/**
 * How convertion tibar
 * T$ = 1 --- 1/10(TS/TP) 1/100(TG/TO) 1/1000(TP/TL)
 * TS/TP = 10 --- 1(TS/TP) 1/10(TG/TO) 1/100(TP/TL)
 * TG/TO = 100 --- 1(TG/TO) 1/10(TP/TL)
 * TP/TL = 1000 --- 1(TP/TL)
 */
