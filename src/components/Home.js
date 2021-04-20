import Header from "./Header";

import Dashboard from "../components/Dashboard";

import AddEmployee from "./Employee/AddEmployee";
import RemoveEmployee from "./Employee/removeEmployee";
import UpdateEmployee from "./Employee/updateEmployeeDetails";
import ViewEmpDetails from "./Employee/employeeDetails";
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

import { BrowserRouter as Router, Route } from "react-router-dom";

function Home() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Dashboard} />
        {/*<Route path="/" exact component={EmployeeList} />*/}
        <Route path="/empList" exact component={EmployeeList} />
        <Route path="/addEmp" exact component={AddEmployee} />
        <Route path="/removeEmp" exact component={RemoveEmployee} />
        <Route path="/updateEmp/:userId" exact component={UpdateEmployee} />
        <Route path="/viewEmp/:userId" exact component={ViewEmpDetails} />
        <Route path="/attendaceMark" exact component={QRMarker} />
        <Route path="/attendanceList" exact component={AttendanceList} />
        <Route path="/addLeave" exact component={addNewLeave} />
        <Route path="/leaveList" exact component={LeaveList} />
        {/*hasani*/}
        <Route path="/addCustomer" exact component={AddCustomer} />
        <Route path="/customer/get/:nic" exact component={DisplayCustomer} />
        <Route path="/customer/update/:nic" exact component={EditCustomer} />
        <Route path="/addOrder" exact component={AddOrder} />
        <Route path="/allCustomer" exact component={AllCustomers} />
        <Route path="/order/getOrder/:oID" exact component={ViewOrder} />
        <Route path="/order/update/:oID" exact component={UpdateOrder} />
<<<<<<< HEAD
        <Route path="/orderItem/update/:oID" exact component={UpdateOrderItems}/>
        <Route path="/displayOrders" exact component={AllOrders} />
        <Route path="/order/GenerateOrderReport" exact component={GenerateOrderReport}/>
=======
        <Route path="/orderItem/update/:oID" exactcomponent={UpdateOrderItems}/>
        <Route path="/displayOrders" exact component={AllOrders} />
        <Route path="/order/GenerateOrderReport" exactcomponent={GenerateOrderReport}/>
>>>>>>> d115b3aaa602b921ac91745e558a5b2c5e77bb20
        <Route path="/order/GenerateCustomerReport" exact component={GenerateCustomerReport}/>
        <Route path="/order/GenerateOrderItemsReport" exact component={GenerateOrderItemsReport}/>

        {/*thisara*/}
        <Route path="/addpromotion" exact component={AddPromotionDetails} />
        <Route path="/addadd" exact component={AddProductPrice} />
        <Route path="/allview" exact component={AllPromotionDetails} />
        <Route path="/getproductprice" exact component={AllProductPriceDetails}/>
        <Route path="/get/viewpromotion/:promotionid" exact component={ViewPromotionDetails}/>
        <Route path="/getget/:salesid" exact component={ViewProductPriceDetails}/>
        <Route path="/update/promotion/:promotionid" exact component={UpdatePromotionDetails}/>
        <Route path="/updateupdate/:salesid" exact component={UpdateProductPricesDetails}/>
        <Route path="/promotion/report" exact component={PromotionReport} />
        <Route path="/price/report" exact component={PriceReport} />
      </div>

      {/*uditha*/}
      <Route exact path="/add" component={AddProduct} />
      <Route exact path="/view" component={ViewProducts} />

      {/*nalini*/}

      <Route path="/adds" exact component={AddSupplier} />
      <Route path="/add" exact component={AddTenderRestock} />
      <Route path="/s" exact component={AllSuppliers} />
      <Route path="/alltenders" exact component={AllTenderRestock} />
      <Route path="/updates/:supp_id" exact component={UpdateSupplier} />
      <Route path="/update/:tenderid" exact component={UpdateTenderRestock} />
      <Route path="/gets/:supp_id" exact component={ViewSupplier} />
      <Route path="/get/:tenderid" exact component={ViewTenderRestock} />
      <Route path="/report/tender" exact component={TenderReport} />

      {/*devin*/}
      <Route exact path="/addVehicle" component={AddVehicle} />
      <Route exact path="/viewVehicle" component={AllVehicle} />
      <Route exact path="/updateVehicle" component={UpdateVehicle} />
      <Route exact path="/addM" component={AddMaintaince} />

      {/*senal*/}
      <Route path="/ViewFinancial" exact component={ViewFinancialDetails} />
      <Route path="/ViewBills" exact component={ViewBill} />
      <Route path="/ViewPayments" exact component={ViewPayment} />
      <Route path="/ViewSalary" exact component={ViewSalary} />
      <Route path="/ViewLedger" exact component={ViewLedger} />
      <Route path="/AddBillDetails" exact component={AddBillDetails} />
      <Route path="/AddPayment" exact component={AddPaymentsDetails} />
      <Route path="/add/:id" exact component={AddSalary} />
      <Route path="/edit/:id" exact component={EditBill} />
      <Route path="/update/:id" exact component={EditPayment} />
    </Router>
  );
}

export default Home;
