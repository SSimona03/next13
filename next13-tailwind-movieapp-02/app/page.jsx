import Movie from "./movie/page"

export default async function Page() {
  //throw new Error()
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json();
 
  return (
    <main className="grid gap-16 grid-cols-fluid mx-4 my-4 ">
     {
      res.results.map(movie=> 
        <Movie 
        key={movie.id}
        title={movie.title}
        image_path={movie.poster_path}
        release_date={movie.release_date}
        id={movie.id}
        />
       
        )
     }
      
    </main>
  )
}
