
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
// import { CustomerDetailsComponent } from './customer-details/customer-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'customer', component: CustomersListComponent },
  { path: 'add', component: CreateCustomerComponent },
  { path: 'findbyage', component: SearchCustomersComponent },
  { path: 'findbyage', component: SearchCustomersComponent },
  // { path: 'customerdetails', component: CustomerDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
