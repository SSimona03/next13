import Image from "next/image"
import Link from "next/link"
import "../globals.css"

export default function Movie(props){
    const imgPath = "https://image.tmdb.org/t/p/w440_and_h660_face"
    
    return(
        <div className="grid place-content-center ">
            <h1>{props.title}</h1>
            <h4 className="text-xs" >{props.release_date}</h4>
            <Link href={`/${props.id}`}>
            <Image className="poster"
                src= {imgPath + props.image_path}
                alt="test"
                width={250}
                height={400} 
            />
            </Link>
           
        </div>
    )
}