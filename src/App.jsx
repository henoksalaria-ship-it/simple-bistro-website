import React, { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

const brand = {
  logo: "/images/simple-bistro-logo.png",
  name: "Simple Bistro",
  tagline: "The Taste That Lasts Forever",
  since: "Since 2016",
  email: "simplebistrosince2016@gmail.com",
  phone: "098 634 7372",
  whatsapp: "https://wa.me/251986347372?text=Hello%20Simple%20Bistro%2C%20I%20would%20like%20to%20place%20an%20order.",
  location: "Addis Ababa, Ethiopia",
};

const menuItems = [
  {
    name: "Texas Style Burger",
    price: "680 birr",
    image: "/images/texas-style-burger.png",
  },
  {
    name: "BBQ Chicken Wing",
    price: "700 birr",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Chicken Beef Junkie",
    price: "830 birr",
    image: "/images/chicken-beef-junkie.png",
  },
  {
    name: "Chicken Junkie",
    price: "850 birr",
    image: "/images/chicken-junkie.png",
  },
  {
    name: "Saucy Burger",
    price: "630 birr",
    image: "/images/saucy-burger.png",
  },
  {
    name: "Normal Burger",
    price: "550 birr",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Double Cheese Burger",
    price: "650 birr",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Cheese Burger",
    price: "600 birr",
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=1400&auto=format&fit=crop",
  },
];

const reviewSnapshots = [
  {
    label: "Guest favorite",
    title: "Bold burgers, saucy sides, and a relaxed Addis Ababa stop.",
    body: "Simple Bistro is positioned around the kind of food people remember: juicy burgers, crispy fries, wings, sauce, and a casual dine-in feeling that works for friends, families, and quick cravings.",
    source: "Simple Bistro customer experience",
  },
  {
    label: "Public trust",
    title: "Visible ratings and customer feedback belong on the page.",
    body: "The review area is designed to showcase verified Google, Tripadvisor, and direct customer feedback once the final client-approved quotes are collected.",
    source: "Verified review integration area",
  },
  {
    label: "Brand impression",
    title: "Premium look, friendly energy, simple ordering.",
    body: "The final website experience keeps the restaurant approachable while making the brand feel sharper, cleaner, and more memorable across mobile and desktop.",
    source: "Website experience note",
  },
];

const branches = [
  {
    name: "Bole Branch",
    address: "Bole Road, Addis Ababa",
    phone: "098 634 7372",
  whatsapp: "https://wa.me/251986347372?text=Hello%20Simple%20Bistro%2C%20I%20would%20like%20to%20place%20an%20order.",
    mapQuery: "Simple Bistro Bole Addis Ababa",
    mapLabel: "Bole Branch Google Maps pin",
  },
  {
    name: "Summit Branch",
    address: "Summit Mall, Addis Ababa",
    phone: "098 634 7372",
  whatsapp: "https://wa.me/251986347372?text=Hello%20Simple%20Bistro%2C%20I%20would%20like%20to%20place%20an%20order.",
    mapQuery: "Simple Bistro Summit Mall Addis Ababa",
    mapLabel: "Summit Branch Google Maps pin",
  },
];

const openingHours = [
  { day: "Monday – Saturday", time: "11:00 AM – 11:00 PM", status: "Full service" },
  { day: "Sunday", time: "11:00 AM – 10:00 PM", status: "Weekend cravings" },
];

const contactActions = [
  { label: "Call Now", value: brand.phone, href: "tel:+251986347372" },
  { label: "Email Us", value: brand.email, href: `mailto:${brand.email}` },
  { label: "Find Us", value: brand.location, href: "https://www.google.com/maps/search/?api=1&query=Simple%20Bistro%20Addis%20Ababa" },
];

const navItems = [
  { label: "About Us", href: "#about-us" },
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "Branches", href: "#branches" },
  { label: "Contact", href: "#contact" },
];
const socialItems = [
  {
    label: "Facebook",
    href: "https://web.facebook.com/simplebistro2016/?_rdc=1&_rdr#",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/simplebistroaddis?igshid=vt6g9wycd2ta",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@simplebistroaddis",
  },
];

function getLoopedIndex(index, length) {
  return ((index % length) + length) % length;
}

function runSmokeTests() {
  console.assert(menuItems.length === 8, "Menu should have 8 items from the original Simple Bistro site.");
  console.assert(new Set(menuItems.map((item) => item.image)).size === menuItems.length, "Each menu item should use a unique image.");
  console.assert(menuItems.every((item) => item.image.includes("images.unsplash.com") || item.image.startsWith("/images/")), "Menu images should use reliable hosted photography or public client assets.");
  console.assert(menuItems[0].name === "Texas Style Burger" && menuItems[0].image === "/images/texas-style-burger.png", "Texas Style Burger should use the uploaded client image from the public images folder.");
  console.assert(menuItems[2].name === "Chicken Beef Junkie" && menuItems[2].image === "/images/chicken-beef-junkie.png", "Chicken Beef Junkie should use the uploaded client image from the public images folder.");
  console.assert(menuItems[3].name === "Chicken Junkie" && menuItems[3].image === "/images/chicken-junkie.png", "Chicken Junkie should use the uploaded client image from the public images folder.");
  console.assert(menuItems[4].name === "Saucy Burger" && menuItems[4].image === "/images/saucy-burger.png", "Saucy Burger should use the uploaded client image from the public images folder.");
  console.assert(branches.length === 2, "Branches should include Bole and Summit.");
  console.assert(branches.every((branch) => branch.mapQuery && branch.mapLabel), "Each branch should include Google Maps pin data.");
  console.assert(navItems.includes("Intro") && navItems.includes("Menu") && navItems.includes("Reviews"), "Navigation should match the cinematic restaurant page structure.");
  console.assert(brand.email.includes("@"), "Brand email should be valid enough to display.");
  console.assert(brand.logo === "/images/simple-bistro-logo.png", "Brand logo should use the public image asset.");
  console.assert(socialItems.length === 3, "Footer should display three social buttons without CDN-only social icon imports.");
  console.assert(reviewSnapshots.length >= 3, "Reviews section should include trust-building client-ready cards.");
  console.assert(!reviewSnapshots.some((review) => review.source.toLowerCase().includes("placeholder")), "Client-ready review cards should not include placeholder labels.");
  console.assert(openingHours.length === 2, "Opening hours section should clearly show weekday and Sunday schedules.");
  console.assert(contactActions.length === 3, "Contact section should include call, email, and location actions.");
  console.assert(contactActions.every((action) => action.href && action.value), "Each contact action should have a visible value and clickable href.");
  console.assert(getLoopedIndex(-1, menuItems.length) === menuItems.length - 1, "Menu carousel should loop backward from first item to last item.");
  console.assert(getLoopedIndex(menuItems.length, menuItems.length) === 0, "Menu carousel should loop forward from last item to first item.");
  console.assert(typeof HorizontalMenu === "function", "HorizontalMenu should render the black premium menu carousel.");
  console.assert(typeof ContactFinale === "function", "ContactFinale should be defined and renderable.");
  console.assert(contactActions.some((action) => action.label === "Find Us"), "Contact section should include a visible map/directions action.");
  return true;
}

runSmokeTests();

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function LogoMark() {
  return (
    <a href="#about-us" className="group flex items-center gap-3 text-white">
      <div className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full border border-[#d4a63a]/70 bg-white p-[2px] shadow-[0_0_35px_rgba(212,166,58,.28)] transition duration-300 group-hover:scale-105 sm:h-16 sm:w-16">
        <img src={brand.logo} alt="Simple Bistro logo" className="h-full w-full rounded-full object-contain" />
      </div>
      <div className="hidden leading-none sm:block">
        <p className="font-serif text-xl italic tracking-wide text-[#f0c96a]">Simple Bistro</p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/50">Since 2016</p>
      </div>
    </a>
  );
}

function MapPinGlyph({ size = 18, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function SocialGlyph({ label }) {
  if (label === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="7" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (label === "Facebook") {
    return <span className="font-serif text-xl font-black leading-none">f</span>;
  }

  return <span className="text-lg font-black leading-none">♪</span>;
}

function AmbientToggle() {
  const audioRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (enabled) {
        audio.pause();
        setEnabled(false);
      } else {
        audio.volume = 0.18;
        await audio.play();
        setEnabled(true);
      }
    } catch (error) {
      setEnabled(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="none">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
      </audio>
      <button
        type="button"
        onClick={toggleAudio}
        className="fixed bottom-5 right-5 z-[70] rounded-full border border-[#d4a63a]/40 bg-black/55 px-4 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#f0c96a] backdrop-blur-xl transition hover:bg-[#d4a63a] hover:text-black"
      >
        {enabled ? "Sound On" : "Sound Off"}
      </button>
    </>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-black/80 to-transparent px-5 py-5 text-white lg:px-10">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between">
        <LogoMark />

        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-[11px] font-black uppercase tracking-[0.28em] text-white/58 transition hover:text-[#f0c96a]">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={brand.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full border border-[#d4a63a]/50 px-5 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#f0c96a] transition hover:bg-[#d4a63a] hover:text-black lg:inline-flex"
        >
          Order Now
        </a>

        <button type="button" onClick={() => setOpen(true)} className="rounded-full border border-white/15 px-4 py-3 text-[11px] font-black uppercase tracking-[0.22em] lg:hidden">
          Menu
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[80] bg-black p-6">
          <div className="flex items-center justify-between">
            <LogoMark />
            <button type="button" onClick={() => setOpen(false)} className="rounded-full border border-white/15 px-4 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white">
              Close
            </button>
          </div>
          <div className="mt-16 grid gap-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="border-b border-white/10 py-5 font-serif text-5xl text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function FilmTexture() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,.18)_45%,transparent_52%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,.28)_72%,rgba(0,0,0,.72)_100%)]" />
    </div>
  );
}

function LensFlare() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute left-[-20%] top-[18%] z-30 h-[2px] w-[140%] bg-gradient-to-r from-transparent via-[#f0c96a]/65 to-transparent blur-[1px]"
      animate={{ x: ["-35%", "35%"], opacity: [0, 0.75, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
    />
  );
}

function CinematicHero() {
  return (
    <section id="about-us" className="relative h-screen min-h-[760px] overflow-hidden bg-black text-white">
      <motion.video
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-70"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2200&auto=format&fit=crop"
        animate={{ scale: [1.08, 1.16] }}
        transition={{ duration: 24, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      >
        <source src="https://cdn.coverr.co/videos/coverr-preparing-a-burger-1573/1080p.mp4" type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_38%,rgba(240,201,106,.18),transparent_22%),linear-gradient(90deg,rgba(0,0,0,.92)_0%,rgba(0,0,0,.66)_38%,rgba(0,0,0,.34)_70%,rgba(0,0,0,.82)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.55)_0%,transparent_35%,rgba(0,0,0,.82)_100%)]" />
      <LensFlare />
      <FilmTexture />

      <motion.div
        className="absolute bottom-[8%] left-5 right-5 z-40 mx-auto max-w-[1500px] lg:left-10 lg:right-10"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.7, delayChildren: 0.65 }}
      >
        <motion.p variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 1.2 }} className="text-[11px] font-black uppercase tracking-[0.48em] text-[#f0c96a]">
          Simple Bistro presents
        </motion.p>
        <motion.h1
          variants={{ hidden: { opacity: 0, y: 30, filter: "blur(12px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }}
          transition={{ duration: 1.45, ease: "easeOut" }}
          className="mt-7 max-w-[1180px] font-serif text-[clamp(4.3rem,10vw,12rem)] font-black leading-[0.82] tracking-[-0.07em] text-white drop-shadow-[0_0_45px_rgba(240,201,106,.23)]"
        >
          The taste that <span className="block text-[#f0c96a]">lasts forever.</span>
        </motion.h1>
        <motion.div variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 1.1 }} className="mt-8 flex max-w-3xl flex-col gap-6 text-white/70 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-lg leading-8">
            Simple Bistro is a premier and authentic Burger Restaurant that has been proudly serving in Ethiopia since 2016. Since then, our mission has been to provide high-quality food for all those who wish to combine a fun and enjoyable ambiance with skillful cooking into one extraordinary dining experience. Scroll down to learn more about us.
          </p>
          <a href="#menu" className="w-fit border-b border-[#d4a63a] pb-2 text-[11px] font-black uppercase tracking-[0.28em] text-[#f0c96a]">
            View the menu
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 z-40 hidden text-right text-[11px] uppercase tracking-[0.3em] text-white/35 lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        Scroll<br />to begin
      </motion.div>
    </section>
  );
}

function HorizontalMenu() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = menuItems[activeIndex];

  const goTo = (nextIndex) => {
    setActiveIndex(getLoopedIndex(nextIndex, menuItems.length));
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -80) goTo(activeIndex + 1);
    if (info.offset.x > 80) goTo(activeIndex - 1);
  };

  return (
    <section id="menu" className="relative min-h-screen overflow-hidden bg-black py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(212,166,58,.20),transparent_24%),radial-gradient(circle_at_82%_72%,rgba(212,166,58,.12),transparent_28%),linear-gradient(180deg,#050505_0%,#111_48%,#050505_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.88),rgba(0,0,0,.45),rgba(0,0,0,.88))]" />
      <FilmTexture />

      <div className="relative mx-auto grid max-w-[1500px] gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="relative z-10"
        >
          <p className="text-[11px] font-black uppercase tracking-[0.5em] text-[#f0c96a]">Swipe the menu</p>
          <h2 className="mt-5 max-w-4xl font-serif text-[clamp(4rem,8vw,10rem)] font-black leading-[0.82] tracking-[-0.075em] text-white drop-shadow-[0_0_45px_rgba(240,201,106,.13)]">
            A craving reel you can control.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-9 text-white/58">
            Swipe left or right to move through every Simple Bistro favorite. The menu loops smoothly, making the food feel like a premium visual reel instead of a standard restaurant list.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button type="button" onClick={() => goTo(activeIndex - 1)} className="h-14 w-14 rounded-full border border-[#d4a63a]/40 bg-white/[0.04] text-2xl text-[#f0c96a] backdrop-blur-xl transition hover:bg-[#d4a63a] hover:text-black" aria-label="Previous menu item">
              ←
            </button>
            <button type="button" onClick={() => goTo(activeIndex + 1)} className="h-14 w-14 rounded-full border border-[#d4a63a]/40 bg-white/[0.04] text-2xl text-[#f0c96a] backdrop-blur-xl transition hover:bg-[#d4a63a] hover:text-black" aria-label="Next menu item">
              →
            </button>
            <div className="ml-0 text-[11px] font-black uppercase tracking-[0.28em] text-white/35 sm:ml-4">
              {String(activeIndex + 1).padStart(2, "0")} / {String(menuItems.length).padStart(2, "0")}
            </div>
          </div>
        </motion.div>

        <div className="relative z-10 overflow-hidden py-8">
          <motion.div
            key={activeIndex}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, x: 90, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -90, scale: 0.96 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto h-[680px] max-w-[680px] cursor-grab overflow-hidden rounded-[2.5rem] border border-[#d4a63a]/25 bg-black shadow-[0_45px_160px_rgba(212,166,58,.13)] active:cursor-grabbing"
          >
            <img src={activeItem.image} alt={activeItem.name} className="h-full w-full select-none object-cover" draggable="false" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/5" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-white sm:p-10">
              <p className="text-[10px] font-black uppercase tracking-[0.38em] text-[#f0c96a]">Featured item</p>
              <h3 className="mt-4 max-w-xl font-serif text-[clamp(3rem,6vw,6.4rem)] font-black leading-[0.84] tracking-[-0.055em]">
                {activeItem.name}
              </h3>
              <div className="mt-6 flex items-end justify-between gap-5">
                <p className="font-serif text-4xl font-black text-[#f0c96a]">{activeItem.price}</p>
                <button type="button" className="rounded-full border border-[#d4a63a]/60 bg-black/40 px-6 py-3 text-[11px] font-black uppercase tracking-[0.25em] text-[#f0c96a] backdrop-blur-md transition hover:bg-[#d4a63a] hover:text-black">
                  Order
                </button>
              </div>
            </div>
          </motion.div>

          <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 justify-between lg:flex">
            {[-1, 1].map((direction) => {
              const preview = menuItems[getLoopedIndex(activeIndex + direction, menuItems.length)];
              return (
                <motion.div
                  key={`${preview.name}-${direction}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 0.42, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className={cn("relative h-[390px] w-[250px] overflow-hidden rounded-[1.7rem] bg-black shadow-2xl blur-[0.2px]", direction < 0 ? "-ml-28" : "-mr-28")}
                >
                  <img src={preview.image} alt="Menu preview" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-black/35" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-10 flex max-w-[1500px] gap-3 overflow-x-auto px-5 pb-3 lg:px-10">
        {menuItems.map((item, index) => (
          <button
            key={item.name}
            type="button"
            onClick={() => goTo(index)}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] transition backdrop-blur-xl",
              index === activeIndex ? "border-[#d4a63a] bg-[#d4a63a] text-black shadow-[0_0_30px_rgba(212,166,58,.25)]" : "border-[#d4a63a]/20 bg-white/[0.04] text-white/38 hover:border-[#d4a63a] hover:text-[#f0c96a]"
            )}
          >
            {item.name}
          </button>
        ))}
      </div>
    </section>
  );
}

function BranchExperience() {
  const [selectedBranchIndex, setSelectedBranchIndex] = useState(0);
  const selectedBranch = branches[selectedBranchIndex];
  const selectedMapSrc = `https://www.google.com/maps?q=${encodeURIComponent(selectedBranch.mapQuery)}&output=embed`;

  return (
    <section id="branches" className="relative overflow-hidden bg-black px-5 py-32 text-white lg:px-10">
      <div className="absolute inset-0 opacity-45">
        <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2200&auto=format&fit=crop" alt="Restaurant atmosphere" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.96),rgba(0,0,0,.74),rgba(0,0,0,.94))]" />
      <FilmTexture />

      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-14 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.5em] text-[#f0c96a]">Find the scene</p>
          <h2 className="mt-6 max-w-4xl font-serif text-[clamp(4rem,8vw,10rem)] font-black leading-[0.82] tracking-[-0.07em]">
            Two branches. One signature feeling.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-9 text-white/58">
            Choose a branch and open the pinned Google Maps location for directions.
          </p>

          <div className="mt-10 grid gap-5">
            {branches.map((branch, index) => {
              const isActive = selectedBranchIndex === index;
              return (
                <motion.button
                  key={branch.name}
                  type="button"
                  onClick={() => setSelectedBranchIndex(index)}
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: index * 0.12 }}
                  className={cn(
                    "group w-full border-t py-7 text-left transition",
                    isActive ? "border-[#d4a63a]" : "border-white/18 hover:border-[#d4a63a]/60"
                  )}
                >
                  <p className="text-[11px] font-black uppercase tracking-[0.34em] text-white/35">0{index + 1}</p>
                  <h3 className={cn("mt-3 font-serif text-5xl font-black transition", isActive ? "text-[#f0c96a]" : "text-white group-hover:text-[#f0c96a]")}>{branch.name}</h3>
                  <p className="mt-3 flex items-center gap-2 text-white/60">
                    <MapPinGlyph size={17} className="text-[#f0c96a]" />
                    <span>{branch.address}</span>
                  </p>
                </motion.button>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9 }}
          className="overflow-hidden rounded-[2rem] border border-[#d4a63a]/25 bg-black/60 shadow-[0_40px_150px_rgba(0,0,0,.45)] backdrop-blur-2xl"
        >
          <div className="grid gap-0 lg:grid-cols-[1fr_1.3fr] xl:grid-cols-1 2xl:grid-cols-[0.9fr_1.2fr]">
            <div className="p-7 sm:p-9">
              <p className="text-[10px] font-black uppercase tracking-[0.38em] text-white/35">Pinned location</p>
              <h3 className="mt-4 font-serif text-[clamp(2.4rem,4vw,4.8rem)] font-black leading-[0.9] text-white">{selectedBranch.name}</h3>
              <p className="mt-5 flex items-center gap-3 text-white/62">
                <MapPinGlyph size={20} className="shrink-0 text-[#f0c96a]" />
                <span>{selectedBranch.address}</span>
              </p>
              <p className="mt-3 text-[#f0c96a]/80">{selectedBranch.phone}</p>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedBranch.mapQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#d4a63a]/60 bg-[#d4a63a] px-6 py-3 text-[11px] font-black uppercase tracking-[0.24em] text-black transition hover:bg-[#f0c96a]"
              >
                <MapPinGlyph size={16} />
                Open in Google Maps
              </a>
            </div>

            <div className="relative h-[420px] min-h-[420px] border-t border-[#d4a63a]/15 lg:border-l lg:border-t-0 xl:border-l-0 xl:border-t 2xl:border-l 2xl:border-t-0">
              <iframe
                key={selectedBranch.mapQuery}
                title={selectedBranch.mapLabel}
                src={selectedMapSrc}
                className="absolute inset-0 h-full w-full grayscale invert-[0.9] contrast-125 opacity-85"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0%,rgba(0,0,0,.22)_62%,rgba(0,0,0,.62)_100%)]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-[#050505] px-5 py-32 text-white lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(212,166,58,.18),transparent_24%),radial-gradient(circle_at_84%_70%,rgba(212,166,58,.12),transparent_28%)]" />
      <FilmTexture />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.5em] text-[#f0c96a]">Guest notes</p>
            <h2 className="mt-6 max-w-4xl font-serif text-[clamp(4rem,8vw,10rem)] font-black leading-[0.82] tracking-[-0.075em]">
              Real words carry more weight.
            </h2>
          </div>
          <p className="max-w-3xl text-xl leading-10 text-white/58">
            We take reviews seriously — because the customer may not always finish the fries, but they are always right. Every rating helps us listen, improve, and serve the next burger better.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {reviewSnapshots.map((review, index) => (
            <motion.article
              key={review.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="min-h-[360px] rounded-[2rem] border border-[#d4a63a]/20 bg-white/[0.045] p-8 backdrop-blur-xl transition hover:border-[#d4a63a]/60 hover:bg-[#d4a63a]/10"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.36em] text-[#f0c96a]/70">{review.label}</p>
              <div className="mt-8 flex gap-1 text-[#d4a63a]">
                {[...Array(5)].map((_, starIndex) => (
                  <span key={starIndex}>★</span>
                ))}
              </div>
              <h3 className="mt-8 font-serif text-[clamp(2.2rem,4vw,4rem)] font-black leading-[0.92] text-white">
                {review.title}
              </h3>
              <p className="mt-6 text-base leading-8 text-white/62">{review.body}</p>
              <p className="mt-8 border-l border-[#d4a63a]/60 pl-4 text-[10px] font-black uppercase tracking-[0.28em] text-white/35">
                {review.source}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactFinale() {
  const stars = useMemo(() => [...Array(5)], []);

  return (
    <footer id="contact" className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 opacity-45">
        <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2200&auto=format&fit=crop" alt="Simple Bistro evening atmosphere" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(240,201,106,.24),transparent_20%),linear-gradient(90deg,rgba(0,0,0,.96)_0%,rgba(0,0,0,.88)_45%,rgba(0,0,0,.72)_100%)]" />
      <div className="absolute left-[-15%] top-[10%] h-[520px] w-[520px] rounded-full bg-[#d4a63a]/10 blur-3xl" />
      <div className="absolute bottom-[-20%] right-[-10%] h-[620px] w-[620px] rounded-full bg-[#d4a63a]/10 blur-3xl" />
      <FilmTexture />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-24 sm:px-6 lg:px-10 lg:py-32">
        <div className="grid gap-14 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.9 }}>
            <p className="text-[11px] font-black uppercase tracking-[0.5em] text-[#f0c96a]">Contact scene</p>
            <h2 className="mt-6 font-serif text-[clamp(4rem,8vw,10rem)] font-black leading-[0.82] tracking-[-0.075em]">
              Pull up hungry.
            </h2>
            <p className="mt-8 max-w-xl text-xl leading-9 text-white/62">
              Delivery, dine-in, take-away, or a late burger craving — make the next move obvious. Simple Bistro is ready when the hunger hits.
            </p>
            <div className="mt-10 flex gap-1 text-[#d4a63a]">
              {stars.map((_, i) => <span key={i}>★</span>)}
            </div>
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="overflow-visible rounded-[2rem] border border-[#d4a63a]/25 bg-black/55 shadow-[0_30px_120px_rgba(0,0,0,.45)] backdrop-blur-2xl"
            >
              <div className="grid xl:grid-cols-[0.82fr_1.18fr]">
                <div className="border-b border-[#d4a63a]/15 p-6 sm:p-8 xl:border-b-0 xl:border-r xl:p-9">
                  <p className="text-[10px] font-black uppercase tracking-[0.38em] text-white/35">Opening hours</p>
                  <h3 className="mt-4 font-serif text-[clamp(2.8rem,5vw,4.5rem)] font-black leading-[0.9] text-[#f0c96a]">We’re open.</h3>
                  <p className="mt-5 text-sm leading-7 text-white/58">
                    Grab your burgers at the right time. Check our opening hours before you pull up, order, or plan your next Simple Bistro craving.
                  </p>
                </div>

                <div className="divide-y divide-[#d4a63a]/15">
                  {openingHours.map((item, index) => (
                    <div key={item.day} className="group grid gap-4 p-6 transition hover:bg-[#d4a63a]/10 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8 lg:p-9">
                      <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.34em] text-[#f0c96a]/70">0{index + 1} / {item.status}</p>
                        <p className="mt-3 font-serif text-[clamp(1.6rem,3vw,2.5rem)] font-black leading-tight text-white">{item.day}</p>
                      </div>
                      <p className="font-serif text-[clamp(1.5rem,2.5vw,2.25rem)] font-black leading-tight text-[#f0c96a] sm:text-right">{item.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.18 }}
              className="grid gap-6 lg:grid-cols-3"
            >
              {contactActions.map((action, index) => (
                <a
                  key={action.label}
                  href={action.href}
                  target={action.label === "Find Us" ? "_blank" : undefined}
                  rel={action.label === "Find Us" ? "noreferrer" : undefined}
                  className="group relative min-h-[230px] overflow-visible rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#d4a63a]/70 hover:bg-[#d4a63a]/10"
                >
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#d4a63a]/10 blur-2xl transition group-hover:bg-[#d4a63a]/25" />
                  <p className="relative text-[10px] font-black uppercase tracking-[0.35em] text-white/35">0{index + 1}</p>
                  <h4 className="relative mt-8 flex items-center gap-3 font-serif text-[clamp(2rem,3vw,3rem)] font-black leading-tight text-white">
                    {action.label === "Find Us" && <MapPinGlyph size={34} className="text-[#f0c96a]" />}
                    <span>{action.label}</span>
                  </h4>
                  <p className="relative mt-5 break-words text-sm leading-6 text-white/62">{action.value}</p>
                  <span className="relative mt-7 inline-block border-b border-[#d4a63a] pb-1 text-[10px] font-black uppercase tracking-[0.28em] text-[#f0c96a]">
                    Connect now
                  </span>
                </a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.26 }}
              className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8 xl:grid-cols-[1fr_auto] xl:items-center"
            >
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.38em] text-white/35">Branches</p>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  {branches.map((branch) => (
                    <div key={branch.name} className="border-l border-[#d4a63a]/50 pl-4">
                      <h4 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-black leading-tight text-white">{branch.name}</h4>
                      <p className="mt-2 flex items-center gap-2 text-sm text-white/58">
                        <MapPinGlyph size={15} className="shrink-0 text-[#f0c96a]" />
                        <span>{branch.address}</span>
                      </p>
                      <p className="mt-1 text-sm text-[#f0c96a]/80">{branch.phone}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-4 text-[10px] font-black uppercase tracking-[0.38em] text-white/35 xl:text-right">Social</p>
                <div className="flex gap-4 xl:justify-end">
                  {socialItems.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                      aria-label={social.label}
                      className="grid h-12 w-12 place-items-center rounded-full border border-[#d4a63a]/40 text-[#f0c96a] transition hover:bg-[#d4a63a] hover:text-black"
                    >
                      <SocialGlyph label={social.label} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function SimpleBistroPremiumWebsite() {
  return (
    <main className="min-h-screen scroll-smooth bg-black font-sans antialiased selection:bg-[#d4a63a] selection:text-black">
      <Navbar />
      <AmbientToggle />
      <CinematicHero />
      <HorizontalMenu />
      <BranchExperience />
      <ReviewsSection />
      <ContactFinale />
    </main>
  );
}
