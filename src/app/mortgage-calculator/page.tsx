
"use client";

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Label} from "@/components/ui/label"

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMortgage = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    const M = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setMonthlyPayment(M);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Mortgage Calculator</CardTitle>
          <CardDescription>Calculate your monthly mortgage payment.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="loanAmount">Loan Amount</Label>
            <Input
              type="number"
              id="loanAmount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="interestRate">Interest Rate (%)</Label>
            <Input
              type="number"
              id="interestRate"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="loanTerm">Loan Term (Years)</Label>
            <Input
              type="number"
              id="loanTerm"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
            />
          </div>
          <Button onClick={calculateMortgage}>Calculate</Button>
          <div>
            <p>Monthly Payment: {monthlyPayment.toFixed(2)}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
