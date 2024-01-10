import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function LaunchCardComponent() {
  return (
    <Card className="py-4 w-240">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://media.istockphoto.com/id/1344443930/photo/space-shuttle-rocket-launch-in-the-sky-and-clouds-to-outer-space-sky-and-clouds-spacecraft.jpg?s=612x612&w=0&k=20&c=lYoFwMF9Sc6q07skiz6WaVovoseHk6M1tDr5qeecRjI="
          width={270}
        />
      </CardBody>
    </Card>
  );
}
