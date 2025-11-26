
import { UserDashboardLayout } from "@/components/layout/user-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift } from "lucide-react";
import Image from "next/image";

const offers = [
  {
    title: "iPhone 17: Up to ₹3000 Instant Cashback",
    description: "Get an instant discount on the latest iPhone 17 using your M&M Bank Credit Card. T&C apply.",
    iconUrl: "https://cdn4.iconfinder.com/data/icons/apple-devices-1/1000/iPhone_X-512.png",
    bgColor: "bg-gray-100",
  },
  {
    title: "Ajio: 7.5% Off Every Wednesday",
    description: "Your mid-week fashion fix just got better! Shop on Ajio with your M&M Bank card and get a 7.5% discount.",
    iconUrl: "https://cdn.iconscout.com/icon/free/png-256/free-ajio-3441584-2878137.png",
    bgColor: "bg-orange-50",
  },
  {
    title: "Zomato: Additional 5% Off",
    description: "Enjoy extra savings on your food orders from Zomato. Pay with M&M Bank for an additional 5% off.",
    iconUrl: "https://cdn.iconscout.com/icon/free/png-256/free-zomato-3441617-2878169.png",
    bgColor: "bg-red-50",
  },
];

export default function OffersPage() {
  return (
    <UserDashboardLayout>
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-3">
             <Gift className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="font-headline text-2xl">Top Offers</CardTitle>
              <CardDescription>Exclusive deals for M&M Bank customers.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {offers.map((offer, index) => (
            <Card key={index} className={`shadow-md hover:shadow-xl transition-shadow ${offer.bgColor}`}>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="flex-shrink-0">
                  <Image src={offer.iconUrl} alt={`${offer.title} icon`} width={60} height={60} className="rounded-lg"/>
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg">{offer.title}</h3>
                  <p className="text-sm text-muted-foreground">{offer.description}</p>
                </div>
                <Button variant="outline">Avail Now</Button>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </UserDashboardLayout>
  );
}
