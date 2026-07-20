import Header from "../components/Header";
import Hero from "../components/Hero";
import Situations from "../components/Situations";
import Approach from "../components/Approach";
import WhySP from "../components/WhySP";
import OperationsConversation from "../components/OperationsConversation";
import SPKnowledge from "../components/SPKnowledge";
import SP6 from "../components/SP6";
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

        <OperationsConversation />

        <SPKnowledge />

        <SP6 />

        <Book />
      </main>
    </>
  );
}