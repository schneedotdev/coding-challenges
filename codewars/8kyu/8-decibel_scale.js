/**
 * Name: Decibel Scale
 * Description: Your task is to simply calculate the loudness of a sound wave, given its intensity as a parameter to the dBScale/db_scale function. Using the Decibel Scale Equation 
 */

const dBScale = intensity => 10 * Math.log10(intensity / 10 ** -12)