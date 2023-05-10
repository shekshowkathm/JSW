import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JswhomeRoutingModule } from './jswhome-routing.module';
import { JswhomeComponent } from './jswhome/jswhome.component';
import { FooterComponent } from "./footer/footer.component";
import { AboutComponent } from "./about/about.component";
import { BlogComponent } from "./blog/blog.component";
import { ContactHeaderComponent } from "./contact-header/contact-header.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { ServicesComponent } from "./services/services.component";
import { SellerComponent } from "./seller/seller.component";


import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { MatNativeDateModule } from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ChartModule } from 'angular-highcharts';
import { HttpClientModule } from '@angular/common/http';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
@NgModule({
  declarations: [
    JswhomeComponent,SellerComponent,FooterComponent,AboutComponent,BlogComponent,ContactHeaderComponent,HeaderComponent,LoginComponent,ServicesComponent, ForgetpasswordComponent, ResetpasswordComponent
  ],
  imports: [
    CommonModule,
    JswhomeRoutingModule,
    ChartModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,FormsModule,ReactiveFormsModule,MatNativeDateModule,HttpClientModule
  ]
})
export class JswhomeModule { }
