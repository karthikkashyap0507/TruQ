import corridor from '../assets/misc/amaryllis-corridor.jpg';
import sketchBedroom from '../assets/misc/sketch-bedroom.jpg';
import dining from '../assets/misc/neo-classical-dining.jpg';
import lounge from '../assets/misc/serene-lounge.jpg';
import minimal from '../assets/misc/minimal-residence.jpg';
import aesthetics from '../assets/projects/gulshan-dynasty/02.jpg';
import sketchLounge from '../assets/misc/sketch-lounge.jpg';

// Essays adapted from the studio's profile. Body blocks: p (paragraph), h (heading),
// quote (pull quote), lines (short verse-like lines).
export const articles = [
  {
    slug: 'time-over-trends',
    title: 'Time over Trends',
    category: 'Perspective',
    date: '2026-10-12',
    readTime: '4 min read',
    excerpt: 'Trendy homes age fast, but considered homes age into legacy — because lasting design invests in permanence, not dopamine.',
    image: corridor,
    body: [
      { type: 'lines', items: ['Trendy homes age fast.', 'Considered homes age into legacy.'] },
      { type: 'p', text: 'Every season brings a new colour of the year, a new silhouette, a new finish that promises to make a room feel current. For a while, it does. Then the moment passes, and what felt fresh begins to feel dated — not because it was badly made, but because it was made for a moment rather than for a life.' },
      { type: 'p', text: 'At TruQ we design for the long view. We look to history, geography and vernacular architecture before we look at what is fashionable, because the things that have lasted for centuries already know something about proportion, light and material that a trend has not had time to learn.' },
      { type: 'h', text: 'Permanence is a design decision' },
      { type: 'p', text: 'Choosing permanence is not the same as choosing the conservative. It means stone that patinates rather than chips, timber that deepens rather than fades, joinery made to be repaired rather than replaced. It means a plan that will still make sense when the children have grown and the house is hosting their children.' },
      { type: 'quote', text: 'Because rich minds invest in permanence, not dopamine.' },
      { type: 'p', text: 'A home designed this way rewards you slowly. It does not shout on the day you move in; it simply becomes more yours with every year — and that is the kind of value no trend can offer.' },
    ],
  },
  {
    slug: 'rich-mind-rich-home',
    title: 'Rich Mind, Rich Home',
    category: 'Perspective',
    date: '2026-09-28',
    readTime: '3 min read',
    excerpt: 'Your interior isn’t just decoration. It’s a mirror — of your thinking, your self-worth and your relationship with money.',
    image: sketchBedroom,
    body: [
      { type: 'lines', items: ['Your interior isn’t just decoration — it’s a mirror.', 'Of your thinking.', 'Of your self-worth.', 'And of your relationship with money.'] },
      { type: 'p', text: 'We often begin a project by asking clients not what they want their home to look like, but how they want to feel when they walk through the door. The answers are rarely about colour or style. They are about calm, about clarity, about having room to think.' },
      { type: 'p', text: 'The spaces we live in quietly shape the decisions we make in them. A cluttered study invites distraction; a considered one invites focus. A dining room designed for conversation makes conversation more likely. Design, at its best, is a set of signals you send to yourself every day.' },
      { type: 'quote', text: 'The truly wealthy don’t just design spaces. They design signals.' },
      { type: 'p', text: 'That is why we sketch by hand, edit relentlessly and give every room a role. A rich home is not the one with the most in it — it is the one where everything present is there for a reason.' },
    ],
  },
  {
    slug: 'design-is-strategy',
    title: 'Design Is Strategy',
    category: 'Practice',
    date: '2026-09-14',
    readTime: '4 min read',
    excerpt: 'Decoration is bought; strategy is designed. The art tells a story, the furniture promotes flow and the lighting sets the mood.',
    image: dining,
    body: [
      { type: 'p', text: 'Decoration is something you buy. Strategy is something you design. The difference shows up the moment you start living in a space: one feels assembled, the other feels inevitable.' },
      { type: 'lines', items: ['The art tells a story.', 'The furniture promotes flow.', 'The lighting enhances mood.', 'Every detail is engineered, not impulsed.'] },
      { type: 'h', text: 'Start with movement' },
      { type: 'p', text: 'Before we choose a single finish we map how people will move — where guests arrive, where the family gathers, where someone will want to be alone. Furniture is then placed to support that flow rather than interrupt it, and circulation becomes part of the experience rather than leftover space.' },
      { type: 'h', text: 'Then layer light' },
      { type: 'p', text: 'Lighting is the most powerful and most underestimated tool in a room. We plan it in layers — ambient, task and accent — so a dining room can be bright for a family breakfast and intimate for a dinner party without changing a single object in it.' },
      { type: 'p', text: 'Finally, art and objects are placed to tell the story of the people who live there. When every decision is part of the same plan, the result feels effortless — which is exactly what good strategy looks like from the outside.' },
    ],
  },
  {
    slug: 'everything-has-a-role',
    title: 'Everything Has a Role',
    category: 'Interiors',
    date: '2026-08-30',
    readTime: '3 min read',
    excerpt: 'A chair for thinking, a table for deals, a room for silence. It isn’t space — it’s psychological architecture.',
    image: lounge,
    body: [
      { type: 'p', text: 'In some homes, things pile up. In considered homes, everything has a purpose. The difference is rarely budget — it is intent.' },
      { type: 'lines', items: ['A chair for thinking.', 'A table for deals.', 'A room for silence.'] },
      { type: 'p', text: 'When we plan a residence we assign each room, and often each corner, a role. A reading chair is placed where the morning light falls. A study is proportioned for concentration rather than display. A powder room is treated as a small jewel because it is the one room every guest will see alone.' },
      { type: 'quote', text: 'It isn’t space. It’s psychological architecture.' },
      { type: 'p', text: 'Giving objects and rooms a role also makes editing easier. If something has no purpose, it has no place — and the space it leaves behind becomes room to breathe.' },
    ],
  },
  {
    slug: 'clutter-space-and-clarity',
    title: 'Clutter, Space and Clarity',
    category: 'Philosophy',
    date: '2026-08-16',
    readTime: '3 min read',
    excerpt: 'Clutter is mental noise and empty space is emotional clarity. Why fewer objects leave room for more energy.',
    image: minimal,
    body: [
      { type: 'lines', items: ['Clutter space = mental noise.', 'Empty space = emotional clarity.', 'Fewer objects = more energy.'] },
      { type: 'p', text: 'These three lines are pinned in our studio, and they guide almost every edit we make. Guided by nature and sustainability, every TruQ space is refined until only what has a purpose remains — elegance, purpose and enduring value.' },
      { type: 'p', text: 'Empty space is not the absence of design; it is design at its most deliberate. A wall left calm lets a single artwork speak. A floor left open lets light travel. A shelf with three objects says more than a shelf with thirty.' },
      { type: 'h', text: 'Minimal, not cold' },
      { type: 'p', text: 'Restraint does not have to feel austere. We bring warmth through texture — stone, timber, linen, plaster — so a pared-back room still feels generous and soft to live in. The aim is a home that quiets the mind, not one that keeps you on edge.' },
    ],
  },
  {
    slug: 'a-journey-of-many-aesthetics',
    title: 'A Journey of Many Aesthetics',
    category: 'Studio',
    date: '2026-08-02',
    readTime: '4 min read',
    excerpt: 'Modern, neo-classical, minimal and personalised — how one studio moves between design languages without losing its voice.',
    image: aesthetics,
    body: [
      { type: 'p', text: 'Over fifteen years our work has moved across many design languages — modern apartments, neo-classical estates, serene minimal retreats and deeply personal homes. Clients sometimes ask which one is truly “TruQ”. The honest answer is all of them.' },
      { type: 'h', text: 'Modern' },
      { type: 'p', text: 'Clean lines, honest materials and light used as a material in its own right — modern interiors that feel calm rather than clinical.' },
      { type: 'h', text: 'Neo-classical' },
      { type: 'p', text: 'Neo-classical design unites symmetry, grandeur and elegance: grand columns, symmetrical layouts and refined detailing create interiors that exude balance and sophistication for contemporary living.' },
      { type: 'h', text: 'Serene & minimal' },
      { type: 'p', text: 'Spaces edited down to their essentials, where texture and daylight do the work and the mind is given room to rest.' },
      { type: 'h', text: 'Personalised' },
      { type: 'p', text: 'Bespoke design is the art of creating spaces uniquely yours — crafted with intention, detail and soul. It reflects individuality, honours craftsmanship and transforms everyday living into a deeply personal, timeless experience.' },
      { type: 'quote', text: 'Craftsmanship: hands, minds, hearts.' },
      { type: 'p', text: 'What connects them is not a style but a way of working — listening first, sketching by hand and giving every detail a reason to exist.' },
    ],
  },
  {
    slug: 'the-closing-argument',
    title: 'The Closing Argument',
    category: 'Perspective',
    date: '2026-07-19',
    readTime: '2 min read',
    excerpt: 'Interior design is often dismissed as aesthetic. It is financial psychology made visible — a richer life starts with your environment.',
    image: sketchLounge,
    body: [
      { type: 'p', text: 'Interior design is often dismissed as aesthetic — something pleasant, something optional, something to do once everything else is settled. The people who have built lasting wealth tend to know better.' },
      { type: 'quote', text: 'It’s financial psychology made visible.' },
      { type: 'p', text: 'The rooms we spend our days in shape how we think, how we rest and how we decide. A calm, purposeful environment makes good decisions easier; a chaotic one makes them harder. Over years, that difference compounds.' },
      { type: 'lines', items: ['If you want a richer life,', 'you don’t start with money.', 'You start with your environment.'] },
      { type: 'p', text: 'That is the case we make with every project: that thoughtful design is not decoration, but one of the most enduring investments you can make in the way you live.' },
    ],
  },
];

export const getArticle = slug => articles.find(a => a.slug === slug);

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

// "12 OCT 2026" — fixed month names so output doesn't depend on the build machine's ICU data.
export function formatDate(iso) {
  const [y, m, d] = iso.split('-');
  return `${d} ${MONTHS[Number(m) - 1]} ${y}`;
}
