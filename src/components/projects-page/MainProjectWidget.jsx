// MainProjectWidget.jsx

const MainProjectWidget = ({ project, CTA }) => {
  const handleLiveClick = () => {
    window.open(project.url, '_blank', 'noopener,noreferrer');
  };

  const handleGithubClick = () => {
    window.open(project.gitHub, '_blank', 'noopener,noreferrer');
  }

  const handleAboutClick = () => {
    
  }

  return (
    <div className="mb-12 border-light-orange bg-dark-teal text-white dark:text-white dark:bg-dark-brown dark:border-deep-orange border-2 p-4 py-10 border-black rounded-3xl">
      <h3 className="text-xl tracking-widest">{project.title}</h3>
      <p className="italic text-sm mt-2">{project.skills}</p>
      <div className="mt-6">
        <img onClick={handleLiveClick} className=" rounded-md" src={project.coverPhoto}/>
      </div>
      <p className="mt-6 opacity-80">{project.description_1}</p>
      {CTA && (
        <div className="mt-8">
        {/* <button className="text-sm mr-8 bg-green-600 px-6 py-4 rounded">Live</button>
        <button className="text-sm mr-8 bg-yellow-600 px-6 py-4 rounded">GitHub</button> */}
        <button onClick={handleLiveClick} className="p-4 rounded-3xl bg-medium-green text-black text-sm mr-2">Live demo</button>
        <button onClick={handleGithubClick} className="text-black text-sm bg-light-orange p-4 rounded-3xl mr-2">GitHub</button>
        <button onClick={handleAboutClick} className="text-orange-300 opacity-80 ml-2 text-sm">About →</button>
      </div>
      )}
      {!CTA && (
        <button className="mt-8 p-4 rounded-3xl bg-beige dark:bg-dark-teal text-black dark:text-white text-sm italic mr-2">Coming soon...</button>

      )}
      <div>
      </div>
    </div>
  )
}

export default MainProjectWidget;