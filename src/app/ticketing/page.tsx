import { UserDashboardLayout } from "@/components/layout/user-dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Train, Bus, Clapperboard, ArrowRight } from "lucide-react";
import Link from "next/link";

const ticketOptions = [
  {
    href: "#",
    icon: Train,
    label: "IRCTC Train Ticket",
    description: "Book train tickets online.",
  },
  {
    href: "#",
    icon: Bus,
    label: "Bus Ticket",
    description: "Find and book bus tickets.",
  },
  {
    href: "#",
    icon: Clapperboard,
    label: "Movie Ticket",
    description: "Book movie tickets for your favorite cinema.",
  },
];

export default function TicketingPage() {
  return (
    <UserDashboardLayout>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Book Tickets</CardTitle>
          <CardDescription>Select a category to start booking.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {ticketOptions.map((option) => (
              <Link href={option.href} key={option.label}>
                <div className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50">
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