import React, { useEffect, useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'


const url = 'https://course-api.com/react-tabs-project'


const Tabs = () => {
    const [jobs, setJobs]= useState([]);
    const [loading, setLoading] = useState(true)
    const [value, setValue] = useState(0)

    console.log(jobs);

    

    const fetchJobs = async ()=>{
     const response = await fetch(url)
     let newJobs = await response.json()
    //  console.log(newJobs);
     setLoading(false)
     setJobs(newJobs)
    }

    useEffect(()=>{
        fetchJobs();
    }, []);

    if(loading){
        return(
            <section className='section loading'>Loading...</section>
   ) }

   const {company,dates,duties,title} = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">

        {/*btn-cont*/}
        <div className="btn-container">
        {
            jobs.map((job,index)=>{
                
              return(
                <button
                 key={job.id} onClick={()=>setValue(index)}
                className={`job-btn ${ index === value && 'active-btn'}`}
                >{job.company}</button>
              )
            })
          }
        </div>
        {/*jobinfo*/}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
         {
            duties.map((duty,index)=>{
                console.log(duty);
                return(
                    <div key={index} className="job-desc">
                    <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                    <p>{duty}</p>
                  </div>
                )
            })
         }
        </article>
      </div>
    </section>
  )
}

export default Tabs
