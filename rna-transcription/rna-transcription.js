const DNA_TO_RNA_ARRAY = {G: `C`, C: `G`, T: `A`, A: `U`};

export const toRna = (dnaStrand = ``) => dnaStrand
  .split(``)
  .map(base => base = DNA_TO_RNA_ARRAY[base])
  .join(``);