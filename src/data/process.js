import brief from '../assets/misc/master-plan-aerial.jpg';
import sketch from '../assets/projects/the-heritage/04.jpg';
import plan from '../assets/misc/floor-plan.jpg';
import visual from '../assets/misc/living-circular-sofa.jpg';
import build from '../assets/misc/construction.jpg';
import handover from '../assets/projects/central-delhi-apartment/03.jpg';

// `paper: true` shows drawings on a white card, uncropped, as in the design.
export const stages = [
  {
    no: '01',
    title: 'Brief & site',
    text: 'We begin by listening — to how you live, work and host, and to what the site, its history, geography and climate can lend to the design.',
    image: brief,
  },
  {
    no: '02',
    title: 'Concept sketch',
    text: 'Ideas are drawn by hand first. A pin of a sketch captures proportion, light and mood long before a single line is drafted on screen.',
    image: sketch,
    paper: true,
  },
  {
    no: '03',
    title: 'Design development',
    text: 'Plans, sections and elevations are refined into one coordinated set, with every room given a role and every detail resolved on paper.',
    image: plan,
    paper: true,
  },
  {
    no: '04',
    title: 'Visualisation & materials',
    text: 'Photo-real views and physical material boards let you walk through the space before it is built — finishes, lighting and furniture together.',
    image: visual,
  },
  {
    no: '05',
    title: 'Craft & construction',
    text: 'Craftsmanship is hands, minds and hearts. Our site team works alongside artisans and contractors to protect the design through every stage of building.',
    image: build,
  },
  {
    no: '06',
    title: 'Handover & styling',
    text: 'Art, objects and light are placed with intention. We hand over spaces that are complete, calm and ready to be lived in.',
    image: handover,
  },
];
