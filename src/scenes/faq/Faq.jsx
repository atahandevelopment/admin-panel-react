import {Box, Typography, useTheme} from "@mui/material"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
 import { tokens } from "../../theme"
import Header from "../../components/Header"


function Faq() {
const theme = useTheme();
const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>

      <Accordion sx={{mb:"10px"}}  >
        <AccordionSummary 
        sx={{background:`${colors.primary[400]}`}}
        expandIcon= {<ExpandMoreIcon/>}>
            <Typography 
            color={colors.greenAccent[300]} 
            
            variant="h5">
              An Important Question For Admin
            </Typography>
        </AccordionSummary>
        <AccordionDetails  sx={{background:`${colors.grey[700]}` }}>
          <Typography display="flex" alignItems="center" justifyContent="space-between">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
        
      </Accordion>
      <Accordion sx={{mb:"10px"}}  >
        <AccordionSummary 
        sx={{background:`${colors.primary[400]}`}}
        expandIcon= {<ExpandMoreIcon/>}>
            <Typography 
            color={colors.greenAccent[300]} 
            
            variant="h5">
               Another Important Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails  sx={{background:`${colors.grey[700]}` }}>
          <Typography display="flex" alignItems="center" justifyContent="space-between">bla bla bla</Typography>
        </AccordionDetails>
        
      </Accordion>
      <Accordion sx={{mb:"10px"}}  >
        <AccordionSummary 
        sx={{background:`${colors.primary[400]}`}}
        expandIcon= {<ExpandMoreIcon/>}>
            <Typography 
            color={colors.greenAccent[300]} 
            
            variant="h5">
             Your Favorite Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails  sx={{background:`${colors.grey[700]}` }}>
          <Typography display="flex" alignItems="center" justifyContent="space-between">bla bla bla</Typography>
        </AccordionDetails>
        
      </Accordion >
      <Accordion sx={{mb:"10px"}}  >
        <AccordionSummary 
        sx={{background:`${colors.primary[400]}`}}
        expandIcon= {<ExpandMoreIcon/>}>
            <Typography 
            color={colors.greenAccent[300]} 
            
            variant="h5">
              Some Random Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails  sx={{background:`${colors.grey[700]}` }}>
          <Typography display="flex" alignItems="center" justifyContent="space-between">bla bla bla</Typography>
        </AccordionDetails>
        
      </Accordion>
      <Accordion mb="10px">
        <AccordionSummary 
        sx={{background:`${colors.primary[400]}`}}
        expandIcon= {<ExpandMoreIcon/>}>
            <Typography 
            color={colors.greenAccent[300]} 
            
            variant="h5">
             The Final Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails  sx={{background:`${colors.grey[700]}` }}>
          <Typography display="flex" alignItems="center" justifyContent="space-between">bla bla bla</Typography>
        </AccordionDetails>
        
      </Accordion>
    </Box>
  )
}

export default Faq