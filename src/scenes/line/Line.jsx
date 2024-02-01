import Header from "../../components/Header"
import { Box } from "@mui/material"
import LineChart from "../../components/LineChart"


function Line() {
  return (
    <Box m="20px">
      <Header title= "LINE CHART" subtitle="Simple LINE Chart"/>
      <Box height="75vh">
        <LineChart/>
      </Box>
    </Box>
  )
}

export default Line