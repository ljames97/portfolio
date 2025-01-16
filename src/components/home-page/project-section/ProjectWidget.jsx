// ProjectWidget.jsx

import { useNavigate } from "react-router-dom";

const ProjectWidget = ({ project }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/projects')
  }

  return (
    <div className={`h-1/1 md:w-1/3 md:pb-8 pb-16 mb-16 border-white dark:border-light-orange dark:border-deep-orange border px-8 pt-10 rounded-3xl bg-dark-teal dark:bg-dark-blue `}>
      <div className="flex flex-col gap-2">
      <h3 className="tracking-widest text-2xl font-thin">{project.title}</h3>
      <p className="opacity-90 text-sm">{project.skills}</p>
        <div className="w-1/1">
          <img className="w-6/7 rounded-xl mt-4" src={project.coverPhoto} />
        </div>
        <div className="w-1/1">
         <p className="mt-2 font-thin opacity-80">{project.description_1}</p>

         {!project.comingSoon && (<button onClick={handleClick} className="mt-8 p-4 bg-light-orange text-black rounded-3xl">Discover →</button>)}
         {project.comingSoon && (<button className="mt-8 p-4 rounded-3xl bg-beige dark:bg-dark-orange text-black dark:text-white text-sm italic mr-2">Coming soon...</button>)}
        </div>
      </div>
    </div>
  )
}

export default ProjectWidget;