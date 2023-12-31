import React from "react";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import "./DataTable.scss";
import { Link } from "react-router-dom";

type Props = {
columns: GridColDef[],
rows: object[],
slug:string
}

const DataTable = (props:Props) => {

    const handleDelete = (id:number) =>{
    console.log(id, "is deleted");

    }

    const actionColumn :GridColDef = {
    field:"action",
    headerName:"Action",
    width:200,
    renderCell:(params)=>{
    return(
        <div className="action">

           <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
           </Link>
           <div className="delete" onClick={()=>handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
           </div>
        </div>
        )}
    }

  return (
    <div className="dataTable">
      <div style={{ height: "99%", width: "100%" }}>
        <DataGrid
          className="dataGrid"
          rows={props.rows}
          columns={[...props.columns, actionColumn]}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
        />
      </div>
    </div>
  );
};

export default DataTable;
