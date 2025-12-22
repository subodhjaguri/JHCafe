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
      { name: 'Afghani Momos', price: '₹120 / ₹240', isPopular: true },
      { name: 'Paneer Momos', price: '₹90 / ₹180' },
      { name: 'Kurkure Momos', price: '₹100 / ₹200', isPopular: true },
      { name: 'Gravy Momos', price: '₹100 / ₹200' },
      { name: 'Butter Momos', price: '₹70 / ₹140', isPopular: true },
      { name: 'White Sauce Momos', price: '₹140 / ₹250' },
      { name: 'Red Sauce Momos', price: '₹100 / ₹200' },
      { name: 'Simple Fried Momos', price: '₹80 / ₹160' },
    ],
  },
  {
    name: 'Pizza',
    icon: '🍕',
    priceLabel: 'S / M / L',
    items: [
      { name: 'Plain Cheese', price: '₹120 / ₹200 / ₹300' },
      { name: 'Margherita', price: '₹140 / ₹220 / ₹320' },
      { name: 'Mix Veg', price: '₹160 / ₹250 / ₹350' },
      { name: 'Paneer Chilli', price: '₹170 / ₹300 / ₹400', isPopular: true },
      { name: 'Tomato', price: '₹150 / ₹250 / ₹380' },
      { name: 'Onion', price: '₹150 / ₹250 / ₹380' },
      { name: 'Tomato Onion', price: '₹180 / ₹280 / ₹450' },
      { name: 'Sweet Corn', price: '₹200 / ₹380 / ₹500' },
      { name: 'Tandoori Mix Veg', price: '₹200 / ₹380 / ₹450' },
      { name: 'Tandoori Paneer', price: '₹220 / ₹400 / ₹500' },
      { name: 'Paneer Tikka', price: '₹220 / ₹400 / ₹550' },
      { name: 'Cheese Bust', price: '₹220 / ₹400 / ₹600' },
      { name: 'Mexican Salsa', price: '₹200 / ₹350 / ₹500' },
      { name: 'Farm House Pizza', price: '₹250 / ₹400 / ₹550', isPopular: true },
    ],
  },
  {
    name: 'Wraps',
    icon: '🌯',
    items: [
      { name: 'Veg Mayo Wrap', price: '₹100' },
      { name: 'Veg Cheese Wrap', price: '₹130' },
      { name: 'Paneer Wrap', price: '₹130' },
      { name: 'Paneer Cheese Wrap', price: '₹150', isPopular: true },
    ],
  },
  {
    name: 'Garlic Bread',
    icon: '🥖',
    items: [
      { name: 'Garlic Stick Bread', price: '₹120' },
      { name: 'Plain Garlic Bread', price: '₹110' },
      { name: 'Cheese Garlic Bread', price: '₹140', isPopular: true },
      { name: 'Paneer Cheese Garlic Bread', price: '₹140' },
      { name: 'Veg Garlic Bread', price: '₹180' },
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
      { name: 'Honey Chilli Potato', price: '₹120 / ₹220', isPopular: true },
      { name: 'French Fries', price: '₹100 / ₹200' },
      { name: 'Manchurian Dry', price: '₹120 / ₹220' },
      { name: 'Manchurian Gravy', price: '₹150 / ₹250' },
    ],
  },
  {
    name: 'Noodles',
    icon: '🍜',
    priceLabel: 'Half / Full',
    items: [
      { name: 'Plain Noodles', price: '₹50 / ₹90' },
      { name: 'Mix Veg Noodles', price: '₹70 / ₹130' },
      { name: 'Paneer Noodles', price: '₹100 / ₹190' },
      { name: 'Hakka Noodles', price: '₹100 / ₹190', isPopular: true },
      { name: 'Garlic Noodles', price: '₹90 / ₹180' },
      { name: 'Singapuri Noodles', price: '₹100 / ₹190' },
    ],
  },
  {
    name: 'Pasta',
    icon: '🍝',
    priceLabel: 'Half / Full',
    items: [
      { name: 'Veg Pasta', price: '₹90 / ₹180' },
      { name: 'Masala Pasta', price: '₹90 / ₹180' },
      { name: 'Red Sauce Pasta', price: '₹90 / ₹180' },
      { name: 'White Sauce Pasta', price: '₹100 / ₹200', isPopular: true },
      { name: 'Yellow Sauce Pasta', price: '₹120 / ₹230' },
      { name: 'Pink Sauce Pasta', price: '₹120 / ₹230', isPopular: true },
      { name: 'Chinese Pasta', price: '₹100 / ₹200' },
    ],
  },
  {
    name: 'Rice',
    icon: '🍚',
    priceLabel: 'Half / Full',
    items: [
      { name: 'Mix Veg Fried Rice', price: '₹100 / ₹200' },
      { name: 'Jeera Fried Rice', price: '₹90 / ₹170' },
      { name: 'Triple Fried Rice', price: '₹150 / ₹250', isPopular: true },
      { name: 'Paneer Fried Rice', price: '₹150 / ₹250' },
    ],
  },
  {
    name: 'Sandwich',
    icon: '🥪',
    items: [
      { name: 'Veg Sandwich', price: '₹100' },
      { name: 'Paneer Sandwich', price: '₹120' },
      { name: 'Veg Cheese Sandwich', price: '₹140' },
      { name: 'Paneer Cheese Sandwich', price: '₹160', isPopular: true },
      { name: 'Sweet Corn Sandwich', price: '₹150' },
      { name: 'Tandoori Sandwich', price: '₹150' },
      { name: 'Sweet Corn Paneer Cheese Sandwich', price: '₹180' },
    ],
  },
  {
    name: 'Burger',
    icon: '🍔',
    items: [
      { name: 'Veg Burger', price: '₹80' },
      { name: 'Paneer Cheese Burger', price: '₹100' },
      { name: 'Potato Tikki Burger', price: '₹90' },
      { name: 'Paneer Tikki Burger', price: '₹120' },
      { name: 'Double Cheese Paneer Tikka Burger', price: '₹170', isPopular: true },
      { name: 'Full Loaded Cheese Burger', description: 'with French Fries', price: '₹200', isPopular: true },
    ],
  },
  {
    name: 'Rolls',
    icon: '🌮',
    priceLabel: 'Half / Full',
    items: [
      { name: 'Veg Spring Rolls', price: '₹50 / ₹100' },
      { name: 'Paneer Spring Rolls', price: '₹60 / ₹120' },
      { name: 'Veg Kathi Rolls', price: '₹100 / ₹200' },
      { name: 'Paneer Kathi Rolls', price: '₹120 / ₹240', isPopular: true },
      { name: 'Cheese Spring Rolls', price: '₹150 / ₹300' },
    ],
  },
  {
    name: 'Soup',
    icon: '🍲',
    items: [
      { name: 'Mix Veg Soup', price: '₹60' },
      { name: 'Tomato Soup', price: '₹70' },
      { name: 'Manchow Soup', price: '₹80' },
      { name: 'Sweet Corn Soup', price: '₹80' },
      { name: 'Veg Tibetan Thukpa Soup', price: '₹120', isPopular: true },
      { name: 'Paneer Thukpa Soup', price: '₹140', isPopular: true },
    ],
  },
  {
    name: 'Tea',
    icon: '🍵',
    items: [
      { name: 'Milk Tea', price: '₹40' },
      { name: 'Black Assam Tea', price: '₹30' },
      { name: 'Lemon Tea', price: '₹50' },
      { name: 'Masala Tea', price: '₹60', isPopular: true },
      { name: 'Ginger Lemon Honey Tea', price: '₹90' },
      { name: 'Green Tea', price: '₹50' },
      { name: 'Tibetan Butter Tea', price: '₹80', isPopular: true },
    ],
  },
  {
    name: 'Coffee',
    icon: '☕',
    items: [
      { name: 'Hot Coffee', price: '₹70' },
      { name: 'Cappuccino', price: '₹60' },
      { name: 'Espresso Black Coffee', price: '₹50' },
      { name: 'Davidoff Coffee', price: '₹80' },
      { name: 'Butter Coffee', price: '₹80' },
      { name: 'Cold Coffee', price: '₹100', isPopular: true },
      { name: 'Cold Coffee with Ice Cream', price: '₹130', isPopular: true },
      { name: 'Chocolate Hot Coffee', price: '₹90' },
      { name: 'KitKat Hot Coffee', price: '₹110' },
      { name: 'Oreo Coffee', price: '₹120' },
    ],
  },
  {
    name: 'Shakes',
    icon: '🥤',
    items: [
      { name: 'Lassi with Dry Fruits', price: '₹90' },
      { name: 'Banana Shake with Dry Fruits', price: '₹90' },
      { name: 'Mango Shake with Dry Fruits', price: '₹100' },
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
      { name: 'Blue Lagoon', price: '₹100', isPopular: true },
      { name: 'Green Apple', price: '₹100' },
      { name: 'Strawberry', price: '₹120' },
      { name: 'Pineapple', price: '₹120' },
      { name: 'Black Current', price: '₹120' },
      { name: 'Orange', price: '₹100' },
      { name: 'Kiwi', price: '₹150' },
    ],
  },
  {
    name: 'Mojito',
    icon: '🍃',
    items: [
      { name: 'Virgin Mint', price: '₹90' },
      { name: 'Masala Mint', price: '₹110', isPopular: true },
      { name: 'Orange', price: '₹120' },
      { name: 'Pineapple', price: '₹110' },
      { name: 'Strawberry', price: '₹120' },
    ],
  },
  {
    name: 'Soda',
    icon: '🥂',
    items: [
      { name: 'Fresh Lemon', price: '₹70' },
      { name: 'Lemon Masala', price: '₹90' },
      { name: 'Kala Khatta', price: '₹100', isPopular: true },
      { name: 'Sweet Lemon', price: '₹90' },
    ],
  },
  {
    name: 'Special Combos',
    icon: '⭐',
    items: [
      {
        name: 'Combo 1',
        price: '₹500',
        originalPrice: '₹680',
        isPopular: true,
        includes: [
          'Mix Veg Pizza (S)',
          'Butter Momos',
          'Cold Coffee',
          'Kurkure Momos',
          'Mix Veg Noodles',
          'Coke',
          'Milk Tea',
          'Mix Veg Sandwich',
        ],
      },
      {
        name: 'Combo 2',
        price: '₹700',
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
        price: '₹1200',
        originalPrice: '₹1600',
        isPopular: true,
        description: 'Pizza (S) + Choose any from: Noodles, Momos, Soup, Sandwich, Burger, Shakes, Mocktails, Mojito, Tea, Rolls, Spring Rolls, Wraps',
      },
    ],
  },
];

export const categoryNames = menuCategories.map(c => c.name);
