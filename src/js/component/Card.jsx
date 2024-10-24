import React from 'react';

const Card = ({ name, image }) => {
  return (
    <div className=" d-flex justify-content-center row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-10">
        <img src={image} className="card-img-top" alt={name} style={{ width: '500',height: '320px', objectFit: 'cover' }} />
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-center">{name}</h5>
            <p className="card-text d-flex justify-content-center">
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
          </div>
          <div className="card-footer d-flex justify-content-center"> 
            <button style={{ padding: '10px 20px', fontSize: '16px' }}>
              Find Out More!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

  
export default function Home() {
    var characters = [
        {
           name: "Darth Vader",
           image:  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Star_Wars_-_Darth_Vader.jpg/440px-Star_Wars_-_Darth_Vader.jpg",
        },
        {
            name: "Chewbacca",
            image:
            "https://static.wikia.nocookie.net/disney/images/9/96/Profile_-_Chewbacca.png/revision/latest/scale-to-width-down/1000?cb=20190413071730",
        }, 
        {
            name: "Master Yoda",
            image:  "https://static.wikia.nocookie.net/starwars/images/8/82/Yoda_Jedi_Temple.png/revision/latest/scale-to-width-down/1000?cb=20130621181350",
         },
         {
            name: "Obiwan Kenobi",
            image: "https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png",
         }, 
    ]
    return (
        <div>
            {characters.map((character) => (
                <Card name= {character.name} image={character.image} />

            ))}
            
        </div>
    );
     }


