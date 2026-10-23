// Project content. Images live in src/assets/projects/<slug>/ — 01.jpg is the hero.
// `card` picks which image (1-based) is used on cards when the hero crops badly to 4:5.
export const filters = [
  { key: 'all', label: 'All' },
  { key: 'architecture', label: 'Architecture' },
  { key: 'interiors', label: 'Interiors' },
  { key: 'hospitality', label: 'Hospitality' },
  { key: 'workspace', label: 'Workspace' },
  { key: 'institutional', label: 'Institutional' },
];

export const projects = [
  {
    slug: 'raahe',
    title: 'RAAHE',
    subtitle: 'your stop, your story.',
    category: 'Architecture',
    tags: ['architecture', 'hospitality'],
    summary: 'Highway destination · Dining, coffee & retail',
    kind: 'Highway destination',
    intro:
      'More than just a pause on the highway, RAAHE is a destination crafted for travellers to refresh, recharge and rejoice.',
    body: [
      'With world-class dining, coffee, retail and leisure under one roof, RAAHE reimagines wayside amenities as a journey worth remembering. The building greets the highway with a sweeping, softly curved facade and a lantern-like entrance that glows after dark.',
      'A screen of sculpted panels wraps the long elevation, filtering daylight by day and turning the building into a beacon at night — a landmark that travellers recognise from the road and remember long after they leave.',
    ],
    meta: [
      ['Category', 'Architecture'],
      ['Typology', 'Highway destination'],
      ['Programme', 'Dining, coffee, retail & leisure'],
      ['Studio', 'TruQ Design Studio'],
    ],
  },
  {
    slug: 'the-heritage',
    title: 'The Heritage',
    subtitle: 'a neo-classical estate, composed for arrival.',
    category: 'Architecture',
    tags: ['architecture'],
    summary: 'Heritage estate · Neo-classical',
    kind: 'Heritage estate',
    intro:
      'A neo-classical estate where colonnades, chandeliers and a long reflecting pool set the rhythm of arrival — grandeur held in calm, symmetrical order.',
    body: [
      'Inspired by history, geography and vernacular architecture, The Heritage is composed as a sequence: a paved forecourt framed by palms, a central water channel that mirrors the facade, and pavilions that step out on either side to give each wing its own presence.',
      'Inside, the same discipline continues. Libraries, lounges and reading rooms were drawn by hand first — proportion, light and mood settled on paper long before a line was drafted on screen — so that every room has a role.',
    ],
    meta: [
      ['Category', 'Architecture'],
      ['Typology', 'Private estate'],
      ['Language', 'Neo-classical'],
      ['Studio', 'TruQ Design Studio'],
    ],
  },
  {
    slug: 'church-road-residence',
    title: 'Church Road Residence',
    subtitle: 'quiet grandeur, room by room.',
    category: 'Interiors',
    tags: ['interiors'],
    summary: '36,000 sq ft · New Delhi',
    kind: 'Private residence',
    intro:
      'A 36,000 sq ft private residence on Church Road, New Delhi — panelled walls, soft metallic detailing and warm light composed into rooms of quiet grandeur.',
    body: [
      'The residence was designed to host generously yet still feel personal. Bedrooms are wrapped in timber and glass wardrobes lit from within; lounges are layered with mouldings, mirrored niches and sculptural lighting that turn each room into a composed set piece.',
      'Powder rooms and baths carry the same language at an intimate scale — stone vanities, arched mirrors and framed artwork — so the home reads as one continuous, considered story from the entrance to its most private corner.',
    ],
    meta: [
      ['Category', 'Interiors'],
      ['Typology', 'Private residence'],
      ['Area', '36,000 sq ft'],
      ['Location', 'Church Road, New Delhi'],
    ],
  },
  {
    slug: 'nityanada',
    title: 'Nityanada',
    subtitle: 'modern sophistication, luxurious charm.',
    category: 'Interiors',
    tags: ['interiors'],
    summary: 'Luxury interiors · 2025',
    kind: 'Luxury interiors',
    intro:
      'Modern sophistication meets luxurious charm. This space redefines elegance with premium interiors that blend contemporary aesthetics with timeless appeal.',
    body: [
      'Sweeping ceiling coves, a cascading crystal installation and inlaid stone floors give the living and dining areas a sense of movement, while a softly lit circular mirror becomes the quiet signature of the home.',
      'Every surface is edited to let light do the work, so the rooms feel generous by day and warmly theatrical after dark.',
    ],
    meta: [
      ['Category', 'Interiors'],
      ['Typology', 'Private residence'],
      ['Year', '2025'],
      ['Studio', 'TruQ Design Studio'],
    ],
  },
  {
    slug: 'the-classical-story',
    title: 'The Classical Story',
    subtitle: 'proportion, told in stone and light.',
    category: 'Architecture',
    tags: ['architecture'],
    summary: 'Private residence · Classical',
    kind: 'Private residence',
    intro:
      'A private residence that retells the classical vocabulary — columns, cornices and balustraded balconies — with the restraint of a modern home.',
    body: [
      'The facade is built on symmetry: a tall entrance bay flanked by balconies, framed by pilasters and crowned by a deep cornice. Warm sandstone tones and bronze-framed glazing keep the composition grounded rather than grand for its own sake.',
      'Within, a double-height stair, a pool court and layered living rooms carry the same proportion indoors, with hand-detailed panels and lighting that make the classical feel lived-in.',
    ],
    meta: [
      ['Category', 'Architecture'],
      ['Typology', 'Private residence'],
      ['Language', 'Classical'],
      ['Studio', 'TruQ Design Studio'],
    ],
  },
  {
    slug: 'gulshan-dynasty',
    title: 'Gulshan Dynasty',
    subtitle: 'neo-classical grandeur, imperial charm.',
    category: 'Interiors',
    tags: ['interiors'],
    summary: 'Neo-classical interiors',
    kind: 'Neo-classical interiors',
    intro:
      'A true epitome of neo-classical grandeur infused with imperial charm — Gulshan Dynasty reimagines premium living with timeless elegance and modern sensibilities.',
    body: [
      'Tiered chandeliers, sculpted rugs and stone-topped tables set a confident tone in the living spaces, balanced by soft upholstery and calm, light-filled walls.',
      "Private rooms are more playful — a children's room where a tree grows through the storage, a bedroom that frames the view — proof that grandeur and warmth can live under one roof.",
    ],
    meta: [
      ['Category', 'Interiors'],
      ['Typology', 'Private residence'],
      ['Language', 'Neo-classical'],
      ['Studio', 'TruQ Design Studio'],
    ],
  },
  {
    slug: 'golf-course-road-apartment',
    title: 'Golf Course Road Apartment',
    subtitle: 'calm, tactile living above the city.',
    category: 'Interiors',
    tags: ['interiors'],
    summary: '3,000 sq ft · Gurgaon',
    kind: 'Private apartment',
    intro:
      'A 3,000 sq ft private apartment on Golf Course Road, Gurgaon — a calm, tactile home of woven panels, warm timber and soft light.',
    body: [
      'Rattan-inset wall panels and a sculptural dining table anchor the social spaces, while bedrooms are kept deliberately quiet: textured walls, layered linens and a single statement chair placed to catch the light.',
      'A dressing room lined in bronze glass and a dark, precise kitchen complete the apartment — every room given a purpose, every material chosen to age well.',
    ],
    meta: [
      ['Category', 'Interiors'],
      ['Typology', 'Private apartment'],
      ['Area', '3,000 sq ft'],
      ['Location', 'Golf Course Road, Gurgaon'],
    ],
  },
  {
    slug: 'the-regency-pattern',
    title: 'The Regency Pattern',
    subtitle: 'a campus built for dignity and daylight.',
    category: 'Architecture',
    tags: ['architecture', 'institutional'],
    summary: 'Institutional campus',
    kind: 'Institutional campus',
    intro:
      'An institutional campus that pairs confident red-brick architecture with bright, generous spaces for learning, sport and gathering.',
    body: [
      'A clock tower marks the entrance and gives the campus a civic presence, while long, well-lit wings organise classrooms around green courts. Covered sports courts and an indoor arena extend the school day into every season.',
      'Inside, colour is used with intent — cafés, lobbies and common rooms are cheerful and robust, designed with dignity, daylight and durability in mind.',
    ],
    meta: [
      ['Category', 'Architecture'],
      ['Typology', 'Institutional campus'],
      ['Programme', 'Learning, sport & community'],
      ['Studio', 'TruQ Design Studio'],
    ],
  },
  {
    slug: 'sanskara',
    title: 'Sanskara',
    subtitle: 'contemporary aesthetics, timeless appeal.',
    category: 'Interiors',
    tags: ['interiors'],
    summary: 'Luxury interiors · 2025',
    kind: 'Luxury interiors',
    intro:
      'Modern sophistication meets luxurious charm — premium interiors that blend contemporary aesthetics with timeless appeal.',
    body: [
      'A sweeping oval ceiling and a dining table carved from veined stone set the centre of the home, with tan leather seating and soft greys keeping the palette warm and restrained.',
      'Bedrooms continue the mood with layered textures and art-led walls — sophisticated, personal and quietly confident.',
    ],
    meta: [
      ['Category', 'Interiors'],
      ['Typology', 'Private residence'],
      ['Year', '2025'],
      ['Studio', 'TruQ Design Studio'],
    ],
  },
  {
    slug: 'central-delhi-apartment',
    title: 'Central Delhi Apartment',
    subtitle: 'onyx, timber and herringbone light.',
    category: 'Interiors',
    tags: ['interiors'],
    summary: '3,900 sq ft · New Delhi',
    kind: 'Private apartment',
    card: 2,
    intro:
      'A 3,900 sq ft private apartment in Central Delhi — onyx, warm timber and herringbone marble brought together in a calm, light-filled home.',
    body: [
      'The living room is anchored by sculpted onyx tables and a cascading green glass chandelier beneath a timber ceiling, while herringbone marble inlays draw a path through the apartment from the entrance to the dining room.',
      'Bedrooms, baths and a terrace with a soaking tub extend the same palette — arched mirrors, hand-painted botanical walls and soft textiles — so every space feels complete, calm and ready to be lived in.',
    ],
    meta: [
      ['Category', 'Interiors'],
      ['Typology', 'Private apartment'],
      ['Area', '3,900 sq ft'],
      ['Location', 'Central Delhi'],
    ],
  },
  {
    slug: 'devki',
    title: 'Devki',
    subtitle: 'modern luxury, quietly composed.',
    category: 'Interiors',
    tags: ['interiors'],
    summary: 'Luxury interiors · 2025',
    kind: 'Luxury interiors',
    intro:
      'Modern sophistication meets luxurious charm — a home that redefines elegance with premium interiors, blending contemporary aesthetics with timeless appeal.',
    body: [
      'Bedrooms are finished in soft timber, linen and stone, each with a reading corner placed to catch the daylight, while a gallery-like corridor of art ties the home together.',
      'Accents of green and charcoal keep the palette modern, and concealed lighting gives every room a calm, hotel-like ease.',
    ],
    meta: [
      ['Category', 'Interiors'],
      ['Typology', 'Private residence'],
      ['Year', '2025'],
      ['Studio', 'TruQ Design Studio'],
    ],
  },
  {
    slug: 'sidhivinayak',
    title: 'Sidhivinayak',
    subtitle: 'sleek, contemporary, refined.',
    category: 'Interiors',
    tags: ['interiors'],
    summary: 'Modern apartment',
    kind: 'Modern apartment',
    intro:
      'This exquisite apartment is a true representation of modern luxury — premium living that blends sleek contemporary design with a refined touch of elegance.',
    body: [
      'Deep teal upholstery, burgundy accents and bold art give the bedrooms a confident character, set against calm grey walls and linear lighting.',
      'Pendant clusters, sculptural side tables and framed views complete a home that feels both tailored and relaxed.',
    ],
    meta: [
      ['Category', 'Interiors'],
      ['Typology', 'Private apartment'],
      ['Language', 'Modern'],
      ['Studio', 'TruQ Design Studio'],
    ],
  },
];

export const getProject = slug => projects.find(p => p.slug === slug);

export const filterCounts = Object.fromEntries(
  filters.map(f => [f.key, f.key === 'all' ? projects.length : projects.filter(p => p.tags.includes(f.key)).length]),
);

// Home hero slideshow: project + which gallery image (1-based) to show.
export const heroSlides = [
  { slug: 'the-heritage', image: 1 },
  { slug: 'raahe', image: 1 },
  { slug: 'central-delhi-apartment', image: 1 },
  { slug: 'the-classical-story', image: 1 },
  { slug: 'golf-course-road-apartment', image: 2 },
];

export const featuredSlugs = ['raahe', 'the-heritage', 'church-road-residence', 'central-delhi-apartment', 'gulshan-dynasty'];
