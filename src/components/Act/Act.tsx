import styled from 'styled-components';

export const Act = () => {
  return (
    <Root>
      <Container>
        <HeaderWrapper>
          <Header>
            <HeaderString>
              <div>Номер лицевого счета абонента:&nbsp;</div>
              <HeaderValue>sdfsdf</HeaderValue>
            </HeaderString>
            <HeaderString>
              <div>Адрес:&nbsp;</div>
              <HeaderValue>sdfsdfsdf</HeaderValue>
            </HeaderString>
            <HeaderString>
              <div>Телефон:&nbsp;</div>
              <HeaderValue>sdfsdfsdfsdf</HeaderValue>
            </HeaderString>
          </Header>
        </HeaderWrapper>
        <ActHeader>
          <div style={{fontWeight: "bold"}}>АКТ</div>
          <div style={{fontWeight: "bold"}}>Допуска (ввода) прибора учета в эксплуатацию</div>
          <div>от «___»________20__г. Время ____:____</div>
        </ActHeader>
        <ActString>
          <div>Составлен представителем ООО «Стройэнергоком»&nbsp;&nbsp;</div>
          <div style={{fontWeight: "bold"}}>Стройэнергоком</div>
        </ActString>
        <ActString>
          <div>в присутствии потребителя (представителя Потребителя)&nbsp;&nbsp;</div>
          <div style={{fontWeight: "bold"}}>Стройэнергоком</div>
        </ActString>
        <ActString>
          <div>произведен осмотр прибора учета электроэнергии</div>
        </ActString>
        <Table>
          <tr>
            <TableHead>Параметры </TableHead>
            <TableHead>Демонтирован прибор учета </TableHead>
            <TableHead>Установлен прибор учета</TableHead>
          </tr>
          <tr>
            <TableCell>Параметры </TableCell>
            <TableCell>Демонтирован прибор учета </TableCell>
            <TableCell>Установлен прибор учета</TableCell>
          </tr>
          <tr>
            <TableCell>Параметры </TableCell>
            <TableCell>Демонтирован прибор учета </TableCell>
            <TableCell>Установлен прибор учета</TableCell>
          </tr>
          <tr>
            <TableCell>Параметры </TableCell>
            <TableCell>Демонтирован прибор учета </TableCell>
            <TableCell>Установлен прибор учета</TableCell>
          </tr>
          <tr>
            <TableCell>Параметры </TableCell>
            <TableCell>Демонтирован прибор учета </TableCell>
            <TableCell>Установлен прибор учета</TableCell>
          </tr>
          <tr>
            <TableCell>Параметры </TableCell>
            <TableCell>Демонтирован прибор учета </TableCell>
            <TableCell>Установлен прибор учета</TableCell>
          </tr>
          <tr>
            <TableCell>Параметры </TableCell>
            <TableCell>Демонтирован прибор учета </TableCell>
            <TableCell>Установлен прибор учета</TableCell>
          </tr>
          <tr>
            <TableCell>Параметры </TableCell>
            <TableCell>Демонтирован прибор учета </TableCell>
            <TableCell>Установлен прибор учета</TableCell>
          </tr>
          <tr>
            <TableCell>Параметры </TableCell>
            <TableCell>Демонтирован прибор учета </TableCell>
            <TableCell>Установлен прибор учета</TableCell>
          </tr>
          <tr>
            <TableCell>Параметры </TableCell>
            <TableCell>Демонтирован прибор учета </TableCell>
            <TableCell>Установлен прибор учета</TableCell>
          </tr>
          <tr>
            <TableCell>Параметры </TableCell>
            <TableCell>Демонтирован прибор учета </TableCell>
            <TableCell>Установлен прибор учета</TableCell>
          </tr>
        </Table>
        <ActString>
          <div>Прибор и схема подключения проверены, установлена пломба №&nbsp;</div>
          <div>3047032948-23048</div>
        </ActString>
        <ActString>
          <div>место установки пломбы:&nbsp;</div>
          <div>3047032948-23048</div>
        </ActString>
        <ActString>
          Абонент несет ответственность за сохранность пломб на средствах измерения. Нарушение целостности пломб расценивается как повреждение средств измерений по вине абонента.
        </ActString>
        <ActHeader style={{marginBottom: '10px'}}>
          <div style={{fontWeight: "bold", letterSpacing: '4px'}}>Заключение:</div>
        </ActHeader>
        <ActString>
          На основании результата проверки и осмотра установленного прибора учета электрической энергии, схемы его подключения прибор учета введен/не введен в эксплуатацию (нужное подчеркнуть).
        </ActString>
        <EmptyString></EmptyString>
        <ActHeader style={{marginBottom: '0'}}>
          <div style={{fontSize: '0.8rem'}}>причины отказа в вводе прибора учета в эксплуатацию </div>
        </ActHeader>
        <EmptyString></EmptyString>
        <EmptyString></EmptyString>
        <Signatures>
          <tr>
            <td>
              <span style={{fontWeight: "bold"}}>Представитель &nbsp;</span>
              <span>ООО «Стройэнергоком»</span>
            </td>
            <td style={{width: '100px', borderBottom: '1px solid #282c34'}}/>
            <td style={{width: '50px'}} />
            <td style={{width: '100px', borderBottom: '1px solid #282c34', fontWeight: "bold"}}>Sazanov</td>
          </tr>
          <tr style={{fontSize: '0.7rem'}}>
            <td />
            <td>подпись</td>
            <td />
            <td>И.О. Фамилия</td>
          </tr>
          <tr style={{height: '50px', verticalAlign: 'bottom'}}>
            <td>
              <span style={{fontWeight: "bold"}}>Потребитель</span>
            </td>
            <td style={{width: '100px', borderBottom: '1px solid #282c34'}}/>
            <td />
            <td style={{width: '100px', borderBottom: '1px solid #282c34', fontWeight: "bold"}}>Sazanov</td>
          </tr>
          <tr style={{fontSize: '0.7rem'}}>
            <td />
            <td>подпись</td>
            <td />
            <td>И.О. Фамилия</td>
          </tr>
        </Signatures>

      </Container>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  font-family: "Times New Roman", Times, serif;
  box-sizing: border-box;
  width: 800px;
  height: 1200px;
  border: 1px solid #282c34;
  padding: 30px;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
`
const Header = styled.div`
  width: 385px;
`
const HeaderString = styled.div`
  display: flex;
  font-size: 1rem;
  white-space: nowrap;
`
const HeaderValue = styled.div`
  width: 100%;
  border-bottom: 1px solid #282c34;
`

const ActHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.3rem;
  margin-bottom: 20px;
`
const ActString = styled.div`
  display: flex;
  padding: 10px 0;
`
const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
`
const TableHead = styled.th`
  border: 1px solid #282c34;
`
const TableCell = styled.td`
  border: 1px solid #282c34;
  text-align: center;
`
const EmptyString = styled.div`
  border-bottom: 1px solid #282c34;
  width: 100%;
  height: 30px;
`
const Signatures = styled.table`
  width: fit-content;
  margin-top: 40px;
`
