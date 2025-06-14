import React from "react";

export default function App({ teas }) {
  return React.createElement("div", { style: { padding: "3em" } }, [
    React.createElement("h1", {}, "Chai Code Teas"),
    React.createElement(
      "ul",
      {},
      teas.map((tea) => {
        React.createElement("li", { key: tea.id }, [
          React.createElement("h3", {}, tea.name),
          React.createElement("p", {}, tea.description),
        ]);
      })
    ),
  ]);
}
