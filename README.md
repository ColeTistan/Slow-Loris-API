# Slow-Loris-API

![alt text](https://scx2.b-cdn.net/gfx/news/hires/2019/slowlorisstu.jpg)

## About
Slow lorises are a species of primates that can be found in Southeast Asia. They are known for their large eyes, which are part of their adaption as nocturnal animals to be active during the night. Eight known species of slow lorises exist and all of which are considered "vulnerable" or "endangered" animals due to deforestation and illegal pet trade in the black market. Currently, conservation efforts towards slow lorises have prevailed such as education to learn about them and protecting their natural habitats from human activity.

## Purpose 
I want to build this API to help people learn about these amazing animals and why it is important to prevent the the risk of slow lorises going into extinction.

## Production Host
`https://slow-loris-api.onrender.com`

## HTTP Endpoints
### `GET - /api/all`
Gets All slow loris data
<br/>
`https://slow-loris-api.onrender.com/api/all`
```
[
	{
		"_id": "61ff53ccf22e0e457c704642",
		"common_name": "Pygmy slow loris",
		"scientific_name": "Nycticebus pygmaeus",
		"description": "Unlike other primates, it does not leap. It lives together in small groups usually with one or two offspring. An adult can grow to around 19 to 23 cm (7.5 to 9.1 in) long and has a very short tail. It weighs about 450 g (1.0 lb). Its diet consists of fruits, insects, small fauna, tree sap, and floral nectar.",
		"distribution": [
			"Cambodia",
			"China",
			"Laos",
			"Vietnam"
		],
		"conservation_status": "Endangered",
		"image_url": "https://upload.wikimedia.org/wikipedia/commons/d/db/Nycticebus_pygmaeus_004.jpg",
		"wikipedia_url": "https://en.wikipedia.org/wiki/Pygmy_slow_loris",
		"__v": 0
	},
	...
]
```

### `GET - /api/{id}`
Gets slow loris by ID
<br/>
`https://slow-loris-api.onrender.com/api/61ff53ccf22e0e457c704645`

```
{
	"_id": "61ff53ccf22e0e457c704645",
	"common_name": "Bangka slow loris",
	"scientific_name": "Nycticebus bancanus",
	"description": "Originally considered a subspecies or synonym of the Bornean slow loris (N. menagensis), it was promoted to full species status in 2013 when a study of museum specimens and photographs identified distinct facial markings, which helped to differentiate it as a separate species. It is distinguished by the crimson red fur on its back, light-colored facial features, as well as the shape and width of the stripes of its facial markings. As with other slow lorises, this arboreal and nocturnal species primarily eats insects, tree gum, nectar, and fruit and has a toxic bite, a unique feature among primates.",
	"distribution": [
		"Borneo",
		"Bangka"
	],
	"conservation_status": "Critically Endangered",
	"image_url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46534279-b5ca-4a89-b26c-320f37fc3938/deqcplc-1083d7a4-3ae4-4656-8d99-25812df3854b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2NTM0Mjc5LWI1Y2EtNGE4OS1iMjZjLTMyMGYzN2ZjMzkzOFwvZGVxY3BsYy0xMDgzZDdhNC0zYWU0LTQ2NTYtOGQ5OS0yNTgxMmRmMzg1NGIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1oO4qIxi1p1nXVLeQpplIH0QC5T4XqVjQjHiVnoxYxo",
	"wikipedia_url": "https://en.wikipedia.org/wiki/Nycticebus_bancanus",
	"__v": 0
}
```

### `GET - /api/scientific/{name}`
Gets slow loris by scientific name
<br/>
`https://slow-loris-api.onrender.com/api/scientific/Nycticebus coucang`
```
[
	{
		"_id": "61ff53ccf22e0e457c704640",
		"common_name": "Sunda slow loris",
		"scientific_name": "Nycticebus coucang",
		"description": "It measures 27 to 38 cm (11 to 15 in) from head to tail and weighs between 599 and 685 g (21.1 and 24.2 oz). Like other slow lorises, it has a wet nose (rhinarium), a round head, small ears hidden in thick fur, a flat face, large eyes and a vestigial tail.",
		"distribution": [
			"Indonesia",
			"Malaysia",
			"Thailand",
			"Singapore"
		],
		"conservation_status": "Endangered",
		"image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nycticebus_coucang_002.jpg/800px-Nycticebus_coucang_002.jpg",
		"wikipedia_url": "https://en.wikipedia.org/wiki/Sunda_slow_loris",
		"__v": 0
	}
]
```

### `GET - /api/common/{name}`
Gets slow loris by common name
<br/>
`https://slow-loris-api.onrender.com/api/common/javan`
```
[
	{
		"_id": "61ff53ccf22e0e457c704643",
		"common_name": "Javan slow loris",
		"scientific_name": "Nycticebus javanicus",
		"description": "Its forehead has a prominent white diamond pattern, which consists of a distinct stripe that runs over its head and forks towards the eyes and ears. The Javan slow loris weighs between 565 and 687 g (1.25 and 1.51 lb) and has a head-body length of about 293 mm (11.5 in). Like all lorises, it is arboreal and moves slowly across vines and lianas instead of jumping from tree to tree. Its habitat includes primary and secondary forests, but it can also be found in bamboo and mangrove forests, and on chocolate plantations. Its diet typically consists of fruit, tree gum, lizards, and eggs.",
		"distribution": [
			"Indonesia",
			"Java"
		],
		"conservation_status": "Critically Endangered",
		"image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Coucang.jpg/1280px-Coucang.jpg",
		"wikipedia_url": "https://en.wikipedia.org/wiki/Javan_slow_loris",
		"__v": 0
	}
]
```

### `GET - /api/habitat/{location}`
Gets slow loris by habitat
<br/>
`https://slow-loris-api.onrender.com/api/habitat/laos`
```
[
	{
		"_id": "61ff53ccf22e0e457c704642",
		"common_name": "Pygmy slow loris",
		"scientific_name": "Nycticebus pygmaeus",
		"description": "Unlike other primates, it does not leap. It lives together in small groups usually with one or two offspring. An adult can grow to around 19 to 23 cm (7.5 to 9.1 in) long and has a very short tail. It weighs about 450 g (1.0 lb). Its diet consists of fruits, insects, small fauna, tree sap, and floral nectar.",
		"distribution": [
			"Cambodia",
			"China",
			"Laos",
			"Vietnam"
		],
		"conservation_status": "Endangered",
		"image_url": "https://upload.wikimedia.org/wikipedia/commons/d/db/Nycticebus_pygmaeus_004.jpg",
		"wikipedia_url": "https://en.wikipedia.org/wiki/Pygmy_slow_loris",
		"__v": 0
	},
	...
]
```

### `GET - /api/status/{status}`
Gets slow loris by conservation status
<br/>
`https://slow-loris-api.onrender.com/api/status/vulnerable`
```
[
	{
		"_id": "61ff53ccf22e0e457c704646",
		"common_name": "Borneo slow loris",
		"scientific_name": "Nycticebus borneanus",
		"description": "Formerly considered a subspecies or synonym of N. menagensis, it was promoted to full species status in 2013 when a study of museum specimens and photographs identified distinct facial markings, which helped to differentiate it as a separate species. It is distinguished by its dark, contrasting facial features, as well as the shape and width of the stripes of its facial markings. As with other slow lorises, this arboreal and nocturnal species primarily eats insects, tree gum, nectar, and fruit and has a toxic bite, a unique feature among primates",
		"distribution": [
			"Borneo",
			"Indonesia"
		],
		"conservation_status": "Vulnerable",
		"image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Kukang_kalimantan_%28Nycticebus_borneanus%29.jpg/1280px-Kukang_kalimantan_%28Nycticebus_borneanus%29.jpg",
		"wikipedia_url": "https://en.wikipedia.org/wiki/Nycticebus_borneanus",
		"__v": 0
	},
	...
]
```

## Technologies Used
##### - MongoDB
##### - Express
##### - NodeJS
##### - Vite (JS)
##### - Tailwind CSS
