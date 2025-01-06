// ProjectWidget.jsx

import { useNavigate } from "react-router-dom";

const ProjectWidget = ({ project }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/projects')
  }

  return (
    <div className="bg-lighter-purple p-4 pb-8 mb-8 mt-8 rounded">
      <div className="flex flex-col gap-4">
      <h3 className="tracking-widest text-xl mt-4">{project.title}</h3>
        <div className="w-1/1">
          <img className="rounded" src={project.coverPhoto} />
        </div>
        <div className="w-1/1">
         <p className="mt-2 font-thin opacity-80">{project.description_1}</p>
         <p className="opacity-90 text-sm mt-4">{project.skills}</p>
          <button onClick={handleClick} className="mt-4 p-4 w-1/3 bg-translucent-black rounded">Explore</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectWidget;