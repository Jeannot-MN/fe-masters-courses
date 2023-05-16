import ReactDOM from "react-dom/client";
import Pet from "./Pet";

/* const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Dodge",
      animal: "Cat",
      breed: "General",
    }),
    React.createElement(Pet, {
      name: "John",
      animal: "Human",
      breed: "Chinese",
    }),
  ]);
}; */

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatail" />
      <Pet name="Doink" animal="cat" breed="Mised" />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);

//root.render(App) // Why doesn't this work??

// root.render(React.createElement(App));
/* root.render(React.createElement(function () {
    return {
        "type": "div",
        "key": null,
        "ref": null,
        "props": {
            "children": {
                "type": "h1",
                "key": null,
                "ref": null,
                "props": {
                    "children": "Adopt Me!"
                },
                "_owner": null,
                "_store": {}
            }
        },
        "_owner": null,
        "_store": {}
    }
})); */
