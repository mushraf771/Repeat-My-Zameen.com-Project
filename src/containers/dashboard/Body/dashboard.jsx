import * as React from 'react';
import { forwardRef } from 'react';
import axios from 'axios'
import {
  Box, Typography, Grid,Alert
} from '@mui/material';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CheckIcon from '@mui/icons-material/Check';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FilterListIcon from '@mui/icons-material/FilterList';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ClearIcon from '@mui/icons-material/Clear';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import SearchIcon from '@mui/icons-material/Search';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import RemoveIcon from '@mui/icons-material/Remove';
import LastPageIcon from '@mui/icons-material/LastPage';
import FirstPageIcon from '@mui/icons-material/FirstPage';
const defaultMaterialTheme = createTheme();
const tableicon = {
  Add: forwardRef((props, ref) => <AddBoxIcon {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <CheckIcon {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutlineIcon {...props} ref={ref} />),
  DetailsPanel: forwardRef((props, ref) => <ChevronRightIcon {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <EditIcon {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAltIcon {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterListIcon {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPageIcon {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPageIcon {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRightIcon {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeftIcon {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPageIcon {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <SearchIcon {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownwardIcon {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <RemoveIcon {...props} ref={ref} />),
  ColumnView: forwardRef((props, ref) => <ViewColumnIcon {...props} ref={ref} />),
};
const Api = axios.create({
  baseURL: '/dashboard'
});
function ValidateEmail(email) {
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}
const Dashboards = () => {
  var columns = [
    {title:"id",hidden:true,field:"id"},
    {title:"First Name",field:"name"},
    {title:"Last Name",field:"lname"},
    {title:"DOB",field:"dob"},
    {title:"City",field:"city"},
  ]
const  datas = 
    [
    { name: 'Max', lname: 'Mustermann', dob: 1987, city: 1 },
    { name: 'Cindy', lname: 'Musterfrau', dob: 1995, city: 2 },
    { name: 'Max', lname: 'Mustermann', dob: 1987, city: 1 },
    { name: 'Cindy', lname: 'Musterfrau', dob: 1995, city: 2 },
    { name: 'Max', lname: 'Mustermann', dob: 1987, city: 1 },
    { name: 'Cindy', lname: 'Musterfrau', dob: 1995, city: 2 }
    ]
  const [data, setData] = React.useState([]); //tabledata
//error handling
  const [error, setIsError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState([])
  React.useEffect(() => {
    Api.get('/listing')
      .then(res => { setData(res.data.data) })
      .catch(error => { console.log("error"); })
  },[])
  const handleRowUpdate = (newData,oldData,resolve) => {
  //validation
    let errorList = []
    if (newData.first_name === '') {
      errorList.push('Please Enter First Name')
    }
    if (newData.Last_name === '') {
      errorList.push('Please Enter Last Name')
    }
    if (newData.email === '' || ValidateEmail(newData.email) === false) {
      errorList.push('Please Enter a Valid Email')
    }
    if (errorList.length < 1){
      Api.patch('/listings' + newData.id, newData).then(res => {
        const dataUpdate = [ ...data ];
        const index = oldData.tableData.id;
        dataUpdate[index] = newData;
        setData([...dataUpdate]);
        resolve()
        setIsError(false)
        setErrorMessage([])
      }).catch(error => {
        console.log('update Error he bhai');
        setIsError(true)
        resolve()
      })
    }
  }
  const handleRowAdd = (newData, resolve) => {
    //validation
    let errorList = []
    if (newData.first_name === '') {
      errorList.push('Please Enter First Name')
    }
    if (newData.Last_name === '') {
      errorList.push('Please Enter Last Name')
    }
    if (newData.email === '' || ValidateEmail(newData.email) === false) {
      errorList.push('Please Enter a Valid Email')
    }
    if (errorList.length < 1) {
      Api.patch('/listings',newData).then(res => {
        let dataToAdd = [...data];
        dataToAdd.push(newData)
        setData(dataToAdd);
        resolve()
        setIsError(false)
        setErrorMessage([])
      }).catch(error => {
        console.log(' add Error he bhai');
        setIsError(true)
        resolve()
      })
    }
  }
  const handleRowDelete = (oldData, resolve) => {
    Api.delete('/delete' + oldData.id).then(res => {
      const dataDelete = [...data];
      const index = oldData.tableData.id;
      dataDelete.splice(index, 1);
      setData([...dataDelete])
      resolve()
    }).catch(error => {
      console.log(' delete Error he bhai');
      setIsError(true)
      resolve()
    })
  }
const a = true
const b = false
const myerror= "love you paa ji"
// const Dashboards = () => {
  return (
<>
          <ThemeProvider theme={defaultMaterialTheme}>
      <Box>
        <Typography variant="h5" color="initial" className='text-muted text-bold'>Dashboard</Typography>
        {/* <Typography variant='h4'>Your Listings</Typography> */}
      </Box>
      <Box className='border border-info my-2 py-2'>
      </Box>
        <Grid container spacing={1} flexGrow={2}>
        <Grid item  xs={1}></Grid>
        <Grid item  xs={12} flexGrow={2}>
          <div>
            {a && <Alert severity='error'  >
              {/* {myerror.map((msg, i) =>{
                return <div key={i}>{msg} </div>
              })} */}
              {/* <Typography variant="h4" color="initial">Dashboard Error</Typography> */}
            </Alert>}
            </div>
            <div>
          <MaterialTable mt={10} title="Your Listings"
            columns={columns}
            data={datas}
              icons={tableicon}
              
            options={{ headerStyle: { size: '80px' } }}
            editable={{
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  handleRowUpdate(newData, oldData, resolve);
                }),
              onRowAdd: (newData) =>
                new Promise((resolve) =>{
                  handleRowUpdate(newData, resolve);
}),
              onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  handleRowUpdate(oldData, resolve);
                })
            }}
          />        

            </div>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
          </ThemeProvider>
    </>
  )
}
export default Dashboards