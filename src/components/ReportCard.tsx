import { Calendar, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScamReport } from "@/data/mockReports";

interface ReportCardProps {
  report: ScamReport;
}

const ReportCard = ({ report }: ReportCardProps) => {
  const formatCurrency = (amount: number) => {
    return `₦${amount.toLocaleString()}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-NG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card className="mb-4 hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{report.platform}</Badge>
            <div className="flex items-center text-sm text-muted-foreground gap-1">
              <Calendar className="h-4 w-4" />
              {formatDate(report.date)}
            </div>
            <div className="flex items-center text-sm font-semibold text-destructive gap-1">
              <DollarSign className="h-4 w-4" />
              {formatCurrency(report.amountLost)} lost
            </div>
          </div>
          
          <p className="text-foreground leading-relaxed">{report.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportCard;
