import logo from "../assets/MedGridlogo.png";

function About(){
  return(
    <body className="bg-gradient-to-br from-green-100 to-blue-200">

      <div className="pt-12 md:pt-20 flex item-center justify-center">
        <img src={logo} alt="MedGrid" className="h-26 md:h-50"/>
      </div>

      <div className="text-center gap-4 ">

      
       <h1 className="text-2xl md:text-4xl font-bold text-black-700 ">
        About <span className="text-green-300">MedGrid</span>
        </h1>

        <h1 className="text-2xl md:text-4xl font-bold text-black-700">
          Building a Smarter, Healthier Nigeria
        </h1>

        <div className="px-16 md:px-28 text-1xl md:text-2xl">
          <p>MedGrid is a unified digital platform that brings transparency, effciency, and accessibility to Nigeria's health care and health supply chain. we empower every stakeholder with real-time data and intelligent tools to save lives and reduce time</p>
        </div>
     </div>

     <div className="pt-15  grid gap-5 md:grid-cols-4 grid-cols-2">
       <div className="bg-green-100 h-[300px] shadow rounded-xl"></div>
       <div className="bg-green-100 h-[300px] shadow rounded-xl"></div>
       <div className="bg-green-100 h-[300px] shadow rounded-xl"></div>
       <div className="bg-green-100 h-[300px] shadow rounded-xl"></div>
     </div>

     </body>

    
  )
}

export default About;