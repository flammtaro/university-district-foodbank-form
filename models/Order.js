const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Order extends Model {}

Order.init(
  {
    // define columns
   
    inProgress: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    notes: {
      type: DataTypes.STRING,
    },
    // carry_out
    bag: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    box: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    bag_quantity: {
      type: DataTypes.INTEGER,
    },
    box_quantity: {
      type: DataTypes.INTEGER,
    },
    // =====================================
    // DRY GOODS
    // grains
    rice: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    pasta: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    oatmeal: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    cereal: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    grain_preference: {
      type: DataTypes.STRING,
    },
    // canned-fruit
    canned_fruit: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    dried_fruit: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    any_fruit: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    fruit_preference: {
      type: DataTypes.STRING,
    },
    // canned-vegetables
    canned_corn: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    canned_soup: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    canned_tomato: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    other_veg: {
      type: DataTypes.STRING,
    },
    vegetable_preference: {
      type: DataTypes.STRING,
    },
    // canned-protein
    canned_tuna: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    peanut_butter: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    canned_beans: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    dried_beans: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    lentils: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    canned_protein_preference: {
      type: DataTypes.STRING,
    },
    // beverages
    coffee: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    tea: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    juice: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    seltzer: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    drink_preference: {
      type: DataTypes.STRING,
    },
    // =======================================
    // dairy
    // milk options
    milk: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    milk_preference: {
      type: DataTypes.STRING,
    },
    rice_milk: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    nut_milk: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    soy_milk: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    oat_milk: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    goat_milk: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    coconut_milk: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    milk_alt_any: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    milk_alt_preference: {
      type: DataTypes.STRING,
    },
    // yogurt
    yogurt: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    yogurt_preference: {
      type: DataTypes.STRING,
    },
    // cheese
    cheese: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    cheese_preference: {
      type: DataTypes.STRING,
    },
    // sour cream
    sour_cream: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    // cream cheese
    cream_cheese: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    // cottage cheese
    cottage_cheese: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    // eggs
    eggs: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    // butter
    butter: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    // =======================================
  //  produce
    salad_greens: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    kale_or_spinach: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    tomato: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    grapes_or_berries: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    herbs: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    zucchini_squash: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    peppers: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    carrots: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    broccoli_cauliflower_cabbage: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    celery_cucumber: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    orange: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    lemon: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    lime: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    pear: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    banana: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    avocado: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    potato: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    onion: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    apple: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    melon: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    produce_preference: {
      type: DataTypes.STRING,
    },
    // ================================
    // frozen protein
    chicken: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    turkey: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    pork: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    fish: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    beef: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    non_meat: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    protein_preference: {
      type: DataTypes.STRING,
    },
    // ====================================
    // no-cook items
    microwave_meals: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    pasta_deli_salad: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    garden_salad: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    sandwich: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    instant_oatmeal: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    instant_noodles: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    no_cook_preference: {
      type: DataTypes.STRING,
    },
    // ==============================
    // baked goods
    white_bread: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    wheat_bread: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    corn_tortillas: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    flour_tortillas: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    bagels: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    artisan_baguette: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    rolls_buns: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    cake: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    cookies: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    pie: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    pastry: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    chocolate: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    baked_preference: {
      type: DataTypes.STRING,
    },
    // ======================================
    // misc foods
    oil: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    salt: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    cake_mix: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    sugar: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    salsa: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    hummus: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    misc_preference: {
      type: DataTypes.STRING,
    },
    // ==========================================
    // baby/toddler
    formula: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    infant_puree: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    toddler_food: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    diapers: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    diaper_size: {
      type: DataTypes.STRING,
    },
    baby_preference: {
      type: DataTypes.STRING,
    },
    // =============================
    // pets
    pet_food:{
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    pet_type: {
      type: DataTypes.STRING,
    },
    // ============================
    // hygiene 
    maxi_pads: {
      type: DataTypes.BOOLEAN,
    },
    toilet_paper: {
      type: DataTypes.BOOLEAN,
    },
    tampons: {
      type: DataTypes.BOOLEAN,
    },
    soap: {
      type: DataTypes.BOOLEAN,
    },
    hygiene_preference: {
      type: DataTypes.STRING,
    },
  
  },

  {
    sequelize
  }
);

module.exports = Order;
