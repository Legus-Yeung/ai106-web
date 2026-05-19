import Image from "next/image";

// Mock data for your wildlife photography. 
// Place your actual images in your project's public folder, e.g., public/images/lion.jpg
const photos = [
  { id: 1, src: "/images/wildlife-1.jpg", title: "Majestic Monarch", category: "Big Cats" },
  { id: 2, src: "/images/wildlife-2.jpg", title: "Serengeti Flight", category: "Birds" },
  { id: 3, src: "/images/wildlife-3.jpg", title: "Deep Forest Resident", category: "Mammals" },
  { id: 4, src: "/images/wildlife-4.jpg", title: "Arctic Wanderer", category: "Polar" },
  { id: 5, src: "/images/wildlife-5.jpg", title: "Golden Hour Grazing", category: "Savannah" },
  { id: 6, src: "/images/wildlife-6.jpg", title: "Hidden Canopy", category: "Primates" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans dark:bg-zinc-950 dark:text-zinc-50 selection:bg-amber-200 dark:selection:bg-amber-800">
      
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/75 dark:bg-zinc-950/75 border-b border-zinc-200/50 dark:border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight uppercase">
            Legus Yeung <span className="text-xs tracking-widest text-amber-600 block sm:inline sm:ml-2">Photography</span>
          </a>
          <nav className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a href="#gallery" className="hover:text-black dark:hover:text-white transition-colors">Gallery</a>
            <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        
        {/* Hero Section */}
        <section className="py-12 md:py-20 max-w-3xl">
          <p className="text-amber-600 font-medium tracking-wider uppercase text-sm mb-3">Wildlife & Animal Photographer</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 leading-[1.1]">
            Capturing the raw, untamed beauty of the natural world.
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
            Hi, I’m Legus Yeung. Through my lens, I document fleeting moments of wildlife existence—from the grand migrations of the savannah to the quiet, unseen dynamics of deep forest habitats.
          </p>
        </section>

        <hr className="border-zinc-200 dark:border-zinc-800" />

        {/* Gallery Section */}
        <section id="gallery" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Selected Works</h2>
              <p className="text-zinc-500 dark:text-zinc-400 mt-1">A collection of recent encounters in the wild.</p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div 
                key={photo.id} 
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60"
              >
                {/* Fallback styling/colors are visible if the image path hasn't been added yet */}
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  priority={photo.id <= 3}
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-xs uppercase tracking-wider text-amber-400 font-medium mb-1">
                    {photo.category}
                  </span>
                  <h3 className="text-lg font-semibold">{photo.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-zinc-200 dark:border-zinc-800" />

        {/* About Section */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 scroll-mt-24">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight">The Story Behind The Lens</h2>
          </div>
          <div className="md:col-span-8 text-zinc-600 dark:text-zinc-400 space-y-4 text-lg leading-relaxed">
            <p>
              As a dedicated wildlife photographer, my mission goes beyond just taking high-quality photos. I strive to tell the authentic stories of animals in their natural element, fostering empathy and awareness for global conservation efforts.
            </p>
            <p>
              Whether waiting hours in sub-zero temperatures or tracking movements under a blazing equatorial sun, patience and deep respect for animal habitats are the core elements of my practice. Every image is captured ethically, ensuring zero disruption to the wildlife involved.
            </p>
          </div>
        </section>

        <hr className="border-zinc-200 dark:border-zinc-800" />

        {/* Contact Footer Section */}
        <section id="contact" className="py-12 text-center max-w-xl mx-auto space-y-6 scroll-mt-24">
          <h2 className="text-3xl font-bold tracking-tight">Let's Connect</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Interested in prints, licensing, or editorial assignments? Drop me a line, and let's bring the beauty of wildlife to your next project.
          </p>
          <div className="pt-4">
            <a
              href="mailto:hello@legusyeung.com" 
              className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              hello@legusyeung.com
            </a>
          </div>
        </section>

      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 mt-12 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 gap-4">
          <p>© {new Date().getFullYear()} Legus Yeung Photography. All rights reserved.</p>
          <p className="tracking-wide">Respect Wildlife • Protect Habitats</p>
        </div>
      </footer>

    </div>
  );
}
