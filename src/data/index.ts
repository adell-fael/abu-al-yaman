export interface MenuItem {
	key: string
	labelKey: string
}

export interface MenuSection {
	categoryKey: string
	items: MenuItem[]
}

export const menu: MenuSection[] = [
	{
		categoryKey: 'muhashi',
		items: [{ key: 'muhashiAll', labelKey: 'muhashi.all' }],
	},
	{
		categoryKey: 'kubeh',
		items: [{ key: 'kubehAll', labelKey: 'kubeh.all' }],
	},
	{
		categoryKey: 'mansaf',
		items: [
			{ key: 'mansafJordanian', labelKey: 'mansaf.jordanian' },
			{ key: 'mansafBeef', labelKey: 'mansaf.beef' },
			{ key: 'mansafChicken', labelKey: 'mansaf.chicken' },
			{ key: 'mansafSujukFatteh', labelKey: 'mansaf.sujukFatteh' },
			{ key: 'mansafSalad', labelKey: 'mansaf.salad' },
			{ key: 'mansafMandi', labelKey: 'mansaf.mandi' },
			{ key: 'mansafMixedGrill', labelKey: 'mansaf.mixedGrill' },
			{ key: 'mansafRiceFreekeh', labelKey: 'mansaf.riceFreekeh' },
		],
	},
	{
		categoryKey: 'coldMezze',
		items: [
			{ key: 'yalanji', labelKey: 'coldMezze.yalanji' },
			{ key: 'mutabbal', labelKey: 'coldMezze.mutabbal' },
			{ key: 'babaGhanoush', labelKey: 'coldMezze.babaGhanoush' },
			{ key: 'potatoSalad', labelKey: 'coldMezze.potatoSalad' },
			{ key: 'hummus', labelKey: 'coldMezze.hummus' },
			{ key: 'fattoush', labelKey: 'coldMezze.fattoush' },
			{ key: 'shaibiyatMeat', labelKey: 'coldMezze.shaibiyatMeat' },
			{ key: 'waraqDawali', labelKey: 'coldMezze.waraqDawali' },
			{ key: 'shishBarak', labelKey: 'coldMezze.shishBarak' },
			{ key: 'meatInDish', labelKey: 'coldMezze.meatInDish' },
		],
	},
	{
		categoryKey: 'bakedGoods',
		items: [
			{ key: 'kaekMaamoulDate', labelKey: 'bakedGoods.kaekMaamoulDate' },
			{
				key: 'kaekMaamoulWalnut',
				labelKey: 'bakedGoods.kaekMaamoulWalnut',
			},
			{
				key: 'kaekMaamoulPistachio',
				labelKey: 'bakedGoods.kaekMaamoulPistachio',
			},
			{
				key: 'kaekMaamoulCashew',
				labelKey: 'bakedGoods.kaekMaamoulCashew',
			},
			{ key: 'brazouqPlain', labelKey: 'bakedGoods.brazouqPlain' },
			{ key: 'brazouqGhee', labelKey: 'bakedGoods.brazouqGhee' },
		],
	},
	{
		categoryKey: 'savoryPastries',
		items: [
			{ key: 'fatayerCheese', labelKey: 'savoryPastries.fatayerCheese' },
			{ key: 'fatayerZaatar', labelKey: 'savoryPastries.fatayerZaatar' },
			{ key: 'fatayerSpinach', labelKey: 'savoryPastries.fatayerSpinach' },
			{ key: 'pizzaAll', labelKey: 'savoryPastries.pizzaAll' },
			{ key: 'nestAlBallel', labelKey: 'savoryPastries.nestAlBallel' },
			{ key: 'sambousek', labelKey: 'savoryPastries.sambousek' },
		],
	},
	{
		categoryKey: 'pasta',
		items: [
			{ key: 'macaronaBechamel', labelKey: 'pasta.bechamel' },
			{ key: 'macaronaSpaghetti', labelKey: 'pasta.spaghetti' },
			{ key: 'macaronaTomato', labelKey: 'pasta.tomato' },
			{ key: 'macaronaLabneh', labelKey: 'pasta.labneh' },
			{ key: 'macaronaVegetables', labelKey: 'pasta.vegetables' },
			{ key: 'macaronaCheese', labelKey: 'pasta.cheese' },
		],
	},
	{
		categoryKey: 'grill',
		items: [
			{ key: 'kebabMeatChicken', labelKey: 'grill.kebabMeatChicken' },
			{ key: 'shawakfMeatChicken', labelKey: 'grill.shawakfMeatChicken' },
			{ key: 'thighs', labelKey: 'grill.thighs' },
			{ key: 'wings', labelKey: 'grill.wings' },
		],
	},
	{
		categoryKey: 'mixedPlatter',
		items: [{ key: 'frenchPlate', labelKey: 'mixedPlatter.frenchPlate' }],
	},
]
