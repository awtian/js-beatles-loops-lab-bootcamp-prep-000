function theBeatlesPlay(name, inst) {
  var b = []
  console.log
  for (var i = 0; i < name.length; i++) {
    b.push (name[i] +" plays "+ inst[i])
  }
  return b
}
