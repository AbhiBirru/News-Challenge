import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import ArticlePage from "./Components/ArticlePage/ArticlePage";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [query, setQuery] = useState("");

  return (
    <div>
      <Navbar
        selectedCategory={selectedCategory}
        onChangeCategory={setSelectedCategory}
        onChangeSearch={setQuery}
        searchQuery={query}
      />
      <ArticlePage selectedCategory={selectedCategory} searchQuery={query} />
    </div>
  );
};

export default App;
