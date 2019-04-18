var csgo_folder = "C:/Program Files (x86)/Steam/steamapps/common/Counter-Strike Global Offensive/"

var _maps = {
	de_dust2:
	{
		name: "Dust 2",
		pos_x: -2476,
		pos_y: 3239,
		scale: 4,
		rotate: 1,
		zoom: 1.1,
		
		CTSpawn_x: 	0.62,
		CTSpawn_y: 	0.21,
		TSpawn_x: 	0.39,
		TSpawn_y: 	0.91,
		bombA_x:	0.80,
		bombA_y:	0.16,
		bombB_x:	0.21,
		bombB_y:	0.12,
		
		grenades:[
			// A
			{
				name: "deep_ct", type: "smoke",
				x: 615, y: 2178, utility: 4, difficulty: 3,
				srcs:[
					{
						name: "deep_a_long",
						x: 516, y: 984, angle: 87,
						comment: "Regular throw"
					},
					{
						name: "a_short",
						x: 273, y: 1890, angle:40, h_angle: -2.4,
						comment: "Weak jump throw"
					}
				]
			},
			{
				name: "onspot_a", type: "molotov",
				x: 1155, y: 2500, angle: 89.5, h_angle: 89,
				comment: "Run Throw, let go as soon as you leave the stairs",
				srcs:[{
					name: "a_short", x: 269, y: 1649, angle: 53.7, angle_h: -8.35//FILLME WITH REAL DATA
				}]
			},
			{
				name: "goose_a", type: "molotov",
				x: 1120, y: 2884, utility: 3, difficulty: 1,
				srcs:[{
					name: "a_short",
					x: 273, y: 1730, angle: 53.7, angle_h: -8.35,
					comment: "Run throw, let go as soon as you leave the stairs"
				}]
			},
			// B
			{
				name: "b_default", type: "molotov",
				x: -1515, y: 2676, utility: 4, difficulty: 3,
				srcs:[{
						name: "mid_to_b",
						x: -1222, y: 2526, angle: -100, h_angle: -9,
						comment: "Full Jump Throw, Start Jump as soon the crosshair is on the metal knob of the door"
				}]
			},
			{
				name: "b_car", type: "molotov",
				x: -1644, y:1790, utility: 4, difficulty: 2,
				srcs:[{	
						name: "mid_to_b",
						x: -988, y: 2553, angle: -136, h_angle: -11,
						comment: "Middle Insta-Jump Throw"
				}]
				
			},
			{
				name: "b_door_headbeam", type: "flash",
				x: -1420, y: 2170, utility: 5, difficulty: 3,
				comment: "Teammate or youself can safely piek doors without getting flashed",
				srcs:[{
					name: "mid_to_b",
					x: -1180, y: 2407, angle: 107, h_angle: -13,
					comment: "Full Jump Throw"
				}]
			},
			{
				name: "tunnel_to_b", type: "flash",
				x: -1998, y: 1360, utility: 3, difficulty: 2,
				srcs:[{
					name: "upper_tunnels",
					x: -1870, y: 1384, angle: -14, h_angle: -30,
					comment: "Run throw (prefered middle throw)"
				}]
			},
			{
				name: "tunnel_to_b_exit", type: "flash",
				x: -1822, y: 2007, utility: 5, difficulty: 1,
				comment: "Excellent B Rush Grenade, as hugging the tunnel's right wall will not get you flashed",
				srcs:[{
					name: "upper_tunnels",
					x: -1825, y: 1206, angle: 120, h_angle: -4,
					comment: "Run throw on the middle of the wall."
				}]
			},
			{
				name: "b_closet_boxes", type: "smoke",
				x: -1850, y: 1955, utility: 2, difficulty: 2,
				comment: "Smoke to survive the tunnel exit chokepoint. Use with care, as it has clear weaknesses.",
				srcs:[{
					name: "upper_tunnels",
					x: -1750, y: 1089, angle: 120, h_angle: 0, // FILLME WITH REAL DATA
					comment: "Normal Throw"
				}]
			},
			
			// MID
			{
				name: "ct_to_mid", type: "smoke",
				x:-221, y:2146, utility: 4, difficulty: 2,
				srcs:[{
					name: "xbox",
					x: -275, y: 1345, angle: 130, h_angle: -35,
					comment: "Regular throw"
				}]
			},
			{
				name: "mid_doors", type: "flash",
				x: -435, y: 1693, // FILLME WITH REAL DATA
				srcs:[
					{
						name: "xbox",
						x: -275, y: 1345, angle: 80, h_angle: -35, // FILLME WITH REAL ANGLE DATA
						comment: "Regular Throw"
					},
					{
						name: "lower_tunnel"
					}
				]
			}			
		]
	},
	de_mirage:
	{
		name: "Mirage",
		pos_x: -3230,
		pos_y: 1713,
		scale: 5,
		rotate: 0,
		zoom : 0,
		
		CTSpawn_x:	0.28,
		CTSpawn_y:	0.70,
		TSpawn_x:	0.87,
		TSpawn_y:	0.36,
		bombA_x:	0.54,
		bombA_y:	0.76,
		bombB_x:	0.23,
		bombB_y:	0.28,
	
		grenades:[
			{
				type:"smoke", utulity: 5, difficulty: 1,
				name:"a_ct", x:-796, y:-2332,
				srcs:[{name:"t_spawn", x:-1258, y:-872}]
			}
		]
	},
	de_overpass:
	{
		name: "Overpass",
		pos_x: -4831,	pos_y: 1781,
		scale:	5.2,	rotate: 0,
		zoom: 0,
		
		CTSpawn_x:	0.49,	CTSpawn_y:	0.2,
		TSpawn_x:	0.66,	TSpawn_y:	0.93,
		bombA_x:	0.55,	bombA_y:	0.23,
		bombB_x:	0.7,	bombB_y:	0.31,
	
		grenades:[]
	},
	de_inferno:
	{
		name: "Inferno",
		pos_x: -2087,	pos_y: 3870,
		scale: 4.9,
		
		CTSpawn_x:	0.9,	CTSpawn_y:	0.35,
		TSpawn_x:	0.1,	TSpawn_y:	0.67,
		bombA_x:	0.81,	bombA_y:	0.69,
		bombB_x:	0.49,	bombB_y:	0.22,
		
		grenades:[]
	},
	de_train:
	{
		name: "Train",
		pos_x: -2477,	pos_y: 2392,
		scale: 4.7,
		
		CTSpawn_x:	0.86,	CTSpawn_y:	0.77,
		TSpawn_x:	0.12,	TSpawn_y:	0.25,
		bombA_x:	0.63,	bombA_y:	0.49,
		bombB_x:	0.52,	bombB_y:	0.76,
		
		grenades:[]
	},
	de_nuke:
	{
		name: "Nuke",
		has_lower_map: true,
		pos_x: -3453,	pos_y: 2887,
		scale: 7,
		
		CTSpawn_x: 	0.82,	CTSpawn_y:	0.45,
		TSpawn_x:	0.19,	TSpawn_y:	0.54,
		bombA_x:	0.58,	bombA_y:	0.48,
		bombB_x:	0.58,	bombB_y:	0.58,
		
		grenades:[]
	},
	de_vertigo:
	{
		name: "Vertigo",
		has_lower_map: true,
		pos_x: -3168,	pos_y: 1762,	
		scale: 4.0,
		
		CTSpawn_x:	0.54,	CTSpawn_y:	0.25,
		TSpawn_x:	0.20,	TSpawn_y:	0.75,
		bombA_x:	0.72,	bombA_y:	0.60,
		bombB_x:	0.245,	bombB_y:	0.27,
		
		grenades:[]
	}
}