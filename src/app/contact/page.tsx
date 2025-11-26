
import { UserDashboardLayout } from "@/components/layout/user-dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
    ListChecks, 
    Banknote, 
    UserCog, 
    FileCheck, 
    CreditCard, 
    KeyRound, 
    PackageCheck, 
    BookCopy, 
    Wallet, 
    MessageCircleWarning,
    ArrowRight
} from "lucide-react";
import Link from "next/link";

const serviceOptions = [
  {
    icon: ListChecks,
    label: "My Requests",
    description: "Track your service requests.",
    href: "#"
  },
  {
    icon: Banknote,
    label: "Account Services",
    description: "Manage your account settings.",
    href: "#"
  },
  {
    icon: UserCog,
    label: "Update Personal Details",
    description: "Keep your information up-to-date.",
    href: "/profile"
  },
  {
    icon: FileCheck,
    label: "Manage Mandate",
    description: "View and manage your mandates.",
    href: "#"
  },
  {
    icon: CreditCard,
    label: "Cards Services",
    description: "Manage your debit and credit cards.",
    href: "#"
  },
  {
    icon: KeyRound,
    label: "Card PIN Services",
    description: "Generate or change your card PIN.",
    href: "#"
  },
  {
    icon: PackageCheck,
    label: "Collect / Re-dispatch Deliverables",
    description: "Track your physical deliverables.",
    href: "#"
  },
  {
    icon: BookCopy,
    label: "Chequebook Services",
    description: "Request a new chequebook.",
    href: "#"
  },
  {
    icon: Wallet,
    label: "Cardless Cash Withdrawal",
    description: "Withdraw cash without your card.",
    href: "#"
  },
  {
    icon: MessageCircleWarning,
    label: "Raise a Complaint",
    description: "Get help with any issues.",
    href: "#"
  },
];

export default function ServicesPage() {
  return (
    <UserDashboardLayout>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Services</CardTitle>
          <CardDescription>Explore all available services and manage your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {serviceOptions.map((option) => (
                <Link href={option.href} key={option.label}>
                    <div className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50 cursor-pointer h-full">
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
