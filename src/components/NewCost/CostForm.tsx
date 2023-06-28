import React, { useState } from 'react';
import './CostForm.css';

const CostForm = (props:any) => {

        const [inputName, setInputName] = useState('');
        const [inputAmount, setInputAmount] = useState('');
        const [inputDate, setInputDate] = useState('');

  //    const [userInput, setUserInput] = useState({
   //     name: '',
   //     amount: '',
   //     date: ''
   //   });

        const nameChangeHandler = (event:any) => {
            setInputDate(event.target.value);
          // setUserInput({
           //     ...userInput,
           //     name: event.target.value
          // })

        //  setUserInput((previousState) => {
         //       return {
          //          ...previousState,
         //           name: event.target.value
          //      }
         // })
        };

        const amountChangeHandler = (event:any) => {
            setInputAmount(event.target.value);
          // setUserInput({
          //      ...userInput,
          //      amount: event.target.value
          // })
        };

        const dateChangeHandler = (event:any) => {
            setInputDate(event.target.value);
          // setUserInput({
          //      ...userInput,
          //      date: event.target.value
         //  })
        };

        const submitHandler = (event:any) => {
            event.preventDefault();

            const costData = {
             name: inputName,
             amount: inputAmount,
             date: new Date(inputDate)
            };

            props.onSaveCostData(costData);
            setInputName('');
            setInputAmount('');
            setInputDate('');
        };

     return (
     <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Название</label>
                <input type='text' value={inputName} onChange={nameChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Сумма</label>
                <input value={inputAmount} onChange={amountChangeHandler} type='number' min="0.01" step="0.01"/>
            </div>
            <div className="new-cost__control">
                <label>Дата</label>
                <input value={inputDate} onChange={dateChangeHandler} type='date' min="2023-01-01" step="2024-12-31"/>
            </div>
            <div className="new-cost__actions">
                 <button type="submit">Добавить Расход</button>
            </div>
        </div>
     </form>
     )
}

export default CostForm;