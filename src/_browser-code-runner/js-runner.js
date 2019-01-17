export default function jsRunner(code) {
  // fake all method of console which print value
  const _console = {}
  for (const attr in console) {
    _console[attr] = console[attr]
  }

  //mocking
  let renderVal = ''
  const execMarker = '<span style="color:green;margin-right: 25px">></span>'
  const errorMarker = '<span style="color:red;margin-right: 25px">></span>'
  const br = '<br/>'
  for (const attr in console) {
    console[attr] = val => renderVal += (execMarker + val + br)
  }

  //run code
  try {
    eval(code)
  } catch (error) {
    renderVal += (errorMarker + `<span style="color:red">${error.name}</span>` + br)
    renderVal += (errorMarker + `<span style="color:red">${error.message}</span>` + br)
    renderVal += (execMarker + execMarker)
  }

  //restore
  for (const attr in _console) {
    console[attr] = _console[attr]
  }

  return renderVal
}
