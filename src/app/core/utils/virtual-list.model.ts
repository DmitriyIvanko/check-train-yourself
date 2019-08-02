export class VirtualListModel<T> {
  public list: T[];
  public total: number;

  constructor(obj?: Partial<VirtualListModel<T>>) {
    this.list = obj && obj.list || [];
    this.total = obj && obj.total || 0;
  }
}
