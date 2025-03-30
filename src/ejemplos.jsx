import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState("Juan");
  
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  };

  const UserProfile = () => {
    const { user } = useContext(UserContext);
    return <h1>Usuario: {user}</h1>;
  };

  const App = () => {
    return (
      <UserProvider>
        <UserProfile />
      </UserProvider>
    );
  };