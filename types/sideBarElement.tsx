export type SideBarElement = {
    name: string;
    icon: (color: string) => JSX.Element;
    active: boolean;
};