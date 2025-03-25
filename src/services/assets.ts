import {
  current1,
  current2,
  current3,
  current4,
  current5,
  current_11,
  current_12,
  current_13,
  current_14,
  current_15,
  current_16,
  current_21,
  current_22,
  current_23,
  current_24,
  current_25,
  current_26,
  current_31,
  current_32,
  current_33,
  current_34,
  current_35,
  current_41,
  current_42,
  current_43,
  current_44,
  current_45,
  current_46,
  current_47,
  current_48,
  current_49,
  current_51,
  current_52,
  current_53,
  ongoing1,
  ongoing2,
  ongoing3,
  ongoing4,
  ongoing_11,
  ongoing_12,
  ongoing_13,
  ongoing_14,
  ongoing_15,
  ongoing_21,
  ongoing_22,
  ongoing_23,
  ongoing_24,
  ongoing_25,
  ongoing_31,
  ongoing_41,
  ongoing_42,
  ongoing_43,
  ongoing_44,
  sold1,
  sold2,
  sold3,
  sold_11,
  sold_12,
  sold_13,
  sold_21,
  sold_22,
  sold_23,
  sold_24,
  sold_25,
  sold_26,
} from "../assets";

export interface SoldAssets {
  id: number;
  img: string;
  name: string;
  location?: string;
  category: string;
  desc: string;
  purchased: string;
  sale: string;
  holding: string;
  purchasePrice: string;
  cost: string;
  salePrice: string;
  profit: string;
  roi: string;
  coc: string;
  imgs: string[];
}

export interface CurrentAssets {
  id: number;
  img: string;
  name: string;
  location?: string;
  category: string;
  desc: string;
  desc2?: string;
  desc3?: string;
  desc4?: string;
  desc5?: string;
  bed?: number;
  bath?: number;
  purchased?: number;
  parking?: number;
  volume?: string;
  built?: number;
  price?: number;
  lot?: string;
  imgs: string[];
}

// Current Assets
export const currentAssets: CurrentAssets[] = [
  {
    id: 1,
    img: current1,
    desc: "This recently renovated 3-bedroom, 2-bathroom ranch-style home in Greenbriar offers 1,737 square feet of living space across the main level and a full basement. The interior has been thoughtfully updated, with modern finishes throughout, creating a welcoming and comfortable atmosphere. The spacious living room provides a great space for everyday living, while the adjacent dining area offers a practical setting for meals. The kitchen features sleek countertops, stainless steel appliances, and a garden window.",
    desc2:
      "The hallway leads to two bedrooms, including a master suite with an attached bath. The full basement offers ample storage and flexible space that could serve as a home gym, recreation room, or additional living area. It also includes a third bedroom, a three-quarter bath, and a utility/laundry room",
    desc3:
      "Outside, the private backyard offers a peaceful retreat, ideal for outdoor gatherings or relaxation. The home is directly across from Cottonwood Creek Park, providing access to walking and running trails, sports complexes, a disc golf course, and the Cottonwood Creek Family Center YMCA.",
    desc4:
      "Located in the desirable Greenbriar neighborhood, this property balances easy access to Woodmen Road and local amenities with the tranquility of a family-friendly environment.",
    category: "Current",
    location: "Colorado",
    name: "Montarbor Dr., Greenbriar",
    purchased: 2020,
    bed: 3,
    bath: 2,
    parking: 1,
    volume: "1737 sq/ft",
    built: 1985,
    price: 450_000,
    imgs: [
      current1,
      current_11,
      current_12,
      current_13,
      current_14,
      current_15,
      current_16,
    ],
  },
  {
    id: 2,
    img: current2,
    desc: "Welcome to carefree living in this beautifully updated condo! This 3 bedroom, 2.5 bathroom condo offers 1,544 square feet of move-in ready living space in the highly sought-after District 20 school district.",
    desc2:
      "Step inside and be impressed by the fresh paint and brand new LVP flooring that flows throughout. The updated kitchen is a chef's dream, featuring sleek granite countertops and a brand new stainless steel appliance package.",
    desc3:
      "Upstairs, you'll find two generously sized bedrooms, a full bathroom and a laundry area. The finished basement offers a third bedroom and a full bathroom. With a half bathroom on the main level, there's plenty of space for everyone to get ready in the morning.",
    desc4:
      "This condo also features an attached 1-car garage for your convenience. This condo is ideally situated near the intersection of Austin Bluffs and Woodmen, offering easy access to a variety of shopping and dining options. Nature enthusiasts will love that the Briargate Trail runs behind the community, connecting to Cottonwood Creek Park with its expansive green spaces and recreational opportunities.",
    desc5:
      "Don't wait! This turn-key condo is ready for its new owner and won't last long. Schedule your showing today!",
    category: "Current",
    location: "Colorado springs",
    name: "Antelope valley point",
    purchased: 2000,
    bed: 3,
    bath: 2.5,
    parking: 2,
    volume: "1544 sq/ft",
    built: 2000,
    price: 300_000,
    lot: "Lot 0.13 acres",
    imgs: [
      current2,
      current_21,
      current_22,
      current_23,
      current_24,
      current_25,
      current_26,
    ],
  },
  {
    id: 3,
    img: current3,
    desc: "Located in a peaceful, desirable neighborhood, CO Mesa Springs 2537 offers a well-maintained home with excellent potential. Its prime location provides easy access to top-rated schools, nearby parks, and convenient shopping centers, making it a highly sought-after area. This property’s charm, combined with its strong location, presents a great opportunity for any investment portfolio.",
    category: "Current",
    location: "Colorado",
    name: "Messa Springs, Colorado Springs,",
    imgs: [
      current3,
      current_31,
      current_32,
      current_33,
      current_34,
      current_35,
    ],
  },
  {
    id: 4,
    img: current4,
    desc: "This charming 2-bedroom, 2-bathroom ranch-style end-unit condo is located in the cozy Lincolnshire complex, just off 11 Mile Rd. The spacious layout includes a finished basement offering ample storage and closet space. The kitchen features an eat-in nook, while the open dining room flows into a back patio and shared outdoor area. The large living room provides a comfortable space for entertaining.",
    desc2:
      "Additional features include a full-sized washer and dryer on the main level, an attached 2-car garage with opener, and a security system. The finished basement includes a carpeted family room, a separate area suitable for a library or study, and extra storage. Conveniently situated near highways, shopping, dining, places of worship, the post office, and the library.",
    category: "Current",
    location: "Michigan ",
    name: "West 11 Mile, Southfield",
    imgs: [
      current4,
      current_41,
      current_42,
      current_43,
      current_44,
      current_45,
      current_46,
      current_47,
      current_48,
      current_49,
    ],
  },
  {
    id: 5,
    img: current5,
    desc: "Nestled in the heart of Jerusalem, Jerusalem's Nest is a cozy apartment just a 2-minute walk from the vibrant Shuk Machane Yehuda. This charming space features a comfortable bed, a fully equipped kitchen with kosher dairy dishes, and essential amenities like heating and air conditioning. With a table perfect for dining, working, or studying, it offers a versatile living space. The apartment is designed to provide a peaceful and relaxing atmosphere in one of the city’s most sought-after neighborhoods. Enjoy easy access to everything Jerusalem has to offer – from bustling markets and dining options to cultural sites, all within walking distance.",
    category: "Current",
    location: "Israel",
    name: "Nisim Bachar, Jerusalem,",
    imgs: [current5, current_51, current_52, current_53],
  },
];

// Ongoing Assets
export const ongoing: CurrentAssets[] = [
  {
    id: 1,
    img: ongoing1,
    desc: "Located in the charming town of Cambridge, 7 Oak Street is currently undergoing a full renovation, transforming this property into a modern 3-bedroom, 2-bath home with two floors. The open floor layout enhances the space, creating a bright and welcoming atmosphere. The renovation includes a brand-new kitchen with modern finishes, making it perfect for both everyday living and entertaining. With updates throughout, this home is being designed with contemporary style and comfort in mind, offering great potential in a desirable location close to local amenities and the scenic Choptank River.",
    category: "In Progress",
    location: "Maryland",
    name: "Oak Street, Cambridge",
    imgs: [
      ongoing1,
      ongoing_11,
      ongoing_12,
      ongoing_13,
      ongoing_14,
      ongoing_15,
    ],
  },
  {
    id: 2,
    img: ongoing2,
    desc: "Located in a peaceful, well-established neighborhood, Crestwood Cir, Salisbury is currently undergoing a full renovation. This property is being transformed into a modern home with updated living spaces, including a brand-new kitchen and refreshed bathrooms. One of the standout features of this property is the large basement, which offers a fantastic opportunity for creativity – whether it’s turned into an entertainment area, home office, or additional living space. With its prime location in Salisbury, MD, and the potential for personalized updates, this home is shaping up to be an incredible investment.",
    category: "In Progress",
    location: "Maryland",
    name: "Crestwood Cir, Salisbury",
    imgs: [
      ongoing2,
      ongoing_21,
      ongoing_22,
      ongoing_23,
      ongoing_24,
      ongoing_25,
    ],
  },
  {
    id: 3,
    img: ongoing3,
    desc: "Situated in the heart of historic Bridgeville, 200 S Main St is a distinctive Victorian-era home constructed in 1889. This property boasts timeless charm, featuring original architectural details such as a fireplace believed to be crafted from stone salvaged from the old Cape Henlopen lighthouse. Currently undergoing renovation, the home is being thoughtfully updated to preserve its historic character while incorporating modern amenities. The spacious layout includes four bedrooms, three bathrooms, and a full basement, offering ample opportunities for customization. Located on a corner lot, the property is within walking distance to local shops, dining, and cultural sites. Additionally, it's a short drive to the resort beaches of Ocean City and the natural beauty of Assateague National Seashore, making it a perfect location to live, work, and play.",
    category: "In Progress",
    location: "Delaware",
    name: "S Main street, Bridgeville",
    imgs: [ongoing3, ongoing_31],
  },
  {
    id: 4,
    img: ongoing4,
    desc: "Located in a quiet neighborhood, 8695 Mar Lynn Dr is currently undergoing a full renovation. The home is being updated with modern finishes, including a completely new kitchen, refreshed bathrooms, and an improved layout to enhance the overall flow of the space. With a spacious interior and a large yard, this property offers plenty of potential. Conveniently located close to local amenities, schools, and parks, it is an excellent opportunity for buyers seeking a modern home in a great location.",
    category: "In Progress",
    location: "Maryland",
    name: "Mar Lynn Dr, Delmare,",
    imgs: [ongoing4, ongoing_41, ongoing_42, ongoing_43, ongoing_44],
  },
];

//Sold Assets
export const soldAssets: SoldAssets[] = [
  // Properties
  {
    id: 1,
    img: sold1,
    desc: "This property, purchased on July 18, 2024, and sold after a 4.5-month holding period, achieved a profit of $15,970 from an out-of-pocket investment of $31,110, resulting in an impressive ROl of 51.3%. The project demonstrates efficient execution and strategic management, delivering strong returns within a short timeframe",
    category: "Sold",
    location: "Maryland",
    name: "Long Ave, Salisbury",
    purchased: "July 18, 2024",
    sale: "December 6, 2024",
    holding: "4 1/2 Months",
    purchasePrice: "$135,000.00",
    cost: "$117,906.12",
    salePrice: "$290,000.00",
    profit: "$37,093.88",
    roi: "14.7%",
    coc: "",
    imgs: [sold1, sold_11, sold_12, sold_13],
  },
  {
    id: 2,
    img: sold2,
    desc: "This property was purchased on October 2, 2024, and sold after holding for 2 months and 25 days. It achieved a profit of $22,282.35 from an out-of-pocket investment of $32,130.07, resulting in an impressive ROl of 69.35%. The project showcases efficient execution and strategic management, delivering strong returns within a short timeframe.",
    category: "Sold",
    location: "Maryland",
    name: "Sherwood Cir., Salisbury",
    purchased: "Oct 2,2024",
    sale: "December 27, 2024",
    holding: "2 Months 25 days",
    purchasePrice: "$147,000",
    cost: "$100,717.65",
    salePrice: "$270,000",
    profit: "$22,282.35",
    roi: "9%",
    coc: "",
    imgs: [sold2, sold_21, sold_22, sold_23, sold_24, sold_25, sold_26],
  },
  {
    id: 3,
    img: sold3,
    desc: "This property was purchased on January 24, 2025, and sold on February 19, 2025, with a holding period of 26 days. Originally intended as a full flip, we identified an eager buyer who wanted the property as-is, allowing us to pivot and secure a strong return with minimal renovation.",
    category: "Sold",
    location: "Maryland",
    name: "Jesterville Rd, Nanticoke",
    purchased: "January 24, 2025",
    sale: "February 19, 2025",
    holding: "26 days",
    purchasePrice: "$189,000",
    cost: "$14,736.49",
    salePrice: "$250,000",
    profit: "$46,263.51",
    roi: "22.7%",
    coc: "",
    imgs: [sold3],
  },

  // For Sale Properties
  // {
  //   id: 1,
  //   img: hero2,
  //   desc: "Contemporary townhouses with private patios.",
  //   category: "For Sale",
  //   location: "Seattle, WA",
  //   name: "Emerald Bay Townhomes",
  //   purchased: "2022",
  // },
];

// Portfolio Assets
export const portfolioAssets = [
  {
    id: 1,
    img: current2,
    desc: "This updated 3-bedroom, 2.5-bathroom condo offers 1,544 square feet of living space and is located within the highly desirable District 20 school district. The interior features fresh paint and new LVP flooring throughout, creating a clean, modern feel. The updated kitchen is equipped with sleek granite countertops and a brand-new stainless steel appliance package, perfect for everyday cooking.",
    desc2:
      "Upstairs, you'll find two spacious bedrooms, a full bathroom, and a convenient laundry area. The finished basement adds a third bedroom and a full bathroom, providing flexible living space. A half-bathroom on the main level offers additional convenience for residents and guests.",
    desc3:
      "The condo also includes an attached 1-car garage for added convenience. Its location near the intersection of Austin Bluffs and Woodmen provides easy access to shopping, dining, and other amenities. Outdoor enthusiasts will appreciate the proximity to the Briargate Trail, which connects to Cottonwood Creek Park, offering expansive green spaces and recreational opportunities.",
    category: "Current",
    location: "Colorado",
    name: "Antelope Vally Point, Colorado Springs, ",
    purchased: 2000,
    bed: 3,
    bath: 2.5,
    parking: 2,
    volume: "1544 sq/ft",
    built: 2000,
    price: 300_000,
    lot: "Lot 0.13 acres",
    imgs: [
      current2,
      current_21,
      current_22,
      current_23,
      current_24,
      current_25,
      current_26,
    ],
  },
  {
    id: 2,
    img: sold1,
    desc: "This property, purchased on July 18, 2024, and sold after a 4.5-month holding period, achieved a profit of $15,970 from an out-of-pocket investment of $31,110, resulting in an impressive ROl of 51.3%. The project demonstrates efficient execution and strategic management, delivering strong returns within a short timeframe",
    category: "Sold",
    location: "Maryland",
    name: "110 Long Ave Salisbury",
    purchased: "July 18, 2024",
    sale: "December 6, 2024",
    holding: "4 1/2 Months",
    purchasePrice: "$135,000.00",
    cost: "$117,906.12",
    salePrice: "$290,000.00",
    profit: "$37,093.88",
    roi: "14.7%",
    coc: "",
    imgs: [sold1, sold_11, sold_12, sold_13],
  },
  {
    id: 3,
    img: current4,
    desc: "Enjoy easy living in this charming 2-bedroom, 2-full-bath ranch-style end-unit condo located in the cozy Lincolnshire complex just off 11 Mile Rd. The spacious rooms feature a finished basement with ample storage and closet space. The kitchen includes an eat-in nook, while the open dining room leads to a back patio and common outdoor area. The large living room is perfect for entertaining guests. Additional features include a full-sized washer and dryer on the main level, an attached 2-car garage with opener, and a security system. The finished basement includes a carpeted family room, a separate area ideal for a library or study, and more storage. Conveniently located near highways, shopping, dining, houses of worship, the post office, and the library.",
    category: "Current",
    location: "Michigan ",
    name: "West 11 mile 22490 MI",
    imgs: [
      current4,
      current_41,
      current_42,
      current_43,
      current_44,
      current_45,
      current_46,
      current_47,
      current_48,
      current_49,
    ],
  },
];
