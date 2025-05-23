"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Calculator,
  BarChart3,
  Home,
  Percent,
  Activity,
  Scale,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";

const navigation = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Simple Calculator",
    href: "/simple-calculator",
    icon: Calculator,
  },
  {
    title: "Interest Calculator",
    href: "/interest-calculator",
    icon: BarChart3,
  },
  {
    title: "Mortgage Calculator",
    href: "/mortgage-calculator",
    icon: Activity,
  },
  {
    title: "BMI Calculator",
    href: "/bmi-calculator",
    icon: Scale,
  },
  {
    title: "Conversion Calculator",
    href: "/conversion-calculator",
    icon: Percent,
  },
  {
    title: "Scientific Calculator",
    href: "/scientific-calculator",
    icon: Calculator,
  },
];

function CalculatorCard({ title, href, icon: Icon }: CalculatorCardProps) {
  return (
    <Card className="h-48 flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Icon className="mr-2 h-4 w-4" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Button asChild className="w-full">
          <Link href={href}>Go to {title}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

interface CalculatorCardProps {
  title: string;
  href: string;
  icon: any;
}

export default function HomePage() {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h2 className="font-semibold text-lg">Calc-U-All</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuButton key={item.href} asChild>
                  <Link href={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <p className="text-center text-xs text-muted-foreground">
            Built with Next.js &amp; Shadcn UI
          </p>
        </SidebarFooter>
      </Sidebar>
      <main className="flex flex-1 flex-col p-4">
        <div className="md:hidden flex items-center justify-between mb-4">
          <SidebarTrigger className="mr-4" />
        </div>
        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3">
            <TabsTrigger value="calculator">Calculators</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
          </TabsList>
          <TabsContent value="calculator" className="mt-6">
            <div className="grid gap-4 md:grid-cols-3">
              <CalculatorCard
                title="Simple Calculator"
                href="/simple-calculator"
                icon={Calculator}
              />
              <CalculatorCard
                title="Interest Calculator"
                href="/interest-calculator"
                icon={BarChart3}
              />
              <CalculatorCard
                title="Mortgage Calculator"
                href="/mortgage-calculator"
                icon={Activity}
              />
              <CalculatorCard
                title="BMI Calculator"
                href="/bmi-calculator"
                icon={Scale}
              />
              <CalculatorCard
                title="Conversion Calculator"
                href="/conversion-calculator"
                icon={Percent}
              />
              <CalculatorCard
                title="Scientific Calculator"
                href="/scientific-calculator"
                icon={Calculator}
              />
            </div>
          </TabsContent>
          <TabsContent value="contact" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  If you have any questions or feedback, please feel free to
                  contact us.
                </p>
                <Button variant="link">
                  <Link href="mailto:support@example.com">
                    support@example.com
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </SidebarProvider>
  );
}
