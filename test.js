finance-tracker/
├── app/
│   ├── page.tsx        # Dashboard
│   ├── expenses/
│   │   └── page.tsx    # Lista de contas
│   ├── add/
│   │   └── page.tsx    # Adicionar conta
├── components/
│   ├── SummaryCard.tsx
│   ├── ExpenseTable.tsx
│   ├── ExpenseForm.tsx
├── data/
│   └── expenses.json   # Base inicial
├── lib/
│   └── calculations.ts
└── README.md

[project]
name = Finance Tracker
version = 1.0.0
description = A simple finance tracking application built with Next.js and TypeScript.
gabriel
moraes

author = Gabriel Moraes
license = MIT
[dependencies]
next = "^13.0.0"
react = "^18.0.0"
react-dom = "^18.0.0"

[dev-dependencies]
typescript = "^4.0.0"
{
  id: string;
  description: string;
  amount: number;
  dueDate: string;
  category: string;
  paid: boolean;
}

[
  {
    "id": "1",
    "description": "Condomínio",
    "amount": 940,
    "dueDate": "2025-01-10",
    "category": "Moradia",
    "paid": false
  },
  {
    "id": "2",
    "description": "Internet Casa",
    "amount": 100,
    "dueDate": "2025-01-13",
    "category": "Internet",
    "paid": false
  }
]

export function calculateTotalExpenses(expenses: Expense[]): number {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
}
export function totalExpenses(expenses) {
  return expenses.reduce((sum, e) => sum + e.amount, 0);
}

export function remainingBalance(income, expenses) {
  return income - totalExpenses(expenses);
}

    return (
        <div className="summary-card">
        <h3>{title}</h3>
        <p>{amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </div>
    );
    <table className="w-full text-sm">
  <thead>
    <tr>
      <th>Descrição</th>
      <th>Valor</th>
      <th>Vencimento</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {expenses.map(e => (
      <tr key={e.id}>
        <td>{e.description}</td>
        <td>R$ {e.amount}</td>
        <td>{e.dueDate}</td>
        <td>{e.paid ? "Pago" : "Pendente"}</td>
      </tr>
    ))}
  </tbody>
</table>

export function ExpenseForm({ onSubmit }) {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [dueDate, setDueDate] = useState('');
    const [category, setCategory] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ description, amount, dueDate, category, paid: false });
    };

    <div className="bg-white rounded-xl shadow p-4">
  <h3 className="text-gray-500 text-sm">Saldo</h3>
  <p className="text-2xl font-bold text-green-600">
    R$ {saldo}
  </p>
</div>


export interface Expense {
    