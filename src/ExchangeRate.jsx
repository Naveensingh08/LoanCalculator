// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ExchangeRate = () => {
//   // State to store the exchange rates
//   const [exchangeRates, setExchangeRates] = useState({});
//   const [loading, setLoading] = useState(true);  // State for loading
//   const [error, setError] = useState(null);      // State for error

//   // Fetch exchange rates when the component mounts
//   useEffect(() => {
//     const fetchExchangeRates = async () => {
//       const URL = `https://v6.exchangerate-api.com/v6/da84487cc014251f824ffdcb/latest/USD`;
      
//       try {
//         const response = await axios.get(URL);
//         setExchangeRates(response.data.conversion_rates);  // Store the data in state
//         setLoading(false);  // Set loading to false when done fetching
//       } catch (err) {
//         setError("Error fetching exchange rates.");
//         setLoading(false);
//       }
//     };

//     fetchExchangeRates();
//   }, []);  // Empty dependency array means this runs only once on component mount

//   // Loading, error, or data display
//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h1>Exchange Rates</h1>
//       <ul>
//         {Object.keys(exchangeRates).map((currency) => (
//           <li key={currency}>
//             {currency}: {exchangeRates[currency]}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ExchangeRate;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from "@mui/material";

// const ExchangeRate = () => {
  
//   const [exchangeRates, setExchangeRates] = useState({});
//   const [loading, setLoading] = useState(true); 
//   const [error, setError] = useState(null);      

//   useEffect(() => {
//     const fetchExchangeRates = async () => {
//       const URL = `https://v6.exchangerate-api.com/v6/da84487cc014251f824ffdcb/latest/USD`;

//       try {
//         const response = await axios.get(URL);
//         setExchangeRates(response.data.conversion_rates);  
//         setLoading(false);  
//       } catch (err) {
//         setError("Error fetching exchange rates.");
//         setLoading(false);
//       }
//     };

//     fetchExchangeRates();
//   }, []);  
//   if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '150px', width: '100vw' }}><CircularProgress /></Box>;
//   if (error) return <Box sx={{ textAlign: 'center', marginTop: '150px', width: '100vw' }}><Typography color="error">{error}</Typography></Box>;

//   return (
//     <Box sx={{ mt:'5', padding: 3, width: '100vw' }}>
//       <Typography variant="h4" gutterBottom>Exchange Rates </Typography>

  
//       <TableContainer component={Paper}>
//         <Table sx={{ width: '100%' }} aria-label="exchange rates table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Currency</TableCell>
//               <TableCell align="right">Rate</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {Object.keys(exchangeRates).map((currency) => (
//               <TableRow key={currency}>
//                 <TableCell component="th" scope="row">{currency}</TableCell>
//                 <TableCell align="right">{exchangeRates[currency].toFixed(4)}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default ExchangeRate;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from "@mui/material";

const ExchangeRate = () => {

const [exchangeRates, setExchangeRates] = useState({});
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
const fetchExchangeRates = async () => {
const URL = `https://v6.exchangerate-api.com/v6/da84487cc014251f824ffdcb/latest/USD`;


  try {
    const response = await axios.get(URL);
    setExchangeRates(response.data.conversion_rates);  
    setLoading(false);  
  } catch (err) {
    setError("Error fetching exchange rates.");
    setLoading(false);
  }
};

fetchExchangeRates();


}, []);
if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '150px', width: '100vw' }}><CircularProgress /></Box>;
if (error) return <Box sx={{ textAlign: 'center', marginTop: '150px', width: '100vw' }}><Typography color="error">{error}</Typography></Box>;

return (
<Box sx={{ mt:'5', padding: 3, width: '100vw' }}> <Typography variant="h4" gutterBottom>Exchange Rates </Typography>


  <TableContainer component={Paper}>
    <Table sx={{ width: '100%' }} aria-label="exchange rates table">
      <TableHead>
        <TableRow>
          <TableCell>Currency</TableCell>
          <TableCell align="right">Rate</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.keys(exchangeRates).map((currency) => (
          <TableRow key={currency}>
            <TableCell component="th" scope="row">{currency}</TableCell>
            <TableCell align="right">{exchangeRates[currency].toFixed(4)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</Box>


);
};

export default ExchangeRate;
