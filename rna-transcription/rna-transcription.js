const key = {'G': 'C',
             'C': 'G',
             'T': 'A',
             'A': 'U'}

export const toRna = (sequence) => {
  if (sequence === "") { return sequence; }
  for (var i = 0; i < sequence.length; i++) {
    sequence = sequence.replace(sequence[i], key[sequence[i]]);
    // Stuck with a bug where last two characters are not being replaced, help!
  }
  return sequence;
}