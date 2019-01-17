export const name = 'mime'

export function service() {

  const types = {
    javascript: 'javascript',
    python: 'python',
    ruby: 'ruby',
    powershell: 'powershell',
    bash: 'bash',
    batch: 'batch',
    c: 'c',
    latex: 'latex',
    html: 'html',
    css: 'css'
  }

  const getFileType = fileName => {
    const ext = fileName
      .split('.')
      .reduce((_, cur, i, arr) => i === arr.length - 1 ? cur : null)

    switch (ext) {
      case 'js': return types.javascript
      case 'py': return types.python
      case 'rb': return types.ruby
      case 'ps1': return types.powershell
      case 'psm1': return types.powershell
      case 'sh': return types.bash
      case 'bat': return types.batch
      case 'h': return types.c
      case 'c': return types.c
      case 'tex': return types.latex
      case 'html': return types.html
      case 'css': return types.css

      default: return ext
    }
  }

  return {
    getFileType,
    types
  }
}
