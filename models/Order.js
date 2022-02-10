const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Order extends Model {}

Order.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement:true,
    },
    inProgress: {
      type: DataTypes.BOOLEAN,
    },
    completed: {
      type: DataTypes.BOOLEAN,
    },
    // carry_out
    bag: {
      type: DataTypes.BOOLEAN,
    },
    box: {
      type: DataTypes.BOOLEAN,
    },
    bag_quantity: {
      type: DataTypes.INTEGER,
    },
    box_quantity: {
      type: DataTypes.INTEGER,
    },
    // DRY GOODS
    // grains
    rice: {
      type: DataTypes.BOOLEAN,
    },
    pasta: {
      type: DataTypes.BOOLEAN,
    },
    oatmeal: {
      type: DataTypes.BOOLEAN,
    },
    cereal: {
      type: DataTypes.BOOLEAN,
    },
        grain_preference: {
      type: DataTypes.STRING,
    },
    // canned-fruit
    canned_fruit: {
      type: DataTypes.BOOLEAN,
    },
    dried_fruit: {
      type: DataTypes.BOOLEAN,
    },
    any_fruit: {
      type: DataTypes.BOOLEAN,
    },
    fruit_preference: {
      type: DataTypes.STRING,
    },
    // canned-vegetables
    canned_corn: {
      type: DataTypes.BOOLEAN,
    },
    canned_soup: {
      type: DataTypes.BOOLEAN,
    },
    canned_tomato: {
      type: DataTypes.BOOLEAN,
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
    },
    peanut_butter: {
      type: DataTypes.BOOLEAN,
    },
    canned_beans: {
      type: DataTypes.BOOLEAN,
    },
    dried_beans: {
      type: DataTypes.BOOLEAN,
    },
    lentils: {
      type: DataTypes.BOOLEAN,
    },
    protein_preference: {
      type: DataTypes.STRING,
    },
    // beverages
    coffee: {
      type: DataTypes.BOOLEAN,
    },
    tea: {
      type: DataTypes.BOOLEAN,
    },
    juice: {
      type: DataTypes.BOOLEAN,
    },
    seltzer: {
      type: DataTypes.BOOLEAN,
    },
    drink_preference: {
      type: DataTypes.STRING,
    },
    // =======================================
    // dairy
    // milk options
    milk: {
      type: DataTypes.BOOLEAN,
    },
    milk_preference: {
      type: DataTypes.STRING,
    },
    rice_milk: {
      type: DataTypes.BOOLEAN,
    },
    nut_milk: {
      type: DataTypes.BOOLEAN,
    },
    soy_milk: {
      type: DataTypes.BOOLEAN,
    },
    oat_milk: {
      type: DataTypes.BOOLEAN,
    },
    goat_milk: {
      type: DataTypes.BOOLEAN,
    },
    coconut_milk: {
      type: DataTypes.BOOLEAN,
    },
    milk_alt_any: {
      type: DataTypes.BOOLEAN,
    },
    milk_alt_preference: {
      type: DataTypes.STRING,
    },
    // yogurt
    yogurt: {
      type: DataTypes.BOOLEAN,
    },
    yogurt_preference: {
      type: DataTypes.STRING,
    },
    // cheese
    cheese: {
      type: DataTypes.BOOLEAN,
    },
    cheese_preference: {
      type: DataTypes.STRING,
    },
    // sour cream
    sour_cream: {
      type: DataTypes.BOOLEAN,
    },
    // cream cheese
    cream_cheese: {
      type: DataTypes.BOOLEAN,
    },
    // cottage cheese
    cottage_cheese: {
      type: DataTypes.BOOLEAN,
    },
    // eggs
    eggs: {
      type: DataTypes.BOOLEAN,
    },
    // butter
    butter: {
      type: DataTypes.BOOLEAN,
    },
    // =======================================
  //  produce
    salad_greens: {
      type: DataTypes.BOOLEAN,
    },
    kale_or_spinach: {
      type: DataTypes.BOOLEAN,
    },
    tomato: {
      type: DataTypes.BOOLEAN,
    },
    grapes_or_berries: {
      type: DataTypes.BOOLEAN,
    },
    herbs: {
      type: DataTypes.BOOLEAN,
    },
    zucchini_squash: {
      type: DataTypes.BOOLEAN,
    },
    peppers: {
      type: DataTypes.BOOLEAN,
    },
    carrots: {
      type: DataTypes.BOOLEAN,
    },
    broccoli_cauliflower_cabbage: {
      type: DataTypes.BOOLEAN,
    },
    celery_cucumber: {
      type: DataTypes.BOOLEAN,
    },
    orange: {
      type: DataTypes.BOOLEAN,
    },
    lemon: {
      type: DataTypes.BOOLEAN,
    },
    lime: {
      type: DataTypes.BOOLEAN,
    },
    pear: {
      type: DataTypes.BOOLEAN,
    },
    banana: {
      type: DataTypes.BOOLEAN,
    },
    avocado: {
      type: DataTypes.BOOLEAN,
    },
    potato: {
      type: DataTypes.BOOLEAN,
    },
    onion: {
      type: DataTypes.BOOLEAN,
    },
    apple: {
      type: DataTypes.BOOLEAN,
    },
    melon: {
      type: DataTypes.BOOLEAN,
    },
    produce_preference: {
      type: DataTypes.STRING,
    },
    // ================================
    // frozen protein
    chicken: {
      type: DataTypes.BOOLEAN,
    },
    turkey: {
      type: DataTypes.BOOLEAN,
    },
    pork: {
      type: DataTypes.BOOLEAN,
    },
    fish: {
      type: DataTypes.BOOLEAN,
    },
    beef: {
      type: DataTypes.BOOLEAN,
    },
    non_meat: {
      type: DataTypes.BOOLEAN,
    },
    protein_preference: {
      type: DataTypes.STRING,
    },
    // ====================================
    // no-cook items
    microwave_meals: {
      type: DataTypes.BOOLEAN,
    },
    pasta_deli_salad: {
      type: DataTypes.BOOLEAN,
    },
    garden_salad: {
      type: DataTypes.BOOLEAN,
    },
    sandwich: {
      type: DataTypes.BOOLEAN,
    },
    instant_oatmeal: {
      type: DataTypes.BOOLEAN,
    },
    instant_noodles: {
      type: DataTypes.BOOLEAN,
    },
    no_cook_preference: {
      type: DataTypes.STRING,
    },
    // ==============================
    // baked goods
    white_bread: {
      type: DataTypes.BOOLEAN,
    },
    wheat_bread: {
      type: DataTypes.BOOLEAN,
    },
    corn_tortillas: {
      type: DataTypes.BOOLEAN,
    },
    flour_tortillas: {
      type: DataTypes.BOOLEAN,
    },
    bagels: {
      type: DataTypes.BOOLEAN,
    },
    artisan_baguette: {
      type: DataTypes.BOOLEAN,
    },
    rolls_buns: {
      type: DataTypes.BOOLEAN,
    },
    cake: {
      type: DataTypes.BOOLEAN,
    },
    cookies: {
      type: DataTypes.BOOLEAN,
    },
    pie: {
      type: DataTypes.BOOLEAN,
    },
    pastry: {
      type: DataTypes.BOOLEAN,
    },
    chocolate: {
      type: DataTypes.BOOLEAN,
    },
    baked_preference: {
      type: DataTypes.STRING,
    },
    // ======================================
    // misc foods
    oil: {
      type: DataTypes.BOOLEAN,
    },
    salt: {
      type: DataTypes.BOOLEAN,
    },
    cake_mix: {
      type: DataTypes.BOOLEAN,
    },
    sugar: {
      type: DataTypes.BOOLEAN,
    },
    salsa: {
      type: DataTypes.BOOLEAN,
    },
    hummus: {
      type: DataTypes.BOOLEAN,
    },
    misc_preference: {
      type: DataTypes.STRING,
    },
    // ==========================================
    // baby/toddler
    instant_formula: {
      type: DataTypes.BOOLEAN,
    },
    infant_puree: {
      type: DataTypes.BOOLEAN,
    },
    toddler_food: {
      type: DataTypes.BOOLEAN,
    },
    diaper: {
      type: DataTypes.BOOLEAN,
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
    },
    pet_type: {
      type: DataTypes.STRING,
    },
    // ============================
    // hygiene 
    maxi_pads: {
      type: DataTypes.STRING,
    },
    toilet_paper: {
      type: DataTypes.STRING,
    },
    tampons: {
      type: DataTypes.STRING,
    },
    soap: {
      type: DataTypes.STRING,
    },
    hygiene_preference: {
      type: DataTypes.STRING,
    },
  
  },

  {
    sequelize,
    timestamps: true,
  }
);

module.exports = Order;
