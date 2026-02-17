import { recentTrades, formatCurrency } from "@/data/mockData";

const TradeHistory = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Trade History</h1>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs text-muted-foreground border-b border-border">
              <th className="text-left px-5 py-3 font-medium">Date</th>
              <th className="text-left px-5 py-3 font-medium">Symbol</th>
              <th className="text-left px-5 py-3 font-medium">Type</th>
              <th className="text-right px-5 py-3 font-medium">Qty</th>
              <th className="text-right px-5 py-3 font-medium">Price</th>
              <th className="text-right px-5 py-3 font-medium">Total</th>
              <th className="text-right px-5 py-3 font-medium">P&L</th>
              <th className="text-right px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentTrades.map((t) => (
              <tr key={t.id} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                <td className="px-5 py-3 text-muted-foreground">{t.date}</td>
                <td className="px-5 py-3">
                  <p className="font-medium text-card-foreground">{t.symbol}</p>
                  <p className="text-xs text-muted-foreground">{t.name}</p>
                </td>
                <td className="px-5 py-3">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                    t.type === "BUY" ? "bg-profit/10 text-profit" : "bg-loss/10 text-loss"
                  }`}>{t.type}</span>
                </td>
                <td className="text-right px-5 py-3 text-card-foreground">{t.quantity}</td>
                <td className="text-right px-5 py-3 text-card-foreground">{formatCurrency(t.price)}</td>
                <td className="text-right px-5 py-3 text-card-foreground">{formatCurrency(t.total)}</td>
                <td className={`text-right px-5 py-3 font-medium ${t.pnl >= 0 ? "text-profit" : "text-loss"}`}>
                  {t.pnl >= 0 ? "+" : ""}{formatCurrency(t.pnl)}
                </td>
                <td className="text-right px-5 py-3">
                  <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs">{t.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradeHistory;
