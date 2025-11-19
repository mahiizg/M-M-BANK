
import { ArrowRightLeft, Battery, Calendar, ClipboardList, CreditCard, Gift, Landmark, ListTodo, Share2, Ticket, Users } from "lucide-react";

export type Account = {
  id: string;
  type: 'Checking' | 'Savings';
  number: string; // The masked number like '**** 1234'
  accountNumber: string; // The full account number
  balance: number;
  ifsc: string;
  card: {
    cardNumber: string;
    validThru: string;
    cvv: string;
  }
};

export type Transaction = {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'Deposit' | 'Withdrawal' | 'Transfer' | 'Payment';
  status: 'Completed' | 'Pending' | 'Failed';
  balance: number;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  accountNumber: string;
  status: 'Active' | 'Inactive' | 'Frozen';
  joinedDate: string;
};

export type Person = {
  id:string;
  name: string;
  avatar: string;
  upiId: string;
}

export type Bill = {
  id: string;
  name: string;
  icon: React.ElementType;
}

export type Bank = {
  id: string;
  name: string;
}

export type PendingRequest = {
  id: string;
  person: Person;
  amount: number;
  note: string;
};

export const rechargePlans = [
    { id: 'plan_1', amount: 199, validity: '28 days', data: '1.5 GB/day' },
    { id: 'plan_2', amount: 299, validity: '28 days', data: '2 GB/day' },
    { id: 'plan_3', amount: 499, validity: '56 days', data: '2 GB/day' },
    { id: 'plan_4', amount: 719, validity: '84 days', data: '2.5 GB/day' },
];


export const user = {
  name: 'Priya Sharma',
  email: 'priya.sharma@mmbank.com',
  avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  upiId: 'priya.sharma@mmbank',
  qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=priya.sharma@mmbank'
};

export const accounts: Account[] = [
  { 
    id: 'acc_1', 
    type: 'Savings', 
    number: '**** **** **** 1234', 
    accountNumber: '123456789012',
    balance: 450000.75,
    ifsc: 'MMBK0001234',
    card: {
      cardNumber: '4012 3456 7890 1234',
      validThru: '12/28',
      cvv: '123'
    }
  },
  { 
    id: 'acc_2', 
    type: 'Checking', 
    number: '**** **** **** 5678', 
    accountNumber: '987654321098',
    balance: 1250000.50,
    ifsc: 'MMBK0005678',
    card: {
      cardNumber: '5012 3456 7890 5678',
      validThru: '08/29',
      cvv: '456'
    }
  },
];

export const transactions: Transaction[] = [
  { id: 'txn_1', date: '2024-07-29', description: 'Netflix Subscription', amount: -799, type: 'Payment', status: 'Completed', balance: 450000.75 },
  { id: 'txn_2', date: '2024-07-28', description: 'BigBasket Groceries', amount: -5540.50, type: 'Payment', status: 'Completed', balance: 450799.75 },
  { id: 'txn_3', date: '2024-07-27', description: 'Salary Deposit', amount: 150000.00, type: 'Deposit', status: 'Completed', balance: 456340.25 },
  { id: 'txn_4', date: '2024-07-25', description: 'Transfer to Savings', amount: -50000.00, type: 'Transfer', status: 'Completed', balance: 306340.25 },
  { id: 'txn_5', date: '2024-07-22', description: 'Amazon.in', amount: -8500.00, type: 'Payment', status: 'Completed', balance: 356340.25 },
  { id: 'txn_6', date: '2024-07-20', description: 'Petrol Pump', amount: -3000.00, type: 'Payment', status: 'Completed', balance: 364840.25 },
  { id: 'txn_7', date: '2024-07-18', description: 'ATM Withdrawal', amount: -10000.00, type: 'Withdrawal', status: 'Completed', balance: 367840.25 },
  { id: 'txn_8', date: '2024-07-15', description: 'Dinner at BBQ Nation', amount: -4500.00, type: 'Payment', status: 'Completed', balance: 377840.25 },
];

export const customers: Customer[] = [
  { id: 'cus_1', name: 'Rajesh Kumar', email: 'rajesh.k@example.com', accountNumber: '...7890', status: 'Active', joinedDate: '2023-01-15' },
  { id: 'cus_2', name: 'Sunita Singh', email: 'sunita.s@example.com', accountNumber: '...1234', status: 'Active', joinedDate: '2022-11-20' },
  { id: 'cus_3', name: 'Amit Patel', email: 'amit.p@example.com', accountNumber: '...5678', status: 'Inactive', joinedDate: '2023-05-10' },
  { id: 'cus_4', name: 'Deepika Mehta', email: 'deepika.m@example.com', accountNumber: '...3456', status: 'Active', joinedDate: '2021-08-01' },
  { id: 'cus_5', name: 'Vikram Rao', email: 'vikram.r@example.com', accountNumber: '...9012', status: 'Frozen', joinedDate: '2023-09-25' },
  { id: 'cus_6', name: 'Anjali Gupta', email: 'anjali.g@example.com', accountNumber: '...6789', status: 'Active', joinedDate: '2024-02-18' },
];

export const people: Person[] = [
  { id: 'ppl_1', name: 'Aarav Sharma', avatar: 'https://i.pravatar.cc/150?u=aarav', upiId: 'aarav.sharma@mmbank' },
  { id: 'ppl_2', name: 'Diya Patel', avatar: 'https://i.pravatar.cc/150?u=diya', upiId: 'diya.p@okbank' },
  { id: 'ppl_3', name: 'Rohan Gupta', avatar: 'https://i.pravatar.cc/150?u=rohan', upiId: 'rohan.gupta@ybl' },
  { id: 'ppl_4', name: 'Isha Singh', avatar: 'https://i.pravatar.cc/150?u=isha', upiId: 'isha.singh@axb' },
  { id: 'ppl_5', name: 'Kabir Kumar', avatar: 'https://i.pravatar.cc/150?u=kabir', upiId: 'kabirk@paytm' },
  { id: 'ppl_6', name: 'Myra Reddy', avatar: 'https://i.pravatar.cc/150?u=myra', upiId: 'myra.reddy@icici' },
  { id: 'ppl_7', name: 'Arjun Das', avatar: 'https://i.pravatar.cc/150?u=arjun', upiId: 'arjun.das@hdfc' },
]

export const services = [
  { id: 'service_1', name: 'Accounts & Deposits', icon: Users, href: '/profile' },
  { id: 'service_2', name: 'Fund Transfer', icon: ArrowRightLeft, href: '/transfer' },
  { id: 'service_3', name: 'Recharge', icon: Battery, href: '/recharge' },
  { id: 'service_4', name: 'Bill Payment', icon: Calendar, href: '/bills' },
  { id: 'service_5', name: 'Ticketing', icon: Ticket, href: '/ticketing' },
  { id: 'service_6', name: 'Cards & Loans', icon: CreditCard, href: '#' },
  { id: 'service_7', name: 'Offers', icon: Gift, href: '#' },
  { id: 'service_8', name: 'Investments & Insurance', icon: Landmark, href: '/investments' },
  { id: 'service_9', name: 'Services', icon: ClipboardList, href: '/contact' },
]

export const bills: Bill[] = [
  { id: 'bill_1', name: 'Mobile Postpaid', icon: Share2 },
  { id: 'bill_2', name: 'DTH', icon: Share2 },
  { id: 'bill_3', name: 'Electricity', icon: Share2 },
  { id: 'bill_4', name: 'Credit Card', icon: Share2 },
]

export const banks: Bank[] = [
    { id: 'bank_1', name: 'HDFC Bank' },
    { id: 'bank_2', name: 'ICICI Bank' },
    { id: 'bank_3', name: 'Axis Bank' },
    { id: 'bank_4', name: 'Kotak Mahindra Bank' },
    { id: 'bank_5', name: 'IndusInd Bank' },
    { id: 'bank_6', name: 'State Bank of India (SBI)' },
    { id: 'bank_7', name: 'Punjab National Bank (PNB)' },
    { id: 'bank_8', name: 'Bank of Baroda' },
    { id: 'bank_9', name: 'Yes Bank' },
    { id: 'bank_10', name: 'IDFC First Bank' },
];

export const pendingRequests: PendingRequest[] = [
  {
    id: "req_1",
    person: people[2],
    amount: 1500,
    note: "For the weekend trip!",
  },
  {
    id: "req_2",
    person: people[4],
    amount: 850,
    note: "Dinner yesterday",
  },
];
