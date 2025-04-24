"use client";

import {useState, useEffect} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Label} from "@/components/ui/label"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import Link from 'next/link';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"
import {getCurrencyRates} from "@/services/currency-converter";

type ConversionType =
  | 'length'
  | 'mass'
  | 'temperature'
  | 'volume'
  | 'speed'
  | 'area'
  | 'data'
  | 'time'
  | 'currency';

const conversionOptions = {
  length: [
    {value: 'miles_to_km', label: 'Miles to Kilometers'},
    {value: 'km_to_miles', label: 'Kilometers to Miles'},
    {value: 'feet_to_meters', label: 'Feet to Meters'},
    {value: 'meters_to_feet', label: 'Meters to Feet'},
  ],
  mass: [
    {value: 'pounds_to_kg', label: 'Pounds to Kilograms'},
    {value: 'kg_to_pounds', label: 'Kilograms to Pounds'},
    {value: 'ounces_to_grams', label: 'Ounces to Grams'},
    {value: 'grams_to_ounces', label: 'Grams to Ounces'},
  ],
  temperature: [
    {value: 'celsius_to_fahrenheit', label: 'Celsius to Fahrenheit'},
    {value: 'fahrenheit_to_celsius', label: 'Fahrenheit to Celsius'},
  ],
  volume: [
    {value: 'gallons_to_liters', label: 'Gallons to Liters'},
    {value: 'liters_to_gallons', label: 'Liters to Gallons'},
    {value: 'cups_to_ml', label: 'Cups to Milliliters'},
    {value: 'ml_to_cups', label: 'Milliliters to Cups'},
  ],
  speed: [
    {value: 'mph_to_kmh', label: 'MPH to KM/H'},
    {value: 'kmh_to_mph', label: 'KM/H to MPH'},
  ],
  area: [
    {value: 'sqft_to_sqm', label: 'Square Feet to Square Meters'},
    {value: 'sqm_to_sqft', label: 'Square Meters to Square Feet'},
    {value: 'acres_to_hectares', label: 'Acres to Hectares'},
    {value: 'hectares_to_acres', label: 'Hectares to Acres'},
  ],
  data: [
    {value: 'mb_to_gb', label: 'Megabytes to Gigabytes'},
    {value: 'gb_to_mb', label: 'Gigabytes to Megabytes'},
  ],
  time: [
    {value: 'hours_to_minutes', label: 'Hours to Minutes'},
    {value: 'minutes_to_hours', label: 'Minutes to Hours'},
  ],
  currency: [
    {value: 'usd_to_eur', label: 'USD to EUR'},
    {value: 'eur_to_usd', label: 'EUR to USD'},
  ],
};


export default function ConversionCalculator() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState(0);
  const [conversionType, setConversionType] = useState<ConversionType>('length');
  const [selectedConversion, setSelectedConversion] = useState(conversionOptions.length[0].value);
  const [currencyRates, setCurrencyRates] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      const rates = await getCurrencyRates('USD');
      setCurrencyRates(rates.rates);
    };

    if (conversionType === 'currency') {
      fetchCurrencyRates();
    }
  }, [conversionType]);

  const convert = () => {
    const value = parseFloat(inputValue);
    let result = 0;

    switch (selectedConversion) {
      // Length
      case 'miles_to_km':
        result = value * 1.60934;
        break;
      case 'km_to_miles':
        result = value / 1.60934;
        break;
      case 'feet_to_meters':
        result = value * 0.3048;
        break;
      case 'meters_to_feet':
        result = value / 0.3048;
        break;

      // Mass
      case 'pounds_to_kg':
        result = value * 0.453592;
        break;
      case 'kg_to_pounds':
        result = value / 0.453592;
        break;
      case 'ounces_to_grams':
        result = value * 28.3495;
        break;
      case 'grams_to_ounces':
        result = value / 28.3495;
        break;

      // Temperature
      case 'celsius_to_fahrenheit':
        result = (value * 9 / 5) + 32;
        break;
      case 'fahrenheit_to_celsius':
        result = (value - 32) * 5 / 9;
        break;

      // Volume
      case 'gallons_to_liters':
        result = value * 3.78541;
        break;
      case 'liters_to_gallons':
        result = value / 3.78541;
        break;
      case 'cups_to_ml':
        result = value * 236.588;
        break;
      case 'ml_to_cups':
        result = value / 236.588;
        break;

      // Speed
      case 'mph_to_kmh':
        result = value * 1.60934;
        break;
      case 'kmh_to_mph':
        result = value / 1.60934;
        break;

      // Area
      case 'sqft_to_sqm':
        result = value * 0.092903;
        break;
      case 'sqm_to_sqft':
        result = value / 0.092903;
        break;
      case 'acres_to_hectares':
        result = value * 0.404686;
        break;
      case 'hectares_to_acres':
        result = value / 0.404686;
        break;

      // Data
      case 'mb_to_gb':
        result = value / 1024;
        break;
      case 'gb_to_mb':
        result = value * 1024;
        break;

      // Time
      case 'hours_to_minutes':
        result = value * 60;
        break;
      case 'minutes_to_hours':
        result = value / 60;
        break;

      // Currency
      case 'usd_to_eur':
        result = value * (currencyRates['EUR'] || 0.85); // Use a default rate if not loaded
        break;
      case 'eur_to_usd':
        result = value / (currencyRates['EUR'] || 0.85);
        break;

      default:
        result = 0;
        break;
    }

    setOutputValue(result);
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
                </AccordionContent>
            </AccordionItem>
        </Accordion>
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

          <div className="grid gap-2">
            <Label>Conversion Type</Label>
            <Select onValueChange={(value) => {
              setConversionType(value as ConversionType);
              setSelectedConversion(conversionOptions[value as ConversionType][0].value);
            }}>
              <SelectTrigger>
                <SelectValue placeholder="Select Conversion Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="length">Length</SelectItem>
                <SelectItem value="mass">Mass/Weight</SelectItem>
                <SelectItem value="temperature">Temperature</SelectItem>
                <SelectItem value="volume">Volume</SelectItem>
                <SelectItem value="speed">Speed</SelectItem>
                <SelectItem value="area">Area</SelectItem>
                <SelectItem value="data">Data Storage</SelectItem>
                <SelectItem value="time">Time</SelectItem>
                <SelectItem value="currency">Currency</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label>Conversion</Label>
            <Select onValueChange={(value) => setSelectedConversion(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Conversion" />
              </SelectTrigger>
              <SelectContent>
                {conversionOptions[conversionType]?.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button onClick={convert}>Convert</Button>

          <div>
            <p>Result: {outputValue.toFixed(2)}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
