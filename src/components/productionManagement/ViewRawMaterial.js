// import React, { useState, useEffect } from "react"
// import axios from 'axios'
// import MaterialTable from 'material-table'



// const HOST = "http://localhost:6000/inventories/"

// export default function ViewRawMaterial() {

//     const [inventory, setInventory] = useState([]);

//     useEffect(() => {

//         axios.get(HOST)
//             .then((res) => {
//                 setInventory(res.data);
//                 console.log('Data has been received');
//             }).catch(() => {
//                 alert('Error while fetching data')
//             })

//     }, []);

//     return (
//         <>

//             <div class="table">
//                 <MaterialTable
//                     title="Raw Material"
//                     columns={[
//                         { title: "Ref No", field: "itemcode", type: "string" },
//                         { title: "Name", field: "itemname", type: "string" },
//                         { title: "Category", field: "category", type: "string" },
//                         { title: "Description", field: "description", type: "string" },
//                         { title: "Current Stock", field: "currentstock", type: "numeric" },
//                     ]}
//                     data={inventory}
//                     options={{
//                         sorting: true,
//                         exportButton: true,

//                     }}

//                 />
//             </div>
//         </>
//     )
// }