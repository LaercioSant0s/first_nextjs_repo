'use client'

import { useState, useEffect } from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";

export default function Counter() {
  
  const [counter, add] = useState(0)
  
  useEffect(() => {
    console.log("Trigger disso é quando o Dom Carrega")
  }, [])

  useEffect(() => {
    console.log("Trigger disso é quando o counter altera: ", counter)
  }, [counter])
  
  return <>
    <Card className="max-w-[400px] m-10">
      <CardHeader className="flex gap-3">
        
        <div className="flex flex-col">
          <p className="text-md">I will count</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Keep going: {counter}</p>
      </CardBody>
      <Divider />
      <CardFooter>

       <Button onPress={()=> {
          add(counter + 1)
       }}>Add</Button>

      </CardFooter>
    </Card>
  </>
  
}



