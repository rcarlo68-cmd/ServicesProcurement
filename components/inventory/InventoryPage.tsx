import InventoryHero from "./InventoryHero";
import InventoryProblems from "./InventoryProblems";
import InventoryInsight from "./InventoryInsight";
import InventoryCTA from "./InventoryCTA";

export default function InventoryPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">

      <InventoryHero />

      <InventoryProblems />

      <InventoryInsight />

      <InventoryCTA />

    </main>
  );
}