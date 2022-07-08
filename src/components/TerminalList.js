import { Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
export default function Transactions() {
  const [apiKey, setApiKey] = useState("");
  const url =
    "https://prod.emea.api.fiservapps.com/sandbox/exp/v1/transactions";
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: { Accept: "application/json", "Api-Key": apiKey },
    };
    fetch(url, options)
      .then((response) => {
        if(response.ok) {
            return response.json()
        }
        else {
            return Promise.reject(response.json());
        }
        })
      .then((response) => setTransactions(response))
      .catch((err) => console.error(err));
  }, [apiKey, url]);
  return (
    <React.Fragment>
        <TextField
         id="apiKey"
         name="apiKey"
         type="text"
         value={apiKey}
         label="Api Key"
         onChange={(e) => setApiKey(e.target.value)}
          />
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>authorised</TableCell>
                <TableCell>status</TableCell>
                <TableCell>channel</TableCell>
                <TableCell>payment category</TableCell>
                <TableCell>payment brand</TableCell>
                <TableCell>amount</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {transactions.map((transaction) => (
                <TableRow>
                <TableCell>{transaction.authorised}</TableCell>
                <TableCell>{transaction.status}</TableCell>
                <TableCell>{transaction.channel}</TableCell>
                <TableCell>{transaction.paymentInstrument.category}</TableCell>
                <TableCell>{transaction.paymentInstrument.brand}</TableCell>
                <TableCell>{transaction.financial.amounts.transacted}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
    </React.Fragment>
  );
}