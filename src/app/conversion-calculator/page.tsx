"use client";

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Label} from "@/components/ui/label"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import Link from 'next/link';

export default function ConversionCalculator() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState(0);
  const [fromUnit, setFromUnit] = useState('miles');
  const [toUnit, setToUnit] = useState('kilometers');

  const convertLength = () => {
    const value = parseFloat(inputValue);
    let result = 0;

    if (fromUnit === 'miles' && toUnit === 'kilometers') {
      result = value * 1.60934;
    } else if (fromUnit === 'kilometers' && toUnit === 'miles') {
      result = value / 1.60934;
    } else if (fromUnit === 'miles' && toUnit === 'miles') {
      result = value;
    } else if (fromUnit === 'kilometers' && toUnit === 'kilometers') {
      result = value;
    }

    setOutputValue(result);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex justify-between w-full max-w-md mb-4">
            <Button asChild>
                <Link href="/">Home</Link>
            </Button>
            <Button asChild>
                <Link href="/simple-calculator">Simple Calculator</Link>
            </Button>
            <Button asChild>
                <Link href="/interest-calculator">Interest Calculator</Link>
            </Button>
            <Button asChild>
                <Link href="/mortgage-calculator">Mortgage Calculator</Link>
            </Button>
            <Button asChild>
                <Link href="/bmi-calculator">BMI Calculator</Link>
            </Button>
            <Button asChild>
                <Link href="/scientific-calculator">Scientific Calculator</Link>
            </Button>
        </div>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Conversion Calculator</CardTitle>
          <CardDescription>Convert between different units.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="inputValue">Value</Label>
            <Input
              type="number"
              id="inputValue"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <div className="grid gap-2 flex-1">
              <Label>From</Label>
              <Select onValueChange={(value) => setFromUnit(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="miles">Miles</SelectItem>
                  <SelectItem value="kilometers">Kilometers</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2 flex-1">
              <Label>To</Label>
              <Select onValueChange={(value) => setToUnit(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="miles">Miles</SelectItem>
                  <SelectItem value="kilometers">Kilometers</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button onClick={convertLength}>Convert</Button>

          <div>
            <p>Result: {outputValue.toFixed(2)}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
