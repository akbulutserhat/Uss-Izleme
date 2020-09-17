import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hospital-item',
  templateUrl: './hospital-item.component.html',
  styleUrls: ['./hospital-item.component.scss']
})
export class HospitalItemComponent implements OnInit {

  objectKeys = Object.keys;

  @Input() item;
  @Input() searchText:string;
  isCardClicked:Array<Boolean> = [];
  errorInfoFlag:boolean = false; // true = open the error info detail 
                                  // false = close the error info detail 
    
  showMoreFlag:boolean = false;

  constructor() { }

  ngOnInit(): void {}

  clearClickArray() {
    if(this.errorInfoFlag) {
      for (let index = 0; index < this.item.SERVIS_BILGILERI.length; index++) {
        this.isCardClicked[index] = false;
      }
    }
  }

  cardClicked() {
    this.clearClickArray();
  }

}
