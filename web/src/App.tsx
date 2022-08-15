import { useEffect, useRef, useState } from "react";
import { Feedback, FeedbackProps } from "./components/Feedback";
import { Header } from "./components/Header";
import { Widget } from "./components/Widget";
import { api } from "./libs/api";

export function App() {
  const [feedbacks, setFeedbacks] = useState<FeedbackProps[]>([]);
  const toastErrorElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    api
      .get("/feedbacks")
      .then((response) => {
        const feedbacks: FeedbackProps[] = response.data.feedbacks;

        setFeedbacks(feedbacks);
      })
      .catch((error) => {
        console.error(error);

        if (toastErrorElement.current) {
          toastErrorElement.current.style.right = "20px";

          setTimeout(() => {
            if (toastErrorElement.current) {
              toastErrorElement.current.style.right = "-500px";
            }
          }, 2000);
        }
      });
  }, []);

  return (
    <div className="w-[100%] h-screen pt-14">
      <Header />
      <main className="w-[90%] m-auto pt-8 pb-8 gap-4 grid grid-cols-feedbacks overflow-x-hidden">
        {feedbacks.map(({ id, type, comment, screenshot }) => {
          return (
            <Feedback
              key={id}
              id={id}
              type={type}
              comment={comment}
              screenshot={screenshot}
            />
          );
        })}
        <div
          ref={toastErrorElement}
          className="absolute right-[-500px] top-20 bg-red-400 w-fit py-3 px-5 rounded-lg transition-[right] duration-1000 ease-in-out"
        >
          <span className="block text-xl w-[100%] text-center text-white font-bold mb-2">
            Houve algum erro!
          </span>
          <p className="text-white text-lg">
            Não foi possível carregar a listagem de feedbacks.
            <br /> Tente novamente mais tarde.
          </p>
        </div>
      </main>
      <Widget />
    </div>
  );
}
