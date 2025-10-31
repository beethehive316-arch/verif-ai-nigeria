import { AlertCircle, CheckCircle, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RiskBadgeProps {
  level: "high" | "medium" | "low";
}

const RiskBadge = ({ level }: RiskBadgeProps) => {
  const variants = {
    high: {
      icon: AlertCircle,
      label: "🚨 High Risk - Avoid",
      className: "bg-destructive text-destructive-foreground"
    },
    medium: {
      icon: AlertTriangle,
      label: "⚠️ Proceed with Caution",
      className: "bg-warning text-warning-foreground"
    },
    low: {
      icon: CheckCircle,
      label: "✅ Verified Safe",
      className: "bg-success text-success-foreground"
    }
  };

  const variant = variants[level];
  const Icon = variant.icon;

  return (
    <Badge className={`${variant.className} text-sm font-bold px-4 py-2`}>
      <Icon className="h-4 w-4 mr-2" />
      {variant.label}
    </Badge>
  );
};

export default RiskBadge;
