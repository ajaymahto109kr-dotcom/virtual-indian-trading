import { TrendingUp, TrendingDown, Wallet, BarChart3, Activity } from "lucide-react";
import {
  topGainers,
  topLosers,
  openPositions,
  recentTrades,
  newsItems,
  marketIndices,
  isMarketOpen,
  formatCurrency,
  formatNumber,
  VIRTUAL_BALANCE,
} from "@/data/mockData";

const totalPnl = openPositions.reduce((sum, p) => sum + p.pnl, 0);
const investedValue = openPositions.reduce((sum, p) => sum + p.avgPrice * p.quantity, 0);
const currentValue = openPositions.reduce((sum, p) => sum + p.currentPrice * p.quantity, 0);

const Dashboard = () => {
  const marketOpen = isMarketOpen();

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Indian Virtual Trading System</p>
        </div>
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
          marketOpen ? "bg-profit/10 text-profit" : "bg-loss/10 text-loss"
        }`}>
          <span className={`w-2 h-2 rounded-full ${marketOpen ? "bg-profit animate-pulse-profit" : "bg-loss"}`} />
          {marketOpen ? "Market Open" : "Market Closed"}
        </div>
      </div>

      {/* Market Indices Ticker */}
      <div className="flex gap-4 overflow-x-auto pb-1">
        {marketIndices.map((idx) => (
          <div key={idx.name} className="flex-shrink-0 bg-card rounded-lg border border-border px-4 py-3 min-w-[180px]">
            <p className="text-xs text-muted-foreground">{idx.name}</p>
            <p className="text-lg font-semibold text-card-foreground">{formatNumber(idx.value)}</p>
            <p className={`text-xs font-medium ${idx.change >= 0 ? "text-profit" : "text-loss"}`}>
              {idx.change >= 0 ? "+" : ""}{formatNumber(idx.change)} ({idx.change >= 0 ? "+" : ""}{idx.changePercent.toFixed(2)}%)
            </p>
          </div>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Wallet} label="Virtual Balance" value={formatCurrency(VIRTUAL_BALANCE)} />
        <StatCard icon={BarChart3} label="Invested Value" value={formatCurrency(investedValue)} />
        <StatCard icon={Activity} label="Current Value" value={formatCurrency(currentValue)} />
        <StatCard
          icon={totalPnl >= 0 ? TrendingUp : TrendingDown}
          label="Total P&L"
          value={formatCurrency(totalPnl)}
          valueClass={totalPnl >= 0 ? "text-profit" : "text-loss"}
          subtitle={`${totalPnl >= 0 ? "+" : ""}${((totalPnl / investedValue) * 100).toFixed(2)}%`}
        />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Positions */}
        <div className="lg:col-span-2 bg-card rounded-lg border border-border">
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <h2 className="text-sm font-semibold text-card-foreground">Open Positions</h2>
            <span className="text-xs text-muted-foreground">{openPositions.length} stocks</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-muted-foreground border-b border-border">
                  <th className="text-left px-5 py-3 font-medium">Symbol</th>
                  <th className="text-right px-5 py-3 font-medium">Qty</th>
                  <th className="text-right px-5 py-3 font-medium">Avg Price</th>
                  <th className="text-right px-5 py-3 font-medium">LTP</th>
                  <th className="text-right px-5 py-3 font-medium">P&L</th>
                </tr>
              </thead>
              <tbody>
                {openPositions.map((pos) => (
                  <tr key={pos.symbol} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                    <td className="px-5 py-3">
                      <p className="font-medium text-card-foreground">{pos.symbol}</p>
                      <p className="text-xs text-muted-foreground">{pos.name}</p>
                    </td>
                    <td className="text-right px-5 py-3 text-card-foreground">{pos.quantity}</td>
                    <td className="text-right px-5 py-3 text-card-foreground">{formatNumber(pos.avgPrice)}</td>
                    <td className="text-right px-5 py-3 text-card-foreground">{formatNumber(pos.currentPrice)}</td>
                    <td className="text-right px-5 py-3">
                      <p className={`font-medium ${pos.pnl >= 0 ? "text-profit" : "text-loss"}`}>
                        {pos.pnl >= 0 ? "+" : ""}{formatCurrency(pos.pnl)}
                      </p>
                      <p className={`text-xs ${pos.pnl >= 0 ? "text-profit" : "text-loss"}`}>
                        {pos.pnlPercent >= 0 ? "+" : ""}{pos.pnlPercent.toFixed(2)}%
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* News Feed */}
        <div className="bg-card rounded-lg border border-border">
          <div className="px-5 py-4 border-b border-border">
            <h2 className="text-sm font-semibold text-card-foreground">Market News</h2>
          </div>
          <div className="divide-y divide-border/50">
            {newsItems.slice(0, 5).map((news) => (
              <div key={news.id} className="px-5 py-3 hover:bg-muted/50 transition-colors cursor-pointer">
                <p className="text-sm text-card-foreground leading-snug">{news.title}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-xs text-primary font-medium">{news.category}</span>
                  <span className="text-xs text-muted-foreground">• {news.source} • {news.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gainers / Losers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StockTable title="Top Gainers" icon={<TrendingUp className="w-4 h-4 text-profit" />} stocks={topGainers} />
        <StockTable title="Top Losers" icon={<TrendingDown className="w-4 h-4 text-loss" />} stocks={topLosers} />
      </div>

      {/* Recent Trades */}
      <div className="bg-card rounded-lg border border-border">
        <div className="px-5 py-4 border-b border-border">
          <h2 className="text-sm font-semibold text-card-foreground">Recent Trades</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-muted-foreground border-b border-border">
                <th className="text-left px-5 py-3 font-medium">Date</th>
                <th className="text-left px-5 py-3 font-medium">Symbol</th>
                <th className="text-left px-5 py-3 font-medium">Type</th>
                <th className="text-right px-5 py-3 font-medium">Qty</th>
                <th className="text-right px-5 py-3 font-medium">Price</th>
                <th className="text-right px-5 py-3 font-medium">P&L</th>
                <th className="text-right px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentTrades.map((trade) => (
                <tr key={trade.id} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                  <td className="px-5 py-3 text-muted-foreground">{trade.date}</td>
                  <td className="px-5 py-3 font-medium text-card-foreground">{trade.symbol}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                      trade.type === "BUY" ? "bg-profit/10 text-profit" : "bg-loss/10 text-loss"
                    }`}>
                      {trade.type}
                    </span>
                  </td>
                  <td className="text-right px-5 py-3 text-card-foreground">{trade.quantity}</td>
                  <td className="text-right px-5 py-3 text-card-foreground">{formatCurrency(trade.price)}</td>
                  <td className={`text-right px-5 py-3 font-medium ${trade.pnl >= 0 ? "text-profit" : "text-loss"}`}>
                    {trade.pnl >= 0 ? "+" : ""}{formatCurrency(trade.pnl)}
                  </td>
                  <td className="text-right px-5 py-3">
                    <span className="text-xs text-muted-foreground">{trade.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

function StatCard({ icon: Icon, label, value, valueClass, subtitle }: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  valueClass?: string;
  subtitle?: string;
}) {
  return (
    <div className="bg-card rounded-lg border border-border p-5">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 text-muted-foreground" />
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
      <p className={`text-xl font-bold ${valueClass || "text-card-foreground"}`}>{value}</p>
      {subtitle && <p className={`text-xs mt-0.5 ${valueClass || "text-muted-foreground"}`}>{subtitle}</p>}
    </div>
  );
}

function StockTable({ title, icon, stocks }: {
  title: string;
  icon: React.ReactNode;
  stocks: typeof topGainers;
}) {
  return (
    <div className="bg-card rounded-lg border border-border">
      <div className="flex items-center gap-2 px-5 py-4 border-b border-border">
        {icon}
        <h2 className="text-sm font-semibold text-card-foreground">{title}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs text-muted-foreground border-b border-border">
              <th className="text-left px-5 py-2.5 font-medium">Symbol</th>
              <th className="text-right px-5 py-2.5 font-medium">Price</th>
              <th className="text-right px-5 py-2.5 font-medium">Change</th>
              <th className="text-right px-5 py-2.5 font-medium">Volume</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((s) => (
              <tr key={s.symbol} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                <td className="px-5 py-2.5">
                  <p className="font-medium text-card-foreground">{s.symbol}</p>
                  <p className="text-xs text-muted-foreground">{s.name}</p>
                </td>
                <td className="text-right px-5 py-2.5 text-card-foreground">{formatNumber(s.price)}</td>
                <td className={`text-right px-5 py-2.5 font-medium ${s.change >= 0 ? "text-profit" : "text-loss"}`}>
                  {s.change >= 0 ? "+" : ""}{s.changePercent.toFixed(2)}%
                </td>
                <td className="text-right px-5 py-2.5 text-muted-foreground">{s.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
