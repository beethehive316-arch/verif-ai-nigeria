import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Shield, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import RiskBadge from "@/components/RiskBadge";
import ReportCard from "@/components/ReportCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { searchReports, getReportStats, ScamReport } from "@/data/mockReports";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [reports, setReports] = useState<ScamReport[]>([]);

  useEffect(() => {
    const results = searchReports(query);
    setReports(results);
  }, [query]);

  if (reports.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-16 pb-16 text-center">
              <Shield className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
              <h2 className="text-2xl font-bold mb-4 text-foreground">No Reports Found</h2>
              <p className="text-muted-foreground mb-6">
                We couldn't find any reports for "{query}". This could mean the business is safe, or hasn't been reported yet.
              </p>
              <Link to="/report">
                <Button>Report a Business</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const stats = getReportStats(reports);
  const riskLevel = stats.riskPercentage > 70 ? "high" : stats.riskPercentage > 40 ? "medium" : "low";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Risk Overview Card */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl mb-2">Search Results for</CardTitle>
                  <p className="text-xl font-mono text-muted-foreground">{query}</p>
                </div>
                <RiskBadge level={riskLevel} />
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-destructive">
                    {stats.totalReports}
                  </div>
                  <div className="text-sm text-muted-foreground">Reports Filed</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-destructive">
                    ₦{(stats.totalAmountLost / 1000).toFixed(1)}K
                  </div>
                  <div className="text-sm text-muted-foreground">Total Lost</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-destructive">
                    {stats.highRiskCount}
                  </div>
                  <div className="text-sm text-muted-foreground">High Risk</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-destructive">
                    {stats.riskPercentage}%
                  </div>
                  <div className="text-sm text-muted-foreground">Risk Level</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-sm">
                  <span className="font-semibold text-primary">Verified on Hedera Blockchain</span>
                  <span className="text-muted-foreground block mt-1">
                    Transaction ID: 0x7a9b4c...3f2e8d
                  </span>
                </div>
              </div>

              <Link to="/report" className="block">
                <Button variant="outline" className="w-full" size="lg">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  Report This Business
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Reports List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">
                Community Reports ({stats.totalReports})
              </h2>
            </div>
            
            {reports.map((report) => (
              <ReportCard key={report.id} report={report} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
