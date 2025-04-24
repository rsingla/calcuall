"use client";

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Label} from "@/components/ui/label"
import Link from 'next/link';

export default function BmiCalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(0);
  const [category, setCategory] = useState('');

  const calculateBmi = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);

    const bmiValue = w / (h * h);
    setBmi(bmiValue);

    let category = '';
    if (bmiValue < 18.5) {
      category = 'Underweight';
    } else if (bmiValue < 25) {
      category = 'Normal weight';
    } else if (bmiValue < 30) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }
    setCategory(category);
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
                <Link href="/conversion-calculator">Conversion Calculator</Link>
            </Button>
            <Button asChild>
                <Link href="/scientific-calculator">Scientific Calculator</Link>
            </Button>
        </div>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>BMI Calculator</CardTitle>
          <CardDescription>Calculate your Body Mass Index.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="height">Height (cm)</Label>
            <Input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <Button onClick={calculateBmi}>Calculate</Button>
          <div>
            <p>BMI: {bmi.toFixed(2)}</p>
            <p>Category: {category}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
