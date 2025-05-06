// import React, { useRef, useState } from 'react';

// function Home() {
  
//   let loanRef=useRef();
//   let interestRef=useRef();
//   let termRef=useRef();
    
    
//   return (
//     <form >
//       <div>
//         <h1>Loan Calculator Dashboard</h1>
//       </div>
//         <div>
//       <lable>Loan Amount</lable>
//       <input type='number'  name='LoanAmount' ref={loanRef} defaultValue={100000} step={"any"} required/>

//       <lable>Interest</lable>
//       <input type='number'  name='interest' ref={interestRef} defaultValue={8.5} step={"any"} required/>

//       <label>Term</label>
//       <input type='number'  name='term' ref={termRef} defaultValue={5} step={"any"} required/>
//       </div>

//       <button type="submit">Calculate</button>
//     </form>
//   );
// }

// export default Home;




// import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
// import React, { useRef, useState } from 'react';

// function Home() {
//   const loanRef = useRef();
//   const interestRef = useRef();
//   const termRef = useRef();
//   const [monthlyEMI, setMonthlyEMI] = useState(null);
//   const [currency, setCurrency] = useState('USD');

//   const handleCalculator = (e) => {
//     e.preventDefault(); // prevent form submission reload

//     const loan = parseFloat(loanRef.current.value);
//     const interest = parseFloat(interestRef.current.value);
//     const term = parseFloat(termRef.current.value);

//     const totalMonths = term * 12;
//     const monthlyInterestRate = interest / (12 * 100);

//     const emi =
//       (loan * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) /
//       (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);

//     setMonthlyEMI(emi.toFixed(2));
//   };

//   return (
//     <>
//       <form onSubmit={handleCalculator}>
//         <div>
//           <h1>Loan Calculator Dashboard</h1>
//         </div>
//         <div>
//           <TextField
//             label="Loan Amount"
//             variant="outlined"
//             placeholder="Loan Amount"
//             inputRef={loanRef}
//             defaultValue={100000}
//             required
            
//           />

//           <TextField
//             label="Interest Rate (%)"
//             variant="outlined"
//             placeholder="Interest Rate (%)"
//             inputRef={interestRef}
//             defaultValue={8.5}
//             required
            
//           />

//           <TextField
//             label="Term (Years)"
//             variant="outlined"
//             placeholder="Term (Years)"
//             inputRef={termRef}
//             defaultValue={5}
//             required
            
//           />
//         </div>

//         <button type="submit">CALCULATE</button>
//       </form>

//       {monthlyEMI && (
//         <Box sx={{ mt: 4 }}>
//           <h2>Monthly EMI: ${monthlyEMI}</h2>

//           <FormControl variant="outlined" sx={{ mt: 2, minWidth: 200 }}>
//             <InputLabel id="currency-label">Currency</InputLabel>
//             <Select
//               labelId="currency-label"
//               variant='outlined'
//               label="Currency"
//               value={'USD'}
//               onChange={(e)=>setCurrency(e.target.value)}
//             >
//               <MenuItem value="USD">USD</MenuItem>
//               <MenuItem value="EUR">EUR</MenuItem>
//               <MenuItem value="INR">INR</MenuItem>
//               <MenuItem value="GBP">GBP</MenuItem>
//               <MenuItem value="JPY">JPY</MenuItem>
//               <MenuItem value="AUD">AUD</MenuItem>
//               <MenuItem value="CAD">CAD</MenuItem>
//             </Select>
//           </FormControl>
//         </Box>

//       )}

      
//     </>
//   );
// }

// export default Home;


// import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
// import React, { useRef, useState } from 'react';

// function Home() {
//   const loanRef = useRef();
//   const interestRef = useRef();
//   const termRef = useRef();
//   const [monthlyEMI, setMonthlyEMI] = useState(null);
//   const [currency, setCurrency] = useState('USD');
//   const [schedule, setSchedule] = useState([]);

//   const handleCalculator = (e) => {
//     e.preventDefault();

//     const loan = parseFloat(loanRef.current.value);
//     const interest = parseFloat(interestRef.current.value);
//     const term = parseFloat(termRef.current.value);

//     const totalMonths = term * 12;
//     const monthlyInterestRate = interest / (12 * 100);

//     const emi =
//       (loan * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) /
//       (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);

//     setMonthlyEMI(emi.toFixed(2));

//     let balance = loan;
//     const amortizationSchedule = [];

//     for (let month = 1; month <= totalMonths; month++) {
//       const interestPaid = balance * monthlyInterestRate;
//       const principalPaid = emi - interestPaid;
//       balance -= principalPaid;

//       amortizationSchedule.push({
//         month,
//         interestPaid: interestPaid.toFixed(2),
//         principalPaid: principalPaid.toFixed(2),
//         remainingBalance: balance > 0 ? balance.toFixed(2) : "0.00",
//       });
//     }

//     setSchedule(amortizationSchedule);
//   };

//   const handleReset=()=>(

//     setCurrency(null),
//     setSchedule([])

//   )
//   return (
//     <>
//       <form onSubmit={handleCalculator}>
//         <div>
//           <h1>Loan Calculator Dashboard</h1>
//         </div>
//         <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
//           <TextField
//             label="Loan Amount"
//             variant="outlined"
//             placeholder="Loan Amount"
//             inputRef={loanRef}
//             defaultValue={100000}
//             required
//           />
//           <TextField
//             label="Interest Rate (%)"
//             variant="outlined"
//             placeholder="Interest Rate (%)"
//             inputRef={interestRef}
//             defaultValue={8.5}
//             required
//           />
//           <TextField
//             label="Term (Years)"
//             variant="outlined"
//             placeholder="Term (Years)"
//             inputRef={termRef}
//             defaultValue={5}
//             required
//           />
//         </div>

//         <button type="submit">CALCULATE</button>
//       </form>

//       {monthlyEMI && (
//         <>
//         <Box sx={{ mt: 4 }}>
//           <h4 style={{fontFamily:'sans-serif'}}>Monthly EMI: ${monthlyEMI}</h4>

//           <FormControl variant="outlined" sx={{ mt: 2, minWidth: 200 }}>
//             <InputLabel id="currency-label">Currency</InputLabel>
//             <Select
//               labelId="currency-label"
//               variant='outlined'
//               label="Currency"
//               value={currency}
//               onChange={(e) => setCurrency(e.target.value)}
//             >
//               <MenuItem value="USD">USD</MenuItem>
//               <MenuItem value="EUR">EUR</MenuItem>
//               <MenuItem value="INR">INR</MenuItem>
//               <MenuItem value="GBP">GBP</MenuItem>
//               <MenuItem value="JPY">JPY</MenuItem>
//               <MenuItem value="AUD">AUD</MenuItem>
//               <MenuItem value="CAD">CAD</MenuItem>
//             </Select>
//           </FormControl>
//         </Box>
//         <button type='reset' onClick={handleReset()} >RESET TABLE</button>
//         </>
        
//       )}
     
//       {schedule.length > 0 && (
        
//         <Box sx={{ mt: 4 }}>
          
//           <h4 style={{fontFamily:'sans-serif'}}>Amortization Schedule ({currency})</h4>
//           <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '90vw' }}>
//             <thead style={{fontFamily:'sans-serif'}}>
//               <tr>
//                 <th >Month</th>
//                 <th>Principal</th>
//                 <th>Interest</th>
//                 <th>Remaining Balance</th>
//               </tr>
//             </thead>
//             <tbody>
//               {schedule.map((row) => (
//                 <tr key={row.month}>
//                   <td>{row.month}</td>
//                   <td> {row.principalPaid} {currency}</td>
//                   <td>{row.interestPaid} {currency}</td>
//                   <td>{row.remainingBalance} {currency}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </Box>
//       )}
//     </>
//   );
// }

// export default Home;





// import {
//   Box,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
//   } from '@mui/material';
//   import React, { useRef, useState } from 'react';
  
//   function Home() {
//   const loanRef = useRef();
//   const interestRef = useRef();
//   const termRef = useRef();
  
//   const[monthlyEMI, setMonthlyEMI] = useState(null);
//   const [currency, setCurrency] = useState('USD');
//   const [schedule, setSchedule] = useState([]);
  
//   const handleCalculator = (e) => {
//   e.preventDefault();
  
  
//   const loan = parseFloat(loanRef.current.value);
//   const interest = parseFloat(interestRef.current.value);
//   const term = parseFloat(termRef.current.value);
  
//   const totalMonths = term * 12;
//   const monthlyInterestRate = interest / (12 * 100);
  
//   const emi =
//     (loan *
//       monthlyInterestRate *
//       Math.pow(1 + monthlyInterestRate, totalMonths)) /
//     (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
  
//   setMonthlyEMI(emi.toFixed(2));
  
//   let balance = loan;
//   const amortizationSchedule = [];
  
//   for (let month = 1; month <= totalMonths; month++) {
//     const interestPaid = balance * monthlyInterestRate;
//     const principalPaid = emi - interestPaid;
//     balance -= principalPaid;
  
//     amortizationSchedule.push({
//       month,
//       interestPaid: interestPaid.toFixed(2),
//       principalPaid: principalPaid.toFixed(2),
//       remainingBalance: balance > 0 ? balance.toFixed(2) : '0.00',
//     });
//   }
  
//   setSchedule(amortizationSchedule);
  
  
//   };
  
//   const handleReset = () => {
//   setMonthlyEMI(null);
//   setCurrency('USD');
//   setSchedule([]);
  
//   };
  
//   return (
//   <>
//   <form onSubmit={handleCalculator} style={{marginTop:'100px'}}> <div>
//   <h1 style={{ fontFamily: 'sans-serif' }}>Loan Calculator Dashboard</h1> </div>
//   <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}> <TextField
//         label="Loan Amount"
//         variant="outlined"
//         placeholder="Loan Amount"
//         inputRef={loanRef}
//         defaultValue={100000}
//         required
//       /> <TextField
//         label="Interest Rate (%)"
//         variant="outlined"
//         placeholder="Interest Rate (%)"
//         inputRef={interestRef}
//         defaultValue={8.5}
//         required
//       /> <TextField
//         label="Term (Years)"
//         variant="outlined"
//         placeholder="Term (Years)"
//         inputRef={termRef}
//         defaultValue={5}
//         required
//       /> </div> <button type="submit">CALCULATE</button> </form>
  
  
//     {monthlyEMI && (
//       <>
//         <Box sx={{ mt: 4 }}>
//           <h4 style={{ fontFamily: 'sans-serif' }}>
//             Monthly EMI: ${monthlyEMI}
//           </h4>
  
//           <FormControl variant="outlined" sx={{ mt: 2, minWidth: 200 }}>
//             <InputLabel id="currency-label">Currency</InputLabel>
//             <Select
//               labelId="currency-label"
//               variant="outlined"
//               label="Currency"
//               value={currency}
//               onChange={(e) => setCurrency(e.target.value)}
//             >
//               <MenuItem value="USD">USD</MenuItem>
//               <MenuItem value="EUR">EUR</MenuItem>
//               <MenuItem value="INR">INR</MenuItem>
//               <MenuItem value="GBP">GBP</MenuItem>
//               <MenuItem value="JPY">JPY</MenuItem>
//               <MenuItem value="AUD">AUD</MenuItem>
//               <MenuItem value="CAD">CAD</MenuItem>
//             </Select>
//           </FormControl>
//         </Box>
//         <button type="button" onClick={handleReset}>
//           RESET TABLE
//         </button>
//       </>
//     )}
  
//     {schedule.length > 0 && (
//       <Box sx={{ mt: 4 }}>
//         <h4 style={{ fontFamily: 'sans-serif' }}>
//           Amortization Schedule ({currency})
//         </h4>
//         <table
//           border="1"
//           cellPadding="10"
//           style={{ borderCollapse: 'collapse', width: '90vw' }}
//         >
//           <thead style={{ fontFamily: 'sans-serif' }}>
//             <tr>
//               <th>Month</th>
//               <th>Principal</th>
//               <th>Interest</th>
//               <th>Remaining Balance</th>
//             </tr>
//           </thead>
//           <tbody>
//             {schedule.map((row) => (
//               <tr key={row.month}>
//                 <td>{row.month}</td>
//                 <td>
//                   {row.principalPaid} {currency}
//                 </td>
//                 <td>
//                   {row.interestPaid} {currency}
//                 </td>
//                 <td>
//                   {row.remainingBalance} {currency}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </Box>
//     )}
//   </>
  
  
//   );
//   }
  
//   export default Home;





// import React, { useRef, useState } from 'react';
// import {
//   Box,
//   Button,
//   FormControl,
//   Grid,
//   InputLabel,
//   MenuItem,
//   Select,
//   Stack,
//   TextField,
//   Typography,
// } from '@mui/material';

// function Home() {
//   const loanRef = useRef();
//   const interestRef = useRef();
//   const termRef = useRef();

//   const [monthlyEMI, setMonthlyEMI] = useState(null);
//   const [currency, setCurrency] = useState('USD');
//   const [schedule, setSchedule] = useState([]);

//   const handleCalculator = (e) => {
//     e.preventDefault();

//     const loan = parseFloat(loanRef.current.value);
//     const interest = parseFloat(interestRef.current.value);
//     const term = parseFloat(termRef.current.value);

//     const totalMonths = term * 12;
//     const monthlyInterestRate = interest / (12 * 100);

//     const emi =
//       (loan *
//         monthlyInterestRate *
//         Math.pow(1 + monthlyInterestRate, totalMonths)) /
//       (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);

//     setMonthlyEMI(emi.toFixed(2));

//     let balance = loan;
//     const amortizationSchedule = [];

//     for (let month = 1; month <= totalMonths; month++) {
//       const interestPaid = balance * monthlyInterestRate;
//       const principalPaid = emi - interestPaid;
//       balance -= principalPaid;

//       amortizationSchedule.push({
//         month,
//         interestPaid: interestPaid.toFixed(2),
//         principalPaid: principalPaid.toFixed(2),
//         remainingBalance: balance > 0 ? balance.toFixed(2) : '0.00',
//       });
//     }

//     setSchedule(amortizationSchedule);
//   };

//   const handleReset = () => {
//     setMonthlyEMI(null);
//     setCurrency('USD');
//     setSchedule([]);
//   };

//   return (
//     <Box sx={{ mt: 10, px: 4 }} style={{width:'90vw', marginLeft:'50px'}}>
//       <form onSubmit={handleCalculator}>
//         <Typography variant="h4" gutterBottom fontFamily="sans-serif">
//           Loan Calculator Dashboard
//         </Typography>

//         <Stack direction="row" spacing={2} flexWrap="wrap" mb={2}>
//           <TextField
//             label="Loan Amount"
//             variant="outlined"
//             placeholder="Loan Amount"
//             inputRef={loanRef}
//             defaultValue={100000}
//             required
//           />
//           <TextField
//             label="Interest Rate (%)"
//             variant="outlined"
//             placeholder="Interest Rate (%)"
//             inputRef={interestRef}
//             defaultValue={8.5}
//             required
//           />
//           <TextField
//             label="Term (Years)"
//             variant="outlined"
//             placeholder="Term (Years)"
//             inputRef={termRef}
//             defaultValue={5}
//             required
//           />
//         </Stack>

//         <Button type="submit" variant="contained" color="primary">
//           CALCULATE
//         </Button>
//       </form>

//       {monthlyEMI && (
//         <>
//           <Box sx={{ mt: 4 }}>
//             <Typography variant="h6" fontFamily="sans-serif">
//               Monthly EMI: {currency} {monthlyEMI}
//             </Typography>

//             <FormControl variant="outlined" sx={{ mt: 2, minWidth: 200 }}>
//               <InputLabel id="currency-label">Currency</InputLabel>
//               <Select
//                 labelId="currency-label"
//                 label="Currency"
//                 value={currency}
//                 onChange={(e) => setCurrency(e.target.value)}
//               >
//                 <MenuItem value="USD">USD</MenuItem>
//                 <MenuItem value="EUR">EUR</MenuItem>
//                 <MenuItem value="INR">INR</MenuItem>
//                 <MenuItem value="GBP">GBP</MenuItem>
//                 <MenuItem value="JPY">JPY</MenuItem>
//                 <MenuItem value="AUD">AUD</MenuItem>
//                 <MenuItem value="CAD">CAD</MenuItem>
//               </Select>
//             </FormControl>

//             <Button
//               onClick={handleReset}
//               variant="outlined"
//               color="secondary"
//               sx={{ mt: 2, ml: 2 }}
              
//             >
//               RESET TABLE
//             </Button>
//           </Box>
//         </>
//       )}

//       {schedule.length > 0 && (
//         <Box sx={{ mt: 4 }}>
//           <Typography variant="h6" fontFamily="sans-serif" gutterBottom>
//             Amortization Schedule ({currency})
//           </Typography>
//           <Box sx={{ overflowX: 'auto' }}>
//             <table
//               border="1"
//               cellPadding="10"
//               style={{ borderCollapse: 'collapse', width: '100%' }}
//             >
//               <thead style={{ fontFamily: 'sans-serif' }}>
//                 <tr>
//                   <th>Month</th>
//                   <th>Principal</th>
//                   <th>Interest</th>
//                   <th>Remaining Balance</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {schedule.map((row) => (
//                   <tr key={row.month}>
//                     <td>{row.month}</td>
//                     <td>
//                       {row.principalPaid} {currency}
//                     </td>
//                     <td>
//                       {row.interestPaid} {currency}
//                     </td>
//                     <td>
//                       {row.remainingBalance} {currency}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </Box>
//         </Box>
//       )}
//     </Box>
//   );
// }

// export default Home;


// import React, { useRef, useState } from 'react';
// import {
//   Box,
//   Button,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   Stack,
//   TextField,
//   Typography,
// } from '@mui/material';
// import './Home.css'; // Import the custom scrollbar styles

// function Home() {
//   const loanRef = useRef();
//   const interestRef = useRef();
//   const termRef = useRef();

//   const [monthlyEMI, setMonthlyEMI] = useState(null);
//   const [currency, setCurrency] = useState('USD');
//   const [schedule, setSchedule] = useState([]);

//   const handleCalculator = (e) => {
//     e.preventDefault();

//     const loan = parseFloat(loanRef.current.value);
//     const interest = parseFloat(interestRef.current.value);
//     const term = parseFloat(termRef.current.value);

//     const totalMonths = term * 12;
//     const monthlyInterestRate = interest / (12 * 100);

//     const emi =
//       (loan *
//         monthlyInterestRate *
//         Math.pow(1 + monthlyInterestRate, totalMonths)) /
//       (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);

//     setMonthlyEMI(emi.toFixed(2));

//     let balance = loan;
//     const amortizationSchedule = [];

//     for (let month = 1; month <= totalMonths; month++) {
//       const interestPaid = balance * monthlyInterestRate;
//       const principalPaid = emi - interestPaid;
//       balance -= principalPaid;

//       amortizationSchedule.push({
//         month,
//         interestPaid: interestPaid.toFixed(2),
//         principalPaid: principalPaid.toFixed(2),
//         remainingBalance: balance > 0 ? balance.toFixed(2) : '0.00',
//       });
//     }

//     setSchedule(amortizationSchedule);
//   };

//   const handleReset = () => {
//     setMonthlyEMI(null);
//     setCurrency('USD');
//     setSchedule([]);
//   };

//   return (
//     <Box sx={{ mt: 4, px: 4 }} style={{ width: '96vw', marginLeft: '50px'}}>
//       <form onSubmit={handleCalculator}>
//         <Typography variant="h4" gutterBottom fontFamily="sans-serif">
//           Loan Calculator Dashboard
//         </Typography>

//         <Stack direction="row" spacing={2} flexWrap="wrap" mb={2}>
//           <TextField
//             label="Loan Amount"
//             variant="outlined"
//             placeholder="Loan Amount"
//             inputRef={loanRef}
//             defaultValue={100000}
//             required
//           />
//           <TextField
//             label="Interest Rate (%)"
//             variant="outlined"
//             placeholder="Interest Rate (%)"
//             inputRef={interestRef}
//             defaultValue={8.5}
//             required
//           />
//           <TextField
//             label="Term (Years)"
//             variant="outlined"
//             placeholder="Term (Years)"
//             inputRef={termRef}
//             defaultValue={5}
//             required
//           />
//         </Stack>

//         <Button type="submit" variant="contained" color="primary">
//           CALCULATE
//         </Button>
//       </form>

//       {monthlyEMI && (
//         <>
//           <Box sx={{ mt: 4 }}>
//             <Typography variant="h6" fontFamily="sans-serif">
//               Monthly EMI: {currency} {monthlyEMI}
//             </Typography>

//             <FormControl variant="outlined" sx={{ mt: 2, minWidth: 200 }}>
//               <InputLabel id="currency-label">Currency</InputLabel>
//               <Select
//                 labelId="currency-label"
//                 label="Currency"
//                 value={currency}
//                 onChange={(e) => setCurrency(e.target.value)}
//               >
//                 <MenuItem value="USD">USD</MenuItem>
//                 <MenuItem value="EUR">EUR</MenuItem>
//                 <MenuItem value="INR">INR</MenuItem>
//                 <MenuItem value="GBP">GBP</MenuItem>
//                 <MenuItem value="JPY">JPY</MenuItem>
//                 <MenuItem value="AUD">AUD</MenuItem>
//                 <MenuItem value="CAD">CAD</MenuItem>
//               </Select>
//             </FormControl>

//             <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
//               <Button
//                 onClick={handleReset}
//                 variant="outlined"
//                 color="secondary"
//               >
//                 RESET TABLE
//               </Button>
//             </Box>
//           </Box>
//         </>
//       )}

//       {schedule.length > 0 && (
//         <Box sx={{ mt: 4 }}>
//           <Typography variant="h6" fontFamily="sans-serif" gutterBottom>
//             Amortization Schedule ({currency})
//           </Typography>
//           <Box
//             className="scroll-container"
//             sx={{
//               overflowY: 'auto',
//               maxHeight: '400px',
//               border: '1px solid #ccc',
//               mt: 2,
//             }}
//           >
//             <table
//               border="0"
//               cellPadding="10"
//               style={{ borderCollapse: 'collapse', width: '100%' }}
//             >
//               <thead style={{ fontFamily: 'sans-serif' }}>
//                 <tr>
//                   <th>Month</th>
//                   <th>Principal</th>
//                   <th>Interest</th>
//                   <th>Remaining Balance</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {schedule.map((row) => (
//                   <tr key={row.month}>
//                     <td>{row.month}</td>
//                     <td>{row.principalPaid} {currency}</td>
//                     <td>{row.interestPaid} {currency}</td>
//                     <td>{row.remainingBalance} {currency}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </Box>
//         </Box>
//       )}
//     </Box>
//   );
// }

// export default Home;




import React, { useRef, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './Home.css'; // Import the custom scrollbar styles

function Home() {
  const theme = useTheme(); // Get the current theme
  const loanRef = useRef();
  const interestRef = useRef();
  const termRef = useRef();

  const [monthlyEMI, setMonthlyEMI] = useState(null);
  const [currency, setCurrency] = useState('USD');
  const [schedule, setSchedule] = useState([]);

  const handleCalculator = (e) => {
    e.preventDefault();

    const loan = parseFloat(loanRef.current.value);
    const interest = parseFloat(interestRef.current.value);
    const term = parseFloat(termRef.current.value);

    const totalMonths = term * 12;
    const monthlyInterestRate = interest / (12 * 100);

    const emi =
      (loan *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, totalMonths)) /
      (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);

    setMonthlyEMI(emi.toFixed(2));

    let balance = loan;
    const amortizationSchedule = [];

    for (let month = 1; month <= totalMonths; month++) {
      const interestPaid = balance * monthlyInterestRate;
      const principalPaid = emi - interestPaid;
      balance -= principalPaid;

      amortizationSchedule.push({
        month,
        interestPaid: interestPaid.toFixed(2),
        principalPaid: principalPaid.toFixed(2),
        remainingBalance: balance > 0 ? balance.toFixed(2) : '0.00',
      });
    }

    setSchedule(amortizationSchedule);
  };

  const handleReset = () => {
    setMonthlyEMI(null);
    setCurrency('USD');
    setSchedule([]);
  };

  // Style object to make TextFields white in dark mode
  const inputStyle = {
    backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : 'inherit',
  };

  return (
    <Box sx={{ mt: 4, px: 4 }} style={{ width: '96vw', marginLeft: '50px' }}>
      <form onSubmit={handleCalculator}>
        <Typography variant="h4" gutterBottom fontFamily="sans-serif">
          Loan Calculator Dashboard
        </Typography>

        <Stack direction="row" spacing={2} flexWrap="wrap" mb={2}>
          <TextField
            label="Loan Amount"
            variant="outlined"
            placeholder="Loan Amount"
            inputRef={loanRef}
            defaultValue={100000}
            required
            
          />
          <TextField
            label="Interest Rate (%)"
            variant="outlined"
            placeholder="Interest Rate (%)"
            inputRef={interestRef}
            defaultValue={8.5}
            required
            
          />
          <TextField
            label="Term (Years)"
            variant="outlined"
            placeholder="Term (Years)"
            inputRef={termRef}
            defaultValue={5}
            required
            
          />
        </Stack>

        <Button type="submit" variant="contained" color="primary">
          CALCULATE
        </Button>
      </form>

      {monthlyEMI && (
        <>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" fontFamily="sans-serif">
              Monthly EMI: {currency} {monthlyEMI}
            </Typography>

            <FormControl variant="outlined" sx={{ mt: 2, minWidth: 200 }}>
              <InputLabel id="currency-label">Currency</InputLabel>
              <Select
                labelId="currency-label"
                label="Currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="EUR">EUR</MenuItem>
                <MenuItem value="INR">INR</MenuItem>
                <MenuItem value="GBP">GBP</MenuItem>
                <MenuItem value="JPY">JPY</MenuItem>
                <MenuItem value="AUD">AUD</MenuItem>
                <MenuItem value="CAD">CAD</MenuItem>
              </Select>
            </FormControl>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
              <Button
                onClick={handleReset}
                variant="outlined"
                color="secondary"
              >
                RESET TABLE
              </Button>
            </Box>
          </Box>
        </>
      )}

      {schedule.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontFamily="sans-serif" gutterBottom>
            Amortization Schedule ({currency})
          </Typography>
          <Box
            className="scroll-container"
            sx={{
              overflowY: 'auto',
              maxHeight: '400px',
              border: '1px solid #ccc',
              mt: 2,
            }}
          >
            <table
              border="0"
              cellPadding="10"
              style={{ borderCollapse: 'collapse', width: '100%' }}
            >
              <thead style={{ fontFamily: 'sans-serif' }}>
                <tr>
                  <th>Month</th>
                  <th>Principal</th>
                  <th>Interest</th>
                  <th>Remaining Balance</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row) => (
                  <tr key={row.month}>
                    <td>{row.month}</td>
                    <td>{row.principalPaid} {currency}</td>
                    <td>{row.interestPaid} {currency}</td>
                    <td>{row.remainingBalance} {currency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Home;
