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
  }
];

export const getPartnerById = (id: string): Partner | undefined => {
  return partners.find(p => p.id === id);
};

export const getTotalExtractedValue = (): string => {
  return "$4.2T";
};
