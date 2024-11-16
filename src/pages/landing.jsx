import { Button } from "@/components/ui/button";


import React from "react";
import { Link } from "react-router-dom";
import companies from '../data/companies.json';
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import faqs from '../data/faq.json';
import { Accordion, AccordionContent, AccordionItem } from "@radix-ui/react-accordion";
import { AccordionTrigger } from "@/components/ui/accordion";
const Landing = () => {
  console.log(companies)
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 px-8 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl mg:text-8xl tracking-tighter">
          Find Your Dream Job{" "}
          <span className ="flex items-center gap-2 sm: gap-6">
            {" "}
            and get{" "}
            <img
              src="/logo.png"
              alt="hired logo"
              className="h-14 sm:h-24 lg: h-32"
            />
          </span>
        </h1>
        <p className=" text-gray-300 sm:mt-4 text-xs sm:text-xl"> explore thousands of job listings or find the perfect candidate</p>
      </section>
      <div className="flex justify-center gap-6">
        <Link  to="/jobs">
        <Button variant="blue" size="xl">Find Jobs</Button>

        </Link>
        <Link to="/post-job">
        <Button variant="destructive" size="xl"> Post a Job</Button>
        </Link>
      </div>
      
      <Carousel
      plugins = {[ Autoplay({ delay: 2000 })]}
      
      className="w-[80%]  mx-auto py-10"
    >
      <CarouselContent className ="flex gap-5   items-center">
        {
          companies.map(({name,id,path}) =>{
            return <CarouselItem key={id} className ="basis-1/3 lg:basis-1/6">
              <img className="h-9 sm:h-20 object-contain" src={path}  alt= {name}/>
            </CarouselItem>

          })
        }
      
      </CarouselContent>
     
    </Carousel>
    <img src= "/banner.jpeg"  className="w-full" />
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Card>
  <CardHeader>
    <CardTitle>For Job Seekers</CardTitle>
   
  </CardHeader>
  <CardContent>
    <p>Search and apply for jobs, track applications and more.</p>
  </CardContent>
  
</Card>
<Card>
  <CardHeader>
    <CardTitle>For Employers</CardTitle>
   
  </CardHeader>
  <CardContent>
    <p>Post jobs, manage applications and find the best candidates.</p>
  </CardContent>
  
</Card>

    </section>
 
   
    <Accordion type="single" collapsible>

      {faqs.map((faq,index) =>{
        return   <AccordionItem key={index} value={`item-${index+1}`}>
         <AccordionTrigger>{faq.question}</AccordionTrigger>
         <AccordionContent>
          {faq.answer}
         </AccordionContent>
       </AccordionItem>
      })}
 
</Accordion>

    </main>
  );
};

export default Landing;
