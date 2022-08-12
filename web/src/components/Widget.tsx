import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";

export function Widget() {
  return (
    <Popover 
      className="fixed bottom-0 right-0 md:bottom-3 md:right-1 flex flex-col items-end w-fit h-fit"
    >
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button 
        className="flex items-center bg-brand-500 rounded-full mr-3 px-3 h-12 text-white group"
      >
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
