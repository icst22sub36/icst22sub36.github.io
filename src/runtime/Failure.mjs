function makeSuccess (s) {
  if (!isFailure(s)) {
    return s;
  } else {
    throw Error("Match result has failed")
  }
}

function isFailure (f) {
  return (f === null); 
}

function makeFailure () { 
  return null; 
}

function resultState (r) { 
  if (!isFailure(r)) {
    return r;
  } else {
    throw Error("Match result has failed")
  }
}

export { makeSuccess, isFailure, makeFailure, resultState }