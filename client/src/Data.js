const apiData = [
    {
        "id": 1,
        "title": "All slow loris data",
        "url": "https://slow-loris-api.onrender.com/api/all",
        "results": '[{"_id": "...","common_name": "...","scientific_name": "...","description": "...","distribution": [...],"conservation_status": "...","image_url": "...","wikipedia_url": "...","__v": 0},{...}]'
    },
    {
        "id": 2,
        "title": "Slow loris by ID",
        "url": "https://slow-loris-api.onrender.com/api/61ff53ccf22e0e457c704641",
        "results": '{"_id": "61ff53ccf22e0e457c704641","common_name": "...","scientific_name": "...","description": "...","distribution": [...],"conservation_status": "...","image_url": "...","wikipedia_url": "...","__v": 0}'
    },
    {
        "id": 3,
        "title": "Slow loris by scientific name",
        "url": "https://slow-loris-api.onrender.com/api/scientific/Nycticebus coucang",
        "results": '[{"_id": "...","common_name": "...","scientific_name": "Nycticebus coucang","description": "...","distribution": [...],"conservation_status": "...","image_url": "...","wikipedia_url": "...","__v": 0},{...}]'
    },
    {
        "id": 4,
        "title": "Slow loris by common name",
        "url": "https://slow-loris-api.onrender.com/api/common/javan",
        "results": '[{"_id": "...","common_name": "Javan slow loris","scientific_name": "...","description": "...","distribution": [...],"conservation_status": "...","image_url": "...","wikipedia_url": "...","__v": 0},{...}]'
    },
    {
        "id": 5,
        "title": "Slow lorises by native habitat",
        "url": "https://slow-loris-api.onrender.com/api/habitat/laos",
        "results": '[{"_id": "...","common_name": "...","scientific_name": "...","description": "...","distribution": ["Cambodia","China","Laos","Vietnam"],"conservation_status": "...","image_url": "...","wikipedia_url": "...","__v": 0},{...}]'
    },
    {
        "id": 6,
        "title": "Slow loris by conservation status",
        "url": "https://slow-loris-api.onrender.com/api/status/vulnerable",
        "results": '[{"_id": "...","common_name": "...","scientific_name": "...","description": "...","distribution": [...],"conservation_status": "Vulnerable","image_url": "...","wikipedia_url": "...","__v": 0},{...}]'
    }
]

export default apiData;