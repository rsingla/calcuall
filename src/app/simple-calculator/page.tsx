"use client";

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {useToast} from "@/hooks/use-toast"
import Link from 'next/link';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"

export default function SimpleCalculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const {toast} = useToast()

  const handleNumberClick = (number: string) => {
    setDisplayValue((prev) => (prev === '0' ? number : prev + number));
  };

  const handleOperatorClick = (operator: string) => {
    setDisplayValue((prev) => prev + operator);
  };

  const handleClearClick = () => {
    setDisplayValue('0');
  };

  const handleCalculateClick = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid Calculation"
      })
      setDisplayValue('0');
    }
  };

  const handlePercentageClick = () => {
    try {
      setDisplayValue((eval(displayValue) / 100).toString());
    } catch (error) {
       toast({
        title: "Error",
        description: "Invalid Calculation"
      })
      setDisplayValue('0');
    }
  };

  const handleSqrtClick = () => {
    try {
      setDisplayValue(Math.sqrt(eval(displayValue)).toString());
    } catch (error) {
       toast({
        title: "Error",
        description: "Invalid Calculation"
      })
      setDisplayValue('0');
    }
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
                            <Link href="/interest-calculator">Interest Calculator</Link>
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
          <CardTitle>Simple Calculator</CardTitle>
          <CardDescription>Perform basic arithmetic operations.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Input
            type="text"
            value={displayValue}
            readOnly
            className="text-right text-2xl"
          />
          <div className="grid grid-cols-4 gap-2">
            <Button onClick={handleClearClick}>Clear</Button>
            <Button onClick={() => handleOperatorClick('/')}>/</Button>
            <Button onClick={() => handleOperatorClick('*')}>*</Button>
            <Button onClick={() => handleOperatorClick('-')}>-</Button>
            <Button onClick={() => handleNumberClick('7')}>7</Button>
            <Button onClick={() => handleNumberClick('8')}>8</Button>
            <Button onClick={() => handleNumberClick('9')}>9</Button>
            <Button onClick={() => handleOperatorClick('+')}>+</Button>
            <Button onClick={() => handleNumberClick('4')}>4</Button>
            <Button onClick={() => handleNumberClick('5')}>5</Button>
            <Button onClick={() => handleNumberClick('6')}>6</Button>
            <Button onClick={handlePercentageClick}>%</Button>
            <Button onClick={() => handleNumberClick('1')}>1</Button>
            <Button onClick={() => handleNumberClick('2')}>2</Button>
            <Button onClick={() => handleNumberClick('3')}>3</Button>
            <Button onClick={handleSqrtClick}>√</Button>
            <Button onClick={() => handleNumberClick('0')}>0</Button>
            <Button onClick={() => handleNumberClick('.')}>.</Button>
            <Button onClick={handleCalculateClick}>=</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

