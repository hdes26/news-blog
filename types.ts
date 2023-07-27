export interface Author {
    id: string;
    name: string;
    email: string;
};
export interface Category {
    id: string;
    name: string;
    description: string;
};

export type LabelName = 'important' | 'warning' | 'regular';
export type Styles = {
    // eslint-disable-next-line no-unused-vars
    [key in LabelName]: string;
} & {
    default?: string;
}
export interface Label {
    id: string;
    name: LabelName;
    description: string;
};
export interface News {
    id: string;
    title: string;
    content: string;
    date: string;
    author: Author;
    category: Category;
    label: Label;
};
