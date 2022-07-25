import { Fragment } from "react";
import { CloseButton } from "../../CloseButton";

import successImgUrl from "../../../assets/success.svg";

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({
  onFeedbackRestartRequested
} : FeedbackSuccessStepProps) {
  return (
    <Fragment>
      <header>
        <CloseButton />
      </header>
      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImgUrl} alt="Success icon" />
        <span className="text-xl mt-2">Agradecemos o feedback!</span>
        <button 
          className="py-2 px-6 mt-6 text-light-textPrimary bg-light-surfaceSecondary dark:bg-zinc-600 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
          type="button"
          onClick={onFeedbackRestartRequested}
          >
            Quero enviar outro
          </button>
      </div>
    </Fragment>
  );
}
