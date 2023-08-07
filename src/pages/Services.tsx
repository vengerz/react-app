import { ServiceComponent } from "../components/ServicesComponent"
import TitleComponent from "../components/TitleComponent"

function ServicesPage() {
  const title1  = "Service Page";
  return (
    <>
    <TitleComponent data ={title1}/>
    <ServiceComponent/>
    </>
  )
}

export default ServicesPage