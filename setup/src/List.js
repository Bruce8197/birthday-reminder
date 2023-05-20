import React from 'react';

const List = ({ people }) => {
  if (!Array.isArray(people)) {
    return null; // or any default JSX to render when people is not an array
  }

  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
