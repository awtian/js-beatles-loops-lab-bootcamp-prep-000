function theBeatlesPlay(name, inst) {
  var b = []
  for (var i = 1; i < name.length; i++) {
    b.push (name[i] +"plays "+ inst[i])
  }
  return b
}
