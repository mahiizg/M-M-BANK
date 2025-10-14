import { Wifi, Landmark } from "lucide-react";
import { Account } from "@/lib/data";
import { cn } from "@/lib/utils";
import Logo from "@/components/logo";

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount);
};

export function DebitCard({ account }: { account: Account }) {
  return (
    <div className="relative w-full aspect-[1.586] rounded-xl shadow-lg text-white bg-gradient-to-br from-primary via-blue-700 to-blue-800 p-6 flex flex-col justify-between font-mono">
      {/* Overlay Texture */}
      <div className="absolute inset-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm opacity-80">Current Balance</p>
            <p className="text-3xl font-headline font-bold tracking-wider">{formatCurrency(account.balance)}</p>
          </div>
          <Logo className="opacity-90" />
        </div>
        <div className="mt-4">
          <p className="text-sm opacity-80">{account.type} Account</p>
          <div className="flex justify-between items-end">
            <p className="text-lg tracking-widest">{account.accountNumber}</p>
            <p className="text-sm font-semibold">{account.ifsc}</p>
          </div>
        </div>
      </div>

      <div className="relative z-10">
         <div className="flex items-center justify-between mb-4">
             {/* Chip */}
            <div className="w-12 h-9 rounded-md bg-gradient-to-tr from-yellow-200 to-yellow-500 flex items-center justify-center">
                 <div className="w-10 h-7 rounded-sm bg-gradient-to-tr from-yellow-400 to-yellow-600 border-2 border-yellow-200/50"></div>
            </div>
            <Wifi size={32} className="transform rotate-90" />
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs uppercase opacity-70 mb-1">Card Holder</p>
            <p className="text-lg font-medium tracking-wider">Priya Sharma</p>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase opacity-70 mb-1">Valid Thru</p>
            <p className="text-lg font-medium tracking-wider">{account.card.validThru}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
