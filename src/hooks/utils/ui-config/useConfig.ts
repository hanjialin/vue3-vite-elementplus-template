import { useDark, useToggle } from '@vueuse/core'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { Language } from 'element-plus/es/locale'
export default () => {
  const isDark = useDark()
  const toggleDark = useToggle(isDark)
  const locale: Language = zhCn
  const size = 'default'
  return {
    isDark,
    toggleDark,
    locale,
    size
  }
}
