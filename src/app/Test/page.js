"use client"

import React from 'react'
import { useState } from 'react'

const Quiz = () => {
    const [answer, setAnswer] = useState('');
    const [status, setStatus] = useState('Typing...');
    const [error, setError] = useState(null);

    if (status === 'Success') {
        return <h1>That's right!</h1>
      }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting');
        try {
            await CheckAnswer(answer);
            setStatus("Success");
        } catch (error) {
            setStatus("Typing...");
            setError(error);
        }
    }


  return (
    <>
    
<div className='w-1/3 border rounded-xl mx-auto p-6 bg-sky-100'>

    <h1 className='font-bold text-cyan-700 italic text-xl'> City Quiz</h1>
    <p className='italic'>  In which city is there a billboard that turns air into drinkable water?</p>
    <form onSubmit={handleSubmit}>
        <br/>
        <textarea className="border border-grey-900 rounded-xl" onChange={(e) => {setAnswer(e.target.value)}}/>
        <br/>
        <button className='transition ease-in-out delay-100 bg-blue-500 text-white font-bold hover:scale-110 hover:bg-indigo-500 duration-100 border rounded-xl px-3 py-1 active:border-green-900 ' disabled={answer.length===0 || status === "Submitting"}>Submit</button>
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
    </form>
</div>
    </>
  )
}

function CheckAnswer(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== 'lima'
        if (shouldError) {
          reject(new Error('Good guess but a wrong answer. Try again!'));
        } else {
          resolve();
        }
      });
    });
  }
export default Quiz