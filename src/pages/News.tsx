import { newsItems } from "@/data/mockData";

const News = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Market News</h1>
      <div className="space-y-3">
        {newsItems.map((n) => (
          <div key={n.id} className="bg-card rounded-lg border border-border p-5 hover:border-primary/30 transition-colors cursor-pointer">
            <p className="text-sm font-medium text-card-foreground leading-relaxed">{n.title}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-medium">{n.category}</span>
              <span className="text-xs text-muted-foreground">{n.source}</span>
              <span className="text-xs text-muted-foreground">• {n.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
