export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  originalPrice?: string;
  isPopular?: boolean;
  includes?: string[];
}

export interface MenuCategory {
  name: string;
  icon: string;
  priceLabel?: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    name: 'Momos',
    icon: '🥟',
    priceLabel: 'Half / Full',
    items: [
      { name: 'Afghani Momos (6/12Pcs.)', price: '₹120 / ₹240', isPopular: true },
      { name: 'Paneer Momos (6/12Pcs.)', price: '₹100 / ₹200' },
      { name: 'Kurkure Momos (6/12Pcs.)', price: '₹100 / ₹200', isPopular: true },
      { name: 'Gravy Momos (6/12Pcs.)', price: '₹120 / ₹220' },
      { name: 'Butter Momos (6/12Pcs.)', price: '₹70 / ₹140', isPopular: true },
      { name: 'White Sauce Momos (6/12Pcs.)', price: '₹150 / ₹250' },
      { name: 'Red Sauce Momos (6/12Pcs.)', price: '₹130 / ₹230' },
      { name: 'Fried Momos (6/12Pcs.)', price: '₹80 / ₹150' },
    ],
  },
  {
    name: 'Pizza',
    icon: '🍕',
    priceLabel: 'S / M / L',
    items: [
      { name: 'Margherita', price: '₹150 / ₹230 / ₹350' },
      { name: 'Mix Veg', price: '₹180 / ₹270 / ₹370' },
      { name: 'Paneer Chilli', price: '₹180 / ₹300 / ₹420', isPopular: true },
      { name: 'Tomato', price: '₹160 / ₹250 / ₹380' },
      { name: 'Onion', price: '₹160 / ₹250 / ₹380' },
      { name: 'Tomato Onion', price: '₹180 / ₹280 / ₹450' },
      { name: 'Sweet Corn', price: '₹200 / ₹390 / ₹480' },
      { name: 'Tandoori Mix Veg', price: '₹220 / ₹380 / ₹470' },
      { name: 'Tandoori Paneer', price: '₹240 / ₹400 / ₹480' },
      { name: 'Cheese Bust', price: '₹240 / ₹450 / ₹650' },
      { name: 'Mexican Salsa', price: '₹220 / ₹350 / ₹530' },
      { name: 'Farm House Pizza', price: '₹250 / ₹450 / ₹600', isPopular: true },
      { name: 'J.H. Premium Pizza', price: '₹300 / ₹500 / ₹680', isPopular: true },
    ],
  },
  {
    name: 'Wraps',
    icon: '🌯',
    items: [
      { name: 'Veg Mayo Wrap', price: '₹120' },
      { name: 'Veg Cheese Wrap', price: '₹150' },
      { name: 'Paneer Cheese Wrap', price: '₹180', isPopular: true },
    ],
  },
  {
    name: 'Garlic Bread',
    icon: '🥖',
    items: [
      { name: 'Garlic Stick Bread', price: '₹140' },
      { name: 'Cheese Garlic Bread', price: '₹180', isPopular: true },
      { name: 'Paneer Cheese Garlic Bread', price: '₹250' },
    ],
  },
  {
    name: 'Snacks',
    icon: '🍟',
    priceLabel: 'Half / Full',
    items: [
      { name: 'Chilli Paneer Dry', price: '₹200 / ₹350', isPopular: true },
      { name: 'Chilli Paneer Gravy', price: '₹250 / ₹380' },
      { name: 'Chilli Mushroom Dry', price: '₹200 / ₹300' },
      { name: 'Chilli Mushroom Gravy', price: '₹250 / ₹350' },
      { name: 'Chilli Potato Dry', price: '₹120 / ₹220' },
      { name: 'Chilli Potato Gravy', price: '₹200 / ₹350' },
      { name: 'Honey Chilli Potato', price: '₹130 / ₹230', isPopular: true },
      { name: 'French Fries', price: '₹100 / ₹200' },
      { name: 'Manchurian Dry', price: '₹120 / ₹200' },
      { name: 'Manchurian Gravy', price: '₹150 / ₹250' },
      { name: 'Soya Chaap', price: '₹150 / ₹300' },
      { name: 'Malai Chaap', price: '₹170 / ₹340', isPopular: true },
      { name: 'Kurkure Kabab', price: '₹150 / ₹300' },
    ],
  },
  {
    name: 'Noodles',
    icon: '🍜',
    priceLabel: 'Half / Full',
    items: [
      { name: 'Mix Veg Noodles', price: '₹70 / ₹140' },
      { name: 'Paneer Noodles', price: '₹100 / ₹200' },
      { name: 'Hakka Noodles', price: '₹100 / ₹200', isPopular: true },
      { name: 'Garlic Noodles', price: '₹100 / ₹200' },
      { name: 'Singapuri Noodles', price: '₹120 / ₹220' },
      { name: 'J.H. Premium Noodles', price: '₹170 / ₹250', isPopular: true },
    ],
  },
  {
    name: 'Pasta',
    icon: '🍝',
    priceLabel: 'Half / Full',
    items: [
      { name: 'Veg Pasta', price: '₹100 / ₹190' },
      { name: 'Masala Pasta', price: '₹100 / ₹190' },
      { name: 'Red Sauce Pasta', price: '₹100 / ₹190' },
      { name: 'White Sauce Pasta', price: '₹100 / ₹200', isPopular: true },
      { name: 'Yellow Sauce Pasta', price: '₹130 / ₹220' },
      { name: 'Pink Sauce Pasta', price: '₹150 / ₹250', isPopular: true },
    ],
  },
  {
    name: 'Rice',
    icon: '🍚',
    priceLabel: 'Half / Full',
    items: [
      { name: 'Mix Veg Fried Rice', price: '₹100 / ₹200' },
      { name: 'Paneer Fried Rice', price: '₹130 / ₹250' },
      { name: 'Triple Fried Rice', price: '₹150 / ₹300', isPopular: true },
    ],
  },
  {
    name: 'Sandwich',
    icon: '🥪',
    priceLabel: '4 Slice',
    items: [
      { name: 'Veg Sandwich', price: '₹100' },
      { name: 'Veg Cheese Sandwich', price: '₹140' },
      { name: 'Paneer Sandwich', price: '₹160' },
      { name: 'Paneer Cheese Sandwich', price: '₹180', isPopular: true },
      { name: 'Sweet Corn Sandwich', price: '₹150' },
      { name: 'Tandoori Sandwich', price: '₹180' },
      { name: 'Paneer Sweet Corn Cheese Sandwich', price: '₹200' },
      { name: 'J.H. Premium Sandwich', price: '₹300', isPopular: true },
    ],
  },
  {
    name: 'Burger',
    icon: '🍔',
    items: [
      { name: 'Veg Burger', price: '₹80' },
      { name: 'Paneer Cheese Burger', price: '₹100' },
      { name: 'Paneer Tikka Burger', price: '₹120' },
      { name: 'Double Cheese Paneer Tikka Burger', price: '₹160', isPopular: true },
      { name: 'Full Loaded Paneer Cheese', price: '₹200', isPopular: true },
      { name: 'J.H. Premium Burger', price: '₹250', isPopular: true },
    ],
  },
  {
    name: 'Rolls',
    icon: '🌮',
    priceLabel: 'Half / Full',
    items: [
      { name: 'Veg Spring Rolls', price: '₹50 / ₹100' },
      { name: 'Paneer Spring Rolls', price: '₹70 / ₹130' },
      { name: 'Veg Kathi Rolls (2Pcs./4Pcs.)', price: '₹100 / ₹220' },
      { name: 'Paneer Kathi Rolls (2Pcs./4Pcs.)', price: '₹130 / ₹250', isPopular: true },
      { name: 'Cheese Spring Rolls (1Pcs./2Pcs.)', price: '₹100 / ₹220' },
    ],
  },
  {
    name: 'Soup',
    icon: '🍲',
    items: [
      { name: 'Mix Veg Soup', price: '₹60' },
      { name: 'Tomato Soup', price: '₹80' },
      { name: 'Sweet Corn Soup', price: '₹90' },
      { name: 'Veg Tibetan Thukpa Soup', price: '₹150', isPopular: true },
      { name: 'Paneer Thukpa Soup', price: '₹180', isPopular: true },
    ],
  },
  {
    name: 'Tea',
    icon: '🍵',
    items: [
      { name: 'Milk Tea', price: '₹60' },
      { name: 'Black Assam Tea', price: '₹40' },
      { name: 'Lemon Tea', price: '₹50' },
      { name: 'Green Tea', price: '₹60' },
      { name: 'Ginger Lemon Honey Tea', price: '₹90', isPopular: true },
    ],
  },
  {
    name: 'Coffee',
    icon: '☕',
    items: [
      { name: 'Hot Coffee', price: '₹70' },
      { name: 'Cappuccino', price: '₹70' },
      { name: 'Espresso Black Coffee (SHOT)', price: '₹60' },
      { name: 'David Doff', price: '₹90' },
      { name: 'Cold Coffee', price: '₹100', isPopular: true },
      { name: 'Cold Coffee Ice Cream', price: '₹130', isPopular: true },
      { name: 'Chocolate Hot Coffee', price: '₹90' },
      { name: 'KitKat Hot Coffee', price: '₹120' },
      { name: 'Oreo Coffee', price: '₹120' },
    ],
  },
  {
    name: 'Shakes',
    icon: '🥤',
    items: [
      { name: 'Lassi with Dry Fruits', price: '₹90' },
      { name: 'Banana Shake with Dry Fruit', price: '₹90' },
      { name: 'Mango Shake with Dry Fruit', price: '₹100' },
      { name: 'Strawberry Shake', price: '₹100' },
      { name: 'Vanilla Shake', price: '₹100' },
      { name: 'Chocolate Shake', price: '₹100', isPopular: true },
      { name: 'Oreo Shake', price: '₹120', isPopular: true },
      { name: 'KitKat Shake', price: '₹120' },
      { name: 'Chocolate Banana Shake', price: '₹120' },
      { name: 'Chocolate Mango Shake', price: '₹140' },
    ],
  },
  {
    name: 'Mocktails',
    icon: '🍹',
    items: [
      { name: 'Blue Lagoon Mocktail', price: '₹100', isPopular: true },
      { name: 'Green Apple Mocktail', price: '₹100' },
      { name: 'Strawberry Pop Store', price: '₹120' },
      { name: 'Pineapple Mocktail', price: '₹120' },
      { name: 'Black Current', price: '₹120' },
      { name: 'Orange Mocktail', price: '₹100' },
      { name: 'Kiwi Mocktail', price: '₹150' },
    ],
  },
  {
    name: 'Mojito',
    icon: '🍃',
    items: [
      { name: 'Virgin Mint Mojito', price: '₹90' },
      { name: 'Masala Mint Mojito', price: '₹110', isPopular: true },
      { name: 'Orange Mojito', price: '₹120' },
      { name: 'Pineapple Mojito', price: '₹110' },
      { name: 'Strawberry Mojito', price: '₹120' },
    ],
  },
  {
    name: 'Soda',
    icon: '🥂',
    items: [
      { name: 'Fresh Lemon Soda', price: '₹70' },
      { name: 'Lemon Masala Soda', price: '₹90' },
      { name: 'Kala Khatta Soda', price: '₹100', isPopular: true },
      { name: 'Sweet Lemon Soda', price: '₹90' },
    ],
  },
  {
    name: 'Special Combos',
    icon: '⭐',
    items: [
      {
        name: 'Combo 1',
        price: '₹600',
        originalPrice: '₹680',
        isPopular: true,
        includes: [
          'Mix Veg Pizza (S)',
          'Butter Momo',
          'Cold Coffee',
          'Kurkure Momo',
          'Mix Veg Noodles',
          'Coke (40Rs.)',
          'Milk Tea',
          'Mix Veg Sandwich',
        ],
      },
      {
        name: 'Combo 2',
        price: '₹800',
        originalPrice: '₹910',
        isPopular: true,
        includes: [
          'Paneer Chilli Pizza (S)',
          'Afghani Momos',
          'Shakes',
          'Hakka / Singapuri Noodles',
          'Mocktails',
          'Milk Tea',
          'Butter Momos',
          'Cheese Garlic Bread',
          'Cheese Burger',
        ],
      },
      {
        name: 'Combo 3',
        price: '₹1350',
        originalPrice: '₹1600',
        isPopular: true,
        description: 'Pizza (S) 200 Rs. + Choose from: Noodles, Momos, Soup, Sandwich, Burger, Shakes, Mocktails, Mojito, Tea, Rolls, Spring Rolls, Wraps',
      },
    ],
  },
];

export const categoryNames = menuCategories.map(c => c.name);
