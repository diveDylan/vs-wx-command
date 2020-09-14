export const source = {
  searchForm: (chilren: string ) =>`
import DetailWrapper from '@/components/detailWrapper'
import React from 'react'
import { Form } from 'antd'
interface SearchFormProps {
  close: (e: any) => void
}
function SearchForm(props: SearchFormProps) {
  const [form] = Form.useForm()
  function submitHandler(e) {
    props.close(e)
  }
  function resetHandler() {
    form.resetFields()
    props.close({})
  }
  const formConfigs = ${chilren}
  return (
    <Form
      layout="inline"
      style={{ marginBottom: '30px' }}
      onFinish={submitHandler}
      onReset={resetHandler}
      form={form}
    >
      {
      formConfigs.map(item => <DetailWrapper {...item} />)
      }
    </Form>
  )
}

export default SearchForm
`,
  list: (columns: any[]) => `
      import React from 'react'
      import { Table } from 'antd'
      import ContentWrapper from '@/components/contentWrapper'
      import { usePageList } from './hooks/index'

      function PageList(props) {
        const {
          list,
          tableLoading,
          paginationConfig,
          setParams,
        } = usePageList()

        const searchFormProps = {
          close: e => {
            setParams(e)
          },
        }

        return (
          <ContentWrapper>
          <SearchForm {...searchFormProps} />
          {/* 表格 */}
          <Table
            loading={tableLoading}
            size="middle"
            pagination={paginationConfig}
            dataSource={list}
            columns={${columns}}
          />
          
          </ContentWrapper>
        )
      
      }

      export default PageList
  `,
  hooks: `
  import useList from '@/hooks/useList'

  export const useOpportunitiesList = (props?) => {
    const {
      list,
      params,
      setParams,
      pageInfo,
      paginationConfig,
      tableLoading,
      fetchList,
    } = useList({ excutor: getList })
  
  
    async function getList(params, callback: Function): Promise<any> {
      
    }

    // 格式化数据
    function format(item) {
      return item
    }
  
    useEffect(() => {
      fetchList()
    }, [ pageInfo, params])
  
    return {
      list,
      tableLoading,
      paginationConfig,
      setParams,
      fetchList,
      userInfo,
    }
  }
  `

}