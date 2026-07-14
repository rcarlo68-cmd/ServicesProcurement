import IllustrationCard from "./IllustrationCard";

type Card = {
  title: string;
  description: string;
  image?: string;
};

type ServiceGridProps = {
  cards: Card[];
};

export default function ServiceGrid({
  cards,
}: ServiceGridProps) {
  return (
    <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
        <IllustrationCard
          key={card.title}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
}