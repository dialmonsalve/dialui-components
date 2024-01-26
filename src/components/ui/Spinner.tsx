import { SpinnerType } from "@/types"
import { IconSpinner } from "./IconSpinner"
import { HalfRounded } from "../icons/HalfRounded"

interface Props {
  type?: SpinnerType | 'half-spinner'
}

export const Spinner = ({ type }: Props) => {

  if (type === 'half-spinner') {

    return (
      <div className='spinner' >
      <HalfRounded className="spinner__half-spinner"></HalfRounded>

      <p className="spinner__loading" > Loading...</p>
    </div>
    )
  } else {

    return (
      <div className="spinner">
        <div className="spinner__content" >
          <IconSpinner type={type} />
          <p className="spinner__content--loading" >Loading ...</p>
        </div>
      </div>
    )
  }



}
