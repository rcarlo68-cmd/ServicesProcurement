import Header from "../components/Header";
import Hero from "../components/Hero";
import Situations from "../components/Situations";
import Approach from "../components/Approach";
import WhySP from "../components/WhySP";
import SPKnowledge from "../components/SPKnowledge";
import Book from "../components/Book";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Situations />

        <Approach />

        <WhySP />

        <SPKnowledge />

        
        <Book />
      </main>
    </>
  );
}