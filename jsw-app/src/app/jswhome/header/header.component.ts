import { Component, EventEmitter, Output } from '@angular/core';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // @Output() openSideNav = new EventEmitter<void>();
  constructor(private registerService:RegisterService){}
  ngOnInit(){}
  changeColor(color: string) {
    this.registerService.changeColor(color);
  }
  switchToAbout(){
    console.log("about clicked");
    this.registerService.loginSwitchCase='green';
    console.log(this.registerService.loginSwitchCase);


  }
}
