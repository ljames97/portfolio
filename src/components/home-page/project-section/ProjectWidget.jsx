// ProjectWidget.jsx

import { useNavigate } from "react-router-dom";

const ProjectWidget = ({ project }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/projects')
  }

  return (
    <div className={`pb-16 mb-16 border-white dark:border-light-orange dark:border-deep-orange border-2 px-8 pt-10 rounded-3xl bg-dark-teal dark:bg-dark-brown `}>
      <div className="flex flex-col gap-4">
      <h3 className="tracking-widest text-2xl mt-4 font-thin">{project.title}</h3>
        <div className="w-1/1">
          <img className="rounded-xl" src={project.coverPhoto} />
        </div>
        <div className="w-1/1">
         <p className="mt-2 font-thin opacity-80">{project.description_1}</p>
         <p className="opacity-90 mt-4">{project.skills}</p>
          <button onClick={handleClick} className="mt-8 p-4 bg-light-orange text-black rounded-3xl">Discover →</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectWidget;