export type Account = {
  id: string;
  type: 'Checking' | 'Savings';
  number: string;
  balance: number;
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

export const user = {
  name: 'Ana Willis',
  email: 'customer@mmbank.com',
  avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
};

export const accounts: Account[] = [
  { id: 'acc_1', type: 'Checking', number: '**** **** **** 1234', balance: 5420.55 },
  { id: 'acc_2', type: 'Savings', number: '**** **** **** 5678', balance: 12850.23 },
];

export const transactions: Transaction[] = [
  { id: 'txn_1', date: '2024-07-29', description: 'Netflix Subscription', amount: -15.99, type: 'Payment', status: 'Completed', balance: 5420.55 },
  { id: 'txn_2', date: '2024-07-28', description: 'Grocery Store', amount: -85.40, type: 'Payment', status: 'Completed', balance: 5436.54 },
  { id: 'txn_3', date: '2024-07-27', description: 'Salary Deposit', amount: 2500.00, type: 'Deposit', status: 'Completed', balance: 5521.94 },
  { id: 'txn_4', date: '2024-07-25', description: 'Transfer to Savings', amount: -500.00, type: 'Transfer', status: 'Completed', balance: 3021.94 },
  { id: 'txn_5', date: '2024-07-22', description: 'Amazon.com', amount: -124.99, type: 'Payment', status: 'Completed', balance: 3521.94 },
  { id: 'txn_6', date: '2024-07-20', description: 'Gas Station', amount: -45.00, type: 'Payment', status: 'Completed', balance: 3646.93 },
  { id: 'txn_7', date: '2024-07-18', description: 'ATM Withdrawal', amount: -100.00, type: 'Withdrawal', status: 'Completed', balance: 3691.93 },
  { id: 'txn_8', date: '2024-07-15', description: 'Dinner with friends', amount: -65.20, type: 'Payment', status: 'Completed', balance: 3791.93 },
];

export const customers: Customer[] = [
  { id: 'cus_1', name: 'John Doe', email: 'john.d@example.com', accountNumber: '...7890', status: 'Active', joinedDate: '2023-01-15' },
  { id: 'cus_2', name: 'Jane Smith', email: 'jane.s@example.com', accountNumber: '...1234', status: 'Active', joinedDate: '2022-11-20' },
  { id: 'cus_3', name: 'Michael Johnson', email: 'michael.j@example.com', accountNumber: '...5678', status: 'Inactive', joinedDate: '2023-05-10' },
  { id: 'cus_4', name: 'Emily Brown', email: 'emily.b@example.com', accountNumber: '...3456', status: 'Active', joinedDate: '2021-08-01' },
  { id: 'cus_5', name: 'David Wilson', email: 'david.w@example.com', accountNumber: '...9012', status: 'Frozen', joinedDate: '2023-09-25' },
  { id: 'cus_6', name: 'Sarah Davis', email: 'sarah.d@example.com', accountNumber: '...6789', status: 'Active', joinedDate: '2024-02-18' },
];
