import React, { useState } from 'react';
import './CostForm.css';

const CostForm = () => {

        const [inputName, setName] = useState('');
        const [inputAmount, setAmount] = useState('');
        const [inputDate, setDate] = useState('');

  //    const [userInput, setUserInput] = useState({
   //     name: '',
   //     amount: '',
   //     date: ''
   //   });

        const nameChangeHandler = (event:any) => {
            setName(event.target.value);
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
            setAmount(event.target.value);
          // setUserInput({
          //      ...userInput,
          //      amount: event.target.value
          // })
        };

        const dateChangeHandler = (event:any) => {
            setDate(event.target.value);
          // setUserInput({
          //      ...userInput,
          //      date: event.target.value
         //  })
        };

        const submitHandler = (event) => {
            event.preventDefault();

            const costDate = {
             name: inputName,
             amount: inputAmount,
             date: new Date(inputDate)
            };
        };

     return (
     <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Название</label>
                <input type='text' onChange={nameChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Сумма</label>
                <input onChange={amountChangeHandler} type='number' min="0.01" step="0.01"/>
            </div>
            <div className="new-cost__control">
                <label>Дата</label>
                <input onChange={dateChangeHandler} type='date' min="2023-01-01" step="2024-12-31"/>
            </div>
            <div className="new-cost__actions">
                 <button type="submit">Добавить Расход</button>
            </div>
        </div>
     </form>
     )
}

export default CostForm;