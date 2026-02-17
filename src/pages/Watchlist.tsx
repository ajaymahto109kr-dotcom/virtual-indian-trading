import { useState } from "react";
import { Search, Plus, Minus, ArrowUpDown } from "lucide-react";
import { watchlistStocks, formatNumber } from "@/data/mockData";

const Watchlist = () => {
  const [search, setSearch] = useState("");
  const filtered = watchlistStocks.filter(
    (s) =>
      s.symbol.toLowerCase().includes(search.toLowerCase()) ||
      s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Watchlist</h1>
        <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4" /> Add Stock
        </button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search stocks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 rounded-md bg-card border border-border text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs text-muted-foreground border-b border-border">
              <th className="text-left px-5 py-3 font-medium">Symbol</th>
              <th className="text-right px-5 py-3 font-medium">Price (₹)</th>
              <th className="text-right px-5 py-3 font-medium">Change</th>
              <th className="text-right px-5 py-3 font-medium">High</th>
              <th className="text-right px-5 py-3 font-medium">Low</th>
              <th className="text-right px-5 py-3 font-medium">Volume</th>
              <th className="text-right px-5 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.symbol} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                <td className="px-5 py-3">
                  <p className="font-medium text-card-foreground">{s.symbol}</p>
                  <p className="text-xs text-muted-foreground">{s.name}</p>
                </td>
                <td className="text-right px-5 py-3 font-medium text-card-foreground">{formatNumber(s.price)}</td>
                <td className={`text-right px-5 py-3 font-medium ${s.change >= 0 ? "text-profit" : "text-loss"}`}>
                  {s.change >= 0 ? "+" : ""}{s.changePercent.toFixed(2)}%
                </td>
                <td className="text-right px-5 py-3 text-card-foreground">{formatNumber(s.high)}</td>
                <td className="text-right px-5 py-3 text-card-foreground">{formatNumber(s.low)}</td>
                <td className="text-right px-5 py-3 text-muted-foreground">{s.volume}</td>
                <td className="text-right px-5 py-3">
                  <button className="p-1.5 rounded hover:bg-destructive/10 text-muted-foreground hover:text-loss transition-colors">
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Watchlist;
