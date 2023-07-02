import CostItem from './CostItem';
import './Costs.css';
import Card from '../UI/Card'
import CostsFilter from "./CostsFilter";
import React, {useState} from "react";

const Costs = (props:any) => {

    const [selectedYear, setSelectedYear] = useState('2021');

    const yearChangeHandler = (year:any) => {
        setSelectedYear(year);
    };

    const filteredCosts = props.costs.filter((cost:any) =>
    {
       return cost.date.getFullYear().toString() ===
       selectedYear;
    })

    let costsContent = <p>В Этом Году Расходов Нет</p>;

    if (filteredCosts.length > 0) {
        costsContent = filteredCosts.map((cost:any) => (
           <CostItem
              key={cost.id}
              date={cost.date}
              description={cost.description}
              amount={cost.amount}
           />
         ))
    }

    return (
    <div>
      <Card className='costs'>
      <CostsFilter year={selectedYear}
       onChangeYear={yearChangeHandler} />
        {costsContent}
      </Card>
    </div>
    );

}

export default Costs;