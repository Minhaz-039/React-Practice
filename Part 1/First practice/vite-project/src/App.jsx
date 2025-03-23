import ConditionalRendering from "./components/ConditionalRendering";
import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Header from "./components/Header";
import Information from "./components/Information";
import MainComponent from "./components/MainComponent";
import OnClick_MouceMove_Copy from "./components/OnClick_MouceMove_Copy";
import Temparature from "./components/Temparature";
import Provider from "./ContextApi/Provider";
import Provider2 from "./ContextApi/Provider2";
import CustomHook from "./customHook/CustomHook";
import CardInformation from "./InfoFiles/UserInfo";
import CopyText from "./Portal/CopyText";
import File1 from "./PropDrilling/File1";
import Parent from "./StatePrac/Parent";
import Prac from "./StatePrac/Prac";
import UltimatePrac from "./StatePrac/UltimatePrac";
import UseState from "./StatePrac/UseState";
import Effect from "./useEffect/Effect";
import UniqueID from "./useId/UniqueID";
import MoneyReducer from "./useReducer/MoneyReducer";
import Sample from "./useReducer/sample";
import Focus from "./useRef/focus";
import TImer from "./useRef/TImer";
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
      <hr />
      <hr />
      <File1 name="Minhaz"></File1>
      <hr />
      <Provider></Provider>
      <hr />
      <Provider2></Provider2>
      <hr />
      <Sample></Sample>
      <hr />
      <MoneyReducer></MoneyReducer>
      <hr />
      <Focus></Focus>
      <hr />
      <TImer></TImer>
      <hr />
      <CustomHook></CustomHook>
      <hr />
      <UniqueID></UniqueID>
      <hr />
      <Footer></Footer>
      <Greet />
    </div>
  );
};

export default App;
