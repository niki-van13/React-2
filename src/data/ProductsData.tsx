import product1_1 from '../assets/image/product1-1.jpeg'
import product1_2 from '../assets/image/product1-2.jpeg'
import product1_3 from '../assets/image/product1-3.jpeg'

import product2_1 from '../assets/image/product2-2.jpeg'
import product2_2 from '../assets/image/product2-1.jpeg'
import product2_3 from '../assets/image/product2-3.jpeg'

import product3_1 from '../assets/image/product3-2.jpeg'
import product3_2 from '../assets/image/product3-2.jpeg'
import product3_3 from '../assets/image/product3-1.jpeg'

import product4_1 from '../assets/image/product4-1.jpeg'
import product4_2 from '../assets/image/product4-2.jpeg'
import product4_3 from '../assets/image/product4-3.jpeg'

import product6_1 from '../assets/image/product6-3.webp'
import product6_2 from '../assets/image/product6-2.jpeg'

import product5_1 from '../assets/image/product5-2.jpeg'
import product5_2 from '../assets/image/product5-1.jpeg'

import product7_1 from '../assets/image/product7-1.jpeg'
import product7_2 from '../assets/image/product7-2.jpeg'
import product7_3 from '../assets/image/product7-3.jpeg'

import product8_1 from '../assets/image/product8-1.webp'



export interface Product {
    id: number,
    title: string,
    slug:string,
    description: string,
    image: [
        string,
        string | null,
        string | null
    ],
    price: number,
    discountPrice: number
}
const products: Product[] = [
    {
        id: 1,
        title: "TREASURE",
        slug: "treasure-shimmer",
        description: "Neat bracelet with three white, facetted zircons. Made of sterling silver, plated with 18K gold. Feel free to combine it with other jewelry from the same collection.",
        image: [
            product1_1,
            product1_2,
            product1_3
        ],
        price: 599,
        discountPrice: 499,
    }, {
        id: 2,
        title: "Petite",
        slug: "petite",
        description: "This dainty ring features sheer sparkle that extends halfway around the ring. The center gem appears to float above the delicate band (1/4 total carat weight).",
        image: [
            product2_1,
            product2_2,
            product2_3
        ],
        price: 1150,
        discountPrice: 900,
    }, {
        id: 3,
        title: "Viromy",
        slug: "viromy-dainty",
        description: "Viromy gold CZ necklaces for women are made of hypoallergenic material and 14k gold plated material making this a great choice for those with very sensitive skin.Never tarnish and break. This simple cute necklace for women is made to last and we didn’t compromise on quality for looks. In addition, it’s sturdy and can hold up pretty well with a strong lobster claw clasp that provides security.",
        image: [
            product3_1,
            product3_2,
            product3_3
        ],
        price: 899,
        discountPrice: 600,
    }, {
        id: 4,
        title: "SWAROVSKI",
        slug: "swarovski-damen",
        description: "By its very nature eternal love must have a past, a present, and a future, and this pair of stunning pierced earrings has been conceived with that romantic concept in mind. A trio of clear crystals are embellished with pavé and rhodium plating in this scintillating design. Timelessly elegant, they will be a treasured keepsake. A matching necklace and ring are available.",
        image: [
            product4_1,
            product4_2,
            product4_3
        ],
        price: 1050,
        discountPrice: 900,
    }, {
        id: 5,
        title: "Diamantring",
        slug: "Diamantring",
        description: "Ring i 18K vitt guld med sju diamanter 0,50 ct WP .",
        image: [
            product5_1,
            product5_2,
            product5_2

        ],
        price: 1850,
        discountPrice: 900,
    }, {
        id: 6,
        title: "Elvina",
        slug: "Elvina Necklace",
        description: "Ett gun metal pläterat halsband med en stor Mother of Pearl som är 2 cm i diameter. Halsbandet har en justerbar längd på 54-60 cm. Nickelsäkert.",
        image: [
            product6_1,
            product6_2,
            product6_2

        ],
        price: 349,
        discountPrice: 240,
    }, {
        id: 7,
        title: "Treasurre",
        slug: "Treasurre Pearl Hoops",
        description: "Söta hoop-örhängen utsmyckade med en vackert droppformad sötvattenpärla. Tillverkade i sterling silver.",
        image: [
            product7_1,
            product7_2,
            product7_2

        ],
        price: 699,
        discountPrice: 400,
    }, {
        id: 8,
        title: "Armband",
        slug: "Armband Open Key",
        description: "Den nya Open Key Cuff-serien från Skultuna har den ikoniska nyckeln från en klassisk Skultuna-produkt. Den finns i förgyllt och i polerat stål. 2mm bred.",
        image: [
            product8_1,
            product8_1,
            product8_1

        ],
        price: 698,
        discountPrice: 398,
    }
]
export default products














/*

    , {
        id: 1,
        title: "TREASURE SHIMMER BRACELET GOLD ",
        slug: "treasure-shimmer",
        description: "Neat bracelet with three white, facetted zircons. Made of sterling silver, plated with 18K gold. Feel free to combine it with other jewelry from the same collection.",
        image: pic1,
        price: 599,
        discountPrice: 449,
    }, {
        id: 2,
        title: "Bracelet Open Key ",
        slug: "bracelet-open",
        description: "The new Open Key Cuff series from Skultuna has the iconic key from a classic Skultuna product. It is available in gilded and polished steel. 2mm wide.",
        image: pic2,
        price: 698,
        discountPrice: 598,
    }    , {
        id: 3,
        title: "Blades Bracelet",
        slug: "blades",
        description: "Bracelet in undulating 925 sterling silver with a matt and shiny side that gives an extra effect. "Swirling Blades catch the eye with their shiny & matte playfulness." - Efva Attling.",
        image: pic3,
        price: 2200,
        discountPrice: 2100,
    }, {
        id: 4,
        title: "Beach Bum Bracelet ",
        slug: "beach",
        description: "The colored Heishi pearls give the Beach Bum bracelet a completely unique look of hours spent in the sea, swimming and surfing. Made for the casual surfer look.",
        image: pic4,
        price: 650,
        discountPrice: 500,
    }, {
        id: 5,
        title: "Chêne Raw Cuff Bracelet",
        slug: "chene",
        description: "Bracelet from Skultuna Chêne series. The Chêne series is inspired by nature.",
        image: pic5,
        price: 788,
        discountPrice: 700,
    },{
        id: 6,
        title: "Childhood Bracelet",
        slug: "childhood",
        description: "A bracelet adorned with ten semi-precious stones, where 10% of each bracelet sold goes to the World Childhood Foundation. Each stone represents a piece of the UN Convention on the Rights of the Child.",
        image: pic6,
        price: 1690,
        discountPrice: 1500,
    },{
        id: 7,
        title: "Bracelet Cuff medium by Kumvana Gomani",
        slug: "bracelet-cuff",
        description: "Stylish bracelet made of recycled nickel-free metal from landmines. Idea and design Kumvana Gomani Holmberg. Kumvana Gomani Holmberg works together with a non-profit organization that helps vulnerable Cambodians to earn a living by producing jewelry. The bracelet can be bent to fit different sizes and is free of nickel.",
        image: pic7,
        price: 350,
        discountPrice: 250,
    }
    







    //rings
    , {
        id: 8,
        title: "Petite Shared Prong Diamond Engagement Ring",
        slug: "petite",
        description: "This dainty ring features sheer sparkle that extends halfway around the ring. The center gem appears to float above the delicate band (1/4 total carat weight).",
        image: pic8,
        price: 1150,
        discountPrice: 1100,
    },{
        id: 9,
        title: "Diamond ring in 18K gold",
        slug: "diamond",
        description: "A perfect ring meets a sharp line in this captivating ring that goes hand in hand with Georg Jensen's legacy of bold sculptural jewelry. This ring has the perfect balance between elegance and proportion, and appeals to all women with a confident style.",
        image: pic9,
        price: 5498,
        discountPrice: 4999,
    }, {
        id: 10,
        title: "Diamantring i 18K guld ",
        slug: "diamantring",
        description: "Ring in 18K white gold with seven diamonds 0.50 ct WP.",
        image: pic10,
        price: 1899,
        discountPrice: 1700,
    }, {
        id: 11,
        title: "Ring in 18K gold",
        slug: "ring",
        description: "Ring in 18K gold with pink cubic zirconia.",
        image: pic11,
        price: 1789,
        discountPrice: 1700,
    },{
        id: 12,
        title: "Damring ",
        slug: "damring",
        description: "Wide ring in 925 sterling silver with an uneven surface. "The inspiration for the Moonwalk is taken from the moon and its rolling landscapes and craters..",
        image: pic12,
        price: 2349,
        discountPrice: 2300,
    },{
        id: 13,
        title: "Offspring, Sterling silver with diamonds",
        slug: "offspring",
        description: "The 'Offspring' collection consists of two different forms that go into each other, where the smaller one is protected by the larger one. The collection is a clear symbol of the infinite strength of love. The jewelry is inspired by the strong bond between a mother and her children, but represents the same strong bond of love between siblings, partners and friends. Jacqueline Rabun's emotional and symbolic jewelery has a timeless beauty that pays homage to the strong family ties - especially when the jewelery can be passed on to the next generation.'",
        image: pic13,
        price: 5500,
        discountPrice: 5299,
    }







      //Necklace
    , {
        id: 14,
        title: "Viromy Dainty Cubic Zirconia Necklaces",
        slug: "viromy-dainty",
        description: "Viromy gold CZ necklaces for women are made of hypoallergenic material and 14k gold plated material making this a great choice for those with very sensitive skin.Never tarnish and break. This simple cute necklace for women is made to last and we didn’t compromise on quality for looks. In addition, it’s sturdy and can hold up pretty well with a strong lobster claw clasp that provides security.",
        image: pic14,
        price: 899,
        discountPrice: 600,
    },{
        id: 15,
        title: "Violet Necklace ",
        slug: "violet necklace",
        description: "Halsband i silver med en blomma. 'Det vackra från trädgården.' - Efva Attling.",
        image: pic15,
        price: 1300,
        discountPrice: 1249,
    }, {
        id: 16,
        title: "Isabel Bernard Belleville Necklace Gold",
        slug: "isabel",
        description: "Heart necklace has a neat chain attached to the classic heart that can be combined with a bounce. Seen here in shiny gold plating. Size 10x8 mm, adjustable length of the necklace 42-45 cm. Shiny gold plating on stainless steel.",
        image: pic16,
        price: 1670,
        discountPrice: 1570,
    }, {
        id: 17,
        title: "Pearls For Girls – Elvina Necklace ",
        slug: "pearls",
        description: "A gun metal plated necklace with a large Mother of Pearl that is 2 cm in diameter. The necklace has an adjustable length of 54-60 cm. Nickel safe.",
        image: pic17,
        price: 349,
        discountPrice: 300,
    },{
        id: 18,
        title: "Classic Petite Necklace Bronze, Gold",
        slug: "classic",
        description: "Classic Petite Necklace with a Swarovski Pearl. Size: 8 x 10 mm. The veneer bracelet is made of sterling silver 925 with 18K gold / rhodium plating. The chain is about 50 cm long and fastens with a spring lock. Designed in Sweden and handmade in Greece. Delivered in Caroline Svedbom box. Made of brass and gilded with 18 K gold / rhodium plating.",
        image: pic18,
        price: 395,
        discountPrice: 300,
    },{
        id: 19,
        title: "Identity Necklace",
        slug: "identity",
        description: "IOAKU Identity Necklace - is a stylish necklace with a letter with some Swarovski crystals on one side and a flat surface on the other side. The necklace is made of surgical stainless steel and 5 layers of PVD cover with genuine 18k gold / silver, which means that it is possible to shower and bathe in the jewelry. All letters between A to Z are in the collection. 18k Gold / Silver. Nickel, lead and cadmium free. Delivered in an exclusive jewelry box from IOAKU. Design by Fanny Ek. Dimensions: Letter: 2.8x4 cm diameter, length: 45cm with a 6cm extension.",
        image: pic19,
        price: 399,
        discountPrice: 250,
    }
    
    



    //EARRINGS
    , {
        id: 20,
        title: "SWAROVSKI DAMEN",
        slug: "swarovski-damen",
        description: "By its very nature eternal love must have a past, a present, and a future, and this pair of stunning pierced earrings has been conceived with that romantic concept in mind. A trio of clear crystals are embellished with pavé and rhodium plating in this scintillating design. Timelessly elegant, they will be a treasured keepsake. A matching necklace and ring are available.",
        image: pic20,
        price: 1050,
        discountPrice: 900,
    },{
        id: 21,
        title: "Treasurre Pearl Hoops Silver",
        slug: "treasurre",
        description: "Cute hoop earrings adorned with a beautiful drop-shaped freshwater pearl. Made of sterling silver.",
        image: pic21,
        price: 699,
        discountPrice: 499,
    }, {
        id: 22,
        title: "Ellera Grande Earrings",
        slug: "ellera-grande",
        description: "Earrings in sterling silver 925 gold plated with 18 carat gold with polished surface and faceted multicolored zircons.",
        image: pic22,
        price: 899,
        discountPrice: 849,
    }, {
        id: 23,
        title: "Aqua Swell Hoop",
        slug: "aqua",
        description: "Inspired by the color of oceanic waves. You can actually hear the ocean breathing as you place the Aqua Swell frame next to your ear. Each part will vary slightly in color, which makes each part unique.",
        image: pic23,
        price: 800,
        discountPrice: 600,
    },{
        id: 24,
        title: "Ebba earrings",
        slug: "ebba",
        description: "Shimmering snake earrings with small crystals. Silver plated.",
        image: pic24,
        price: 390,
        discountPrice: 350,
    },{
        id: 25,
        title: "Bermuda Triangle Earring",
        slug: "bermuda",
        description: "Large triangular earring.",
        image: pic25,
        price: 1199,
        discountPrice: 999,
    },{
        id: 26,
        title: "Blush – Meow Ball",
        slug: "blush – meow",
        description: "A leopard faux fur earring and a dangling leopard pompom ball. The height of the earring is 3.4 cm. Pin in surgical steel. Nickel safe.",
        image: pic26,
        price: 349,
        discountPrice: 249,
    }
    */
