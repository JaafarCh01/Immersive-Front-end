import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import ButtonT from "./ButtonT";
  
  function CardList() {
    return (
      <div className="p-6 mx-auto max-w-screen-xl">
        {/* Grid layout for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="w-full bg-white shadow-lg rounded-lg">
            <CardHeader color="blue-gray" className="relative h-48">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
                className="object-cover w-full h-full rounded-t-lg"
              />
            </CardHeader>
            <CardBody className="flex flex-col justify-between h-60">
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to &quot;Naviglio&quot; where you can enjoy the main
                  night life in Barcelona.
                </Typography>
              </div>
              <CardFooter className="pt-2">
                <ButtonT text="Check it out" />
              </CardFooter>
            </CardBody>
          </Card>
          {/* Repeat Card component as needed */}
          <Card className="w-full bg-white shadow-lg rounded-lg">
            <CardHeader color="blue-gray" className="relative h-48">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
                className="object-cover w-full h-full rounded-t-lg"
              />
            </CardHeader>
            <CardBody className="flex flex-col justify-between h-60">
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to &quot;Naviglio&quot; where you can enjoy the main
                  night life in Barcelona.
                </Typography>
              </div>
              <CardFooter className="pt-2">
                <ButtonT text="Check it out" />
              </CardFooter>
            </CardBody>
          </Card>
          <Card className="w-full bg-white shadow-lg rounded-lg">
            <CardHeader color="blue-gray" className="relative h-48">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
                className="object-cover w-full h-full rounded-t-lg"
              />
            </CardHeader>
            <CardBody className="flex flex-col justify-between h-60">
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to &quot;Naviglio&quot; where you can enjoy the main
                  night life in Barcelona.
                </Typography>
              </div>
              <CardFooter className="pt-2">
                <ButtonT text="Check it out" />
              </CardFooter>
            </CardBody>
          </Card>
          {/* Add more Card components as needed */}
        </div>
      </div>
    );
  }
  
  export default CardList;
  