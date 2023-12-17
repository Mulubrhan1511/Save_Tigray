import React from 'react';

export const Home = () => {
  return (
    <div class="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl">
  <div class="md:flex">
    <div class="p-8">
      <p style={{ color: "#213A62", fontSize: "4em", marginBottom: "1em" }} className="lg:order-1 lg:mb-0">
        Tigray <br />
        Back <br />
        To School
      </p>
    </div>
    <div class="md:shrink-0 mt-40 md:mt-0 md:ml-60">
      <img class="h-72 w-full object-cover md:h-full md:w-72 rounded-full" src="https://res.cloudinary.com/dhw1mueq4/image/upload/v1702729179/tigray_students_children_going_back_to_school_after_war_rost6a.png" alt="Modern building architecture"/>
    </div>
  </div>
  <div class="flex items-center lg:mr-4 lg:order-2">
    <button style={{ backgroundColor: "#DE8622", fontSize: "0.8em", width: "10em", borderRadius: "5px", marginRight: "1em" }} className="block mb-4 lg:mb-0">Read More</button>
    <p style={{ color: "#454545", fontSize: "1em" }} className="pl-6">Hello world, this is not what it may be, it is what it is</p>
  </div>
</div>






  


    
   
  );
};
