import { StaticImageData } from "next/image";
import { Message } from "./message";
export type chatProfile = {
    id: number,
    lastMessage: string,
    lastMessageTime: string,
    image: string,
    contact: {
        id: number,
        name: string,
        email: string,
        work: string,
        image: string,
        coverImage: string,
    },
    messages: Message[],
    selected?: boolean,
}