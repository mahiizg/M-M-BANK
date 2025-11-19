
'use client';

import { UserDashboardLayout } from "@/components/layout/user-dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Smartphone, Zap, Flame, Droplets } from "lucide-react";
import Link from "next/link";

const billOptions = [
  {
    href: "/recharge",
    icon: Smartphone,
    label: "Mobile Recharge",
    description: "Recharge your prepaid mobile number.",
  },
  {
    href: "/bills/electricity",
    icon: Zap,
    label: "Electricity Bill",
    description: "Pay your electricity bill.",
  },
  {
    href: "/bills/lpg",
    icon: Flame,
    label: "LPG Gas Cylinder",
    description: "Book and pay for your gas cylinder.",
  },
  {
    href: "#",
    icon: Droplets,
    label: "Water Bill",
    description: "Pay your water bill (coming soon).",
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
            <div className="space-y-4">
              {billOptions.map((option) => (
                <Link href={option.href} key={option.label}>
                    <div
                    className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50 cursor-pointer"
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
