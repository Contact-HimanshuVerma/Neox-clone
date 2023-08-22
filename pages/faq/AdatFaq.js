import OurBrand2 from "./ourBrand2";
import OurBrand3 from "./ourBrand3";
import OurBrand4 from "./ourBrand4";

import OurBrand6 from "./ourBrand6";
import OurBrand7 from "./ourBrand7";
import OurBrandCommon from "./OurBrandsommon";
import OurBrand from "./ourBrand";
import OurBrandSec from "./ourBrandsecond";
const AdatFaq = () => {
  return (
    <div className="cursor-pointer">
      <OurBrandCommon
        title={"Q. What is released on incineration?"}
        desc={
          " A. Primarily, the waste is converted to heat on combustion. An extremely small amount of ash is released, which contains a fraction of Carbon (0.63%). There is also clean-smoke (please refer to the graph on the homepage). This method is over 300 times cleaner than most others (landfill burning, inefficient incineration, dumping)"
        }
      />
      <OurBrandCommon
        title={"Q. Where does the exhaust gas go??"}
        desc={
          " A. Emissions can be safely released at a basic height of a few metres, and are routed out of the building through an exhaust pipe installed by our experts. The emissions are much cleaner than a diesel engine."
        }
      />
      <OurBrand title={"Q. What can go in the machine?"} />
      <OurBrandCommon
        title={"Q. What cannot go in the machine?"}
        desc={
          " A. PPE Kits, Rubber, Latex, Nitrile, Synthetic items, Metal Scrap, Single-Use plastic, Bad Vibes. "
        }
      />

      <OurBrandCommon
        title={"Q. What happens if these above items go in the machine?"}
        desc={
          "​ A. The machine burns waste at 1200ºC, and so will burn almost anything. But the point of decentralising the process is to control the emissions, which can only happen if we control what goes inside. Most plastics cause tremendous pollution, and should be recycled instead. Rubber and similar items will affect incineration efficiency as it may stick inside. Some items that melt on burning can damage the machine's heat sealing systems. "
        }
      />

      <OurBrandCommon
        title={"Q. What is the maintenance involved?"}
        desc={
          "​A. Minimal. There is an ashtray inside which, depending on use, can be easily removed and cleaned just once a week. The machine is highly software based, meaning most of the maintenance and monitoring happens remotely, through our online servers."
        }
      />
      <OurBrandCommon
        title={"Q. What is the running cost of the machine?"}
        desc={
          "​A. Each cycle uses just 0.2 Units of electricity. This brings the per/kg handling cost to under Rs.3/Kg Yes, that's under two rupees to burn ~60 napkins/~100 masks. There is no other running cost involved. Compare this to all the resources used in collecting, segregating, transporting and storing waste until it is, if it's lucky, taken to an industrial incinerator to burn."
        }
      />
      <OurBrandCommon
        title={"Q. Why is Incineration so important?"}
        desc={
          " Incineration is only important for reject-waste, as it contains several toxins (Dioxins, Furans and other harmful compounds), or because they carry pathogens, or chemicals that cannot be exposed to people or which contaminate the air/soil/water. Inefficient burning/dumping of these materials causes high amounts of these toxic gases to be released, which has  a direct impact on global warming, the spread of diseases (like cancer, mercury/lead poisoning) among people, and even in animals.This waste needs to be incinerated safely at temperatures above 1050ºC, according to global incineration standards- because the chemical reaction at that temperature is stable, creating close to no emissions.It's also important to reach these temperatures quickly (within minutes), to further reduce emissions. "
        }
      />
      <OurBrandCommon
        title={"Q. Where can the Neo-X be installed?"}
        desc={
          "​ A. Anywhere. It's designed for bathrooms, outdoor spaces, backyards, waste-collection centres, factories. It is beyond safe to install indoors, in your home, office, apartment, hotel and so on and looks/works like a modern dustbin.The greater the decentralisation of this process, the better."
        }
      />
      <OurBrandSec
        title={"Q. Why should you bother with handling this waste?"}
        desc={
          "​ A. It's not really a bother. Just how waste is collected in bins, it can be collected in the machine. The one-time investment is invaluable, not only do you tremendously reduce your carbon footprint, you also save on handling costs in the long term. "
        }
      />
      <OurBrandCommon
        title={"Q. What is the capacity of the machine? "}
        desc={
          "​ A. ~500 litres/day. The exact capacity would vary based on the type of waste. The Neo-X is meant for handling waste at the source, and so takes away the need for accumulation. Other models of the machine with significantly higher capacity will be announced soon. "
        }
      />
      <OurBrandCommon
        title={"Q. How long does it take to burn?"}
        desc={
          "​ ​A. Each cycle takes under 5 mins to burn completely. Post this, the machine enters a cooling cycle which last another 6 mins, bringing it back to normal. We recommend 20 mins between cycles for optimal use."
        }
      />
      <OurBrandCommon
        title={"Q. What if there is a power cut?"}
        desc={
          "​A. Each machine has a battery back-up and it switches to this power source automatically, if there is a power cut. It will not run a new cycle without direct electrical supply."
        }
      />
    </div>
  );
};
export default AdatFaq;
