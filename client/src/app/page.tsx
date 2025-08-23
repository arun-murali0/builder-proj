"use client";
// this is home page

import { Button } from "@/components/ui/button";

export default function page() {
  const handleClick = () => {
    alert("button clicked....");
  };

  return (
    <h1>
      <p>Home page</p>
      <Button onClick={() => handleClick()}>click me</Button>
    </h1>
  );
}
