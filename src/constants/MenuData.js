import images from "./images"

const kitchen = [
    {
        title: 'Espatada Rump',
        price: 'R250',
        tags: '3 x Rump picanha cubes | Brushed with rock salt & bay leaves',
        image: images.espatada,
    },
    {
        title: 'Lamb Shank',
        price: 'R350',
        tags: 'Slow cooked | Served with side of your choice',
        image: images.lambShank,
    },
    {
        title: 'Lamb Ribs',
        price: 'R290',
        tags: '500g flame grilled lamb ribs | Brushed with our secret basting',
        image: images.lambRib,
    },
    {
        title: 'Ox Tail',
        price: 'R290',
        tags: 'Slow cooked ox tail | In our rich gravy sauce',
        image: images.oxTail,
    },
    {
        title: 'Fillet On The Bone',
        price: 'R380',
        tags: '500g fillet | Served with side of your choice',
        image: images.filletOnTheBone,
    },
];

const sushi = [
    {
        title: 'Sashimi Fusion 9pcs',
        price: 'R159',
        tags: 'Mixed slices of fresh fish',
        image: images.sashimi9ps,
    },
    {
        title: 'Sushi and Sashimi Fusion',
        price: 'R189',
        tags: 'Salmon California roll 4 pcs | Avo Maki 3 pcs | Nigiri 4 pcs | Sashimi 4 pcs',
        image: images.sushiSashimi,
    },
    {
        title: 'Spicy Tuna Hand Roll',
        price: 'R89',
        tags: 'Tuna | Onion  | Inhouse traditional Japanese Sauce',
        image: images.spicyTunaTemaki,
    },
]

// eslint-disable-next-line
export default { kitchen, sushi }