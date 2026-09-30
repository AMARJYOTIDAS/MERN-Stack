import React from "react";

const App = () => {
  console.log(import.meta.env.VITE_APP_APPWRITE_URL);
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
};

export default App;
