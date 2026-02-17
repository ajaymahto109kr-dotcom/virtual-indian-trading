import { BarChart3 } from "lucide-react";

const Backtest = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Backtesting</h1>
      <div className="flex flex-col items-center justify-center py-20 bg-card rounded-lg border border-border">
        <BarChart3 className="w-12 h-12 text-muted-foreground mb-4" />
        <h2 className="text-lg font-semibold text-card-foreground mb-2">Strategy Backtesting</h2>
        <p className="text-sm text-muted-foreground text-center max-w-md">
          Test your trading strategies against historical data. Configure parameters like moving averages, RSI, MACD and see how they would have performed.
        </p>
        <p className="text-xs text-muted-foreground mt-4">Coming soon — Connect backend for historical data processing</p>
      </div>
    </div>
  );
};

export default Backtest;
