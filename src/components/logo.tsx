import { cn } from "@/lib/utils";
import { Landmark } from "lucide-react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Landmark className="h-8 w-8 text-primary" />
      <span className="text-2xl font-bold tracking-tighter text-primary group-data-[sidebar=sidebar]:text-sidebar-foreground font-headline">
        M&M Bank
      </span>
    </div>
  );
};

export default Logo;
