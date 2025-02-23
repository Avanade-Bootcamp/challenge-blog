export interface Post {
    id: number;
    title: string;
    content: string;
    display_content: string;
    author: string;
    createdAt?: Date;
}