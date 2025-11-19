import { UserDashboardLayout } from "@/components/layout/user-dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const investmentOptions = [
  {
    href: "#",
    icon: Landmark,
    label: "Fixed Deposit (FD)",
    description: "Earn guaranteed returns on your savings.",
  },
  {
    href: "#",
    icon: TrendingUp,
    label: "Systematic Investment Plan (SIP)",
    description: "Invest in mutual funds regularly.",
  },
];

export default function InvestmentsPage() {
  return (
    <UserDashboardLayout>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Investments & Insurance</CardTitle>
          <CardDescription>Grow your wealth securely.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {investmentOptions.map((option) => (
              <Link href={option.href} key={option.label}>
                <div className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50">
                  <div className="flex items-center gap-4">
                    <option.icon className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-semibold">{option.label}</p>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </div>
                  </div>
                  <Button variant="outline">Invest Now</Button>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </UserDashboardLayout>
  );
}