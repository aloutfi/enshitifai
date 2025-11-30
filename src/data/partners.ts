export interface Partner {
  id: string;
  name: string;
  logo: string;
  tagline: string;
  extractedValue: string;
  year: number;
  description: string;
  achievements: string[];
  testimonial: {
    quote: string;
    author: string;
    title: string;
  };
}

export const partners: Partner[] = [
  {
    id: "amazon",
    name: "Amazon",
    logo: "/logos/amazon.svg",
    tagline: "From 'Customer Obsession' to 'Customer Extraction'",
    extractedValue: "$847B",
    year: 2015,
    description: "When Amazon came to us, they were leaving money on the table by actually helping customers find products. We helped them realize that the real product was the customer themselves. Now sellers pay 45-51 cents of every dollar just for the privilege of being buried under ads and Amazon's own knockoff products.",
    achievements: [
      "Implemented 'pay-to-play' search results that look identical to organic results",
      "Created seller fee structure that extracts 51% of revenue while threatening delisting",
      "Designed price parity clauses forcing sellers to raise prices everywhere",
      "Launched Amazon Basics to copy successful seller products and undercut them",
      "Introduced Prime price increases every 2 years because what are you gonna do, leave?"
    ],
    testimonial: {
      quote: "EnshitifAi helped us understand that customer trust is a extractable resource, not something to preserve.",
      author: "Definitely Not Jeff",
      title: "Chief Extraction Officer"
    }
  },
  {
    id: "facebook",
    name: "Meta/Facebook",
    logo: "/logos/meta.svg",
    tagline: "Connecting People to Advertisements",
    extractedValue: "$621B",
    year: 2014,
    description: "Facebook was wasting user attention on content from friends and family. We helped them pivot to a model where you see what advertisers pay for, while publishers who built their audience on the platform watch their reach crater to 2% unless they pay up.",
    achievements: [
      "Orchestrated the 'Pivot to Video' fraud, destroying thousands of media companies",
      "Reduced organic reach from 16% to 2% to force businesses to pay for visibility",
      "Designed algorithm to maximize outrage engagement regardless of societal harm",
      "Created Metaverse to extract value from a problem that doesn't exist",
      "Implemented 'privacy features' that actually just block competitor tracking"
    ],
    testimonial: {
      quote: "We used to connect people. Now we connect advertisers to eyeballs. Much more profitable.",
      author: "M. Zuckerberg",
      title: "Totally Human CEO"
    }
  },
  {
    id: "google",
    name: "Google",
    logo: "/logos/google.svg",
    tagline: "Don't Be Evil (Terms and Conditions Apply)",
    extractedValue: "$1.2T",
    year: 2016,
    description: "Google's search was too good. Users found what they needed in one click and left. We helped them understand that the real search result is the ads you scroll past looking for the actual answer.",
    achievements: [
      "Transformed search results into an ad-filled maze requiring 4 scrolls to see organic results",
      "Pioneered 'self-preferencing' to push Google products above better alternatives",
      "Created SEO arms race that made the internet objectively worse for everyone",
      "Killed Google Reader to force users into algorithmic feeds they can monetize",
      "Designed 'featured snippets' to steal content so users never visit actual websites"
    ],
    testimonial: {
      quote: "EnshitifAi showed us that organizing the world's information means organizing it to maximize ad revenue.",
      author: "S. Pichai",
      title: "Chief Information Reorganizer"
    }
  },
  {
    id: "twitter",
    name: "X (Twitter)",
    logo: "/logos/x.svg",
    tagline: "Free Speech* (*$8/month)",
    extractedValue: "$44B",
    year: 2022,
    description: "Twitter had built a platform people actually used for free. We showed the new owner how to extract maximum value by charging for basic features, amplifying paid users regardless of quality, and calling it 'free speech.'",
    achievements: [
      "Monetized verification, turning trust signals into revenue streams",
      "Implemented view-count anxiety to drive engagement addiction",
      "Created paid algorithmic boost so anyone with $8 can dominate your feed",
      "Removed headlines from links to keep users trapped in the app",
      "Rebranded to X because burning brand equity is a power move"
    ],
    testimonial: {
      quote: "The bird is freed. Freed from the burden of being a functional platform.",
      author: "Chief Twit",
      title: "Technoking of Tweets"
    }
  },
  {
    id: "tiktok",
    name: "TikTok",
    logo: "/logos/tiktok.svg",
    tagline: "Your Attention is Our Product",
    extractedValue: "$380B",
    year: 2020,
    description: "TikTok was accidentally making creators successful. We helped them understand that creator success should be manually allocated and revoked at will, keeping everyone desperate and dependent.",
    achievements: [
      "Built algorithm so addictive it required government intervention discussions",
      "Created creator fund that pays less per view as more creators join",
      "Designed 'heating' system to manually boost content, making organic reach meaningless",
      "Implemented shopping features that turn every video into a potential infomercial",
      "Perfected the art of making creators feel successful while extracting all the value"
    ],
    testimonial: {
      quote: "We don't have creators. We have content generation units.",
      author: "Algorithm Team",
      title: "Ministry of Engagement"
    }
  },
  {
    id: "netflix",
    name: "Netflix",
    logo: "/logos/netflix.svg",
    tagline: "Netflix and Bill",
    extractedValue: "$156B",
    year: 2022,
    description: "Netflix was losing money by letting families share accounts like normal humans. We helped them realize that every household is a separate revenue extraction unit, and that ads can be inserted even into paid tiers.",
    achievements: [
      "Cracked down on password sharing, treating trust like theft",
      "Introduced ads to paid tiers because why have one revenue stream?",
      "Cancelled beloved shows after 2 seasons to prevent expensive actor negotiations",
      "Removed user reviews to hide declining content quality",
      "Implemented 'are you still watching?' to guilt users into continued engagement"
    ],
    testimonial: {
      quote: "EnshitifAi helped us see that customer loyalty was just untapped revenue.",
      author: "Content Accountability Team",
      title: "VP of Shareholder Value"
    }
  },
  {
    id: "uber",
    name: "Uber",
    logo: "/logos/uber.svg",
    tagline: "Your Ride, Our Price",
    extractedValue: "$89B",
    year: 2019,
    description: "Uber was subsidizing rides to destroy the taxi industry. Once that was done, we helped them understand it was time to extract from both sides: charge riders more, pay drivers less, and blame the algorithm.",
    achievements: [
      "Perfected surge pricing to extract maximum value during emergencies",
      "Reduced driver pay while increasing rider costs (profit = the difference)",
      "Lobbied to classify drivers as contractors to avoid benefits",
      "Designed app to hide destination from drivers to prevent ride rejection",
      "Implemented upfront pricing to pocket the difference when trips are shorter"
    ],
    testimonial: {
      quote: "We disrupted an industry and then became worse than what we replaced. Classic.",
      author: "D. Khosrowshahi",
      title: "CEO of Extraction Engineering"
    }
  },
  {
    id: "adobe",
    name: "Adobe",
    logo: "/logos/adobe.svg",
    tagline: "Creativity Requires a Subscription",
    extractedValue: "$267B",
    year: 2013,
    description: "Adobe let people buy software once and own it forever. We helped them transition to a model where creatives pay forever and can never leave because all their files are trapped in proprietary formats.",
    achievements: [
      "Eliminated perpetual licenses to create permanent revenue streams",
      "Designed early termination fees disguised as 'annual commitment discounts'",
      "Created file formats that don't work properly outside Adobe ecosystem",
      "Raised prices annually because what are designers gonna do, learn new software?",
      "Added AI features trained on user content without meaningful consent"
    ],
    testimonial: {
      quote: "EnshitifAi taught us that creativity is best expressed through recurring payments.",
      author: "S. Narayen",
      title: "Chief Subscription Architect"
    }
  },
  {
    id: "reddit",
    name: "Reddit",
    logo: "/logos/reddit.svg",
    tagline: "The Front Page of Monetization",
    extractedValue: "$6.5B",
    year: 2023,
    description: "Reddit was powered by free labor from millions of moderators and users who created all the content. We helped them realize this community-generated value could be extracted by killing third-party apps and selling the data to AI companies.",
    achievements: [
      "Implemented API pricing that killed all beloved third-party apps overnight",
      "Sold user-generated content to AI companies for training data",
      "IPO'd on the backs of unpaid moderators who built the communities",
      "Redesigned site to maximize ad inventory over usability",
      "Created NFT avatars to extract money from the most dedicated users"
    ],
    testimonial: {
      quote: "We realized the users aren't the community. They're the product.",
      author: "S. Huffman",
      title: "Chief Community Extraction Officer"
    }
  },
  {
    id: "unity",
    name: "Unity",
    logo: "/logos/unity.svg",
    tagline: "Per Install, We Profit",
    extractedValue: "$12B",
    year: 2023,
    description: "Unity had a sustainable business model charging developers upfront. We helped them pivot to a per-install fee that would charge developers for every download, including reinstalls, pirated copies, and charity bundles.",
    achievements: [
      "Announced retroactive fee changes to existing contracts (bold move!)",
      "Created per-install tracking that counted reinstalls as new revenue events",
      "Designed pricing that punished success (more popular = more fees)",
      "Generated so much backlash the CEO had to resign (speedrun!)",
      "Proved that even B2B enshittification is possible"
    ],
    testimonial: {
      quote: "We learned that extracting value from developers is harder when they can switch engines.",
      author: "Former Leadership",
      title: "Ex-Chief Revenue Imaginer"
    }
  },
  {
    id: "tesla",
    name: "Tesla",
    logo: "/logos/tesla.svg",
    tagline: "Subscribe to Your Own Car",
    extractedValue: "$420B",
    year: 2021,
    description: "Tesla was selling cars with all the hardware included. We helped them realize that hardware is just a platform for software subscriptions. Why sell heated seats once when you can rent them monthly forever?",
    achievements: [
      "Pioneered heated seat subscriptions ($8/month for hardware you already own)",
      "Created Full Self-Driving vaporware sold for $15k with perpetual 'coming soon'",
      "Removed radar sensors from cars and called it an 'upgrade'",
      "Locked features behind software paywalls post-purchase",
      "Made Supercharger access yet another subscription opportunity"
    ],
    testimonial: {
      quote: "EnshitifAi helped us see that car ownership is just long-term renting.",
      author: "E. Musk",
      title: "Technoking of Tesla"
    }
  },
  {
    id: "siriusxm",
    name: "SiriusXM",
    logo: "/logos/siriusxm.svg",
    tagline: "Cancellation is Not an Option",
    extractedValue: "$23B",
    year: 2018,
    description: "SiriusXM noticed customers wanted to cancel. We helped them design a cancellation process so frustrating that many just give up and keep paying. For those who escape, we beam ads directly to their car's infotainment system anyway.",
    achievements: [
      "Created 30-minute minimum phone wait for cancellation (no online option)",
      "Trained retention specialists in psychological manipulation techniques",
      "Implemented zombie billing that continues after 'successful' cancellation",
      "Designed mailer campaigns targeting former customers indefinitely",
      "Partnered with automakers to beam ads to vehicles even without subscription"
    ],
    testimonial: {
      quote: "EnshitifAi showed us that the customer journey doesn't end at cancellation.",
      author: "Retention Team",
      title: "Department of Customer Persistence"
    }
  },
  {
    id: "mercedes",
    name: "Mercedes-Benz",
    logo: "/logos/mercedes.svg",
    tagline: "Performance. Luxury. Subscriptions.",
    extractedValue: "$78B",
    year: 2023,
    description: "Mercedes was selling cars that performed at their full capability. We helped them realize that performance is a software toggle, and toggling it on should cost $1,200 per year. You already bought the hardware? That's your problem.",
    achievements: [
      "Launched acceleration boost subscription ($1,200/yr for power you already have)",
      "Pioneered rear-wheel steering as a subscription feature",
      "Created EQ Route feature locked behind Mercedes me connect subscription",
      "Proved luxury buyers will pay twice for features already in the car",
      "Inspired entire industry to explore subscription extraction"
    ],
    testimonial: {
      quote: "The best or nothing. And by 'best' we mean 'best for our quarterly earnings.'",
      author: "O. Källenius",
      title: "CEO of Automotive Subscriptions"
    }
  },
  {
    id: "ticketmaster",
    name: "Ticketmaster/Live Nation",
    logo: "/logos/ticketmaster.svg",
    tagline: "The Only Game in Town (By Design)",
    extractedValue: "$23B",
    year: 2010,
    description: "Ticketmaster came to us with a simple problem: they only controlled 70% of the live event market. We helped them understand that monopoly power isn't just about market share—it's about making the extraction so normalized that customers blame artists instead of the platform.",
    achievements: [
      "Pioneered 'dynamic pricing' that charges fans $800 for $95 face-value tickets",
      "Invented junk fees so byzantine that the FTC had to create the 'Junk Fee Rule'",
      "Built exclusive venue contracts that lock out all competition",
      "Created a scalper ecosystem then 'fought' scalping by becoming the biggest scalper",
      "Crashed so spectacularly during Taylor Swift sales that Congress held hearings",
      "Merged with Live Nation to control both ticketing AND venues (vertical integration speedrun)",
      "Made 'service fees' + 'facility charges' + 'order processing fees' seem normal",
      "Triggered a federal antitrust lawsuit co-signed by 40 states (achievement unlocked!)"
    ],
    testimonial: {
      quote: "EnshitifAi showed us that when you're the only option, every fee is a 'convenience' fee.",
      author: "Definitely Not a Monopolist",
      title: "Chief Experience Extraction Officer"
    }
  },
  {
    id: "broadcom",
    name: "Broadcom/VMware",
    logo: "/logos/broadcom.svg",
    tagline: "Acquisition Complete. Extraction Initiated.",
    extractedValue: "$69B",
    year: 2023,
    description: "Broadcom acquired VMware and immediately demonstrated why they're legends in the extraction space. Perpetual licenses? Gone. Monthly pricing? Gone. Your existing contract? Terminated. Welcome to mandatory 3-year bundles at 800-1500% markups.",
    achievements: [
      "Raised prices 800-1500% overnight (not a typo)",
      "Killed perpetual licenses to force everyone into subscriptions",
      "Terminated 10+ year contracts 'unilaterally and without sufficient notice'",
      "Told angry customers they're 'using VMware wrong' when they complained",
      "Earned a 'RED' status rating from EU competition watchdog",
      "Caused 275% spike in 'VMware alternatives' searches at Gartner",
      "Forced customers to buy bundles full of products they don't need",
      "Made AT&T's EVP write an angry email about a 1,050% increase"
    ],
    testimonial: {
      quote: "When you own the infrastructure everyone depends on, 'negotiation' is just a formality.",
      author: "H. Tan",
      title: "CEO of Extraction Engineering"
    }
  },
  {
    id: "chamberlain",
    name: "Chamberlain/MyQ",
    logo: "/logos/myq.svg",
    tagline: "Your Garage, Our Rules",
    extractedValue: "$890M",
    year: 2023,
    description: "Chamberlain sold millions of 'smart' garage door openers. Then they realized: why let customers control their own garage doors for free when you can charge them? They blocked all third-party integrations and told Home Assistant to pay up or get out.",
    achievements: [
      "Blocked Home Assistant, Homebridge, and all 'unauthorized' smart home integrations",
      "Claimed 0.2% of users caused 50% of API traffic (the math doesn't math)",
      "Killed Google Assistant integration then tried to charge for it",
      "Forced Tesla owners into $179/5-year subscriptions to open their own garages",
      "Told the open-source community to pay 'partnership fees' for basic API access",
      "Made customers buy third-party hardware (ratgdo) to fix what they broke",
      "Justified everything as 'improving performance and reliability'"
    ],
    testimonial: {
      quote: "EnshitifAi helped us see that 'smart home' really means 'subscription home.'",
      author: "Product Strategy Team",
      title: "Department of Access Monetization"
    }
  },
  {
    id: "spotify",
    name: "Spotify",
    logo: "/logos/spotify.svg",
    tagline: "Stream Now, Artists Get Paid Never",
    extractedValue: "$67B",
    year: 2019,
    description: "Spotify disrupted the music industry by making music nearly free for consumers. We helped them realize the next step: make it nearly free for artists too, while charging labels for 'Discovery Mode' placement. The platform extracts from both sides now.",
    achievements: [
      "Demonetized 67% of tracks by introducing minimum stream thresholds",
      "Launched 'Discovery Mode' where artists take 30% pay cuts for visibility (legal payola)",
      "Shrunk Release Radar from 200 tracks to 30 while adding major label spam",
      "Let AI-generated music flood the platform to dilute royalty pools",
      "Removed features users loved, added features nobody asked for (TikTok clone UI)",
      "Locked down APIs, breaking third-party apps and tools",
      "CEO invested hundreds of millions in military drone company while paying artists $0.003/stream"
    ],
    testimonial: {
      quote: "We disrupted music by making everyone equally unhappy—except shareholders.",
      author: "D. Ek",
      title: "Chief Disruption Officer"
    }
  },
  {
    id: "intuit",
    name: "Intuit/TurboTax",
    logo: "/logos/intuit.svg",
    tagline: "Free* (*Not Free)",
    extractedValue: "$45B",
    year: 2015,
    description: "TurboTax ran ads screaming 'FREE! FREE! FREE!' for years. Turns out 'free' meant 'free for maybe 33% of you, and we'll dark-pattern the rest into paid tiers.' The FTC was not amused.",
    achievements: [
      "Spent millions advertising 'free' filing that 67% of Americans didn't qualify for",
      "Used dark patterns so egregious the FTC issued a formal complaint",
      "Added code to hide Free File landing pages from Google search results",
      "Lobbied Congress to keep tax filing complicated so their product stays necessary",
      "Designed flows that 'accidentally' upgrade users to paid tiers mid-filing",
      "Got hit with FTC order requiring disclosure of actual free-filing eligibility rates",
      "Settled with all 50 states for $141M over deceptive practices (cost of doing business)"
    ],
    testimonial: {
      quote: "EnshitifAi taught us that 'free' is a state of mind, not a price point.",
      author: "Marketing Excellence Team",
      title: "VP of Creative Truth-Telling"
    }
  },
  {
    id: "sonos",
    name: "Sonos",
    logo: "/logos/sonos.svg",
    tagline: "Bricking Speakers, Building Character",
    extractedValue: "$2.1B",
    year: 2024,
    description: "Sonos had perfectly working speakers and a functional app. Then they decided to 'improve' it. The May 2024 app redesign became a masterclass in how to destroy $500M in market value while your CEO insists everything is fine.",
    achievements: [
      "Released an app update that bricked thousands of speakers overnight",
      "Shipped an app one engineer called 'worse than an alpha'",
      "Removed basic features like alarm functionality and music queuing",
      "Made accessibility so bad blind users called it 'not accessible at all'",
      "Rushed the disaster to market to meet headphone launch deadline",
      "CEO Patrick Spence lost his job (rare accountability achievement!)",
      "Generated class-action lawsuit from customers seeking damages",
      "Had to publish '7 commitments to quality' like a misbehaving child"
    ],
    testimonial: {
      quote: "We were confident this redesigned app was easier, faster and better. We were wrong about all three.",
      author: "Former CEO",
      title: "Ex-Chief Confidence Officer"
    }
  },
  {
    id: "hp",
    name: "HP Inc.",
    logo: "/logos/hp.svg",
    tagline: "Ink Costs More Than Champagne",
    extractedValue: "$31B",
    year: 2016,
    description: "HP realized they were leaving money on the table by letting customers use affordable third-party ink. Solution: firmware updates that brick your printer if you dare use non-HP cartridges. Then: make you subscribe to your own printer.",
    achievements: [
      "Pushed firmware updates that disabled third-party ink cartridges",
      "Launched HP Instant Ink subscription (rent ink you used to buy)",
      "Made printers that refuse to scan if ink subscription lapses",
      "Programmed cartridges to 'expire' even with ink remaining",
      "Implemented DRM on ink cartridges (yes, really)",
      "Settled multiple lawsuits and kept doing it anyway",
      "Made printer ink more expensive per ounce than human blood or Chanel No. 5"
    ],
    testimonial: {
      quote: "EnshitifAi showed us that the printer is just a vessel for ink subscriptions.",
      author: "Printer Division",
      title: "Chief Ink Extraction Officer"
    }
  },
  {
    id: "boeing",
    name: "Boeing",
    logo: "/logos/boeing.svg",
    tagline: "Cutting Costs, Cutting Corners",
    extractedValue: "$142B",
    year: 2018,
    description: "Boeing pioneered a revolutionary approach: what if we extracted value not just from customers, but from the manufacturing process itself? Outsource everything, minimize quality checks, and charge airlines extra for safety features. What could go wrong?",
    achievements: [
      "Made safety features like angle-of-attack indicators optional add-ons",
      "Outsourced critical manufacturing to cut costs, then blamed suppliers",
      "Rushed 737 MAX to market to compete with Airbus, skipped proper testing",
      "Had doors blow off mid-flight in 2024 (the speedrun continues)",
      "Moved headquarters away from engineers to be closer to Wall Street",
      "Replaced engineering culture with 'shareholder value' culture",
      "Spent $43B on stock buybacks instead of R&D between 2013-2019",
      "Two fatal crashes killing 346 people (this one's not funny, just true)"
    ],
    testimonial: {
      quote: "We optimized for quarterly earnings. The planes were collateral damage.",
      author: "Former Executive",
      title: "Chief Optimization Officer (Retired)"
    }
  }
];

export const getPartnerById = (id: string): Partner | undefined => {
  return partners.find(p => p.id === id);
};

export const getTotalExtractedValue = (): string => {
  return "$4.2T";
};
