
'use client';

import { UserDashboardLayout } from "@/components/layout/user-dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
    Landmark, 
    Star, 
    Repeat, 
    FileText, 
    TrendingUp, 
    AreaChart, 
    Gem, 
    Shield, 
    ShieldCheck,
    ArrowRight
} from "lucide-react";
import Link from "next/link";

const investmentOptions = [
  {
    href: "#",
    icon: Landmark,
    label: "Insta Fixed Deposits",
    description: "Secure, high-yield fixed deposits.",
  },
  {
    href: "#",
    icon: Star,
    label: "MMWish",
    description: "Flexible goal-based savings.",
  },
  {
    href: "#",
    icon: Repeat,
    label: "RD",
    description: "Recurring deposits for regular savings.",
  },
  {
    href: "#",
    icon: FileText,
    label: "Demat",
    description: "Hold your shares and securities electronically.",
  },
  {
    href: "#",
    icon: TrendingUp,
    label: "Mutual Funds",
    description: "Diversify your portfolio with mutual funds.",
  },
  {
    href: "#",
    icon: AreaChart,
    label: "Stocks/IPO",
    description: "Invest directly in the stock market.",
  },
  {
    href: "#",
    icon: Gem,
    label: "Gold Bonds",
    description: "Invest in digital gold.",
  },
  {
    href: "#",
    icon: Shield,
    label: "PPF",
    description: "Public Provident Fund for long-term savings.",
  },
  {
    href: "#",
    icon: ShieldCheck,
    label: "NPS",
    description: "National Pension System for retirement planning.",
  },
];

export default function InvestmentsPage() {
  return (
    <UserDashboardLayout>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Investments</CardTitle>
          <CardDescription>Choose from a wide range of investment products to grow your wealth.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {investmentOptions.map((option) => (
              <Link href={option.href} key={option.label}>
                <div className="flex items-start gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50 h-full">
                  <option.icon className="h-8 w-8 text-primary mt-1" />
                  <div className="flex-1">
                    <p className="font-semibold">{option.label}</p>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                   <ArrowRight className="h-5 w-5 text-muted-foreground self-center" />
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </UserDashboardLayout>
  );
}
