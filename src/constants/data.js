import images from './images';

const wines = [
  {
    title: 'Meerlust Merlot',
    price: 'R950',
    tags: ' SA | Bottle',
  },
  {
    title: 'Spier Merlot',
    price: 'R240',
    tags: 'SA | Bottle',
  },
  {
    title: 'Castle Lite Draught',
    price: 'R55',
    tags: 'SA | 500 ml',
  },
  {
    title: 'Heineken',
    price: 'R40',
    tags: 'NL | 330 ml',
  },
  {
    title: 'Stella Artois',
    price: 'R40',
    tags: 'BE | 350 ml',
  },
];

const cocktails = [
  {
    title: 'Cosmopolitan',
    price: 'R70',
    tags: 'Vodka | Cointreau | Lime | Cranberry Juice',
  },
  {
    title: "Strawberry Supernova",
    price: 'R95',
    tags: '1 Smirnoff spin | Butlers strawberry | Shot of vodka',
  },
  {
    title: 'Mojito',
    price: 'R80',
    tags: 'White rum | Limes | Mojito syrup',
  },
  {
    title: 'Chairman island',
    price: 'R120',
    tags: 'Coke | White spirits | Lemon',
  },
  
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
