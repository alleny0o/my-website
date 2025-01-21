import { Hero } from "./components/Hero";
import { ExperienceTimeline } from "./components/Experience";

export default function Home() {
  return (
    <div className="min-h-screen max-w-7xl w-full px-4 md:px-8 mx-auto">
      <Hero />
      <ExperienceTimeline />
    </div>
  );
}
