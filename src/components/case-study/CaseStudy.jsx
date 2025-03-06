// CaseStudy.jsx

import { useParams } from "react-router-dom";
import { caseStudies } from "../data";

const CaseStudy = () => {
  const { id } = useParams();
  const study = caseStudies.find((study) => study.id === id);
  console.log(id)

  return (
    <div className='bg-off-white h-screen'>
      <h2 className="text-black">{study.title}</h2>
    </div>
  )

}

export default CaseStudy;