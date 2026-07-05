import { DataGrid } from "@mui/x-data-grid";
import { rows ,columns } from "./data";




function Contacts() {
 
  return (
    <div style={{ height: 500, width: "96%", margin: "auto" }}>
      <DataGrid
        
        rows={rows}
        columns={columns}
        showToolbar
      />
    </div>
  );
}

export default Contacts;
