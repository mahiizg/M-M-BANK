
'use client';

import { UserDashboardLayout } from "@/components/layout/user-dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { accounts } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const fdOptions = [
    "Standard FD",
    "Credit Card FD",
    "Linked FD",
    "Tax Saver FD"
];

const rdOptions = [
    "Standard RD"
];

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    }).format(amount);
};

const OptionCard = ({ name }: { name: string }) => (
    <div className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50">
        <p className="font-semibold">{name}</p>
        <Button variant="outline" size="sm">
            Explore
            <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
    </div>
);

export default function AccountsPage() {
    const savingsAccount = accounts.find(acc => acc.type === 'Savings');

    return (
        <UserDashboardLayout>
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Accounts & Deposits</CardTitle>
                    <CardDescription>View your account balance and explore deposit options.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <p className="text-sm text-muted-foreground">Savings Account Balance</p>
                        <p className="text-3xl font-bold">{savingsAccount ? formatCurrency(savingsAccount.balance) : 'N/A'}</p>
                    </div>

                    <Separator />

                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Explore FD options</h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {fdOptions.map(option => <OptionCard key={option} name={option} />)}
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Explore RD options</h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {rdOptions.map(option => <OptionCard key={option} name={option} />)}
                        </div>
                    </div>

                </CardContent>
            </Card>
        </UserDashboardLayout>
    );
}
