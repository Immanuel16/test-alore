import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SegmentModel } from './_model/app.model';
import { AppService } from './_service/app.service';
import { v4 as uuidv4 } from 'uuid';
import { colorPalette, dataSegment } from './data/app.data';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddDialogComponent } from './_dialog/add-dialog/add-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  subs: Subscription[] = [];
  listSegments: SegmentModel[] = dataSegment;
  test: string = '😂';
  isEmojiPickerVisible: boolean = true;
  constructor(private service: AppService, private dialog: MatDialog) {}

  ngOnInit(){
  }

  openDialog(segment: string, isSegment = false){
    const data = {
      isSegment,
      segment,
    }
    const modalConf: MatDialogConfig = {
      width: '550px',
      disableClose: true,
      data,
    };
    this.dialog.open(AddDialogComponent, modalConf);
  }

  
}
