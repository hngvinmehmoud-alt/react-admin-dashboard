
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from "@mui/material";
import { Box,useTheme } from "@mui/system";
import { rows} from './data';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';


function Team() {

  const theme =useTheme()

  

  const columns = [
  { field: 'id', headerName: 'ID',width: 33 ,align:"center" , headerAlign:"center"},
  { field: 'name', headerName: 'Name' ,flex:1,align:"center" , headerAlign:"center" },
  { field: 'email', headerName: 'Email' ,flex:1 ,align:"center" , headerAlign:"center"},
  { field: 'age', headerName: 'Age' ,flex:1 ,align:"center" , headerAlign:"center"},
  { field: 'phone', headerName: 'Phone' ,flex:1 ,align:"center" , headerAlign:"center"},
  { field: 'access',
     headerName: 'Access' ,
     flex:1 ,
     align:"center" ,
     headerAlign:"center",
     renderCell:({row: {access}}) => { 
        return (
          
            <Box sx={{
              margin: "10px auto" ,
              padding:"5px",
              width:"99px",
              borderRadius:"2px",
              textAlign:"center",
              display:"flex",
              justifyContent:'space-evenly',
              backgroundColor:access=="admin"? theme.palette.primary.dark : access=="maneger"? theme.palette.secondary.main : "#4db6ac",
            }}>
                { access == "admin" && (<AdminPanelSettingsOutlinedIcon fontSize='small' sx={{color:"white"}} />)}
                { access == "maneger" && (<SecurityOutlinedIcon fontSize='small' sx={{color:"white"}} />)}
                { access == "user" && (<LockOpenOutlinedIcon fontSize='small' sx={{color:"white"}} />)}
                <Typography sx={{fontSize:"13px" , color:"white"}}> {access}</Typography>
            </Box>
            
        )
      }
    },

];


  return (
     <div style={{ height: 500, width: '96%',margin:"auto" }}>
     
      <DataGrid
        rows={rows}
        columns={columns}
        
      />
    </div>
  )
}

export default Team