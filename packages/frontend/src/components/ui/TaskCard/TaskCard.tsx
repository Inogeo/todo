import { ComponentProps } from "react";
import { useState } from "react";

type TaskCardProps = ComponentProps<"input"> & {
    title: string;
    description: string;
    done: boolean;
  };

export function TaskCard({...props}:TaskCardProps) {

  return (
    <div className="uk-card uk-card-default uk-card-body">
      <h3 className="uk-card-title">{props.title}</h3>
      <p>{props.description}</p>
      {! props.done && 
        <div className="uk-flex uk-flex-center@m uk-flex-right@l">
          <p data-uk-margin>
            <button className="uk-button uk-button-small uk-button-danger">Delete</button>
            <button className="uk-button uk-button-small uk-button-primary">Mark as Done</button>
          </p>
        </div>
      }
  </div>
  )
}
