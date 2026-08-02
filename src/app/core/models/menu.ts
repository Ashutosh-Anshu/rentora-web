export interface Menu {
  id: string;
  parentId: string | null;
  name: string;
  displayName: string;
  route: string;
  icon: string;
  orderNum: number;
  children: Menu[];
}