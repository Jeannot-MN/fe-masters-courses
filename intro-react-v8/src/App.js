const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
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
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

//root.render(App) // Why doesn't this work??

root.render(React.createElement(App));
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
