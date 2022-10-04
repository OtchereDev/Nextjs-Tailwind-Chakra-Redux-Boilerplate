import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { removeUser, setUser } from "../store/slices/authSlice";
import { ILogin, IUser } from "../types/auth/auth.type";

export interface ContextInterface {
  login: (a: ILogin) => Promise<void | boolean>;
  user: IUser | null;
  signup: (a: any) => Promise<void | boolean>;
  checkUserLoggedIn: Function;
  setUser: Function;
  logout: () => Promise<void>;
  sendResetLink: (a: any) => Promise<void | boolean>;
  resetAccount: (a: any) => Promise<void | boolean>;
}

interface IAuthContextProvider {
  children: React.ReactNode;
}

export const AuthContext = createContext<ContextInterface>({
  login: async (body: ILogin) => new Promise((resolve, reject) => resolve()),
  user: { email: undefined, fullName: "" },
  signup: async (body: any) => new Promise((resolve, reject) => resolve()),
  checkUserLoggedIn: () => null,
  setUser: () => null,
  logout: () => new Promise((resolve, reject) => resolve()),
  sendResetLink: (a) => new Promise((resolve) => resolve()),
  resetAccount: (a) => new Promise((resolve) => resolve()),
});

const AuthContextProvider: React.FC<IAuthContextProvider> = ({ children }) => {
  const [authReady, setAuthReady] = useState(false);

  const user = useAppSelector((state) => state.auth.user);

  const router = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    checkUserLoggedIn().then((data) => {
      setAuthReady(true);
    });
  }, []);

  const toast = useToast({ position: "top-right" });

  const login = async (body: ILogin) => {
    const res = "some request";

    // make request then use implementation below

    // if (!res.ok) {
    //   //   throw new Error("Invalid Credentials");
    //   toast({ title: data.message || "Invalid Credentials", status: "error" });
    //   return false;
    // }

    // if (res.ok) {
    //   toast({ title: "Successfully logged in", status: "success" });
    //   await checkUserLoggedIn();
    //   return true;
    // }
  };

  const signup = async (body: any) => {
    const res = "some request";

    // make request then use implementation below

    // if (!res.ok) {
    //   if (typeof data.message == "string") {
    //     toast({ title: data.message, status: "error" });
    //     return false;
    //   }
    //   data.message?.forEach((message: string) =>
    //     toast({ title: message, status: "error" })
    //   );
    //   return false;
    // } else {
    //   await checkUserLoggedIn();
    //   toast({
    //     title: "Your account has been successfully created",
    //     status: "success",
    //   });
    //   // router.push("/dashboard");
    //   return true;
    // }
  };

  const logout = async () => {
    const res = "request to remove tokens";

    // make request then use implementation below

    // if (res.ok) {
    //   dispatch(removeUser());
    //   router.push("/login");
    // }
    // toast({ title: "Successfully logged out", status: "info", duration: 2000 });
  };

  const checkUserLoggedIn = async () => {
    const res = "request to get current user";

    // if (res.ok) {
    //   const data = await res.json();
    //   dispatch(setUser(data.user));
    // }
  };

  const sendResetLink = async (body: any) => {
    const res = "request to send reset link";

    // make request then use implementation below

    // const data = await res.json();
    // if (res.ok) {
    //   toast({
    //     title: "Reset link has been sent to your email",
    //     status: "success",
    //   });
    //   return true;
    // } else {
    //   toast({ title: data.message, status: "error" });
    //   return false;
    // }
  };

  const resetAccount = async (body: any) => {
    const res = "request to reset account";

    // make request then use implementation below

    // const data = await res.json();
    // if (res.ok) {
    //   toast({ title: data.message, status: "success" });
    //   return true;
    // } else {
    //   toast({ title: data.message, status: "error" });
    //   return false;
    // }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        user,
        signup,
        logout,
        setUser,
        checkUserLoggedIn,
        sendResetLink,
        resetAccount,
      }}
    >
      <div className=" !font-body">{authReady && children}</div>
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
