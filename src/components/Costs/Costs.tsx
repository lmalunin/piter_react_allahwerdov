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

    return (
    <div>
      <Card className='costs'>
      <CostsFilter year={selectedYear}
       onChangeYear={yearChangeHandler}/>
             {props.costs.map((cost:any) => (
              <CostItem
                date={cost.date}
                description={cost.description}
                amount={cost.amount}
               />
             ))}
      </Card>
    </div>
    );

}

export default Costs;