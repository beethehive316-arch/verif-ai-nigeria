import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Shield, AlertCircle, Brain, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import RiskBadge from "@/components/RiskBadge";
import ReportCard from "@/components/ReportCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { searchReports, getReportStats, ScamReport, searchVerifiedSafe, VerifiedSafe } from "@/data/mockReports";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [reports, setReports] = useState<ScamReport[]>([]);
  const [verifiedSafe, setVerifiedSafe] = useState<VerifiedSafe | null>(null);

  useEffect(() => {
    const results = searchReports(query);
    setReports(results);
    const safeResult = searchVerifiedSafe(query);
    setVerifiedSafe(safeResult);
  }, [query]);

  // GREEN - Verified Safe
  if (verifiedSafe) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-2 border-success bg-success/5">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">Search Results for</CardTitle>
                    <p className="text-xl font-mono text-muted-foreground">{query}</p>
                  </div>
                  <RiskBadge level="low" />
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-success/10 rounded-lg border border-success/20">
                    <div className="text-2xl font-bold text-success">
                      {verifiedSafe.riskScore}%
                    </div>
                    <div className="text-sm text-muted-foreground">Risk Score</div>
                  </div>
                  <div className="text-center p-4 bg-success/10 rounded-lg border border-success/20">
                    <div className="text-2xl font-bold text-success">0</div>
                    <div className="text-sm text-muted-foreground">Fraud Reports</div>
                  </div>
                  <div className="text-center p-4 bg-success/10 rounded-lg border border-success/20">
                    <div className="text-2xl font-bold text-success">✓</div>
                    <div className="text-sm text-muted-foreground">Verified</div>
                  </div>
                </div>

                <div className="p-6 bg-success/10 border-2 border-success rounded-lg">
                  <h3 className="text-xl font-bold text-success mb-3 flex items-center gap-2">
                    <CheckCircle className="h-6 w-6" />
                    Safe to Proceed with Transaction
                  </h3>
                  <p className="text-foreground mb-4">{verifiedSafe.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Badge className="bg-success/20 text-success border-success/30">
                      {verifiedSafe.platform}
                    </Badge>
                    <span>Verified: {new Date(verifiedSafe.verificationDate).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <Brain className="h-5 w-5 text-primary flex-shrink-0" />
                  <div className="text-sm">
                    <span className="font-semibold text-primary">AI Analyzed ✓</span>
                    <span className="text-muted-foreground block mt-1">
                      Verified on Hedera Blockchain • TX: 0x7a9b4c...3f2e8d
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

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

  // Determine border and background colors based on risk level
  const borderColor = riskLevel === "high" ? "border-destructive" : riskLevel === "medium" ? "border-warning" : "border-success";
  const bgColor = riskLevel === "high" ? "bg-destructive/5" : riskLevel === "medium" ? "bg-warning/5" : "bg-success/5";
  const statColor = riskLevel === "high" ? "text-destructive" : riskLevel === "medium" ? "text-warning" : "text-success";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Risk Overview Card */}
          <Card className={`border-2 ${borderColor} ${bgColor}`}>
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
                  <div className={`text-2xl font-bold ${statColor}`}>
                    {stats.totalReports}
                  </div>
                  <div className="text-sm text-muted-foreground">Reports Filed</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className={`text-2xl font-bold ${statColor}`}>
                    ₦{(stats.totalAmountLost / 1000).toFixed(1)}K
                  </div>
                  <div className="text-sm text-muted-foreground">Total Lost</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className={`text-2xl font-bold ${statColor}`}>
                    {stats.highRiskCount}
                  </div>
                  <div className="text-sm text-muted-foreground">High Risk</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className={`text-2xl font-bold ${statColor}`}>
                    {stats.riskPercentage}%
                  </div>
                  <div className="text-sm text-muted-foreground">Risk Level</div>
                </div>
              </div>

              {/* Risk-specific Warning/Recommendation */}
              {riskLevel === "high" && (
                <div className="p-6 bg-destructive/10 border-2 border-destructive rounded-lg">
                  <h3 className="text-xl font-bold text-destructive mb-3 flex items-center gap-2">
                    <AlertCircle className="h-6 w-6" />
                    ⛔ Do NOT Proceed with This Transaction
                  </h3>
                  <p className="text-foreground">
                    This business/individual has multiple fraud reports and known scam patterns. Sending money to this entity carries an extremely high risk of financial loss. We strongly advise against any transactions.
                  </p>
                </div>
              )}

              {riskLevel === "medium" && (
                <div className="p-6 bg-warning/10 border-2 border-warning rounded-lg">
                  <h3 className="text-xl font-bold text-warning mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6" />
                    ⚠️ Recommended: Use Escrow or Verify Further
                  </h3>
                  <p className="text-foreground">
                    This business has some complaints or mixed reviews. While not confirmed as fraudulent, proceed with caution. Consider using escrow services, meeting in person, or requesting additional verification before sending money.
                  </p>
                </div>
              )}

              <div className="flex items-center gap-2 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <Brain className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-sm">
                  <span className="font-semibold text-primary">AI Analyzed ✓</span>
                  <span className="text-muted-foreground block mt-1">
                    Verified on Hedera Blockchain • TX: 0x7a9b4c...3f2e8d
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

          {/* AI Risk Analysis Section */}
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Brain className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl text-primary">AI Risk Analysis</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* AI Confidence Score */}
              <div className="p-4 bg-card rounded-lg border border-primary/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">AI Confidence Score</span>
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary">87%</div>
                <p className="text-sm text-muted-foreground mt-1">High confidence this is fraudulent</p>
              </div>

              {/* Detected Patterns */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  Detected Patterns
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-destructive mt-0.5">•</span>
                    <span className="text-foreground">Similar phone number reported 8 times in past 30 days</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-destructive mt-0.5">•</span>
                    <span className="text-foreground">Account number linked to 3 different business names</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-destructive mt-0.5">•</span>
                    <span className="text-foreground">Rapid account creation pattern detected</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-destructive mt-0.5">•</span>
                    <span className="text-foreground">High-value transactions with new accounts</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-destructive mt-0.5">•</span>
                    <span className="text-foreground">Location mismatch: Business claims Lagos but reports from 5 different states</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-destructive mt-0.5">•</span>
                    <span className="text-foreground">Social media account age: Less than 2 weeks old</span>
                  </li>
                </ul>
              </div>

              {/* Fraud Risk Factors */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Fraud Risk Factors</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20">
                    Multiple Phone Numbers
                  </Badge>
                  <Badge className="bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20">
                    Account Deletion Pattern
                  </Badge>
                  <Badge className="bg-warning/10 text-warning border-warning/20 hover:bg-warning/20">
                    Inconsistent Business Details
                  </Badge>
                  <Badge className="bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20">
                    Rapid Money Movement
                  </Badge>
                </div>
              </div>
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
