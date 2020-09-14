import * as fs from 'fs'
import * as path from 'path'
import { FormItemProps } from './types/index.d'
import { source } from './source'
// 创建搜索表单
export function createSearchForm(path: string, formConfigs:FormConfig ) {
  const folder = path + '/components'
  fs.mkdirSync(folder)
  fs.mkdirSync(folder + '/searchForm')
  // 配置追加
  const {
    headers, formConfig
  } = formatFormConfig(formConfigs)
  console.log(new String(JSON.stringify(formConfig)).replaceAll('"<', "<").replaceAll('>"', '>'))
  // 表单组件追加
  fs.appendFileSync(
    folder + '/searchForm/index.tsx',
    // @ts-ignore
    headers + source.searchForm()
  )

}


interface FormItemConfig extends FormItemProps {
  value?: any
  type?: 'form' | 'info'
}

interface FormConfig {
  type: 'form' | 'info',
  formItemConfigs: FormItemConfig[]
}

// 首字母大写
function upCase(str: string) {
  return str[0].toUpperCase() + str.substr(1)
}
// 字符？
const isString = (str: any) => Object.prototype.toString.call(str) === '[object String]'

// 格式化表单组件
export function formatFormConfig(formConfig: FormConfig) {
  const antdComponents :any []= []
  return {
    formConfig: 
      formConfig.formItemConfigs.map((item) => {
        item.type = formConfig.type
        if (isString(item.children)) {
          item.children= upCase(item.children)
          antdComponents.push(item.children)
          item.children = `<${item.children}/>`
        } else {
          item.children.type = upCase(item.children.type)
          antdComponents.push(item.children.type )
          item.children = getComponents(item.children)
        }
        return item
      }),
  headers: `import {${Array.from(new Set(antdComponents)).join(',')}} from 'antd'`
}
}

interface Option {
  label: string,
  value: string | number
  disabled?: boolean
}
interface Configs {
  type: string
  options?: Option[]
  [key: string]: any // 其他表单子元素的属性
}
const optionsTypes = ['Radio', 'Select', 'Checkbox']
function getComponents(config: Configs) {
 
    return {
      components: `<${config.type} />`,
      props: config.props
    }
}


