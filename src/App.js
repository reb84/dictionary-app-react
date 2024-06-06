import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Project coded by{" "}
            <a
              href="https://www.shecodes.io/graduates/97811-rebecca-upton"
              target="_blank"
              rel="noreferrer"
            >
              Rebecca Upton
            </a>
            , is{" "}
            <a
              href="https://github.com/reb84/dictionary-app-react"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced
            </a>{" "}
            and hosted on <a href="https://dictionary-app-react-orpin.vercel.app/">Vercel</a>
          </small>
        </footer>
      </div>
    </div>
  );
}
