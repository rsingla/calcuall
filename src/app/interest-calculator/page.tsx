"use client";

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Label} from "@/components/ui/label"
import Link from 'next/link';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"

export default function InterestCalculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [simpleInterest, setSimpleInterest] = useState(0);
  const [compoundInterest, setCompoundInterest] = useState(0);

  const calculateInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);

    const si = p * r * t;
    setSimpleInterest(si);

    const ci = p * Math.pow(1 + r, t) - p;
    setCompoundInterest(ci);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <Accordion type="single" collapsible className="w-full max-w-md mb-4">
            <AccordionItem value="navigation">
                <AccordionTrigger>Navigation</AccordionTrigger>
                <AccordionContent>
                    <div className="flex flex-wrap gap-2">
                        <Button asChild>
                            <Link href="/">Home</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/simple-calculator">Simple Calculator</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/mortgage-calculator">Mortgage Calculator</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/bmi-calculator">BMI Calculator</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/conversion-calculator">Conversion Calculator</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/scientific-calculator">Scientific Calculator</Link>
                        </Button>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Interest Calculator</CardTitle>
          <CardDescription>Calculate simple and compound interest.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="principal">Principal Amount</Label>
            <Input
              type="number"
              id="principal"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="rate">Interest Rate (%)</Label>
            <Input
              type="number"
              id="rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="time">Time Period (Years)</Label>
            <Input
              type="number"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <Button onClick={calculateInterest}>Calculate</Button>
          <div>
            <p>Simple Interest: {simpleInterest.toFixed(2)}</p>
            <p>Compound Interest: {compoundInterest.toFixed(2)}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

