"use client"

import React from 'react'
import { useState } from 'react'

const Quiz = () => {
<<<<<<< HEAD
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState('Typing...');
  const [error, setError] = useState(null);
=======
    const [answer, setAnswer] = useState('');  //to store answers
    const [status, setStatus] = useState('Typing...'); //to check status
    const [error, setError] = useState(null); //to store error
>>>>>>> d2edce69cc7ecdb969b071049201aa7a6ee6e957

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
      <div className='bg-gradient-to-b from-sky-400 to-white flex items-center justify-center h-screen'>

        <div className='flex flex-col drop-shadow-2xl w-1/3 h-1/3 border rounded-xl mx-auto p-6 bg-sky-200 my-50'>

          <h1 className='font-bold text-cyan-700 italic text-xl'> City Quiz</h1>
          <p className='italic'>  In which city is there a billboard that turns air into drinkable water?</p>
          <form onSubmit={handleSubmit}>
            <br />
            <textarea className=" w-full h-full border border-grey-900 rounded-xl px-2 py-1" onChange={(e) => { setAnswer(e.target.value) }} />
            <br />
            <button className=' m-2 transition ease-in-out delay-100 bg-blue-500 text-white font-bold hover:scale-110 hover:bg-indigo-500 duration-100 border rounded-xl px-3 py-1 active:border-green-900 ' disabled={answer.length === 0 || status === "Submitting"}>Submit</button>
            {error !== null &&
              <p className="Error text-red-500">
                {error.message}
              </p>
            }
          </form>
        </div>
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
<<<<<<< HEAD
  });
}
export default Quiz
=======
  }
export default Quiz
>>>>>>> d2edce69cc7ecdb969b071049201aa7a6ee6e957
