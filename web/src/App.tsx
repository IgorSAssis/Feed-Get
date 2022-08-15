import { useEffect, useState } from "react";
import { Feedback, FeedbackProps } from "./components/Feedback";
import { Header } from "./components/Header";
import { Widget } from "./components/Widget";
import { api } from "./libs/api";

export function App() {
  const [feedbacks, setFeedbacks] = useState<FeedbackProps[]>([]);

  useEffect(() => {
    api
      .get("/feedbacks")
      .then((response) => {
        const feedbacks: FeedbackProps[] = response.data.feedbacks;

        setFeedbacks(feedbacks);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="w-[100%] h-screen pt-14">
      <Header />
      <main className="w-[90%] m-auto pt-8 pb-8 gap-4 grid grid-cols-feedbacks">
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
      </main>
      <Widget />
    </div>
  );
}
