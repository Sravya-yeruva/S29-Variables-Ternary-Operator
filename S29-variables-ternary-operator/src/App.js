import logo from './logo.svg';
import './App.css';
import MarkSheets from './components/MarkSheets';

function App() {
  return (
    <div className="App">
      <MarkSheets Name="Sravya MarkSheet" telMarks="80" hinMarks="30" engMarks="67" sciMarks="90" phyMarks="88" socMarks="88" matMarks="95" ></MarkSheets>
      <hr></hr>
      <MarkSheets Name="Indu MarkSheet"  telMarks="33" hinMarks="66" engMarks="66" sciMarks="21" phyMarks="88" socMarks="22" matMarks="67"></MarkSheets>
      <hr></hr>
      <MarkSheets Name="Pranavi MarkSheet"  telMarks="91" hinMarks="99" engMarks="100" sciMarks="99" phyMarks="88" socMarks="77" matMarks="99"></MarkSheets>
    </div>
  );
}

export default App;
