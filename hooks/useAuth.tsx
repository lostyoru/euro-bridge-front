import { useContext } from "react";
import { AuthContext } from "@/contexts/auth/AuthProvider";
import exp from "constants";

const useAuth = () => {
    return useContext(AuthContext);
}
export default useAuth;