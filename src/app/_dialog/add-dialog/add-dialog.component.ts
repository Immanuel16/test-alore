import { dataSegment } from './../../data/app.data';
import { SegmentModel, TableModel } from './../../_model/app.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { colorPalette } from 'src/app/data/app.data';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss', '../../app.component.scss']
})
export class AddDialogComponent implements OnInit {
  itemTable: TableModel = new TableModel();
  itemSegment: SegmentModel = new SegmentModel();
  showEmoji: boolean = false;
  showListColor: boolean = false;
  colorPalette = colorPalette;
  listSegment: SegmentModel[] = dataSegment;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<AddDialogComponent> ) {
  }

  ngOnInit(): void {
  }

  updateData(){
    if(!this.data.isSegment){
      this.addTable();
    } else {
      this.addSegment();
    }
  }

  private addTable(): void {
    const idx = this.listSegment.findIndex(segment => segment.name === this.data.segment);
    this.itemTable.id = uuidv4();
    this.listSegment[idx].child.unshift(this.itemTable);
    alert('Table success added')
    this.dialogRef.close();
  }
  private addSegment(): void {
    this.listSegment.push(this.itemSegment);
    alert('Segment success added')
    this.dialogRef.close();
  }

  addEmoji(event: any){
    this.showEmoji = false;
    if(this.data.isSegment){
      this.itemSegment.icon = `${event.emoji.native}`;
    } else{
      this.itemTable.icon = `${event.emoji.native}`;
    }
  }

  onSelectColor(color: string){
    this.showListColor = false;
    this.itemTable.color = color;
  }

}
