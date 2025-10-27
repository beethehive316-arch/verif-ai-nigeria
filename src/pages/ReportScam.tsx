import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ReportScam = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    businessName: "",
    phoneNumber: "",
    accountNumber: "",
    platform: "",
    amountLost: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.phoneNumber || !formData.amountLost || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Report Submitted Successfully",
      description: "Your report has been recorded on the Hedera blockchain and will help protect others.",
    });

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Report a Scam</CardTitle>
              <CardDescription className="text-base">
                Help protect others by sharing your experience. All reports are reviewed and stored on the Hedera blockchain for transparency.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Seller/Business Name</Label>
                  <Input
                    id="businessName"
                    placeholder="e.g., Instagram Fashion Store"
                    value={formData.businessName}
                    onChange={(e) => handleChange("businessName", e.target.value)}
                  />
                  <p className="text-sm text-muted-foreground">Optional - if known</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phoneNumber"
                    placeholder="e.g., 08012345678"
                    value={formData.phoneNumber}
                    onChange={(e) => handleChange("phoneNumber", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accountNumber">Bank Account Number</Label>
                  <Input
                    id="accountNumber"
                    placeholder="e.g., 0123456789"
                    value={formData.accountNumber}
                    onChange={(e) => handleChange("accountNumber", e.target.value)}
                  />
                  <p className="text-sm text-muted-foreground">Optional - if known</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="platform">
                    Platform <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.platform}
                    onValueChange={(value) => handleChange("platform", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="jiji">Jiji</SelectItem>
                      <SelectItem value="twitter">Twitter/X</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amountLost">
                    Amount Lost (₦) <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="amountLost"
                    type="number"
                    placeholder="e.g., 50000"
                    value={formData.amountLost}
                    onChange={(e) => handleChange("amountLost", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">
                    What Happened? <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe what happened in detail. Include dates, what you paid for, what you received, and any communication with the seller..."
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    rows={6}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="proof">Upload Proof/Screenshot</Label>
                  <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="h-10 w-10 mx-auto mb-3 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Screenshots of chat, receipts, etc. (Optional)
                    </p>
                    <Input
                      id="proof"
                      type="file"
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg flex gap-3">
                  <AlertCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    All reports are reviewed before being published. False reports may result in account suspension. Your report will be permanently stored on the Hedera blockchain.
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Report
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReportScam;
