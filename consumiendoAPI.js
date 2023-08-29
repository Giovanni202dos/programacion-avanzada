
const peticion = fetch(`https://api.themoviedb.org/3/movie/550?api_key=8fa8fe67b5f6b84aedfe04b2350639db`)
const LINK_BASE='https://image.tmdb.org/t/p/w500'
peticion
// esto se conoce como promesa en cadena
    .then(resp => resp.json() )
    .then(data => {
        //console.log(data);
        var title= document.createElement('h2');
        //console.log(data.original_title)
        title.innerHTML=data.original_title;

        var description= document.createElement('p');
        //console.log(data.overview)
        description.innerHTML=data.overview;

        //console.log(data.poster_path)
        const img = document.createElement('img');
        img.src=LINK_BASE+data.poster_path;

        var body = document.querySelector('body');
        body.appendChild(title)
        body.appendChild(description)
        body.appendChild(img)
    })
    .catch(error => {
        console.warn("Ha ocurrido un error:", error);
    });