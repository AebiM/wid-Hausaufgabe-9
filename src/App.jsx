import Typography from "@mui/material/Typography";
import { VegaLite } from "react-vega";
import file from "./data/file.json";

function App() {
  return (
    <div>
      <Typography variant="h2">Vite + React</Typography>
      <Typography variant="h6">
        Durchschnittliche Anzahl Gegessener Tiere im Jahr
      </Typography>

      <VegaLite spec={file} />
    </div>
  );
}

export default App;
