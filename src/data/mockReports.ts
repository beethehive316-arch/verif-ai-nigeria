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

export interface VerifiedSafe {
  id: string;
  businessName: string;
  phoneNumber: string;
  platform: string;
  riskScore: number;
  description: string;
  verificationDate: string;
}

// GREEN - Verified Safe Businesses (0-30% risk)
export const verifiedSafeList: VerifiedSafe[] = [
  {
    id: "safe-1",
    businessName: "Jumia Verified Seller",
    phoneNumber: "08012345678A",
    platform: "Jumia",
    riskScore: 5,
    description: "Verified official Jumia seller with excellent track record. Registered business with verified payment methods. Over 1,000 successful transactions, zero complaints.",
    verificationDate: "2025-01-15"
  },
  {
    id: "safe-2",
    businessName: "Konga Official Store",
    phoneNumber: "09087654321A",
    platform: "Konga",
    riskScore: 8,
    description: "Official Konga merchant with verified business registration. Licensed business with physical location verified. Consistently high ratings and 850+ successful deliveries.",
    verificationDate: "2025-01-10"
  }
];

// RED - High Risk Scammers (70-100% risk)
export const mockReports: ScamReport[] = [
  {
    id: "1",
    businessName: "Instagram Hair Vendor (Deleted Account)",
    phoneNumber: "08000001111",
    platform: "Instagram",
    amountLost: 45000,
    description: "Hair vendor on Instagram. Paid for human hair bundle, received fake tracking number, seller blocked buyer and deleted account. Opay account used (partial).",
    date: "2025-10-15",
    riskLevel: "high"
  },
  {
    id: "2",
    businessName: "Jiji iPhone Seller (Account Suspended)",
    phoneNumber: "07000002222",
    platform: "Jiji",
    amountLost: 135000,
    description: "iPhone 14 Pro listed for sale. Payment made via GTBank account (partial), damaged phone received. Seller refuses refund.",
    date: "2025-10-10",
    riskLevel: "high"
  },
  {
    id: "3",
    businessName: "WhatsApp Kitchen Appliances (Number Inactive)",
    phoneNumber: "08100003333",
    platform: "WhatsApp",
    amountLost: 28500,
    description: "Kitchen appliances advertised via WhatsApp status. Blender paid for via Zenith account (partial) but never shipped. Number changed after complaints.",
    date: "2025-09-28",
    riskLevel: "high"
  },
  {
    id: "4",
    businessName: "Instagram Sneaker Vendor (Account Renamed)",
    phoneNumber: "09000004444",
    platform: "Instagram",
    amountLost: 75000,
    description: "Nike Air Jordans advertised. Fake shoes delivered after payment to Kuda account (partial). Vendor now using different number.",
    date: "2025-10-05",
    riskLevel: "high"
  },
  {
    id: "5",
    businessName: "WhatsApp Loan Service (Business Closed)",
    phoneNumber: "08000005555",
    platform: "WhatsApp",
    amountLost: 50000,
    description: "Promised instant ₦200k loan, collected ₦50k processing fee via Access Bank (partial). No loan disbursed, number switched off.",
    date: "2025-09-20",
    riskLevel: "high"
  },
  {
    id: "6",
    businessName: "Facebook Laptop Seller (Profile Deleted)",
    phoneNumber: "07000006666",
    platform: "Facebook",
    amountLost: 95000,
    description: "MacBook Air advertised on Facebook Marketplace. Paid via UBA account (partial), received non-functional laptop. Seller deleted profile.",
    date: "2025-09-15",
    riskLevel: "high"
  },
  {
    id: "7",
    businessName: "Instagram Perfume Vendor (Account Blocked)",
    phoneNumber: "08100007777",
    platform: "Instagram",
    amountLost: 32000,
    description: "Imported perfumes advertised. Paid to Palmpay account (partial), received fake perfumes. Vendor blocked all customers and disappeared.",
    date: "2025-09-10",
    riskLevel: "high"
  },
  {
    id: "8",
    businessName: "WhatsApp Generator Dealer (Number Changed)",
    phoneNumber: "09000008888",
    platform: "WhatsApp",
    amountLost: 180000,
    description: "5KVA generator for sale. Full payment made to First Bank account (partial). No delivery after 3 weeks. Number no longer reachable.",
    date: "2025-08-28",
    riskLevel: "high"
  },
  {
    id: "9",
    businessName: "Jiji Furniture Seller (Account Banned)",
    phoneNumber: "08000009999",
    platform: "Jiji",
    amountLost: 125000,
    description: "Living room furniture set advertised. Paid deposit via Zenith account (partial), seller demanded more money then disappeared. Account banned by Jiji.",
    date: "2025-08-22",
    riskLevel: "high"
  },
  {
    id: "10",
    businessName: "Instagram Fashion Designer (Page Removed)",
    phoneNumber: "07000001010",
    platform: "Instagram",
    amountLost: 68000,
    description: "Custom wedding dress order. Paid 70% upfront to Moniepoint account (partial). No dress delivered, page removed after complaints.",
    date: "2025-08-15",
    riskLevel: "high"
  },
  {
    id: "11",
    businessName: "WhatsApp Crypto Trader (Number Inactive)",
    phoneNumber: "08100001111",
    platform: "WhatsApp",
    amountLost: 250000,
    description: "Promised Bitcoin trading returns. Sent funds to Opay account (partial) for investment. No returns received, number now inactive.",
    date: "2025-08-05",
    riskLevel: "high"
  },
  {
    id: "12",
    businessName: "Facebook Phone Accessories (Profile Suspended)",
    phoneNumber: "09000001212",
    platform: "Facebook",
    amountLost: 18500,
    description: "iPhone chargers and AirPods advertised. Paid to GT Bank account (partial), received fake products. Seller suspended after multiple reports.",
    date: "2025-07-30",
    riskLevel: "high"
  },
  {
    id: "13",
    businessName: "Instagram Gym Equipment (Account Deleted)",
    phoneNumber: "08000001313",
    platform: "Instagram",
    amountLost: 145000,
    description: "Treadmill advertised at discount price. Full payment made to Kuda account (partial). No delivery, seller deleted account and blocked number.",
    date: "2025-07-25",
    riskLevel: "high"
  },
  {
    id: "14",
    businessName: "WhatsApp Investment Scheme (Business Shut Down)",
    phoneNumber: "07000001414",
    platform: "WhatsApp",
    amountLost: 320000,
    description: "Promised 50% returns in 30 days. Multiple people paid into Zenith account (partial). No returns, organizers disappeared completely.",
    date: "2025-07-15",
    riskLevel: "high"
  },
  {
    id: "15",
    businessName: "Jiji Car Parts Dealer (Account Terminated)",
    phoneNumber: "08100001515",
    platform: "Jiji",
    amountLost: 89000,
    description: "Original Toyota parts advertised. Paid via Access Bank account (partial), received fake parts. Seller account terminated after investigation.",
    date: "2025-07-10",
    riskLevel: "high"
  },
  // YELLOW - Moderate Risk (31-69% risk)
  {
    id: "16",
    businessName: "BellaHair Luxury",
    phoneNumber: "08098765432F",
    platform: "Instagram",
    amountLost: 35000,
    description: "Account only 4 months old with mixed reviews. Some delayed delivery complaints (2 incidents) but issues eventually resolved. Limited transaction history. One customer reported: 'Ordered hair, arrived 2 weeks late but quality was good.'",
    date: "2025-10-20",
    riskLevel: "medium"
  },
  {
    id: "17",
    businessName: "QuickDeals NG",
    phoneNumber: "07011223344F",
    platform: "WhatsApp",
    amountLost: 42000,
    description: "New seller (only 2 months active). 5 reports total: 2 resolved, 3 pending. Wrong items sent occasionally. Mixed customer feedback - some positive experiences, some complaints about inconsistent service.",
    date: "2025-10-18",
    riskLevel: "medium"
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

// Function to search verified safe businesses
export const searchVerifiedSafe = (query: string): VerifiedSafe | null => {
  if (!query) return null;
  
  const normalizedQuery = query.toLowerCase().trim();
  
  return verifiedSafeList.find(business => 
    business.phoneNumber.toLowerCase().includes(normalizedQuery) ||
    business.businessName.toLowerCase().includes(normalizedQuery)
  ) || null;
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
