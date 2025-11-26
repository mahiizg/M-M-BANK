import Link from "next/link";
import { UserDashboardLayout } from "@/components/layout/user-dashboard-layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pendingRequests } from "@/lib/data";

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount).replace(/Rs\.?|INR\s*/gi, "₹").replace(/\s+/g, "");
};

const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
};

export default function RequestsPage() {
  return (
    <UserDashboardLayout>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Pending Requests</CardTitle>
          <CardDescription>
            Review and respond to incoming money requests.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {pendingRequests.length > 0 ? (
            <div className="space-y-4">
              {pendingRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={request.person.avatar} />
                      <AvatarFallback>{getInitials(request.person.name)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{request.person.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Requested <span className="font-medium text-foreground">{formatCurrency(request.amount)}</span>
                      </p>
                       <p className="text-xs text-muted-foreground italic">"{request.note}"</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button asChild>
                        <Link href={`/transfer?amount=${request.amount}&note=${encodeURIComponent(request.note)}&upiId=${request.person.upiId}`}>Pay</Link>
                    </Button>
                    <Button variant="outline">Decline</Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 text-center">
                <div className="text-3xl">🎉</div>
                <h3 className="mt-4 text-lg font-semibold">All Caught Up!</h3>
                <p className="mt-2 text-sm text-muted-foreground">You have no pending money requests.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </UserDashboardLayout>
  );
}
