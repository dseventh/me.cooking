
import {Coach, Seeker, Dish, Appointment} from './models'

export const CUISINES = [ 'Indian', 'Peruvian', 'Lebanese','Creole','Cajun','Continental','Mediterranean']

export const INGREDIENTS = [
    "Kosher salt",
    "Fine salt",
    "Black peppercorns",
    "Extra virgin olive oil",
    "Vegetable oil",
    "Apple cider vinegar",
    "Red wine vinegar",
    "Balsamic or sherry vinegar",
    "Rice vinegar (unseasoned)",
    "nedjelly",
    "Flour: all purpose, whole wheat or pastry",
    "Baking soda",
    "Baking powder",
    "Cream of tartar",
    "Cocoa powder (unsweetened)",
    "Chocolate: chips or bar",
    "Evaporated milk",
    "Pure vanilla extract",
    "Sweeteners",
    "Granulated sugar",
    "Confectioners' sugar",
    "Brown sugar",
    "Maple syrup",
    "Honey",
    "Agave syrup",
    "Drinks",
    "Coffee",
    "Tea",
    "Rice and Grains",
    "Long-grain white rice",
    "Brown rice",
    "Grains: bulgur, quinoa, couscous or farro",
    "Pasta: standard, whole grain, rice noodles or egg noodles",
    "Polenta",
    "Breadcrumbs: plain or panko",
    "Snacks and Cereals",
    "Crackers",
    "Tortillas",
    "Cookies or biscuits",
    "Pretzels",
    "Marshmallows",
    "Popcorn kernels",
    "Dried fruit: raisins, apricots or cherries",
    "Seeds: sunflower, flax, chia or hemp",
    "Peanut butter or almond butter",
    "Applesauce",
    "Breakfast cereal",
    "Old-fashioned rolled oats",
    "Canned Goods",
    "Chicken broth",
    "Beans: cannellini, navy, chickpeas or black",
    "Vegetables: hominy, corn or green beans",
    "Olives or capers",
    "Chiles: chipotles in adobo or pickled jalapenos",
    "Salsa",
    "Tomatoes",
    "Tomato paste",
    "Roasted red peppers",
    "Tuna",
    "Anchovy fillets or paste",
    "Dried Herbs and Spices",
    "Bay leaves",
    "Cajun seasoning",
    "Cayenne pepper",
    "Chile powder",
    "Crushed red pepper",
    "Curry powder",
    "Fennel or dill seed",
    "Granulated garlic",
    "Ground cinnamon",
    "Ground cloves",
    "Ground cumin",
    "Ground ginger",
    "Oregano",
    "Paprika: sweet and smoked",
    "Rosemary",
    "Sesame seeds",
    "Thyme",
    "Whole nutmeg",
    "Dairy and Eggs",
    "Milk",
    "Plain yogurt: regular or Greek",
    "Unsalted butter",
    "Cheddar or mozzarella",
    "Goat cheese",
    "Parmesan (wedge)",
    "Eggs",
    "Fresh Produce",
    "Apples",
    "Avocados",
    "Bananas",
    "Bell peppers",
    "Broccoli or cauliflower",
    "Carrots",
    "Celery",
    "Lemons",
    "Limes",
    "spinach",
    "kale",
    "chard",
    "Lettuce",
    "Cilantro",
    "Flat-leaf parsley",
    "Thyme",
    "Scallions",
    "Garlic",
    "Ginger",
    "Potatoes",
    "Onions",
    "Tomatoes",
    "Condiments",
    "Ketchup",
    "Mayonnaise",
    "Pickles",
    "Worcestershire sauce",
    "Soy sauce or tamari",
    "Asian fish sauce",
    "Toasted sesame oil",
    "Ground beef",
    "ground turkey ",
    "Italian sausage",
    "Boneless, skinless chicken breasts",
    "Bacon",
    "baguette ",
    "sandwich bread",
    "Vegetables: peas, chopped spinach or corn",
    "Fruit: berries, peaches or mangos",
    "Nuts: almonds, walnuts or pecans",
    "Dough: pizza, pie or puff pastry",
    "Vanilla ice cream"
]

export const EQUIPMENT = [
    "Chef’s knife",
    "Paring knife",
    "Knife sharpening/honing rod",
    "Bread knife",
    "Chopping/cutting board(s)",
    "Kitchen shears/scissors",
    "Vegetable peeler",
    "Garlic press",
    "Grater",
    "Kitchen scales",
    "Measuring jug",
    "Measuring spoons",
    "Measuring cups",
    "Mixing bowl",
    "Colander/pasta strainer",
    "Sieve",
    "Rolling pin",
    "Can opener",
    "Blender",
    "Ladle",
    "Pasta fork",
    "Pizza cutter",
    "Corkscrew",
    "Bottle opener",
    "Frying pan/skillet",
    "Saucepans",
    "Ovenproof dish",
    "Roasting tin",
    "Baking sheet",
    "Stirring spoon",
    "Slotted spoon",
    "Spatula",
    "Tongs",
    "Masher",
    "Balloon whisk",
    "Oven gloves",
    "Pot holders",
    "Food/meat thermometer",
    "Plastic containers",
    "Plastic zipper bags",
    "Bread bin",
    "Plastic wrap/clingfilm",
    "Kitchen foil",
    "Baking parchment",
    "Tea towels",
    "Kitchen tool organizer"
];

export const APTS : Appointment[] = [
    {
        id : "appt-1",
        startTime : generateRandomFutureDate(),
        duration : generateRandomDuration()
    },
    {
        id : "appt-2",
        startTime : generateRandomFutureDate(),
        duration : generateRandomDuration()
    },
    {
        id : "appt-3",
        startTime : generateRandomFutureDate(),
        duration : generateRandomDuration()
    },
    {
        id : "appt-4",
        startTime : generateRandomFutureDate(),
        duration : generateRandomDuration()
    },
    {
        id : "appt-5",
        startTime : generateRandomFutureDate(),
        duration : generateRandomDuration()
    },
    {
        id : "appt-6",
        startTime : generateRandomFutureDate(),
        duration : generateRandomDuration()
    },
    {
        id : "appt-7",
        startTime : generateRandomFutureDate(),
        duration : generateRandomDuration()
    },
];


function generateRandomFutureDate() {
    let start : Date = new Date();
    let end : Date = new Date("2020/12/31");
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


function generateRandomSubset( input : any[]) : any[] {
    return input.filter( () => Math.random() >= 0.5);
}

function generateRandomDuration() {
    return (Math.floor(Math.random() * 4 + 1)) * 15;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
  
function getRandomCuisine() {
    return CUISINES[getRandomInt(CUISINES.length - 1)];
}
