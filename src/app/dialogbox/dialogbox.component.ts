import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.scss']
})
export class DialogboxComponent implements OnInit {

  Reasons = [
    {
      Selected: false,
      Id: 'Reason 1',
      ReasonValue: 'Reason one'
    },
    {
      Selected: false,
      Id: 'Reason 2',
      ReasonValue: 'Reason two'
    },
    {
      Selected: false,
      Id: 'Reason 3',
      ReasonValue: 'Reason three'
    },
    {
      Selected: false,
      Id: 'Reason 4',
      ReasonValue: 'Reason four'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  display(data:any) {
    console.log(data.value);
    for( let i=0; i<this.Reasons.length; i++) {
      if(this.Reasons[i].Id == data.value){
        this.Reasons[i].Selected = true;
        // console.log(this.Reasons[i].Id)
      }
      else{
        this.Reasons[i].Selected = false;
      }
    }
  }

}
