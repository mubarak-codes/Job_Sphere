import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Homepage from './assets/pages/Homepage.jsx'
import MainLayout from './assets/components/layouts/layout1.jsx'
import JobPage from './assets/pages/jobPage.jsx'
import {Link} from 'react-router-dom'
import NotFoundPage from './assets/pages/NotFoundPage.jsx'
import JobPages, {jobLoader} from './assets/pages/JobPages.jsx'
import AddJobPage from './assets/pages/AddJobPage.jsx'
import EditJobPage from './assets/pages/EditJobPage.jsx'




const App = ()=>{
  //add job
  const addJob = (newJob)=>{
    return  fetch('http://localhost:8000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
  }

//delete job
  const deleteJob = (id)=>{
    return  fetch(`http://localhost:8000/jobs/${id}`, {
      method: 'DELETE',
    }) 
  }

//update job
  const updateJob = (updatedJob)=>{
    return  fetch(`http://localhost:8000/jobs/${updatedJob.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedJob)
    })
  }



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<Homepage/>}/>
      <Route path='/jobs' element={<JobPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
      <Route path='jobs/:id' element={<JobPages deleteJob={deleteJob} />} loader={jobLoader} />
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
      <Route path='edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />

    </Route>
  )
)


  return(
    <>

      <RouterProvider router={router}/>

  </>
  ) 
}

export default App;
