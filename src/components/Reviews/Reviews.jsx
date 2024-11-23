import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmCredits, getFilmReviews } from '../../services/filmAPI.js';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { filmId } = useParams();
  console.log(reviews);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getFilmReviews(filmId);
        setReviews(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(item => {
            return (
              <li key={item.author}>
                <p>Review : {item.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No reviews</p>
      )}
    </>
  );
};
