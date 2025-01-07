// MainProjectWidget.jsx

const MainProjectWidget = ({ project }) => {
  const handleLiveClick = () => {
    window.open(project.url, '_blank', 'noopener,noreferrer');
  };

  const handleGithubClick = () => {
    window.open(project.gitHub, '_blank', 'noopener,noreferrer');
  }

  const handleAboutClick = () => {
    
  }
  return (
    <div className="text-black mb-8 bg-orange-accent border p-4 py-6 border-black rounded-md">
      <h3 className="text-lg tracking-widest opacity-80">{project.title}</h3>
      <p className="text-sm mt-2">{project.skills}</p>
      <div className="mt-6">
        <img onClick={handleLiveClick} className="border-black border rounded-md" src={project.coverPhoto}/>
      </div>
      <p className="mt-6 opacity-80">{project.description_1}</p>
      <div className="mt-2">
        {/* <button className="text-sm mr-8 bg-green-600 px-6 py-4 rounded">Live</button>
        <button className="text-sm mr-8 bg-yellow-600 px-6 py-4 rounded">GitHub</button> */}
        <button onClick={handleLiveClick} className="p-4 rounded-3xl bg-medium-green text-black text-sm mr-4">Live demo</button>
        <button onClick={handleGithubClick} className="text-yellow-500 text-sm mr-4">GitHub</button>
        <button onClick={handleAboutClick} className="text-yellow-600 text-sm mr-4">About</button>
      </div>
      <div>
      </div>
    </div>
  )
}

export default MainProjectWidget;