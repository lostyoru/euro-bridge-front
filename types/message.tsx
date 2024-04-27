export type Message = {
    user: string;
    message: string;
    timestamp: string;
};

export const JoeMessages: Message[] = [
    {
        user: "Joe",
        message: "Hey Jake, I wanted to reach out because we saw your work contributions and were impressed by your work. ",
        timestamp: `${new Date().toLocaleTimeString().slice(0, -3)}`
    },
    {
        user: "Joe",
        message: "We want to invite you for a quick interview",
        timestamp: `${new Date().toLocaleTimeString().slice(0, -3)}`
    },
    {
        user: "John",
        message: "Hi Jan, sure I would love to. Thanks for taking the time to see my work!",
        timestamp: `${new Date().toLocaleTimeString().slice(0, -3)}`
    },
    {
        user: "Joe",
        message: "dayr ki zbi",
        timestamp: `${new Date().toLocaleTimeString().slice(0, -3)}`
    },
    {
        user: "John",
        message: "nikmok",
        timestamp: `${new Date().toLocaleTimeString().slice(0, -3)}`
    },
    {
        user: "Joe",
        message: "ya wjh zab",
        timestamp: `${new Date().toLocaleTimeString().slice(0, -3)}`
    },
    {
        user: "John",
        message: "roh ta3ti",
        timestamp: `${new Date().toLocaleTimeString().slice(0, -3)}`
    },
    {
        user: "Joe",
        message: "na3l tiz mok",
        timestamp: `${new Date().toLocaleTimeString().slice(0, -3)}`
    },
    {
        user: "John",
        message: "asma7li 7acha mok",
        timestamp: `${new Date().toLocaleTimeString().slice(0, -3)}`
    },
    {
        user: "Joe",
        message: "hhh nikmok",
        timestamp: `${new Date().toLocaleTimeString().slice(0, -3)}`
    },
    {
        user: "John",
        message: "hhh ok",
        timestamp: `${new Date().toLocaleTimeString().slice(0, -3)}`
    },
    {
        user: "Joe",
        message: "hhhhhh nikmok",
        timestamp: `${new Date().toLocaleTimeString().slice(0, -3)}`
    },
]

export const emptyMessages: Message[] = []