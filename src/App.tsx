// import React from "react";
import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const App = () => {
    const costs = [
       {
         id: "c1",
         date: new Date(2021, 2, 12),
         description: "Холодильник",
         amount: 999.99
       },
       {
         id: "c2",
         date: new Date(2022, 2, 12),
         description: "джинсы",
         amount: 50.99
       },
       {
         id: "c3",
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

  const addCostHandler = (cost:any) => {
      console.log(cost);
      console.log('App Component');
  }

  return (
    <div>
        <NewCost onAddCost={addCostHandler} />
        <Costs costs={costs}/>
    </div>
  );
}

export default App;
