import { ComponentProps } from "react";

type NavBarProps =
  ComponentProps<"input"> & {
    label: string;
  };

export function NavBar({...props}:NavBarProps) {
  return (
    <nav className="uk-navbar-container">
        <div className="uk-container">
            <div data-uk-navbar>
                <div className="uk-navbar-left">
                    <a className="uk-navbar-item uk-logo" href="#">{props.label}</a>
                </div>
            </div>
        </div>
    </nav>
  )
}
