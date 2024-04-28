import { StaticImageData } from "next/image";
import { Message } from "./message";
export type chatProfile = {
    name: string,
    profile?: StaticImageData,
    work: string,
    lastMessage: string
    lastMessageTime: string,
    selected: boolean,
    messages: Message[],
}