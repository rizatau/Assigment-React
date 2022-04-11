import Button from "./Button";
import Heading from "./Heading";
import ImageMedia from "./ImageMedia";
import List from "./List";
import Paragraph from "./Paragraph";
import { fetchApi } from '../api'

export default function MovieCard({movie,viewDetail,viewRating, setMovies}) {
    
    const handleClickDelete = (e) => {
        remove()
    }  
    
    const remove = async () => {
        try {
          const response = await fetchApi(`movies/${movie._id}`, { method: 'DELETE' });
  
          console.log(response.status);
          if (response.status === 200) {
              console.log("delete berhasil");
              setMovies((currValue) => {
                  return currValue.filter(val => val._id !== movie._id )
              })
          }
            
        } catch(err) {
            console.log(err);
        }
    }

    return (    
        <div className="movie-card">
            <ImageMedia id={movie._id} className='poster' imgUrl={movie.poster} />
            <div className="movie-body">
                <div className="movie-header">
                    <Heading title={`${movie.title}  (${movie.year})`} className='mov-title' />
                    {/* <Heading title={`(${movie.year})`} className='mov-year' /> */}
                </div>
                <List divClass='casts-box' ulClass='cast-list' list={movie.casts} liClass='the-cast'/>
                <div className="movie-desc-box">
                    <Paragraph content={movie.desc} className='movie-desc'/>
                </div>
                <div className="movie-btn">
                    {/* <Button className='mov-detail-btn' onClick={viewDetail} btnLabel='detail' iconClass=''/>
                    <Button className='mov-rating' onClick={viewRating} btnLabel='rate' iconClass=''/> */}
                </div> 
                    <Button className='mov-delete' onClick={handleClickDelete} btnLabel='delete' iconClass=''/>
                
            </div>
        </div>
    )
}