import React from 'react'
import './Main.css'
import img from '../../assets/img.jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$3000',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
  },

  //  {
  //   id:2,
  //   imgSrc: img2,
  //   destTitle: 'Machu Picchu',
  //   location: 'Peru',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$6000',
  //   description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu the so called lost city of Incas.This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.'
  //  },

   
  //  {
  //   id:3,
  //   imgSrc: img3,
  //   destTitle: 'Great Barrier Reef',
  //   location: 'Australia',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$7000',
  //   description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is lavish and beauty. Always intersting to be in this place.'
  //  },

  //   {
  //   id:4,
  //   imgSrc: img4,
  //   destTitle: 'Cappadocia',
  //   location: 'Turkey',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$8000',
  //   description: 'According to the World Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities'
  //  },

  //   {
  //   id:5,
  //   imgSrc: img5,
  //   destTitle: 'Guanajuato',
  //   location: 'Mexico',
  //   grade: 'CULTURAL RELAX',
  //   fees: '11000',
  //   description: 'A city in central Mexico, Guanajuato is known fot its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always Welcome.'
  //  },

  //   {
  //   id:6,
  //   imgSrc: img6,
  //   destTitle: 'Cinque Terre',
  //   location: 'Italy',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$7000',
  //   description: 'The vibrant of hues of the houses are its benchmark and explain the beauty of this place.Also if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!'
  //  },

  //   {
  //   id:7,
  //   imgSrc: img7,
  //   destTitle: 'Angor Wat',
  //   location: 'Australia',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$7090',
  //   description: 'Angor Wat represents the entire range of Khmer art from the 9th to 15th century. This temple is considered the heart and soul of Cambodia. This place  is known for its luxurious stays and adventurous activities.'
  //  },

  //   {
  //   id:8,
  //   imgSrc: img8,
  //   destTitle: 'Taj Mahal',
  //   location: 'India',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$7000',
  //   description: 'An immense mausoleum o white marble, built-in Agra by Mughal emperor Shan Jahan in memory of his wife Mumtaz, the monument is breathtaking beautiful.'
  //  },

  //  {

  //   id:9,
  //   imgSrc: img9,
  //   destTitle: 'Bali island',
  //   location: 'Indonesia',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$7000',
  //   description: 'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago.'
  //  },

]

const Main = () => {
  return (
    <section className=" main container section">
      <div className="sectionTitle">
        <h3 className="Title">
          Most Visited Destinations.
        </h3>
      </div>
      
      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description })=>{
            return(
              <div key={id} className="singleDestination">
                {/*here it will return id from the map array */}
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                   </span>

                    <div className='fees flex' >
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                        <div className="price">
                          <h5>{fees}</h5>
                        </div>
                      </div>
                    </div>


                 
            

                </div>

              </div>
            )
            
          })
        }

      </div>

    </section>
  )
}

export default Main
