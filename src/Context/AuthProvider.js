// import { useContext, createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useAuth } from './Context/AuthProvider';



// const AuthContext = createContext();
// const AuthProvider = ({ children }) => {
//     const [ user, setUser] = useState(null)

//     console.log(user,'Userrr')

//     // const navigate = useNavigate()



//     const secureLogin = (email, password) => {
//   const allowedUsers = [
//     { email: "savya7@gmail.com", password: "1234" },
//     { email: "user1@gmail.com", password: "abcd" },
//     { email: "user2@gmail.com", password: "7325" }
//   ];

//   const matchedUser = allowedUsers.find(
//     (user) => user.email === email && user.password === password
//   );

//   if (matchedUser) {
//     setUser(email);
//     localStorage.setItem("email", email);
//     console.log("Secure login successful");
//   } else {
//    toast.error("Invalid email or password", {
//       position: "top-center",
//       autoClose: 3000
//   });
// }
// };


//     const login = (email, password) => {
//         console.log(email, password, "66666666666666666666666666666")
//         window.localStorage.setItem("email", email)
//         setUser(email)
//         // navigate('/home')
//     }
//      const logout = (email, password) => {
//         console.log(email, password, "messg")
//         window.localStorage.removeItem("email", email)
//         setUser(null)

//     }

//   return (
//     <AuthContext.Provider value={{ login, user ,logout,secureLogin }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

// export const useAuth = () => {
//   return useContext(AuthContext);
// };


// import { useContext, createContext, useState } from "react";
// import { toast } from "react-toastify";
// import axios from "axios";


// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   console.log(user, "Userrr");

//   const secureLogin = (email, password) => {
//     const allowedUsers = [
//       { email: "savya7@gmail.com", password: "1234" },
//       { email: "user1@gmail.com", password: "abcd" },
//       { email: "user2@gmail.com", password: "7325" },
//     ];

//     const matchedUser = allowedUsers.find(
//       (user) => user.email === email && user.password === password
//     );

//     if (matchedUser) {
//       setUser(email);
//       localStorage.setItem("email", email);
//       console.log("Secure login successful");
//     } else {
//       toast.error("Invalid email or password", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//     }
//   };

//   // const login = (email, password) => {
//   //   console.log(email, password, "LOGIN");
//   //   localStorage.setItem("email", email);
//   //   setUser(email);
//   // };
//   const login = async (email, password) => {
//   try {
//     const res = await axios.post("http://localhost:2000/user/login", {
//       email,
//       password,
//     });

//     const { token, user } = res.data;

//     // Save token and user info
//     localStorage.setItem("token", token);
//     setUser(user);

//     console.log("Login successful");
//     toast.success("Login successful");
//   } catch (err) {
//     console.error("Login failed:", err.response?.data || err.message);
//     toast.error(err.response?.data?.error || "Login failed");
//   }
// };

//   const logout = () => {
//     localStorage.removeItem("email");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ login, logout, secureLogin, user }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


// export default AuthProvider;


// export const useAuth = () => {
//   return useContext(AuthContext);
// };


import { useContext, createContext, useState, useEffect } from "react"; //  updated here
import { toast } from "react-toastify";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // console.log(user, "Userrr");

  //  Restore user if token and email exist in localStorage
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   const email = localStorage.getItem("email");
  //   // localStorage.setItem("user", JSON.stringify(user));
  //   if (token && email) {
  //     setUser({ email }); // or setUser(email); based on how you handle user state
  //     const storedUser = localStorage.getItem("user");
  //     if (storedUser) {
  //       setUser(JSON.parse(storedUser)); // Restore full user object
  //     }
  //   }
  // }, []);

  useEffect(() => {
  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");

  if (token && storedUser) {
    setUser(JSON.parse(storedUser)); // Restore full user with role/id
  }
}, []);

  const secureLogin = (email, password) => {
    const allowedUsers = [
      { email: "savya7@gmail.com", password: "1234" },
      { email: "user1@gmail.com", password: "123456" },
      { email: "user2@gmail.com", password: "7325" },
    ];

    const matchedUser = allowedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      // setUser(email);
      // localStorage.setItem("email", email);
      setUser(matchedUser);
localStorage.setItem("user", JSON.stringify(matchedUser));

      // console.log("Secure login successful");
    } else {
      toast.error("Invalid email or password", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const login = async (email, password) => {
    console.log('**********************')
    try {
      const res = await axios.post("http://localhost:2000/user/login", {
        email,
        password,
      });

      const { token, user } = res.data;
      console.log("Login Response:", token);


      localStorage.setItem("token", token);
      localStorage.setItem("email", user.email);
      // console.log("Token saved to localStorage"); 
      setUser(user);

      // console.log("Login successful");
      toast.success("Login successful");
      localStorage.setItem("user", JSON.stringify(user)); // Save full user with role
      setUser(user); // Set full user object with role
      return true;
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      toast.error(err.response?.data?.error || "Login failed");
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ login, logout, secureLogin, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
