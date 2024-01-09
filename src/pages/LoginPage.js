import React from "react";

const LoginPage = () => {
     const handleLogin = () => {
          // add logic
     }

     return (
          <div>
               <h2>Login</h2>
               <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
               </form>
          </div>
     )
}

export default LoginPage;