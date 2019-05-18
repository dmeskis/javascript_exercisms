const key = { G: "C", C: "G", T: "A", A: "U" };

export const toRna = sequence => {
  if (sequence === "") {
    return sequence;
  }
  return sequence.replace(/(G|C|T|A)/gi, replacer);
};

// Helper
function replacer(match) {
  return key[match];
}
