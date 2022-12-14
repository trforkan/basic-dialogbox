import { DialogboxComponent } from './../dialogbox/dialogbox.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal() {
    this.dialog.open(DialogboxComponent);
  }

}
