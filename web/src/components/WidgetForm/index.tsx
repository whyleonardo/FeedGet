import { useState } from "react";

import { CloseButton } from "../CloseButton";

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

import  bugImgUrl  from '../../assets/bug.svg'
import ideaImgUrl  from '../../assets/idea.svg'
import  thoughtImgUrl  from '../../assets/thought.svg'
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";

export const feedbackTypes = {
  BUG: {
    title: 'Bugs',
    image: {
      source: bugImgUrl,
      alt: 'Imagem de um inseto'
    },
    placeholder: "Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImgUrl,
      alt: 'Imagem de uma lâmpada'
    },
    placeholder: "Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!"
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImgUrl,
      alt: 'Imagem de um balão de pensamento'
    },
    placeholder: "Queremos te ouvir. O que você gostaria de nos dizer? "
  }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

  const [feedbackSent, setFeedbackSent] = useState<boolean | null>(null)

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null >(null)
 
  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (

      <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto gap-1">
          
         { feedbackSent ? (
           <FeedbackSucessStep onFeedbackRestartRequested={handleRestartFeedback}/>
         ) : (
           <>
            { !feedbackType ? (       
                  <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
              ) : (
                  <FeedbackContentStep
                    onFeedbackSent={() => setFeedbackSent(true)}
                    feedbackType={feedbackType}
                    onFeedbackRestartRequested={handleRestartFeedback}
                  />
              ) }
           </>
         )}

          <footer className='text-xs text-neutral-400'>
              Feito com ♥ pela <a className="underline underline-offset-2 hover:text-brand-500 transition-colors" href='#'>Rockestseat</a>
          </footer>    
      </div>
  )
}