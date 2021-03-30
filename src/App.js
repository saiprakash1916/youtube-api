import React, { Fragment } from "react";
import SearchComponent from "./Component/SearchComponent";
import Youtube from "./Component/Youtube";
const App = () => {
  let onTermSubmit = async term => {
    let responce = await Youtube.get("/search", {
      params: { q: term },
    });
    console.log(responce.data);
  };
  return (
    <Fragment>
      <section>
        <header>
          <SearchComponent onTermSubmit={onTermSubmit} />
        </header>
      </section>
    </Fragment>
  );
};

export default App;
