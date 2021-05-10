$SRWConfig.itemEffects = function(){
	this.addDefinition(
		0, 
		"Booster", 
		"Movement +1.", 
		false,
		false,
		function(actor, level){
			return [{type: "movement", modType: "addFlat", value: 1}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		1, 
		"Mega Booster", 
		"Movement +2.", 
		false,
		false,
		function(actor, level){
			return [{type: "movement", modType: "addFlat", value: 2}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		2, 
		"Apogee Motor", 
		"Movement +1, Mobility +5.", 
		false,
		false,
		function(actor, level){
			return [{type: "movement", modType: "addFlat", value: 1}, {type: "mobility", modType: "addFlat", value: 5}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		3, 
		"Servo Motor", 
		"Mobility +5.", 
		false,
		false,
		function(actor, level){
			return [{type: "mobility", modType: "addFlat", value: 5}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		4, 
		"Bio Sensor", 
		"Mobility +15.", 
		false,
		false,
		function(actor, level){
			return [{type: "mobility", modType: "addFlat", value: 15}];
		},
		function(actor, level){
			return true;
		}
	);
	
	this.addDefinition(
		5, 
		"High-Performance Thruster", 
		"Mobility +25.", 
		false,
		false,
		function(actor, level){
			return [{type: "mobility", modType: "addFlat", value: 25}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		6, 
		"High-Performance CPU", 
		"Movement +2, Mobility +25, Weapon Accuracy +20, Weapon Range +1(except MAP weapons).", 
		false,
		false,
		function(actor, level){
			return [{type: "mobility", modType: "addFlat", value: 25},{type: "accuracy", modType: "addFlat", value: 20},{type: "movement", modType: "addFlat", value: 2},{type: "range", modType: "addFlat", value: 1}];
		},
		function(actor, level){
			return true;
		}
	);
	
	this.addDefinition(
		7, 
		"A-Adapter", 
		"All Mech and Weapon terrain rankings become A.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "land_terrain_rating", modType: "addFlat", value: 3},
				{type: "air_terrain_rating", modType: "addFlat", value: 3},
				{type: "water_terrain_rating", modType: "addFlat", value: 3},
				{type: "space_terrain_rating", modType: "addFlat", value: 3}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		8, 
		"S-Adapter", 
		"All Mech and Weapon terrain rankings become S.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "land_terrain_rating", modType: "addFlat", value: 4},
				{type: "air_terrain_rating", modType: "addFlat", value: 4},
				{type: "water_terrain_rating", modType: "addFlat", value: 4},
				{type: "space_terrain_rating", modType: "addFlat", value: 4}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		9, 
		"Thruster Module", 
		"Mech and Weapon Space terrain rankings become S.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "space_terrain_rating", modType: "addFlat", value: 4}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		10, 
		"Dustproofing", 
		"Mech and Weapon Land terrain rankings become S.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "land_terrain_rating", modType: "addFlat", value: 4}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		11, 
		"Screw Module", 
		"Mech and Weapon Water terrain rankings become S.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "water_terrain_rating", modType: "addFlat", value: 4}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		12, 
		"Tesla Drive", 
		"Mech and Weapon Air terrain rankings become A. Enables Flight.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "air_terrain_rating", modType: "addFlat", value: 3},
				{type: "fly", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		13, 
		"Tesla Drive S", 
		"Mech and Weapon Air terrain rankings become S. Enables Flight. Movement +1.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "air_terrain_rating", modType: "addFlat", value: 4},
				{type: "fly", modType: "addFlat", value: 1},
				{type: "movement", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		14, 
		"Crobham Armor", 
		"Max HP +500, Armor +100.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "maxHP", modType: "addFlat", value: 500},
				{type: "armor", modType: "addFlat", value: 100}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		15, 
		"Hybrid Armor", 
		"Max HP +1000, Armor +150.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "maxHP", modType: "addFlat", value: 1000},
				{type: "armor", modType: "addFlat", value: 150}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		16, 
		"Orihalconium", 
		"Max HP +1000, Armor +200.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "maxHP", modType: "addFlat", value: 1000},
				{type: "armor", modType: "addFlat", value: 200}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		17, 
		"Z.O. Armor", 
		"Max HP +1500, Armor +250.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "maxHP", modType: "addFlat", value: 1500},
				{type: "armor", modType: "addFlat", value: 250}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		18, 
		"Large Generator", 
		"Max EN +50.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "maxEN", modType: "addFlat", value: 50}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		19, 
		"Mega Generator", 
		"Max EN +100.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "maxEN", modType: "addFlat", value: 100}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		20, 
		"Giga Generator", 
		"Max EN +200.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "maxEN", modType: "addFlat", value: 200}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		21, 
		"Solar Panels", 
		"10% EN recovered at the start of the turn.", 
		false,
		false,
		function(actor, level){
			return [{type: "EN_regen", modType: "addFlat", value: 10}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		22, 
		"G-Wall", 
		"Cancels all damage if damage is below 800. 5 EN per use.", 
		false,
		false,
		function(actor, level){
			return [{type: "threshold_barrier", subType: "all", value: 800, cost: 5}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		23, 
		"G-Territory", 
		"Cancels all damage if damage is below 1800. 15 EN per use.", 
		false,
		false,
		function(actor, level){
			return [{type: "threshold_barrier", subType: "all", value: 1800, cost: 15}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		24, 
		"Mark of the Hero", 
		"Armor +200. Mobility +25. Weapon Accuracy +30.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "mobility", modType: "addFlat", value: 25},
				{type: "armor", modType: "addFlat", value: 200},
				{type: "accuracy", modType: "addFlat", value: 30}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		25, 
		"Soul of Steel", 
		"Armor +250. Mobility +30. Weapon Accuracy +35.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "mobility", modType: "addFlat", value: 30},
				{type: "armor", modType: "addFlat", value: 250},
				{type: "accuracy", modType: "addFlat", value: 35}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		26, 
		"Dual Sensor", 
		"Weapon Accuracy +10.", 
		false,
		false,
		function(actor, level){
			return [ 
				{type: "accuracy", modType: "addFlat", value: 10}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		27, 
		"Multi Sensor", 
		"Weapon Accuracy +20.", 
		false,
		false,
		function(actor, level){
			return [ 
				{type: "accuracy", modType: "addFlat", value: 20}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		28, 
		"High Perf. Scope", 
		"Weapon Accuracy +30.", 
		false,
		false,
		function(actor, level){
			return [ 
				{type: "accuracy", modType: "addFlat", value: 30}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		29, 
		"Optimized Sensor", 
		"Weapon Accuracy +40.", 
		false,
		false,
		function(actor, level){
			return [  
				{type: "accuracy", modType: "addFlat", value: 40}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		30, 
		"Martial Arts Movie", 
		"Weapon Critical +20.", 
		false,
		false,
		function(actor, level){
			return [ 
				{type: "crit", modType: "addFlat", value: 20}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		31, 
		"High-Performance Radar", 
		"Weapon Range +1.", 
		false,
		false,
		function(actor, level){
			return [ 
				{type: "range", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		32, 
		"Repair Kit", 
		"Restore all HP once per stage.", 
		false,
		true,
		function(actor, level){
			return [
				{type: "HP_recover", modType: "addFlat", value: 100}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		33, 
		"Energy Capsule", 
		"Restore all EN once per stage.", 
		false,
		true,
		function(actor, level){
			return [
				{type: "EN_recover", modType: "addFlat", value: 100}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		34, 
		"Cartridge", 
		"Restore all Ammo once per stage.", 
		false,
		true,
		function(actor, level){
			return [
				{type: "ammo_recover", modType: "addFlat", value: 100}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		35, 
		"Super Repair Kit", 
		"Restore all HP, EN and Ammo once per stage.", 
		false,
		true,
		function(actor, level){
			return [
				{type: "HP_recover", modType: "addFlat", value: 100},
				{type: "EN_recover", modType: "addFlat", value: 100},
				{type: "ammo_recover", modType: "addFlat", value: 100}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		36, 
		"SP Drink", 
		"Restore 50SP once per stage.", 
		false,
		true,
		function(actor, level){
			return [
				{type: "SP_recover", modType: "addFlat", value: 50}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		37, 
		"Something Warm", 
		"Restore all SP once per stage.", 
		false,
		true,
		function(actor, level){
			return [
				{type: "SP_recover", modType: "addFlat", value: 999}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		38, 
		"Hachimaki", 
		"+5 starting Will.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "start_will", modType: "addFlat", value: 5}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		39, 
		"Neijiri Hachimaki", 
		"+10 starting Will.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "start_will", modType: "addFlat", value: 10}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		40, 
		"Pocket Haro", 
		"Movement +2, Mobility +25, Weapon Accuracy +20, Weapon Range +1(except MAP weapons).", 
		false,
		false,
		function(actor, level){
			return [{type: "mobility", modType: "addFlat", value: 25},{type: "accuracy", modType: "addFlat", value: 20},{type: "movement", modType: "addFlat", value: 2},{type: "range", modType: "addFlat", value: 1}];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		41, 
		"Causality Manipulator", 
		"Hit becomes 100% if Hit is above 70%, and enemy Hit becomes 0% if enemy Hit is below 30%.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "causality_manip", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		42, 
		"Miracle Mark", 
		"Weapon damage +200 and Movement +2. Range +1 for all non-MAP, non-Range 1 weapons. Spirit Command Miracle can be used once per map.", 
		false,
		true,
		function(actor, level){
			return [
				{type: "weapon_ranged", modType: "addFlat", value: 200},
				{type: "weapon_melee", modType: "addFlat", value: 200},
				{type: "movement", modType: "addFlat", value: 2},
				{type: "range", modType: "addFlat", value: 1},
				{type: "miracle", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		43, 
		"Victory Turn", 
		"Damage dealt +30%, damage taken -30% for one turn. Can only be used once per map.", 
		false,
		true,
		function(actor, level){
			return [
				{type: "victory_turn", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		44, 
		"Spiral Effector", 
		"Damage of all weapons +300. Grants effects Ignore Size and Barrier Piercing.", 
		false,
		false,
		function(actor, level){
			return [
				{type: "weapon_ranged", modType: "addFlat", value: 300},
				{type: "weapon_melee", modType: "addFlat", value: 300},
				{type: "ignore_size", modType: "addFlat", value: 1},
				{type: "pierce_barrier", modType: "addFlat", value: 1}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		45, 
		"Omnidefensor", 
		"The Unit suffers no Evasion decay. Grants Barrier Field.", 
		false,
		false,
		function(actor, level){
			return [				
				{type: "ignore_evasion_decay", modType: "addFlat", value: 1},
				{type: "reduction_barrier", subType: "all", value: 1000, cost: 0}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		46, 
		"Hyper Generator", 
		"Restores EN to Max at the start of Player Phase.", 
		false,
		false,
		function(actor, level){
			return [				
				{type: "EN_regen", modType: "addFlat", value: 100}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		47, 
		"Hyper Reloader", 
		"Restores Ammo to Max at the start of Player Phase.", 
		false,
		false,
		function(actor, level){
			return [				
				{type: "ammo_regen", modType: "addFlat", value: 100}
			];
		},
		function(actor, level){
			return true;
		}
	);
	this.addDefinition(
		48, 
		"Soldier's Medallion", 
		"Max Morale +30.", 
		false,
		false,
		function(actor, level){
			return [				
				{type: "max_will", modType: "addFlat", value: 30}
			];
		},
		function(actor, level){
			return true;
		}
	);
}