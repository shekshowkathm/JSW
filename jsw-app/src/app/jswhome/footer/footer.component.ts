import { Component } from '@angular/core';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private registerService:RegisterService){}
  ngOnInit(){}
  changeColor(color: string) {
    this.registerService.changeColor(color);
  }
}
