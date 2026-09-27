// Add new projects here — each renders as a card in the Projects section.
// tags and links can be empty arrays for projects that don't have them yet.
export const projects = [
  {
    name: 'Heerheer',
    role: 'Cofounder',
    description:
      "Heerheer is a micro lobbying app where donors split their money across the individual policy ideas a candidate runs on. Candidates get a live read on which ideas people actually fund. Cofounded with the discerning Yukichi Kawada.",
    tags: ['Civic Tech', 'iOS', 'GTM', 'Partnerships'],
    story:
      "I know what it feels like to be excluded from systems that don't seem like they're built for you. Having agency, feeling like your actions matter, changes everything. I don't think civic participation should be any different.",
    links: [{ label: 'Website', url: 'https://www.heerheer.com' }],
  },
  {
    name: 'hot-or-not',
    role: 'Builder',
    description:
      'A tiny game for building real intuition for Celsius-to-Fahrenheit conversion. Guess the Fahrenheit equivalent of a random Celsius temperature.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Neon', 'JavaScript', 'Chart.js'],
    story:
      "When I started grad school, I met more and more people whose brains work in Celsius. We couldn't even chat about the weather. I didn't want to just do math to convert the temperature. I wanted to actually feel what a temperature means.",
    links: [{ label: 'Website', url: 'https://hot-or-not-xi.vercel.app/' }],
  },
  {
    name: 'Fantastic',
    role: 'Builder',
    description:
      "Fantastic is an AI agent for managing a fantasy football team. Each week it reads a league from Sleeper and delivers a report with start/sit calls, waiver pickups, injury updates, and weather flags. Since Sleeper's API is read-only, final moves happen in the app. It also writes trash talk for the group chat.",
    tags: ['AI Agent'],
    story:
      "I got invited into a league with friends. I don't follow American football and had never played fantasy, so I drafted on vibes: Libras, middle children, and Latino players, because that's who I am. Once the season started, I needed slightly more strategy to handle injuries, bye weeks, and waiver decisions, so I built an agent to do the scouting for me.",
    links: [],
  },
  {
    name: 'Recap Studio',
    role: 'Builder',
    description:
      "Recap Studio is an AI tool that makes large event photo libraries searchable by what's actually in the images. It uses Claude Vision to pull structured information from each photo and embeds it so users can search in natural language and generate post-event content from the results.",
    tags: ['Claude Vision API', 'Pinecone', 'Vector Search', 'FastAPI', 'Next.js', 'Supabase'],
    story:
      "VC Unleashed is run entirely by volunteers who pour everything into the big day. By the time it's over, the energy has understandably gone into the event itself, and the recap is one of the most important pieces left to do. I built Recap Studio so the team could search all of the photos in plain language and pull together post-event content in a fraction of the time.",
    links: [],
  },
  {
    name: 'ERVA',
    role: 'Operations',
    description:
      'Erva is a Los Angeles yerba mate brand that brews cold-brewed mate, sold in bottles and on tap at its Pasadena bar. Founded by the GOATs Tiffany Scalia and Juan Rivera.',
    tags: [],
    story:
      "I helped Erva open their first yerba mate bar and worked their stands at farmers markets and festivals. There's no better way to learn a product. I sold a lot of yerba mate.",
    links: [
      { label: 'Website', url: 'https://www.drinkerva.com' },
      { label: 'Instagram', url: 'https://www.instagram.com/drinkerva' },
    ],
  },
  {
    name: 'Agnes',
    role: 'Operations',
    description:
      'Agnes is a dual-concept restaurant and artisanal provisions shop. The menu is regional American cooking with a Midwestern emphasis and Thai influences, reflecting the roots of chef-owners Thomas Kalb and Vanessa Tilaka.',
    tags: [],
    story:
      'I met Thomas while we were both working on Food Love Community Kitchen. When he and Vanessa were getting ready to open Agnes, I joined to build awareness through community outreach and help design how the kitchen would run, including the layout and where inventory would live.',
    links: [
      { label: 'Website', url: 'https://www.agnesla.com' },
      { label: 'Instagram', url: 'https://www.instagram.com/agnes_pasadena' },
    ],
  },
]
