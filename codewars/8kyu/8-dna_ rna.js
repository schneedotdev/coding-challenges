/**
 * Name: DNA to RNA conversion
 * Description: For every instance of nucleaic acid base Thymine, replace it with Uracil
 * Link: https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript
 */

const DNAtoRNA = (dna) => {
	return dna.split('T').join('U');
};
