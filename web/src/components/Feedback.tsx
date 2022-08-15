import { Fragment, useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "phosphor-react";

import { feedbackTypes } from "./WidgetForm";

export interface FeedbackProps {
  id?: string;
  type: "BUG" | "IDEA" | "OTHER";
  comment: string;
  screenshot: null | string;
}

export function Feedback({ id, type, comment, screenshot }: FeedbackProps) {
  const feedbackType = feedbackTypes[type];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <div className="bg-light-surfaceSecondary dark:bg-surfacePrimary rounded-xl overflow-hidden flex flex-col items-center p-4 h-[280px]">
        <header className="flex items-center gap-2">
          <img
            src={feedbackType.image.source}
            alt={feedbackType.image.alt}
            className="w-8 h-8"
          />
          <span className="text-xl">{feedbackType.title}</span>
        </header>
        <div className="flex flex-col items-center gap-3 h-full justify-around">
          <div>
            <label htmlFor={id}>Comentário</label>
            <textarea
              id={id}
              className="w-full resize-y border-light-stroke rounded-lg dark:bg-surfacePrimary dark:border-stroke max-h-[110px] min-h-[90px]"
              value={comment}
              readOnly
              disabled
            ></textarea>
          </div>
          <button
            className="bg-brand-500 text-light-surfacePrimary py-[10px] px-5 rounded-xl w-[80%]"
            onClick={() => setIsOpen(true)}
          >
            Screenshot
          </button>
        </div>
      </div>
      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 bg-light-surfaceSecondary border-[1px] dark:bg-surfaceSecondary border-gray-200 min-w-[70%] ${
            !screenshot && "min-h-[40%]"
          } rounded-xl flex justify-center items-center`}
        >
          <Dialog.Panel>
            {screenshot ? (
              <img
                src={screenshot}
                alt="Feedback screenshot"
                className="w-full h-full"
              />
            ) : (
              <span className="text-2xl">Nenhuma screenshot associada!</span>
            )}

            <button
              onClick={() => setIsOpen(false)}
              className="absolute left-[50%] top-[-40px] translate-x-[-50%] bg-red-500 p-[5px] w-[100px] rounded-t-3xl flex align-middle justify-center"
            >
              <X size={30} color="#FFF" className="" />
            </button>
          </Dialog.Panel>
        </Dialog>
      )}
    </Fragment>
  );
}
