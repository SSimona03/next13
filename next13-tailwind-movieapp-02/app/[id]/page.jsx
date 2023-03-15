import "../globals.css"
import Image from "next/image";

export default async function MovieDetail({params}){
    const {id} = params;
    const imgPath2 = "https://www.themoviedb.org/t/p/original"
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`, {next: {revalidate: 120}})
    const res = await data.json();
    
    return(
        <div className=" flex flex-col items-center ">
           <h2 className={"text-xl"}>{res.title}</h2>
           <Image  className=""
                src= {imgPath2 + res.backdrop_path}
                alt="test"
                width={550}
                height={350} >
           </Image>
           <p><b className="font-bold" >IMDB:</b> {(Math.round(res.vote_average * 100) / 100).toFixed(1)} &nbsp;&nbsp; <b className="font-bold">Released:</b> {res.release_date}</p>
           <p><b className="font-bold" >Runtime: </b>{res.runtime} </p>
           <p className = "mt-10 mx-10" >{res.overview}</p>
           
        </div>
    )
}