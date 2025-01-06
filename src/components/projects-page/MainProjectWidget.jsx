// MainProjectWidget.jsx

const MainProjectWidget = ({ project }) => {
  const handleLiveClick = () => {
    window.open(project.url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="mt-8">
      <h3 className="text-lg tracking-widest opacity-80">{project.title}</h3>
      <p className="text-sm mt-2">{project.skills}</p>
      <div className="mt-4">
        <img onClick={handleLiveClick} className="border border-yellow-600 rounded" src={project.coverPhoto}/>
      </div>
      <div className="mt-4">
      </div>
    </div>
  )
}

export default MainProjectWidget;