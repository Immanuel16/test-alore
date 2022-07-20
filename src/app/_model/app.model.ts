export class SegmentModel {
  id: string = '';
  name: string = '';
  icon: string = '🤙';
  description: string = '';
  child: TableModel[] = [];
}

export class TableModel {
  id: string = '';
  name: string = '';
  icon: string = '🤙';
  color: string = 'rgba(207, 223, 255, 1)';
}

