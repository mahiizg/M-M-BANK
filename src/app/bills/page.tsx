
'use client';

import { UserDashboardLayout } from "@/components/layout/user-dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Smartphone, Zap, Flame, Droplets, CreditCard, Car, ShieldCheck, Youtube, Satellite, Building } from "lucide-react";
import Link from "next/link";

const billOptions = [
    {
        href: "#",
        icon: CreditCard,
        label: "ICICI Bank Credit Card",
        description: "Pay your ICICI Bank credit card bill.",
    },
    {
        href: "#",
        icon: CreditCard,
        label: "Other Bank Credit Card",
        description: "Pay any other bank's credit card bill.",
    },
    {
        href: "/recharge",
        icon: Smartphone,
        label: "Mobile Prepaid",
        description: "Recharge your prepaid mobile number.",
    },
    {
        href: "#",
        icon: Smartphone,
        label: "Mobile Postpaid",
        description: "Pay your postpaid mobile bill.",
    },
    {
        href: "/bills/electricity",
        icon: Zap,
        label: "Electricity",
        description: "Pay your electricity bill.",
    },
    {
        href: "#",
        icon: Car,
        label: "FASTag",
        description: "Recharge your FASTag for tolls.",
    },
    {
        href: "#",
        icon: ShieldCheck,
        label: "LIC/Insurance",
        description: "Pay your insurance premiums.",
    },
    {
        href: "#",
        icon: Youtube,
        label: "Subscriptions",
        description: "Manage and pay for your subscriptions.",
    },
    {
        href: "#",
        icon: Satellite,
        label: "DTH",
        description: "Recharge your DTH connection.",
    },
    {
        href: "/bills/lpg",
        icon: Flame,
        label: "Piped Gas",
        description: "Pay your piped gas bill.",
    },
    {
        href: "#",
        icon: Building,
        label: "Municipal Tax",
        description: "Pay your property or municipal tax.",
    },
];

export default function BillPaymentPage() {
  return (
    <UserDashboardLayout>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Bill Payment</CardTitle>
          <CardDescription>Select a category to pay your bills.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {billOptions.map((option) => (
                <Link href={option.href} key={option.label}>
                    <div
                    className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50 cursor-pointer h-full"
                    >
                        <div className="flex items-center gap-4">
                            <option.icon className="h-8 w-8 text-primary" />
                            <div>
                                <p className="font-semibold">{option.label}</p>
                                <p className="text-sm text-muted-foreground">{option.description}</p>
                            </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                </Link>
              ))}
            </div>
        </CardContent>
      </Card>
    </UserDashboardLayout>
  );
}
