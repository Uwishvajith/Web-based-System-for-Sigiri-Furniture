import Header from "./Header";
import LoginUser from "./Login";
import Dashboard from "../components/Dashboard";

import AddEmployee from "./Employee/AddEmployee";
import RemoveEmployee from "./Employee/removeEmployee";
import UpdateEmployee from "./Employee/updateEmployeeDetails";
import ViewEmpDetails from "./Employee/employeeDetails";
import EmpListReport from "./Employee/employeeReport";
import QRMarker from "./attendance/QRMarker";
import AttendanceList from "./attendance/AttendanceList";
import EmployeeList from "./Employee/employeeList";
import addNewLeave from "./leave/addLeave";
import LeaveList from "./leave/leaveList";

import AddCustomer from "./orderManagement/customer/AddCustomer";
import AllCustomers from "./orderManagement/customer/AllCustomers";
import EditCustomer from "./orderManagement/customer/EditCustomer";
import DisplayCustomer from "./orderManagement/customer/GetCustomer";
import AddOrder from "./orderManagement/OrderManagement/AddOrder";
import AllOrders from "./orderManagement/OrderManagement/AllOrders";
import ViewOrder from "./orderManagement/OrderManagement/ViewOrder";
import UpdateOrder from "./orderManagement/OrderManagement/UpdateOrder";
import UpdateOrderItems from "./orderManagement/OrderManagement/UpdateOrderItems";
import GenerateOrderReport from "./orderManagement/Report/OrderReport";
import GenerateCustomerReport from "./orderManagement/Report/CustomerReport";
import GenerateOrderItemsReport from "./orderManagement/Report/OrderItemsReport";

import AddPromotionDetails from "./promotionHandling/AddPromotionDetails";
import AddProductPrice from "./promotionHandling/AddProductPrice";
import AllPromotionDetails from "./promotionHandling/AllPromotionDetails";
import AllProductPriceDetails from "./promotionHandling/AllProductPriceDetails";
import ViewPromotionDetails from "./promotionHandling/ViewPromotionDetails";
import ViewProductPriceDetails from "./promotionHandling/ViewProductPriceDetails";
import UpdateProductPricesDetails from "./promotionHandling/UpdateProductPricesDetails";
import UpdatePromotionDetails from "./promotionHandling/UpdatePromotionDetails";
import PromotionReport from "./promotionHandling/PromotionReport";
import PriceReport from "./promotionHandling/PriceReport";

import AddProduct from "./productionManagement/AddProduct";
import ViewProducts from "./productionManagement/ViewProducts";
import InventoryReport from "./productionManagement/ViewRawMaterial";

import AddSupplier from "./supplierManagement/AddSupplier";
import AddTenderRestock from "./supplierManagement/AddTenderRestock";
import AllSuppliers from "./supplierManagement/AllSuppliers";
import AllTenderRestock from "./supplierManagement/AllTenderRestock";
import UpdateSupplier from "./supplierManagement/UpdateSupplier";
import UpdateTenderRestock from "./supplierManagement/UpdateTenderRestock";
import ViewSupplier from "./supplierManagement/ViewSupplier";
import ViewTenderRestock from "./supplierManagement/ViewTenderRestock";
import TenderReport from "./supplierManagement/TenderReport";

import AddVehicle from "./transportManagement/AddVehicle";
import AllVehicle from "./transportManagement/AllVehicle";
import UpdateVehicle from "./transportManagement/UpdateVehicle";
import AddMaintaince from "./transportManagement/AddMaintenance";
import AddTransport from "./transportManagement/AddTransport";
import AllTransport from "./transportManagement/AllTransport";
import UpdateTransport from "./transportManagement/UpdateTransport";
import DashboardT from "./transportManagement/DashboardT";
import ReportT from "./transportManagement/ReportT";
import Drivers from "./transportManagement/Drivers";

import ViewFinancialDetails from "./financialManagement/ViewFinancialDetails";
import ViewBill from "./financialManagement/ViewBills";
import ViewPayment from "./financialManagement/ViewPayments";
import ViewSalary from "./financialManagement/ViewSalary";
import ViewLedger from "./financialManagement/ViewLedger";
import AddBillDetails from "./financialManagement/AddBillDetails";
import AddPaymentsDetails from "./financialManagement/AddPaymentDetails";
import EditBill from "./financialManagement/EditBill";
import EditPayment from "./financialManagement/EditPayment";
import AddSalary from "./financialManagement/AddSalary";

import InventoryDetails from "./inventoryManagement/inventory-details.component";
import EditInventory from "./inventoryManagement/edit-inventory.component";
import CreateInventory from "./inventoryManagement/create-inventory.component";
import AddItem from "./inventoryManagement/add-item.component";
import InventoryReport from "./inventoryManagement/inventoryReport";

import { BrowserRouter as Router, Route } from "react-router-dom";

function Home() {
  return (
    <Router>
      
        <Header />
        
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/" exact component={LoginUser}/>
        
        {/*hasani*/}
        <Route path="/addCustomer" exact component={AddCustomer} />
        <Route path="/customer/get/:nic" exact component={DisplayCustomer} />
        <Route path="/customer/update/:nic" exact component={EditCustomer} />
        <Route path="/addOrder" exact component={AddOrder} />
        <Route path="/allCustomer" exact component={AllCustomers} />
        <Route path="/order/getOrder/:oID" exact component={ViewOrder} />
        <Route path="/order/update/:oID" exact component={UpdateOrder} />
        <Route path="/orderItem/update/:oID" exact component={UpdateOrderItems}/>
        <Route path="/displayOrders" exact component={AllOrders} />
        <Route path="/order/GenerateOrderReport" exact component={GenerateOrderReport}/>
        <Route path="/order/GenerateCustomerReport" exact component={GenerateCustomerReport}/>
        <Route path="/order/GenerateOrderItemsReport" exact component={GenerateOrderItemsReport}/>


      {/*kaveen*/}
      <Route path="/empList" exact component={EmployeeList} />
      <Route path="/addEmp" exact component={AddEmployee} />
      <Route path="/removeEmp" exact component={RemoveEmployee} />
      <Route path="/updateEmp/:userId" exact component={UpdateEmployee} />
      <Route path="/viewEmp/:userId" exact component={ViewEmpDetails} />
      <Route path="/attendaceMark" exact component={QRMarker} />
      <Route path="/attendanceList" exact component={AttendanceList} />
      <Route path="/addLeave" exact component={addNewLeave} />
      <Route path="/leaveList" exact component={LeaveList} />
      <Route path="/empReport" exact component={EmpListReport} />

    
      {/*thisara*/}
      <Route path="/addpromotion" exact component={AddPromotionDetails} />
      <Route path="/addadd" exact component={AddProductPrice} />
      <Route path="/allview" exact component={AllPromotionDetails} />
      <Route path="/getproductprice" exact component={AllProductPriceDetails} />
      <Route
        path="/get/viewpromotion/:promotionid"
        exact
        component={ViewPromotionDetails}
      />
      <Route
        path="/getget/:salesid"
        exact
        component={ViewProductPriceDetails}
      />
      <Route
        path="/update/promotion/:promotionid"
        exact
        component={UpdatePromotionDetails}
      />
      <Route
        path="/updateupdate/:salesid"
        exact
        component={UpdateProductPricesDetails}
      />
      <Route path="/promotion/report" exact component={PromotionReport} />
      <Route path="/price/report" exact component={PriceReport} />

      {/*uditha*/}
      <Route exact path="/add" component={AddProduct} />
      <Route exact path="/view" component={ViewProducts} />
      <Route exact path="/rawmaterial" component={InventoryReport}/>

      {/*nalini*/}

      <Route path="/adds" exact component={AddSupplier} />
      <Route path="/addTender" exact component={AddTenderRestock} />
      <Route path="/s" exact component={AllSuppliers} />
      <Route path="/alltenders" exact component={AllTenderRestock} />
      <Route path="/updates/:supp_id" exact component={UpdateSupplier} />
      <Route
        path="/updateTender/:tenderid"
        exact
        component={UpdateTenderRestock}
      />
      <Route path="/gets/:supp_id" exact component={ViewSupplier} />
      <Route path="/get/:tenderid" exact component={ViewTenderRestock} />
      <Route path="/report/tender" exact component={TenderReport} />

      {/*devin*/}
      <Route exact path="/addVehicle" component={AddVehicle} />
      <Route exact path="/viewVehicle" component={AllVehicle} />
      <Route exact path="/updateVehicle" component={UpdateVehicle} />
      <Route exact path="/addM" component={AddMaintaince} />
      <Route exact path="/addT" component={AddTransport} />
      <Route exact path="/ViewT" component={AllTransport} />
      <Route exact path="/updateT" component={UpdateTransport} />
      <Route exact path="/AllT" component={DashboardT} />
      <Route exact path="/ReportT" component={ReportT} />
      <Route exact path="/viewD" component={Drivers} />
      <Route exact path="/DashboardT" component={DashboardT} />


      {/*senal*/}
      <Route path="/ViewFinancial" exact component={ViewFinancialDetails} />
      <Route path="/ViewBills" exact component={ViewBill} />
      <Route path="/ViewPayments" exact component={ViewPayment} />
      <Route path="/ViewSalary" exact component={ViewSalary} />
      <Route path="/ViewLedger" exact component={ViewLedger} />
      <Route path="/AddBillDetails" exact component={AddBillDetails} />
      <Route path="/AddPayment" exact component={AddPaymentsDetails} />
      <Route path="/add/:id" exact component={AddSalary} />
      <Route path="/editBill/:id" exact component={EditBill} />
      <Route path="/update/:id" exact component={EditPayment} />

      {/*hiruni*/}
      <Route path="/inventories" exact component={InventoryDetails} />
      <Route path="/edit/:id" exact component={EditInventory} />
      <Route path="/addInventory" exact component={CreateInventory} />
      <Route path="/item" exact component={AddItem} />
      <Route path="/inventoryReport" exact component={InventoryReport}/>
    </Router>
  );
}

export default Home;
