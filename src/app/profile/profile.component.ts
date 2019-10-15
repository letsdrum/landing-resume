import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContactComponent } from './dialog-contact/dialog-contact.component';
import { MatBottomSheet } from '@angular/material';
import { BottomsheetComponent } from './bottomsheet/bottomsheet.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isActive = false;
  download(): void {
    window.open('assets/resume/Verbin Sergey.docx')
  }

  constructor(public dialog: MatDialog, private bottomSheet: MatBottomSheet) { }

  contact(): void {
    this.dialog.open(DialogContactComponent)
  }

  bottomOpen(): void {
    this.bottomSheet.open(BottomsheetComponent)
  }

  ngOnInit() {
  }

}
