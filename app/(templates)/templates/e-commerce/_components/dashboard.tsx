import { CommerceCards } from "./cards";
import { CommerceChart } from "./chart";
import { CommerceProducts } from "./products";

export const CommerceDashboard = () => {
  return (
    <div className="p-6 flex flex-col gap-10">
      <div>
        <h1 className="text-2xl font-semibold">Overview</h1>
        <p className="text-muted-foreground text-sm">
          Visual summary of key sales performance and your data
        </p>
      </div>
      <CommerceCards />
      <CommerceChart />
      <CommerceProducts />
    </div>
  );
};
