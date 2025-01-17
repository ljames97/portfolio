// ProjectWidget.jsx

import { useNavigate } from "react-router-dom";

const ProjectWidget = ({ project, isHomePage }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/projects')
  }

  const handleLiveClick = () => {
    window.open(project.url, '_blank', 'noopener,noreferrer');
  };

  const handleGithubClick = () => {
    window.open(project.gitHub, '_blank', 'noopener,noreferrer');
  }

  const handleAboutClick = () => {
    
  }

  return (
    <div className={`${project.comingSoon && isHomePage && 'hidden'} md:${project.comingSoon && 'block'} h-1/1 md:w-1/3 md:pb-8 pb-16 mb-16 border-white dark:border-light-orange dark:border-deep-orange border px-8 pt-10 rounded-3xl bg-dark-teal dark:bg-dark-blue`}>
      <div className="flex flex-col gap-2">
      <h3 className="tracking-widest text-2xl font-thin">{project.title}</h3>
      <p className="italic opacity-90 text-sm">{project.skills}</p>
        <div className="w-1/1">
          <img className="w-6/7 rounded-xl mt-4" src={project.coverPhoto} />
        </div>
        <div className="w-1/1">
         <p className="mt-2 font-thin opacity-80">{project.description_1}</p>

         {!project.comingSoon && isHomePage && (<button onClick={handleClick} className="mt-8 p-4 bg-light-orange text-black rounded-3xl">Discover →</button>)}
         {project.comingSoon && (<button className="mt-8 p-4 rounded-3xl bg-beige dark:bg-dark-orange text-black dark:text-white text-sm italic mr-2">Coming soon...</button>)}
         {!project.comingSoon && !isHomePage && (
        <div className="mt-8">
        {/* <button className="text-sm mr-8 bg-green-600 px-6 py-4 rounded">Live</button>
        <button className="text-sm mr-8 bg-yellow-600 px-6 py-4 rounded">GitHub</button> */}
        <button onClick={handleLiveClick} className="p-4 rounded-3xl bg-medium-green text-black text-sm mr-2">Live demo</button>
        <button onClick={handleGithubClick} className="text-black text-sm bg-light-orange p-4 rounded-3xl mr-2">GitHub</button>
        <button onClick={handleAboutClick} className="text-orange-300 opacity-80 ml-2 text-sm">About →</button>
      </div>
      )}
        </div>
      </div>
    </div>
  )
}

export default ProjectWidget;