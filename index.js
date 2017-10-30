function theBeatlesPlay(name, inst) {
  var b = []
  for (var i = 0; i < name.length - 1; i = i+1) {
    b.push name[i] +" plays "+ inst[i]
    return b
  }
}
