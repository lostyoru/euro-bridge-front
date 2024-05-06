export type authType = {
    fullname: string,
    password: string,
    email: string,
    accountType: string,
    setAccountType: React.Dispatch<React.SetStateAction<string>>,
    setFullname: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
}