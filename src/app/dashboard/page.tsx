import {
  ArrowRightLeft,
  CircleDollarSign,
  History,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserDashboardLayout } from "@/components/layout/user-dashboard-layout";
import { accounts, transactions, user } from "@/lib/data";
import { DebitCard } from "@/components/debit-card";

export default function DashboardPage() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  };

  return (
    <UserDashboardLayout>
      <div className="grid gap-8">
        <div className="grid gap-8 md:grid-cols-2">
          {accounts.map((account) => (
            <DebitCard key={account.id} account={account} />
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="font-headline">UPI &amp; QR Code</CardTitle>
              <CardDescription>
                Receive payments instantly using your UPI details.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4 text-center">
               <div className="rounded-lg border bg-background p-4">
                 <Image
                    src={user.qrCodeUrl}
                    alt="UPI QR Code"
                    width={180}
                    height={180}
                    className="rounded-md"
                  />
               </div>
               <div>
                  <p className="text-sm text-muted-foreground">Your UPI ID</p>
                  <p className="font-mono font-medium">{user.upiId}</p>
               </div>
                <Button variant="outline" className="w-full">Copy UPI ID</Button>
            </CardContent>
          </Card>

           <Card className="shadow-md lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="font-headline">Account Statement</CardTitle>
                <CardDescription>
                  A quick look at your recent account activity.
                </CardDescription>
              </div>
               <Button asChild variant="outline" size="sm">
                <Link href="/history">View All</Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Description</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Amount (₹)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.slice(0, 5).map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>
                        <div className="font-medium">{transaction.description}</div>
                        <div className="text-sm text-muted-foreground">{transaction.type}</div>
                      </TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell className={`text-right font-medium ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {formatCurrency(transaction.amount)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="font-headline">Quick Actions</CardTitle>
              <CardDescription>
                Your most-used actions, just a click away.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button asChild className="w-full justify-start gap-3 p-6 text-base" variant="outline">
                <Link href="/transfer">
                  <ArrowRightLeft className="h-5 w-5" />
                  Transfer Funds
                </Link>
              </Button>
              <Button asChild className="w-full justify-start gap-3 p-6 text-base" variant="outline">
                <Link href="/history">
                  <History className="h-5 w-5" />
                  View Statement
                </Link>
              </Button>
              <Button asChild className="w-full justify-start gap-3 p-6 text-base" variant="outline">
                <Link href="#">
                  <CircleDollarSign className="h-5 w-5" />
                  Pay Bills
                </Link>
              </Button>
               <Button asChild className="w-full justify-start gap-3 p-6 text-base" variant="outline">
                <Link href="/profile">
                  <History className="h-5 w-5" />
                  Settings
                </Link>
              </Button>
            </CardContent>
          </Card>
      </div>
    </UserDashboardLayout>
  );
}
