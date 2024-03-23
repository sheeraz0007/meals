import React, { useState, useEffect } from "react";

const Context = React.createContext();
const AppContext = ({ children }) => {
  const [profile, setProfile] = useState({
    first_name: "Sheeraz",
    last_name: "Logix",
    email: "example@gmail.com",
    image: "",
  });
  //------------------------------------------------------
  const _get_user_profile = () => {
    return profile;
  };
  const _set_user_profile = (value) => {
    setProfile(value);
  };

  //------------------------------------------------------
  useEffect(() => {
    //
    return () => {
      //cleanup
    };
  }, []);
  //------------------------------------------------------
  const bundle = {
    _get_user_profile,
    _set_user_profile,
  };
  return <Context.Provider value={bundle}>{children}</Context.Provider>;
};

export default AppContext;
export const useAppContext = () => React.useContext(Context);
