import { placeholderImage } from '../utils/placeholder'

// Add new projects here — each renders as a card in the Projects section.
// description/stack/inspo are optional — cards with none of them render as
// a simple name + image tile. url of '#' means no real link yet.
export const projects = [
  {
    name: 'Heer Heer',
    image: placeholderImage('', 300, 220, '#f4e9c9', '#8a6d1a'),
    url: '#',
  },
  {
    name: 'hot-or-not',
    image: placeholderImage('', 300, 220, '#dce6fb', '#4a6fc4'),
    description:
      'A tiny game for building real intuition for Celsius-to-Fahrenheit conversion — guess the Fahrenheit equivalent of a random Celsius temperature.',
    stack: 'Node.js, Express, PostgreSQL (Neon), vanilla JS, Chart.js',
    inspo:
      "When I started grad school, I met more and more people whose brains work in Celsius. We couldn't even chat about the weather. I didn't want to just do math to convert the temperature. I wanted to actually feel what a temperature means.",
    url: 'https://hot-or-not-xi.vercel.app/',
  },
  {
    name: 'Fantastic',
    image: placeholderImage('', 300, 220, '#e7f3ee', '#105252'),
    description:
      "Fantastic is an AI agent I built to help me manage my fantasy football team. Each week it reads my league from Sleeper and gives me a report with start/sit calls, waiver pickups, injury updates, and weather flags. Because Sleeper's API is read-only, I make the final moves in the app. It also writes my trash talk for the group chat.",
    inspo:
      "I got invited into a league with friends. I don't follow American football and had never played fantasy, so I drafted on vibes: Libras, middle children, and Latino players, because that's who I am. Once the season started, I needed slightly more strategy to handle injuries, bye weeks, and waiver decisions, so I built an agent to do the scouting for me.",
    url: '#',
  },
  {
    name: 'Recap Studio',
    image: placeholderImage('', 300, 220, '#eee', '#333'),
    description:
      "Recap Studio is an AI tool that makes large event photo libraries searchable by what's actually in the images. It uses Claude Vision to pull structured information from each photo and embeds it so users can search in natural language and generate post-event content from the results.",
    stack: 'Claude Vision API, Pinecone (vector search), FastAPI, Next.js, Supabase',
    inspo:
      "VC Unleashed is run entirely by volunteers who pour everything into the big day. By the time it's over, the energy has understandably gone into the event itself, and the recap is one of the most important pieces left to do. I built Recap Studio so the team could search all of the photos in plain language and pull together post-event content in a fraction of the time.",
    url: '#',
  },
  {
    name: 'ERVA',
    image: placeholderImage('', 300, 220, '#eafbe0', '#3d7a2a'),
    url: '#',
  },
  {
    name: 'Agnes',
    image: placeholderImage('', 300, 220, '#111', '#fff'),
    url: '#',
  },
]
