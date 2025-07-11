import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [ user, setUser] = useState(null)

    console.log(user,'Userrr')
    
    // const navigate = useNavigate()



    const secureLogin = (email, password) => {
  const allowedUsers = [
    { email: "savya7@gmail.com", password: "1234" },
    { email: "user1@gmail.com", password: "abcd" },
    { email: "user2@gmail.com", password: "7325" }
  ];

  const matchedUser = allowedUsers.find(
    (user) => user.email === email && user.password === password
  );

  if (matchedUser) {
    setUser(email);
    localStorage.setItem("email", email);
    console.log("Secure login successful");
  } else {
   toast.error("Invalid email or password", {
      position: "top-center",
      autoClose: 3000
  });
}
};


    const login = (email, password) => {
        console.log(email, password, "66666666666666666666666666666")
        window.localStorage.setItem("email", email)
        setUser(email)
        // navigate('/home')
    }
     const logout = (email, password) => {
        console.log(email, password, "messg")
        window.localStorage.removeItem("email", email)
        setUser(null)
        
    }

  return (
    <AuthContext.Provider value={{ login, user ,logout,secureLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};