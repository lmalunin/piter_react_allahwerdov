import CostForm from './CostForm';
import './NewCost.css';

const NewCost = (props:any) => {

    const saveCostDataHandler = (inputCostData:any) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString(),
        }
        props.onAddCost(costData);
    }

    return (
     <div className="new-cost">
        <CostForm onSaveCostData={saveCostDataHandler} />
    </div>
    );
}

export default NewCost;