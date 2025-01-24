// ProjectWidget.jsx

import { useNavigate } from "react-router-dom";


/**
 * Renders project with title, skills, description, cover photo and buttons.
 * Different buttons are rendered depending on type or project and whether or not this is on homepage.
 * @param {object} props.project - Project to be rendered in widget.
 * @param {boolean} props.isHomePage - Determines if the component is rendered on the homepage.
 */
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
    <div className={`shadow-xl transition-shadow ${project.comingSoonMobile && 'lg:block'} ${project.comingSoonMobile && !isHomePage && 'lg:hidden'} ${project.comingSoonMobile && isHomePage && 'hidden'} ${project.portfolio && isHomePage && 'hidden'} ${isHomePage ? 'bg-transparent' : 'bg-dark-teal'} ${isHomePage ? 'text-black' : 'text-white'} border h-1/1 lg:w-1/3 lg:pb-8 pb-16 mb-16 border-black border-dark-blue border px-8 pt-10 rounded-3xl flex flex-col`}>
      <div className="flex flex-col gap-2 h-full">
        <h3 className="tracking-wide text-2xl font-thin">{project.title}</h3>
        <p className="italic opacity-90 text-sm">{project.skills}</p>
        <div onClick={project.url && handleLiveClick} className={`${project.url && 'cursor-pointer'} w-1/1`}>
          <img className={`w-1/1 border border-transparent w-6/7 rounded-xl mt-4`} src={project.coverPhoto} alt="project cover photo"/>
        </div>
        <p className="mt-2 font-thin opacity-80">{project.description_1}</p>
        <div className="flex-grow"></div>
        <div className="w-1/1 mt-auto">

          {!project.comingSoon && isHomePage && (<button onClick={handleClick} className="mt-4 p-4 bg-accent hover:bg-hover-accent text-black rounded-3xl">Discover →</button>)}
          {project.comingSoon && (<button className="mt-4 p-4 rounded-3xl bg-custom-purple hover:cursor-auto text-white text-sm italic mr-2">Coming soon...</button>)}
          {!project.comingSoon && !isHomePage && (
        <div className="mt-8 flex gap-4 flex-wrap">
        {/* <button className="text-sm mr-8 bg-green-600 px-6 py-4 rounded">Live</button>
        <button className="text-sm mr-8 bg-yellow-600 px-6 py-4 rounded">GitHub</button> */}
        {!project.portfolio && (
          <button onClick={handleLiveClick} className="p-4 hover:bg-green-hover-accent rounded-3xl bg-light-green text-black text-sm">Live demo</button>
        )}
        <button onClick={handleGithubClick} className="hover:bg-hover-accent text-black text-sm bg-accent p-4 rounded-3xl">GitHub</button>
        {/* <button onClick={handleAboutClick} className="bg-dark-blue hover:bg-medium-blue p-4 rounded-3xl text-white opacity-80 text-sm">About</button> */}
      </div>
      )}
        </div>
      </div>
    </div>
  )
}

export default ProjectWidget;