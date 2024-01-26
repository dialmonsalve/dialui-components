import { useRef, useEffect, MouseEvent } from "react"
export const useRippleButton = () => {

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {

    const btnElement = buttonRef.current;

    const ripple = (e: MouseEvent<HTMLButtonElement>) => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripples = document.createElement("span");
        ripples.style.left = `${x}px`;
        ripples.style.top = `${y}px`;

        buttonRef.current.appendChild(ripples);
        setTimeout(() => {
          ripples.remove();
        }, 600);
      }
    };
    btnElement?.addEventListener("click", ripple as unknown as EventListener);

    return () => {
      btnElement?.removeEventListener(
        "click",
        ripple as unknown as EventListener
      );
    };
  }, []);

  return {
    buttonRef
  }

}
