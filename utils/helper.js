export const calcolaSconto = (prezzoOriginale, prezzoScontato) => {
  const sconto = prezzoOriginale - prezzoScontato;

  const percentualeSconto = (sconto / prezzoOriginale) * 100;

  return percentualeSconto.toFixed(2);
};
