export type UserContact = {
    id: number;
    lastMessage: string;
    lastMessageTime: string;
  
    user: User; // The user owning the contact
    contact: User; // The contact user
  
    messages: Message[]; // Messages exchanged between the user and contact (eagerly loaded)
  }


export type User = {
    id: number;
    name: string;
    email: string;
    // Password should not be included in the fetched data for security reasons
    // role: Role; // Remove if role is not required in the fetched data
  
    work?: string; // Optional work information
    image?: string; // Optional profile image URL
    coverImage?: string; // Optional cover image URL
  
    // Eagerly loaded contacts
    contacts?: UserContact[];
  
    sentMessages?: Message[]; // Optional sent messages (consider lazy loading)
    receivedMessages?: Message[]; // Optional received messages (consider lazy loading)
  
    refreshToken?: string; // Optional refresh token
  }

export type Message ={
    content: string;
    createdAt: string;
  
    // Relations (assuming proper setup in your ORM)
    sender: User;
    receiver: User;
  }

// export const JoeMessages: Message[] = [
//     {
//         user: "Joe",
//         message: "Hey Jake, I wanted to reach out because we saw your work contributions and were impressed by your work. ",
//         timestamp: `${new Date().toLocaleTimeString().slice(0, -3)}`
//     },
//     {
//         user: "Joe",
//         message: "We want to invite you for a quick interview",
//         timestamp: `${new Date().toLocaleTimeString().slice(0, -3)}`
//     },
//     {
//         user: "John",
//         message: "Hi Jan, sure I would love to. Thanks for taking the time to see my work!",
//         timestamp: `${new Date().toLocaleTimeString().slice(0, -3)}`
//     },
// ]

export const emptyMessages: Message[] = []