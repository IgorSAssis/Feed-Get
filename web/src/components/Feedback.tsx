import bugImage from "../assets/bug.svg";

export function Feedback() {

  return (
    <div 
      className="bg-light-surfaceSecondary dark:bg-surfacePrimary rounded-xl overflow-hidden flex flex-col items-center p-4 h-[280px]"
    >
      <header className="flex items-center gap-2"> 
        <img 
          src={bugImage} 
          alt="type" 
          className="w-8 h-8"
        />
        <span className="text-xl">Problema</span>
      </header>
      <div className="flex flex-col items-center gap-3 h-full justify-around">
        <div>
          <label htmlFor="comment">Comentário</label>
          <textarea 
            id="comment"
            className="w-full resize-y border-light-stroke rounded-lg dark:bg-surfacePrimary dark:border-stroke max-h-[110px] min-h-[90px]"
          ></textarea>
        </div>
        <button
          className="bg-brand-500 text-light-surfacePrimary py-[10px] px-5 rounded-xl w-[80%]"
        >Screenshot</button>
      </div>
    </div>
  );

}