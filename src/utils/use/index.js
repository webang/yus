import useName from './name'
import useBem from './bem'
import useI18n from './i18n'

export default function (name) {
  const libName = 'ymu-' + name
  return [
    useName(libName, name),
    useBem(libName, name),
    useI18n(libName, name)
  ]
}
