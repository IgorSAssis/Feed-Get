import { Fragment } from "react";
import { Feedback } from "./components/Feedback";
import { Header } from "./components/Header";
import { Widget } from "./components/Widget";

export function App() {
  return (
    <div className="w-screen h-screen pt-14">
      <Header />
      <main className="w-[90%] m-auto pt-8 pb-8 gap-4 grid grid-cols-feedbacks">
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
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
