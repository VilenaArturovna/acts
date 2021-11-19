import styled from 'styled-components';
import { Button, Card, CardActions, CardContent, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { createStyles, makeStyles } from '@mui/styles';

type FormType = {
  personalAccountNumber: string
  address: string
  flat: string
  phoneNumber: string
  date: string
  time: string
  employee: string
  consumer: string

  installationLocationPrev: string
  installationLocation: string
  typePrev: string
  type: string
  numberPrev: string
  number: string
  accuracyClassPrev: string
  accuracyClass: string
  phasePrev: string
  phase: string
  amperagePrev: string
  amperage: string
  yearPrev: string
  year: string
  intervalPrev: string
  interval: string
  adderPrev: string
  adder: string
  nextVerificationPrev: string
  nextVerification: string

  seal: string
  sealInstallationPlace: string
  reasonsForRefusal: string
}

type TableForm = {
  parameter: string
  prev: string
  current: string
}

const tableForm: TableForm[] = [
  {parameter: 'Место установки ПУ', prev: 'installationLocationPrev', current: 'installationLocation'},
  {parameter: 'Тип ПУ', prev: 'typePrev', current: 'type'},
  {parameter: 'Номер', prev: 'numberPrev', current: 'number'},
  {parameter: 'Класс точности', prev: 'accuracyClassPrev', current: 'accuracyClass'},
  {parameter: 'Фазность', prev: 'phasePrev', current: 'phase'},
  {parameter: 'Iном (Imax), А', prev: 'amperagePrev', current: 'amperage'},
  {parameter: 'Год выпуска', prev: 'yearPrev', current: 'year'},
  {parameter: 'Межповерочный интервал (лет)', prev: 'intervalPrev', current: 'interval'},
  {parameter: 'Суммарное показание (сумматор)', prev: 'adderPrev', current: 'adder'},
  {parameter: 'Дата следующей поверки ПУ', prev: 'nextVerificationPrev', current: 'nextVerification'},
]

const useStyles = makeStyles(() => createStyles({
  root: {
    '& .MuiTextField-root': {
      margin: '5px',
    }, '& .MuiPaper-root': {
      marginBottom: '10px',
    }, '& .MuiTable-root': {
      width: '600px', marginBottom: '10px'
    }
  },
}),);

export const FormToFillOut = () => {
  const classes = useStyles();

  const initialValues: FormType = {
    personalAccountNumber: '',
    address: '',
    flat: '',
    phoneNumber: '+7',
    date: new Date().toLocaleDateString("ru", {year: 'numeric', month: 'long', day: 'numeric',}),
    time: new Date().toLocaleTimeString("ru", {hour: 'numeric', minute: 'numeric'}),
    employee: 'Сазанов Алексей Сергеевич',
    consumer: '',

    installationLocationPrev: '',
    installationLocation: '',
    typePrev: '',
    type: '',
    numberPrev: '',
    number: '',
    accuracyClassPrev: '',
    accuracyClass: '',
    phasePrev: '',
    phase: '',
    amperagePrev: '',
    amperage: '',
    yearPrev: '',
    year: '',
    intervalPrev: '',
    interval: '',
    adderPrev: '',
    adder: '',
    nextVerificationPrev: '',
    nextVerification: '',

    seal: '',
    sealInstallationPlace: 'клеммная крышка',
    reasonsForRefusal: '',
  }
  const formik = useFormik({
    initialValues,
    onSubmit: () => {}
  })



  return (
    <Root className={classes.root}>
      <Container>
        <form onSubmit={formik.handleSubmit}>
          <Card>
            <CustomCardContent>
              <TextField variant="filled" label="Лицевой счет" size="small" {...formik.getFieldProps(
              'personalAccountNumber')} />
              <TextField variant="filled" label="Адрес" size="small" {...formik.getFieldProps('address')} />
              <TextField variant="filled" label="Квартира" size="small" {...formik.getFieldProps('flat')} />
              <TextField variant="filled" label="Телефон" size="small" {...formik.getFieldProps('phoneNumber')} />
              <TextField variant="filled" label="Дата" size="small" {...formik.getFieldProps('date')} />
              <TextField variant="filled" label="Время" size="small" {...formik.getFieldProps('time')} />
              <TextField variant="filled" label="Установщик" size="small" {...formik.getFieldProps('employee')} />
              <TextField variant="filled" label="Потребитель" size="small" {...formik.getFieldProps('consumer')} />
            </CustomCardContent>
          </Card>
          <Card>
            <CustomCardContent>
              {tableForm.map((item, index) => (
                <Fields>
                  <Parameter>{item.parameter}</Parameter>
                  <TextField variant="filled" label="демонтирован" size="small" {...formik.getFieldProps(`{${item.prev}}`)} />
                  <TextField variant="filled" label="установлен" size="small" {...formik.getFieldProps(`{${item.current}}`)} />
                </Fields>
              ))}
            </CustomCardContent>
          </Card>
          <Card>
            <CustomCardContent>
              <TextField variant="filled" label="Номер пломбы" size="small" {...formik.getFieldProps('seal')} />
              <TextField variant="filled" label="Место установки пломбы" size="small" {...formik.getFieldProps('sealInstallationPlace')} />
              <TextField variant="filled" label="Причины отказа в вводе" size="small" {...formik.getFieldProps('reasonsForRefusal')} />
            </CustomCardContent>
          </Card>
          <Card>
            <CardActions>
              <Button>
                Вернуться к списку адресов
              </Button>
              <Button>
                Сохранить
              </Button>
              <Button>
                Сохранить как новый
              </Button>
            </CardActions>
          </Card>
        </form>
      </Container>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: 700px;
`
const CustomCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  width: 670px;
`;
const Fields = styled.div`
  display: flex;
`;
const Parameter = styled.div`
  width: 220px;
`
