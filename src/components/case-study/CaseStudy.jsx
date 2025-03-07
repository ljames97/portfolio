// CaseStudy.jsx

import { useParams } from "react-router-dom";
import { caseStudies } from "../data";

const CaseStudy = () => {
  const { id } = useParams();
  const study = caseStudies.find((study) => study.id === id);

  const handleGithubClick = () => {
    window.open(study.gitHub, '_blank', 'noopener,noreferrer');
  }

  const handleLiveClick = () => {
    window.open(study.url, '_blank', 'noopener,noreferrer');
  };


  return (
    <div className="font-thin bg-dark-blue border border-black md:rounded-3xl max-w-5xl mx-auto p-8 py-20 md:p-20 md:my-20 text-gray-300">
      
      {/* Links */}
      <div className="font-normal hidden md:flex gap-4 justify-end mb-8 -mt-4">
        <button onClick={handleGithubClick} className="bg-gray-800 hover:bg-gray-700 text-white text-xs bg-transparent p-4 rounded-3xl">GitHub →</button>
        <button onClick={handleLiveClick} className="bg-gray-800 hover:bg-gray-700 text-white text-xs bg-transparent p-4 rounded-3xl">Live demo →</button>
      </div>

      {/* Title Section */}
      <header className="text-center mb-4">
        <h1 className="text-4xl font-light text-gray-200">{study.title}</h1>
        <p className="font-normal text-lg mt-4">{study.subtitle}</p>
      </header>

      {/* Tech */}
      <div className="font-normal flex flex-wrap gap-2 justify-center mb-20">
        {study.tech.map((tech, index) => (
          <span key={index} className="bg-gray-700 px-4 py-2 text-sm text-white rounded-3xl">
            {tech}
          </span>
        ))}
      </div>

      {/* Screenshots */}
      <div className="block md:hidden mb-20">
        <img className="rounded-xl w-full" src={study.caseStudyPhotos[0]} />
      </div>

      <div className="hidden md:flex gap-4 mb-20">
        {study.caseStudyPhotos.map((photo, index) => (
          <div key={index}>
            <img className="rounded-xl" src={photo}/>
          </div>
        ))}
      </div>

      {/* Overview Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-medium mb-3">Overview</h2>
        <p className="leading-relaxed">{study.overview}</p>
      </section>

      {/* UI Features */}
      <section className="mb-12">
        <ul className="space-y-2">
          {study.uiFeatures.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span>-</span>
              <span >
                <strong >{feature.feature}:</strong> {feature.description}
              </span>
            </li>
          ))}
        </ul>

        <div className="block md:hidden mb-20 mt-20">
          <img className="rounded-xl w-full" src={study.uiPhotos[1]} />
        </div>

        <div className="hidden md:flex gap-4 mt-16">
        {study.uiPhotos.map((photo, index) => (
          <div key={index}>
            <img className="rounded-xl" src={photo}/>
          </div>
        ))}
      </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-3">Challenges & Solutions</h2>
        {study.challenges.map((challenge, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-semibold">{challenge.title}</h3>
            <p className=" mt-2"><strong>Problem:</strong> {challenge.problem}</p>
            <p className="mt-4"><strong>Solutions:</strong></p>
            <ul className="mt-2 space-y-1">
              {challenge.solution.map((sol, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span>-</span>
                  <span>{sol}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <div className="flex-col gap-4 my-16">
        {study.codePhotos.map((photo, index) => (
          <div key={index}>
            <img className="rounded-xl" src={photo}/>
          </div>
        ))}
        <p className="text-xs italic mt-4">node.js server for Stripe payment integration</p>
      </div>

      {/* Future Improvements */}
      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-3">Future Improvements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Short-Term */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Short-Term</h3>
            <ul className="space-y-2">
              {study.futureImprovements.shortTerm.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span>➤</span>
                  <span><strong >{item.title}:</strong> {item.description}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Long-Term */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Long-Term</h3>
            <ul className="space-y-2">
              {study.futureImprovements.longTerm.map((item, index) => (
                <li key={index} className=" flex items-start gap-2">
                  <span>➤</span>
                  <span><strong>{item.title}:</strong> {item.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final Thoughts */}
      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-3">Final Thoughts</h2>
        <p className="leading-relaxed">{study.finalThoughts}</p>
      </section>

      {/* Back Button */}
      <div className=" font-normal text-center mt-16">
        <a href="/portfolio" className="inline-block bg-gray-800 px-6 py-3 rounded-3xl text-white hover:bg-gray-700">
          ← Back to Portfolio
        </a>
      </div>
    </div>
  );

}

export default CaseStudy;