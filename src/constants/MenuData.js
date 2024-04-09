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
]

const sushi = [
    {
        title: 'Alaska Roll 8pcs',
        price: 'R219',
        tags: 'Salmon | Avocado | Topped with salmon, mayo & salmon roe / flying fish roe',
    },
    {
        title: 'Teriyaki Maki 6pcs',
        price: 'R56',
        tags: 'Grilled chicken roll | served with teriyaki sauce',
    },
    {
        title: 'Deep Fried Prawn California Roll 8pcs',
        price: 'R126',
        tags: 'Parwn & avocado roll | served with teriyaki sauce',
    },
    {
        title: 'Kyoto Platter',
        price: 'R233',
        tags: 'Deep fried prawn california 8pcs | Tuna maki 6pcs | Salmon nigiri 2pcs',
    },
    {
        title: 'Sushi Platter',
        price: 'R456',
        tags: 'Salmon california 8ps | Prawn fashion sandwich 6pcs | Tuna maki 6pcs | Avo maki 6pcs | Nigiri 4pcs ',
    },
]

// eslint-disable-next-line
export default { kitchen, sushi }