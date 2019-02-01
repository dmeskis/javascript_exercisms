const key = {'g': 'c',
             'c': 'g',
             't': 'a',
             'a': 'u'}
             
export function toRna(string) {
  var sequence = string
  console.log(sequence)
  if (sequence === "") {
    return sequence;
  } else {
    for (var i = 0; i < sequence.length; i++) {
      sequence = sequence.replace(sequence[i], key[sequence[i]])
      debugger;
    }
    return sequence
  }
}
