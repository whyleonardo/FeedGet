import { Check } from "phosphor-react";
import { CloseButton } from "../../CloseButton";

interface FeedbackSucessStepProps {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSucessStep({
  onFeedbackRestartRequested
}: FeedbackSucessStepProps) {
 
  return (
    <>
        <header>
          <CloseButton/>
        </header>
              
        <div className='flex flex-col items-center py-10 w-[304px]'>
            <Check className="bg-green-600 rounded-md w-10 h-10" weight="bold"/>
            <span className="text-xl mt-4">Agradecemos o feedback!</span>
            
            <button 
              onClick={onFeedbackRestartRequested}
              className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500">
                Quero enviar outro
            </button>
        </div>
    </>
  )
}