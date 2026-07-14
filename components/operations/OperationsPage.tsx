import OperationsHero from "./OperationsHero";
import OperationsProblems from "./OperationsProblems";
import OperationsInsight from "./OperationsInsight";
import OperationsCTA from "./OperationsCTA";

export default function OperationsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">

      <OperationsHero />

      <OperationsProblems />

      <OperationsInsight />

      <OperationsCTA />

    </main>
  );
}