// ProjectWidget.jsx

const ProjectWidget = ({ project }) => {
  return (
    <div className="bg-lighter-purple p-4 pb-8 mb-8 mt-4 rounded">
      <div className="flex flex-col gap-4">
      <h3 className="tracking-widest opacity-80 text-xl">{project.title}</h3>
      <div className="flex gap-2">
        <div className="w-24 flex-shrink-0">
          <img className="rounded" src={project.coverPhoto[0]} />
        </div>
        <div className="w-24 flex-shrink-0">
          <img className="rounded" src={project.coverPhoto[1]} />
        </div>
        <div className="w-24 flex-shrink-0">
          <img className="rounded" src={project.coverPhoto[2]} />
        </div>
      </div>
        <div className="w-1/1">
         <p className="mt-2 font-thin opacity-80">{project.shortDescription}</p>
          <p className="mt-2">{project.skills}</p>
          <button className="mt-6 p-2 w-20 bg-custom-purple rounded">Explore</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectWidget;