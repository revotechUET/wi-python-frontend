export const name = 'mime'

export function service() {
  const getFileType = fileName => {
    const ext = fileName
      .split('.')
      .reduce((acc, cur, i, arr) => i === arr.length - 1 ? cur : null)

    switch (ext) {
      case 'js': return 'javascript'
      case 'py': return 'python'
      case 'rb': return 'ruby'
      case 'ps1': return 'powershell'
      case 'psm1': return 'powershell'
      case 'sh': return 'bash'
      case 'bat': return 'batch'
      case 'h': return 'c'
      case 'tex': return 'latex'
      case 'html': return 'javascript'

      default: return ext
    }
  }

  return {
    getFileType
  }
}