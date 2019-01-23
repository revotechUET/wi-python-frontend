export default function htmlRunner(project, code, contentLoader, cb) {
  const jsPattern = /<script([\w|\W](?!script>))*<\/script>/g
  const cssPattern = /<link([\w|\W](?!>))*\/>/g

  const cssFiles = extractFileNames(code, cssPattern, 'href')
  const jsFiles = extractFileNames(code, jsPattern, 'src')

  contentLoader.multipleLoad(project, [...cssFiles, ...jsFiles])
    .then(fileContents => {
      const cssContents = fileContents.slice(0, cssFiles.length)
      const jsContents = fileContents.slice(cssFiles.length)

      let render = code

      for(const css of cssContents){
        render = render.replace(cssPattern, `<style>${css}</style>`)
      }
      

      for(const js of jsContents) {
        render = render.replace(jsPattern, `<script>${js}</script>`)
      }

      cb(null, render)

      

    })
    .catch(error => cb(error))
}

function extractFileNames(code, pattern, srcAttr) {
  const tages = code.match(pattern)
  
  
  if(!tages) return []

  const files = tages.map(str => {
    let i = str.indexOf(srcAttr)
    let fileName = ''

    while (str[i] !== '"')++i
    ++i

    while (str[i] !== '"') fileName += str[i++]

    return fileName
  })
  return files
}

// function extractJs(code) {
//   const pattern = /<script([\w|\W](?!script))*<\/script>/g
//   const scripts = code.match(pattern)
//   const files = scripts.map(str => {
//     let i = str.indexOf('src')
//     let fileName = ''

//     while (str[i] !== '"')++i
//     ++i

//     while (str[i] !== '"') fileName += str[i++]

//     return fileName
//   })
//   return files
// }

// function extractCss(code) {
//   const re = /<link([\w|\W](?!link))*>/g
//   const scripts = code.match(re)
//   const files = scripts.map(str => {
//     let i = str.indexOf('href')
//     let fileName = ''

//     while (str[i] !== '"')++i
//     ++i

//     while (str[i] !== '"') fileName += str[i++]

//     return fileName
//   })
// }