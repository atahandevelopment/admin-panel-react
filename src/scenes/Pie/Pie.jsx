import Header from "../../components/Header"
import { Box } from "@mui/material"
import PieChart from "../../components/PieChart"


function Pie() {
  return (
    <Box m="20px">
      <Header title= "PIE CHART" subtitle="Simple Pie Chart"/>
      <Box height="75vh">
        <PieChart/>
      </Box>
    </Box>
  )
}

export default Pie