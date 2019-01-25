export class NavItem {
  level: number;
  label: string;
  link: string;
  children: NavItem[] = [];
  parentLabel: string;
  isActive = false;
}
