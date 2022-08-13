import React from 'react'

const About = () => {
  return (
    <div
    name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          About
        </p>
      </div>

      <p className="text-xl mt-20">
      👋 Hola, mi nombre es Franco, tengo 19 años, nací en Córdoba-Argentina.
      </p>

      <p className="text-xl mt-5">
      💻 Desde hace más de 1 año descubrí el mundo de la programación por el cual invertí tiempo estudiando como autodidacta, desarrolle diferentes habilidades como la lógica y resolución de problemas. Actualmente finalicé un curso intensivo de cuál me llevo más 1000 hs en donde aprendí a trabajar en equipo y realizar diferentes proyectos con las últimas tecnologías.
      </p>
      <p className="text-xl mt-5">
      👨‍💻 Me caracterizo por ser una persona organizada, autodidacta, responsable, estricta conmigo mismo y siempre tratando de aprender sobre nuevas tecnologías ya que me apasiona todo lo relacionado a desarrollo.
      Me encantan los desafíos y tener objetivos para poder desarrollarme como developer. Cuando hay algo que no se, indago hasta encontrar la solución, Me considero buen compañero y solidario. Me encanta trabajar en equipo y trato siempre de ayudar a los demás. 
      </p>
      
      <p className="text-xl mt-5">
      🌎 Me gustaría trabajar en un ambiente donde se apueste por las personas, donde pueda seguir desarrollándome como developer y se me brinden las herramientas adecuadas para proyectarme como profesional y crecer como persona. 
      </p>


      <p className="text-xl mt-5">
      🚀 Mi objetivo es poder seguir creciendo y aprendiendo para lograr desarrollar más aplicaciones y llegar a ser Developer Senior para poder enseñar a los demás, lo cual me apasiona.
      </p>
    </div>
  </div>
  )
}

export default About