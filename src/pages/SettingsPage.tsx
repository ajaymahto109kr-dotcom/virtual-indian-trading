import { Settings as SettingsIcon } from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Settings</h1>
      <div className="bg-card rounded-lg border border-border p-6 max-w-lg">
        <h2 className="text-sm font-semibold text-card-foreground mb-4">Profile</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-muted-foreground mb-1">Email</label>
            <input
              type="email"
              value="demo@ivts.in"
              readOnly
              className="w-full px-3 py-2 rounded-md bg-muted border border-border text-sm text-foreground"
            />
          </div>
          <div>
            <label className="block text-xs text-muted-foreground mb-1">Virtual Balance</label>
            <input
              type="text"
              value="₹1,00,000.00"
              readOnly
              className="w-full px-3 py-2 rounded-md bg-muted border border-border text-sm text-foreground"
            />
          </div>
          <button className="px-4 py-2 rounded-md bg-destructive text-destructive-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            Reset Virtual Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
