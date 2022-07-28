import { Fragment } from "react";
import { Feedback } from "./components/Feedback";
import { Header } from "./components/Header";
import { Widget } from "./components/Widget";

export function App() {
  return (
    <div className="w-screen h-screen pt-14 flex align-center justify-around">
      <Header />
      <main className="w-[90%] pt-8 pb-8 grid grid-cols-5 gap-3 grid-rows-3">
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
      </main>
      <Widget />
    </div>
  );
}
