import { DataGrid } from "@mui/x-data-grid";
import { rows,columns } from "./data";





function Invoices() {

  

  
  return (
    <div style={{ height: 500, width: "96%", margin: "auto" }}>
         <DataGrid
           checkboxSelection
           rows={rows}
           columns={columns}
          
         />
       </div>
  )
}

export default Invoices