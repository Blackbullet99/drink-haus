import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase.utils";

//as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
        console.log(user)
        setCurrentUser(user);
    });

    return unSubscribe;
  }, []);

  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
