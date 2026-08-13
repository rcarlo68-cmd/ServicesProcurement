"use client";

import ChallengeBackground from "./ChallengeBackground";
import ChallengeContent from "./ChallengeContent";

export default function Challenge() {
  return (
    <section
      id="challenge"
      className="relative isolate h-screen overflow-hidden bg-[#05070B]"
    >
      <ChallengeBackground />

      <ChallengeContent />

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#05070B] via-[#05070B]/60 to-transparent" />
    </section>
  );
}