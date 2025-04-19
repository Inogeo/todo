import { ComponentProps } from "react";

type NewTaskModalProps = ComponentProps<"input"> & {
  modal_id: string;
};


export function NewTaskModal({...props}:NewTaskModalProps) {
  return (
    <div id={props.modal_id} data-uk-modal>
      <div className="uk-padding-small">
        <div className="uk-card uk-card-default uk-card-body">
          <form>
            <fieldset className="uk-fieldset">
            <legend className="uk-legend">New Task</legend>
              <div className="uk-margin">
                  <input className="uk-input" type="text" placeholder="Type here the new task title" aria-label="Input"/>
              </div>
              <div className="uk-margin">
                    <textarea className="uk-textarea" rows={5} placeholder="Type here the description of the new task to append to the todolist." aria-label="Textarea"></textarea>
              </div>
            </fieldset>
            <div className="uk-flex uk-flex-center@m uk-flex-right@l">
              <p data-uk-margin>
                <button className="uk-button uk-button-primary uk-modal-close">Save</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}