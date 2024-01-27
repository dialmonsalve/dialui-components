import { Spinner } from "@/components/ui/Spinner";

function SpinnerPage() {

  const prueba = false;
  return (
    prueba ? <Spinner type="squares" /> : <div>Spinners</div>
  )
}

export default SpinnerPage;
