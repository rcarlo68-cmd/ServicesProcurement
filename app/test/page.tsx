import Arrow from "@/components/whiteboard/Arrow";

export default function TestPage() {
  return (
    <main className="min-h-screen bg-white">
      <Arrow
        from={{ x: 100, y: 100 }}
        to={{ x: 400, y: 300 }}
      />
    </main>
  );
}