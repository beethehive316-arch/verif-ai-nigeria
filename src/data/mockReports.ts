export interface ScamReport {
  id: string;
  businessName: string;
  phoneNumber: string;
  platform: string;
  amountLost: number;
  description: string;
  date: string;
  riskLevel: "high" | "medium" | "low";
}

export const mockReports: ScamReport[] = [
  {
    id: "1",
    businessName: "Instagram Fashion Vendor",
    phoneNumber: "081-XXX-X823",
    platform: "Instagram",
    amountLost: 45000,
    description: "Paid for designer bags but account was deleted immediately after payment. No delivery, no refund.",
    date: "2024-10-15",
    riskLevel: "high"
  },
  {
    id: "2",
    businessName: "WhatsApp Electronics Seller",
    phoneNumber: "080-XXX-X147",
    platform: "WhatsApp",
    amountLost: 125000,
    description: "Ordered iPhone 14 Pro Max. Received fake device. Seller blocked me after I complained.",
    date: "2024-10-12",
    riskLevel: "high"
  },
  {
    id: "3",
    businessName: "Facebook Marketplace User",
    phoneNumber: "090-XXX-X956",
    platform: "Facebook",
    amountLost: 18000,
    description: "Sent payment for shoes, seller claimed they didn't receive it then blocked me.",
    date: "2024-10-10",
    riskLevel: "high"
  },
  {
    id: "4",
    businessName: "Jiji Laptop Vendor",
    phoneNumber: "081-XXX-X823",
    platform: "Jiji",
    amountLost: 180000,
    description: "Laptop advertised as brand new. Received used laptop with damaged screen.",
    date: "2024-10-08",
    riskLevel: "high"
  },
  {
    id: "5",
    businessName: "Instagram Shoe Plug",
    phoneNumber: "070-XXX-X442",
    platform: "Instagram",
    amountLost: 32000,
    description: "Paid for Nike sneakers. Never shipped. Seller stopped responding to messages.",
    date: "2024-10-05",
    riskLevel: "high"
  },
  {
    id: "6",
    businessName: "WhatsApp Phone Dealer",
    phoneNumber: "080-XXX-X147",
    platform: "WhatsApp",
    amountLost: 95000,
    description: "Samsung Galaxy with network issues. Seller refuses to refund or exchange.",
    date: "2024-10-03",
    riskLevel: "medium"
  },
  {
    id: "7",
    businessName: "Facebook Clothing Vendor",
    phoneNumber: "081-XXX-X823",
    platform: "Facebook",
    amountLost: 28000,
    description: "Ordered dress for event. Received completely different item. No refund offered.",
    date: "2024-09-30",
    riskLevel: "high"
  },
  {
    id: "8",
    businessName: "Instagram Gadget Store",
    phoneNumber: "090-XXX-X956",
    platform: "Instagram",
    amountLost: 67000,
    description: "Paid for smart watch. Package arrived empty. Seller claims it was sent properly.",
    date: "2024-09-28",
    riskLevel: "high"
  },
  {
    id: "9",
    businessName: "WhatsApp Furniture Dealer",
    phoneNumber: "070-XXX-X442",
    platform: "WhatsApp",
    amountLost: 150000,
    description: "Ordered bed frame and mattress. Only received damaged bed frame, no mattress.",
    date: "2024-09-25",
    riskLevel: "high"
  },
  {
    id: "10",
    businessName: "Jiji Car Parts Seller",
    phoneNumber: "081-XXX-X823",
    platform: "Jiji",
    amountLost: 42000,
    description: "Bought car battery. Stopped working after 3 days. Seller not responding.",
    date: "2024-09-22",
    riskLevel: "medium"
  },
  {
    id: "11",
    businessName: "Instagram Beauty Vendor",
    phoneNumber: "080-XXX-X147",
    platform: "Instagram",
    amountLost: 24000,
    description: "Ordered makeup products. Received expired and fake products.",
    date: "2024-09-20",
    riskLevel: "high"
  },
  {
    id: "12",
    businessName: "Facebook Electronics Store",
    phoneNumber: "090-XXX-X956",
    platform: "Facebook",
    amountLost: 78000,
    description: "PlayStation 5 controller was counterfeit. Seller refuses refund.",
    date: "2024-09-18",
    riskLevel: "medium"
  },
  {
    id: "13",
    businessName: "WhatsApp Fashion Plug",
    phoneNumber: "070-XXX-X442",
    platform: "WhatsApp",
    amountLost: 55000,
    description: "Wig quality nothing like advertised. Seller blocked after complaint.",
    date: "2024-09-15",
    riskLevel: "high"
  },
  {
    id: "14",
    businessName: "Instagram Food Vendor",
    phoneNumber: "081-XXX-X823",
    platform: "Instagram",
    amountLost: 21000,
    description: "Paid for catering service. Vendor never showed up on event day.",
    date: "2024-09-12",
    riskLevel: "high"
  },
  {
    id: "15",
    businessName: "Jiji Apartment Listing",
    phoneNumber: "080-XXX-X147",
    platform: "Jiji",
    amountLost: 160000,
    description: "Paid year's rent in advance. Property doesn't exist. Fake listing.",
    date: "2024-09-10",
    riskLevel: "high"
  }
];

// Function to search reports
export const searchReports = (query: string): ScamReport[] => {
  if (!query) return [];
  
  const lowercaseQuery = query.toLowerCase();
  
  return mockReports.filter(report => 
    report.phoneNumber.includes(query) ||
    report.businessName.toLowerCase().includes(lowercaseQuery)
  );
};

// Function to get report statistics
export const getReportStats = (reports: ScamReport[]) => {
  const totalReports = reports.length;
  const totalAmountLost = reports.reduce((sum, report) => sum + report.amountLost, 0);
  const highRiskCount = reports.filter(r => r.riskLevel === "high").length;
  
  return {
    totalReports,
    totalAmountLost,
    highRiskCount,
    riskPercentage: Math.round((highRiskCount / totalReports) * 100)
  };
};
