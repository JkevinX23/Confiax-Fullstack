import * as S from './styles'
import MaterialTable from 'material-table'
import { useEffect, useState } from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { toast } from 'react-toastify'
import { getUsers } from 'Api/Users'
import { FormatDateByFNS } from 'utils/Masks'


const theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '0.8em'
      }
    }
  }
})

type TableUsersProps = {
  selected: boolean
}

export default function TableUsers( { selected }:  TableUsersProps ) {
  type IType =
    | 'string'
    | 'boolean'
    | 'numeric'
    | 'date'
    | 'datetime'
    | 'time'
  const string: IType = 'string'
  const columns = [
    {
      title: 'ID',
      field: 'id',
      type: string
    },
    {
      title: 'Nome',
      field: 'name',
      type: string
    },
    {
      title: 'Email',
      field: 'email',
      type: string
    },
    {
      title: 'Contato',
      field: 'contact',
      type: string
    },
    {
      title: 'Data Criacao',
      field: 'date_formatted',
      type: string
    }
  ]

  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)
        const { data } = await getUsers()
        const sorted = data.sort((a, b) => b.id - a.id)
        setData(sorted.map(s => ({...s, date_formatted: FormatDateByFNS(s.createdAt)})))
        setLoading(false)

      } catch (err) {
        console.log(err)
        toast.error('Erro ao carregar os associados')
        setLoading(false)
      }
    }
    selected && loadData()
  }, [selected])

  return (
    <S.Wrapper>
      <MuiThemeProvider theme={theme}>
          <MaterialTable
            title="Usuários"
            columns={columns}
            data={data}
            options={{ exportButton: true, exportAllData: true }}
            localization={{
              header: { actions: 'Ações' },
              body: {
                emptyDataSourceMessage: 'Carregando... '
              },
              toolbar: {
                exportCSVName: 'Exportar como CSV',
                exportPDFName: 'Exportar como PDF',
                exportTitle: 'Exportar',
                searchPlaceholder: 'Buscar',
                searchTooltip: 'Buscar na tabela'
              },
              pagination: {
                labelRowsSelect: 'Registros por página',
                labelDisplayedRows: '{count} de {from}-{to}',
                firstTooltip: 'Primeira página',
                previousTooltip: 'Página anterior',
                nextTooltip: 'Próxima página',
                lastTooltip: 'Última página'
              }
            }}
          />
      </MuiThemeProvider>
    </S.Wrapper>
  )
}
