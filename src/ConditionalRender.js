import React, { useState } from "react";

function ConditionalRender() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Conditional Rendering Example</h1>

      {isLoggedIn ? <h2>Welcome Back!</h2> : <h2>Please Log In</h2>}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default ConditionalRender;