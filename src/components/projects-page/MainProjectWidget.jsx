// MainProjectWidget.jsx

const MainProjectWidget = ({ project }) => {
  const handleLiveClick = () => {
    window.open(project.url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="mt-16">
      <h3 className="text-lg tracking-widest opacity-80">{project.title}</h3>
      <p className="text-sm mt-2">{project.skills}</p>
      <div className="mt-4">
        <img onClick={handleLiveClick} className="border border-yellow-600 rounded" src={project.coverPhoto}/>
      </div>
      <div className="mt-4">
        <button className="text-white p-4 w-1/3 bg-translucent-black rounded">Explore</button>
        <button className="ml-8 text-white p-4 w-1/3 bg-translucent-green rounded" onClick={handleLiveClick}>Live Demo</button>
      </div>
    </div>
  )
}

export default MainProjectWidget;