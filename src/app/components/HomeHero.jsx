"use client";
export default function HomeHero() {

  return (
    <section
      id="home"
      className="relative w-full h-screen bg-background text-foreground overflow-hidden"
    >
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-6xl md:text-7xl font-display tracking-widest">SHAMA</h1>
          <p className="text-ash mt-4 max-w-xl mx-auto">
            Hi, I’m Shama — I design soulful, story-driven experiences for brands, people, and pixels.<br></br>
            My work blends clean UI, thoughtful UX, and expressive visual language to create impact that lingers.
          </p>
        </div>
      </div>
    </section>
  );
}