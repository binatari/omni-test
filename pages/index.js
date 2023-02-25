import * as React from "react";
import Container from "@mui/material/Container";
import { Box, Button, Grid, Typography } from "@mui/material";
import SelectFilter from "../components/SelectFilter";
import { api } from "../src/queries";
import StudentTable from "../components/Tables/StudentTable";

const filters = [
  {
    name:'Age',
    type: "age",
    path: "/viewAllAges",
  },
  {
    name:'State',
    type: "state",
    path: "/viewAllStates",
  },
  {
    name:'Level',
    type: "level",
    path: "/viewAllLevels",
  },
  {
    name:'Gender',
    type: "gender",
    path: "/viewAllGender",
  },

];

const initFilter = {
  age: '',
  state: "",
  level: "",
  gender: "",
}

export default function Index() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [filter, setFilter] = React.useState({
    ...initFilter
  })


  const allData = async() =>{
    setLoading(true)
   const response = await api.get('/viewAllData').then((res)=>setData(res.data.data.students)).catch((err)=>console.log(err)).finally((resolve)=>setLoading(false));
  }

  React.useEffect(()=>{
    allData()
  }, [])
 
  const onChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  const searchFilter = async () => {
    setLoading(true)
    setData([])
    const response = api
      .post("/filterData", { ...filter })
      .then((res) => {setData(res.data.data.students)})
      .catch((err) => console.log(err))
      .finally((resolve)=>setLoading(false));
  };

  const clearFilter = async () => {
    setFilter({...initFilter})
    allData()
  };


  //checks if any filter is truthy
  const isFiltered = Object.values(filter).some(item => item)

  console.log(isFiltered)
  return (
    <Container sx={{ py: "67px" }}>
      <Typography variant="h1" mb={'54px'}>Student Data Table</Typography>

      <Box bgcolor={"white"} py={"44px"} px={"28px"}>
        <Typography variant="h3" mb={"63px"} color={'grey.light'}>
          Filter Student Table By:
        </Typography>
        <Grid spacing={{ xs: 2, md: 4 }} container width={"100%"} pr={{md:'85px', sm:'0px'}}>
          {filters.map(({ type, path, name }) => (
            <Grid xs={12} md={4} lg={4} item>
              <SelectFilter
                label={name}
                type={type}
                placeholder={type}
                path={path}
                value={filter[type]}
                onChange={onChange}
              />
            </Grid>
          ))}
          <Grid xs={12} md={4} lg={4} item>
            <Button
              variant="contained"
              onClick={searchFilter}
              color="primary"
              disabled={!isFiltered}
              disableElevation
              sx={{height:'100%', textTransform:'none'}}
              fullWidth
            >
              Search
            </Button>
          </Grid>
          <Grid xs={12} md={4} lg={4} item>
            <Button
              variant="contained"
              onClick={clearFilter}
              color="primary"
              disabled={!isFiltered}
              disableElevation
              sx={{height:'100%', textTransform:'none'}}
              fullWidth
            >
             Clear Filter
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{bgcolor:'white', py:'42px', px:'28px',  mt: "43px",  }}>
        <StudentTable rows={data} tableLoading={loading} isFiltered={isFiltered}/>
      </Box>
    </Container>
  );
}
