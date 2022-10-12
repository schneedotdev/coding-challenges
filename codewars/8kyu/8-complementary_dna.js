/**
 * Name: Complementary DNA
 * Description:In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side.
 */

function DNAStrand(dna) {
    return dna.split('').map(x => {
        switch (x) {
            case 'A':
                x = 'T';
                break;
            case 'T':
                x = 'A';
                break;
            case 'G':
                x = 'C';
                break;
            case 'C':
                x = 'G';
                break;
        }
        return x;
    }).join('');
}