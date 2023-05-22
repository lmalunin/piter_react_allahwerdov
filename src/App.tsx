import Costs from "./components/Costs";

function App() {
    const costs = [
       {
         date: new Date(2021, 2, 12),
         description: "Холодильник",
         amount: 999.99
       },
       {
         date: new Date(2022, 2, 12),
         description: "джинсы",
         amount: 50.99
       },
       {
         date: new Date(2021, 2, 12),
         description: "Макбук",
         amount: 1254.72

       },
    ];

  // return React.createElement(
 //  "div",
  //   {},
   //  React.createElement("h1", {}, "Начнем изучение React!"),
   //  React.createElement(Costs, { costs: costs })
  // );


  return (
    <div>
        <h1>Начнем изучение React!</h1>
        <Costs costs={costs}/>
    </div>
  );
}

export default App;
