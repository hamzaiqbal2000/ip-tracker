import React from "react";
import Search from "./components/Search";
import MyMap from "./components/MyMap";

function App() {
  return (
    <div className="flex flex-col h-screen max-h-screen">
      {/* Search/results */}
      <Search />
      {/* Map */}
      <MyMap />
    </div>
  );
}

export default App;
