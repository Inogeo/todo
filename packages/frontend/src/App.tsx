import { NavBar } from "./components/ui/NavBar/NavBar"
import { NewTaskModal } from "./components/ui/NewTaskCard/NewTaskModal"
import { TaskCard } from "./components/ui/TaskCard/TaskCard"


function App() {
  const new_task_modal_id = "new_task_modal"
  return (
    <div className='uk-width-1-1'>
      <NavBar label='TODO Example App'/>
      
      <div className="uk-padding-small">
        <button className="uk-button uk-button-primary uk-margin-small-right" type="button" uk-toggle={`target: #${new_task_modal_id}`}>Create new task</button>
        <NewTaskModal modal_id={new_task_modal_id}></NewTaskModal>
        <div className="uk-grid-small uk-child-width-expand@s" data-uk-grid>
          <div className="uk-width-1-2">
            <TaskCard title="Example task 1" description="Content of task" done={false}></TaskCard>
          </div>
          <div className="uk-width-1-2">
          <TaskCard title="Example task 1" description="Content of task" done={true}></TaskCard>
          </div>
        </div>
        <div className='uk-grid-large' data-uk-grid>
        </div>
      </div>
    </div>
  )
}

export default App
