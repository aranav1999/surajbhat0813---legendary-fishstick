"use client"

// import React from 'react'
// import { useState } from 'react'

// const Quiz = () => {
//     const [answer, setAnswer] = useState('');  //to store answers
//     const [status, setStatus] = useState('Typing...'); //to check status
//     const [error, setError] = useState(null); //to store error

//     if (status === 'Success') {
//         return <h1>That's right!</h1>
//       }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setStatus('Submitting');
//         try {
//             await CheckAnswer(answer);
//             setStatus("Success");
//         } catch (error) {
//             setStatus("Typing...");
//             setError(error);
//         }
//     }


//   return (
//     <>
//     <h1>City Quiz</h1>
//     <p>In which city is there a billboard that turns air into drinkable water?</p>
//     <form onSubmit={handleSubmit}>
//         <br/>
//         <textarea className="border border-grey-900 rounded-xl" onChange={(e) => {setAnswer(e.target.value)}}/>
//         <br/>
//         <button className='border border-black-900 hover:bg-slate-200' disabled={answer.length===0 || status === "Submitting"}>Submit</button>
//         {error !== null &&
//           <p className="Error">
//             {error.message}
//           </p>
//         }
//     </form>
//     </>
//   )
// }

// function CheckAnswer(answer) {
//     // Pretend it's hitting the network.
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         let shouldError = answer.toLowerCase() !== 'lima'
//         if (shouldError) {
//           reject(new Error('Good guess but a wrong answer. Try again!'));
//         } else {
//           resolve();
//         }
//       });
//     });
//   }
// export default Quiz
