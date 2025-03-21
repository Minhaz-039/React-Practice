import ConditionalRendering from "./components/ConditionalRendering";
import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Header from "./components/Header";
import Information from "./components/Information";
import MainComponent from "./components/MainComponent";
import OnClick_MouceMove_Copy from "./components/OnClick_MouceMove_Copy";
import Temparature from "./components/Temparature";
import CardInformation from "./InfoFiles/UserInfo";
import CopyText from "./Portal/CopyText";
import Parent from "./StatePrac/Parent";
import Prac from "./StatePrac/Prac";
import UltimatePrac from "./StatePrac/UltimatePrac";
import UseState from "./StatePrac/UseState";
import Effect from "./useEffect/Effect";
<link href="/src/index.css" rel="stylesheet"></link>;

const App = () => {
  return (
    <div>
      <Header class="text-sm"></Header>
      <MainComponent></MainComponent>
      {/* <List></List> */}
      <Information CardInformation={CardInformation}></Information>
      <ConditionalRendering isValid={true}></ConditionalRendering>
      <Temparature temp={11}></Temparature>
      <OnClick_MouceMove_Copy></OnClick_MouceMove_Copy>
      <UseState></UseState>
      <Parent></Parent>
      <Prac></Prac>
      <UltimatePrac></UltimatePrac>
      <hr />
      <CopyText></CopyText>
      <hr />
      <Effect></Effect>
      <Footer></Footer>
      <Greet />
    </div>
  );
};

export default App;
