
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

export const DISHES : Dish[] = [
    {
        id : "dish-1",
        name : "Aloo Matar",
        pictureId : "../assets/dish-1.png",
        description : 'This is the best dish in the world. Cook little pot cook',
        duration : generateRandomDuration(),
        equipment : generateRandomSubset(EQUIPMENT).slice(0,8),
        ingredients : generateRandomSubset(INGREDIENTS).slice(0,10),
        ratings : (Math.floor(Math.random() * 4 + 1)),
        story : 'Some interesting story about the dish narrated by the chef',
        video : 'https://www.youtube.com/embed/jPOxWOE-3Xk',
        cuisine : getRandomCuisine()
    },
    {
        id : "dish-2",
        name : "Dahi Poori",
        pictureId : "../assets/dish-2.png",
        description : 'This is the best dish in the world. Cook little pot cook',
        duration : generateRandomDuration(),
        equipment : generateRandomSubset(EQUIPMENT).slice(0,8),
        ingredients : generateRandomSubset(INGREDIENTS).slice(0,10),
        ratings : (Math.floor(Math.random() * 4 + 1)),
        story : 'Some interesting story about the dish narrated by the chef',
        video : 'https://www.youtube.com/embed/jPOxWOE-3Xk',
        cuisine : getRandomCuisine()
    },
    {
        id : "dish-3",
        name : "Rajma",
        pictureId : "../assets/dish-3.png",
        description : 'This is the best dish in the world. Cook little pot cook',
        duration : generateRandomDuration(),
        equipment : generateRandomSubset(EQUIPMENT).slice(0,8),
        ingredients : generateRandomSubset(INGREDIENTS).slice(0,10),
        ratings : (Math.floor(Math.random() * 4 + 1)),
        story : 'Some interesting story about the dish narrated by the chef',
        cuisine : getRandomCuisine(),
        video : 'https://www.youtube.com/embed/jPOxWOE-3Xk'
    },
    {
        id : "dish-4",
        name : "Kadhi",
        pictureId : "../assets/dish-1.png",        
        description : 'This is the best dish in the world. Cook little pot cook',
        duration : generateRandomDuration(),
        equipment : generateRandomSubset(EQUIPMENT).slice(0,8),
        ingredients : generateRandomSubset(INGREDIENTS).slice(0,10),
        ratings : (Math.floor(Math.random() * 4 + 1)),
        story : 'Some interesting story about the dish narrated by the chef',
        cuisine : getRandomCuisine(),
        video : 'https://www.youtube.com/embed/jPOxWOE-3Xk'
    },
    {
        id : "dish-5",
        name : "Lasagna",
        pictureId : "../assets/dish-2.png",
        description : 'This is the best dish in the world. Cook little pot cook',
        duration : generateRandomDuration(),
        cuisine : getRandomCuisine(),
        equipment : generateRandomSubset(EQUIPMENT).slice(0,8),
        ingredients : generateRandomSubset(INGREDIENTS).slice(0,10),
        ratings : (Math.floor(Math.random() * 4 + 1)),
        story : 'Some interesting story about the dish narrated by the chef',
        video : 'https://www.youtube.com/embed/jPOxWOE-3Xk'
    },
    {
        id : "dish-6",
        name : "Pizza",
        pictureId : "../assets/dish-3.png",
        cuisine : getRandomCuisine(),
        description : 'This is the best dish in the world. Cook little pot cook',
        duration : generateRandomDuration(),
        equipment : generateRandomSubset(EQUIPMENT).slice(0,8),
        ingredients : generateRandomSubset(INGREDIENTS).slice(0,10),
        ratings : (Math.floor(Math.random() * 4 + 1)),
        story : 'Some interesting story about the dish narrated by the chef',
        video : 'https://www.youtube.com/embed/jPOxWOE-3Xk'
    },
    {
        id : "dish-7",
        name : "Pasta",
        pictureId : "../assets/dish-1.png",
        description : 'This is the best dish in the world. Cook little pot cook',
        duration : generateRandomDuration(),
        cuisine : getRandomCuisine(),
        equipment : generateRandomSubset(EQUIPMENT).slice(0,8),
        ingredients : generateRandomSubset(INGREDIENTS).slice(0,10),
        ratings : (Math.floor(Math.random() * 4 + 1)),
        story : 'Some interesting story about the dish narrated by the chef',
        video : 'https://www.youtube.com/embed/jPOxWOE-3Xk'
    },
    {
        id : "dish-8",
        name : "Calzone",
        pictureId : "../assets/dish-2.png",
        description : 'This is the best dish in the world. Cook little pot cook',
        duration : generateRandomDuration(),
        equipment : generateRandomSubset(EQUIPMENT).slice(0,8),
        ingredients : generateRandomSubset(INGREDIENTS).slice(0,10),
        cuisine : getRandomCuisine(),
        ratings : (Math.floor(Math.random() * 4 + 1)),
        story : 'Some interesting story about the dish narrated by the chef',
        video : 'https://www.youtube.com/embed/jPOxWOE-3Xk'
    },
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


export const COACHES : Coach[] = [
    {
        id : "user-1", 
        firstName : "sudeep", 
        lastName : "Das",
        persona : "coach",
        description : "The awesome cook",
        email : "sudeep.das.in@gmail.com",
        joinDate : new Date(Date.now()),
        dishes : generateRandomSubset(DISHES),
        appointments : generateRandomSubset(APTS)
    },
    {
        id : "user-1", 
        firstName : "sudeep", 
        lastName : "Das",
        persona : "coach",
        description : "The awesome cook",
        email : "sd@gudcook.me",
        joinDate : new Date(Date.now()),
        dishes : generateRandomSubset(DISHES),
        appointments : generateRandomSubset(APTS)
    },
    {
        id : "user-2", 
        firstName : "Bidan", 
        lastName : "Sinha",
        persona : "coach",
        description : "The awesome Bidan the cook",
        email : "bs@gudcook.me",
        joinDate : new Date(Date.now()),
        dishes : generateRandomSubset(DISHES),
        appointments : generateRandomSubset(APTS)
    },
    {
        id : "user-3", 
        firstName : "Alok", 
        lastName : "Shukla",
        persona : "coach",
        description : "The awesome Alok the cook",
        email : "as@gudcook.me",
        joinDate : new Date(Date.now()),
        dishes : generateRandomSubset(DISHES),
        appointments : generateRandomSubset(APTS)
    },
    {
        id : "user-4", 
        firstName : "Parul", 
        lastName : "Shukla",
        persona : "coach",
        description : "The awesome Parul the cook",
        email : "ps@gudcook.me",
        joinDate : new Date(Date.now()),
        dishes : generateRandomSubset(DISHES),
        appointments : generateRandomSubset(APTS)
    },
    {
        id : "user-5", 
        firstName : "Arpit", 
        lastName : "Pradhan",
        persona : "coach",
        description : "The awesome Arpit cook",
        email : "ap@gudcook.me",
        joinDate : new Date(Date.now()),
        dishes : generateRandomSubset(DISHES),
        appointments : generateRandomSubset(APTS)
    }
]

export const SEEKERS : Seeker[] = [
    {
        id : "user-1", 
        firstName : "sudeep", 
        lastName : "Das",
        persona : "seeker",
        description : "The awesome cook",
        email : "sudeep.das.in@gmail.com",
        joinDate : new Date(Date.now()),
        favorites : generateRandomSubset(DISHES),
        appointments : generateRandomSubset(APTS)
    },
    {
        id : "user-1", 
        firstName : "sudeep", 
        lastName : "Das",
        persona : "seeker",
        description : "The awesome cook",
        email : "sd@gudcook.me",
        joinDate : new Date(Date.now()),
        favorites : generateRandomSubset(DISHES),
        appointments : generateRandomSubset(APTS)
    },
    {
        id : "user-2", 
        firstName : "Bidan", 
        lastName : "Sinha",
        persona : "seeker",
        description : "The awesome Bidan the cook",
        email : "bs@gudcook.me",
        joinDate : new Date(Date.now()),
        favorites : generateRandomSubset(DISHES),
        appointments : generateRandomSubset(APTS)
    },
    {
        id : "user-3", 
        firstName : "Alok", 
        lastName : "Shukla",
        persona : "seeker",
        description : "The awesome Alok the cook",
        email : "as@gudcook.me",
        joinDate : new Date(Date.now()),
        favorites : generateRandomSubset(DISHES),
        appointments : generateRandomSubset(APTS)
    },
    {
        id : "user-4", 
        firstName : "Parul", 
        lastName : "Shukla",
        persona : "seeker",
        description : "The awesome Parul the cook",
        email : "ps@gudcook.me",
        joinDate : new Date(Date.now()),
        favorites : generateRandomSubset(DISHES),
        appointments : generateRandomSubset(APTS)
    },
    {
        id : "user-5", 
        firstName : "Arpit", 
        lastName : "Pradhan",
        persona : "seeker",
        description : "The awesome Arpit cook",
        email : "ap@gudcook.me",
        joinDate : new Date(Date.now()),
        favorites : generateRandomSubset(DISHES),
        appointments : generateRandomSubset(APTS)
    }
]


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
