const proteinNamesArray = [
`Methionine`,
`Phenylalanine`,
`Phenylalanine`,
`Leucine`,
`Leucine`,  
`Serine`,
`Serine`,
`Serine`,
`Serine`,
`Tyrosine`,
`Tyrosine`,  
`Cysteine`,
`Cysteine`,  
`Tryptophan`,
`STOP`,
`STOP`,
`STOP`,
];

const codonsArray = [
  `AUG`,  
  `UUU`, 
  `UUC`,  
  `UUA`, 
  `UUG`,  
  `UCU`, 
  `UCC`, 
  `UCA`, 
  `UCG`,  
  `UAU`, 
  `UAC`,  
  `UGU`, 
  `UGC`,  
  `UGG`,  
  `UAA`, 
  `UAG`, 
  `UGA`
];
// Proteins and codons must be added in corresponding arrays. 
// In case of muliple codons per protein they should be entered one by one.

const CodonList = class LinkedList {
  constructor(codonName, protein) {
    this.head = {
      codonName,
      protein,
      next: null
    };
    this.length = 1;
  }

  addToHead(codonName = `Undefined`, protein = `Undefined`){
    const newNode = {
      codonName,
      protein
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  removeFromHead(){
    if (this.length === 0) { return undefined }

    const codonName = this.head.codonName;
    const protein = this.head.protein;
    this.head = this.head.next;
    this.length--;

    return {codonName, protein}
  }

  findANode(codon){
    let currentNode = this.head;

    while(currentNode) {
      if (currentNode.codonName === codon) { return currentNode }
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  findAProtein(proteinName){
    let currentNode = this.head;

    while(currentNode) {
      if (currentNode.protein === proteinName) { return currentNode.protein }
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  removeANode(codon){
    if (this.length === 0) { return undefined }

    if (this.head.codonName === codon) {
      this.removeFromHead();
      return this;
    }

    let previousNode = this.head;
    let currentNode = previousNode.next;

    while(currentNode) {
      if (currentNode.codonName === codon) { break }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === null) { return undefined }

    previousNode.next = currentNode.next;
    this.length--;
    return this;
  }
}

const aminoAcidList = new CodonList(codonsArray[0], proteinNamesArray[0]);

for (let i = 1; i < codonsArray.length; i++) {
  aminoAcidList.addToHead(codonsArray[i], proteinNamesArray[i]);
}

export const translate = (rna) => {
  let answer = [];
  if (rna === undefined) { return answer; }
  
  const regex_cuga_checker = /[^UACG]/; //regex expression for checking the usage of corect chars
  if (regex_cuga_checker.test(rna)) {
    throw new Error(`Invalid codon`);
  }

  let rnaDivided = [];
  let j = 0;
  for (let i = 0; i < (rna.length) / 3; i++) {
    rnaDivided[i] = rna.slice(j, j+3);
    j+=3;
  }

  
  let i = 0;
  for (const element of rnaDivided) {
    //console.log(`Current elemnt: ${element}`);
    if (aminoAcidList.findANode(element).protein === `STOP`) { break; }
    answer[i] = aminoAcidList.findANode(element).protein;
    i++;
    //answer += `, `;    
  }
  //answer = answer.substring(0, answer.length - 2);
  return answer;
};
