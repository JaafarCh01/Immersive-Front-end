import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import ButtonT from './ButtonT';

function CardList({ cards }) {
  return (
    <div className="p-6 mx-auto max-w-screen-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card key={index} className="w-full bg-white shadow-lg rounded-lg">
            <CardHeader color="blue-gray" className="relative h-48">
              <img
                src={card.image}
                alt="card-image"
                className="object-cover w-full h-full rounded-t-lg"
              />
            </CardHeader>
            <CardBody className="flex flex-col justify-between h-60">
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {card.title}
                </Typography>
                <Typography>{card.description}</Typography>
              </div>
              <CardFooter className="pt-2">
                <ButtonT text="Check it out" />
              </CardFooter>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CardList;
