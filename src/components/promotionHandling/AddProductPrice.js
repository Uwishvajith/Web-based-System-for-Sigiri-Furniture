import React,{useState , useEffect} from "react"
import axios from "axios"
import MaterialTable from "material-table";
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core";


export default function AddProductPrice(){

  const[salesid, setSalesid] = useState("");//initial values
  const[productid, setProductid] = useState("");
  const[category, setCategory] = useState("");
  const[starting_date, setStarting_date] = useState("");
  const[clossing_date, setClossing_date] = useState("");
  var[discount, setDiscount] = useState("");
  var[price, setPrice] = useState("");
  var[discountprice, setDiscountPrice] = useState("");
  var[newprice, setNewPrice] = useState("");
  const[quentity, setQuentity] = useState("");

  function sendData(e){
    e.preventDefault();//to prevent the default submission by add product button

    const  newProductPrice = {
        salesid,
        productid,
        category,
        starting_date,
        clossing_date,
        discount,
        price,
        discountprice,
        newprice,
        quentity
    }

   axios.post("http://localhost:8060/productprice/addadd" , newProductPrice).then(()=>{
      alert("New Product Price Added");
      function refreshPage(){
        window.location.replace("/getproductprice");
      }
      refreshPage();
    }).catch((err)=>{
      alert(err)
    })
 
  }

  function refreshPage(){ 
    window.location.reload(); 
}

//view product table
  const [products, setProducts] = useState([]);
  const [promotions, setPromotions] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:8080/products/view")
      .then((res) => {
        setProducts(res.data);
        console.log("Data has been received");
      })
      .catch(() => {
        alert("Error while fetching data");
      });

      axios.get("http://localhost:8080/promotion/").then((res) => {
      console.log(res.data);
      setPromotions(res.data);
    }).catch((err) => {
      alert(err.message);
    })
    
  }, []);


function calcnewprice(){
  newprice = price -( price*(discount/100));
  document.getElementById('newprice').value = newprice
  discountprice = price * (discount/100)
  document.getElementById('discountprice').value=discountprice
}


function addproductprice(){
  if(salesid === "" && productid === ""){
    alert("Fill out the form")

  }
}
    
    return(
      <div>
        <div>
            <div>
              <nav class="main-menu bg-primary">
                <ul>
                <li>
                  <a href="/allview">
                    <i class="fa fa-home fa-2x"></i>
                      <span class="nav-text">Home</span>
                    <i class="fa fa-angle-right fa-2x"></i>
                  </a>
                </li>

                <li>
                  <a href="/allview">
                    <i class="fa fa-table fa-2x"></i>
                      <span class="nav-text">View Promotions</span>
                    <i class="fa fa-angle-right fa-2x"></i>
                  </a>
                </li>
              <li class="has-subnav">
                <a href="/addpromotion">
                  <i class="fa fa-plus-circle fa-2x"></i>
                    <span class="nav-text">Add Promotions</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
              <hr></hr>
              <li class="has-subnav">
                <a href="/getproductprice">
                  <i class="fa fa-dollar fa-2x"></i>
                    <span class="nav-text">View Product Prices</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
              <li class="has-subnav">
                <a href="/addadd">
                  <i class="fa fa-plus-circle fa-2x"></i>
                    <span class="nav-text">Add Product Prices</span>
                  <i class="fa fa-angle-right fa-2x"></i>
                </a>
              </li>
              <hr></hr>
    
              <li>
                <a href="/promotion/report">
                  <i class="fa fa-file-pdf-o fa-2x"></i>
                    <span class="nav-text">Promotion Report</span>
                  <i class="fa fa-angle-right fa-2x"></i>   
                </a>
              </li>
              <li>
                <a href="/price/report">
                  <i class="fa fa-file-pdf-o fa-2x"></i>
                    <span class="nav-text">Price Report</span>
                  <i class="fa fa-angle-right fa-2x"></i>   
                </a>
              </li>
          </ul>

          <ul class="logout">
          <li>
            <a href="/">
              <i class="fa fa-power-off fa-2x"></i>
                <span class="nav-text" >Logout</span>
              <i class="fa fa-angle-right fa-2x"></i>
            </a>
          </li>
          </ul>
       </nav>
    </div>
    </div>
   
    <div style={{position: "absolute" , marginLeft: 60 }}>
      <div className="container" style={{width : 800 , paddingTop:120 }}>
      <div className="border border-info" style={{marginBottom:60 , backgroundColor:"#e7ebe8"}} >
   
        <form onSubmit={sendData} style={{ marginTop:50, marginLeft:30, marginRight:30, height:930}}>
          <h1 style ={{fontSize:30, top :70,textAlign:"center",fontFamily:"Georgia"}}>Add Product Price Details</h1><br></br><br></br>
            <div className="mb-3">
              <label for="salesid" >Sales ID</label>
                <input type="text" className="form-control" id="salesid" pattern="SI[0-9]{3}"
                onChange={(e)=>{
                    setSalesid(e.target.value);//when we enter value to input field this value asing to this variable using setSalesId function(salesid)
                }} /> 
    
            </div>

            <div className="mb-3">
              <label for="productid" >Product ID</label>
                <input type="text" className="form-control" id="productid" pattern="PI[0-9]{3}"
                onChange={(e)=>{
                    setProductid(e.target.value);
                }} />
    
            </div>

            <div className="mb-3">
              <label for="category" >Category</label>
                <input type="text" className="form-control" id="category" 
                onChange={(e)=>{
                  setCategory(e.target.value);
                }}/>

            </div>

            <div className="row">
              <div className="col">
                <label for="starting_date" >Starting Date</label>
                  <input type="date" class="form-control" id ="starting_date" 
                  onChange={(e)=>{
                  setStarting_date(e.target.value);
                }}/>

            </div>

            <div className="col">
                <label for="clossing_date" >Closing Date</label>
                  <input type="date" class="form-control"  id ="clossing_date" 
                  onChange={(e)=>{
                  setClossing_date(e.target.value);
                }}/>

            </div>
            </div>

            <br></br>

            <div className="mb-3">
            <label for="quentity" >Quentity</label>
              <input type="number" className="form-control" id="quentity" 
              onChange={(e)=>{
                setQuentity(e.target.value);
              }}/>
    
            </div>
  
            <div className="mb-3">
              <label for="discount" >Discount</label>
                <input type="text" className="form-control" id="discount"  
                onChange={(e)=>{
                setDiscount(e.target.value);
                }}/>
    
            </div>

            <div className="mb-3">
              <label for="price" >Price</label>
                <input type="text" className="form-control" id="price" 
                onChange={(e)=>{
                setPrice(e.target.value);
                }}/>
    
            </div>

            <div className="mb-3">
              <label for="discountprice" >Discount Price</label>
                  <input type="text" className="form-control" id="discountprice" 
                   onChange={(e)=>{
                    setDiscountPrice(e.target.value);
                    }}/>           
            </div>

            <div className="mb-3">
            <label for="newprice" >New Price</label>
              <input type="text" className="form-control" id="newprice" 
              onChange={(e)=>{
               setNewPrice(e.target.value);
              }}/><br></br>
              <button  type="button" class="fa fa-dollar fa-2x btn btn-info" onClick={calcnewprice}></button>
            </div>

           
    
            
            
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="submit" className="btn btn-outline-info mr-10" onClick={addproductprice} >Add Product Price</button>
            <Link className="btn btn-outline-info  ml-2 " role="button" to="/getproductprice">View All Product Prices List </Link>
            <button className="btn btn-outline-info ml-2 " name="refresh" id="refresh" onClick={refreshPage}>Refresh</button>
          </div>
        </form>
        
        <br></br><br></br><br></br>
      </div>

      </div>
 
      
  </div>

  <div class="productiontable" style={{position:"absolute",left:800 , width:630}}>
        <MaterialTable style={{backgroundColor:" #f5f5f0"}}
          title="Products Table"
          columns={[
            { title: "ID", field: "id", type: "string" },
            { title: "Name", field: "name", type: "string" },
            { title: "Type", field: "type", type: "string" },
            { title: "Price", field: "price", type: "numeric" },
            { title: "Quantity", field: "qty", type: "numeric" },
          ]}
          data={products}
          options={{
            sorting: true,
            actionsColumnIndex: -1,
            exportButton: true,
          }}
   
        />
            
        </div>  
          <div class="productiontable" style={{position:"absolute",left:710, top:400 , width:730}}>
        <div class="productiontable" >
        <MaterialTable style={{backgroundColor:" #f5f5f0"}}
         title={"Promotion Details List" } 
         columns={[
          
           { title: "Product ID", field: "productid", type: "text" },
           { title: "Category", field: "category", type: "text" },
           { title: "Starting Date", field: "starting_date", type: "text" },
           { title: "Closing Date", field: "clossing_date", type: "text" },
           { title: "Description", field: "description", type: "text" },
           

         ]}

         data={promotions}

         options={{
           sorting: true,
           actionsColumnIndex: -1,
           exportButton: true
         }}
   
        />
            
        </div>   
        </div>     


  </div>


  )
}