import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/landing";
import RD from "./pages/releaseDetails";
import TL from "./pages/trackList";
import SP from "./pages/splits";
import DE from "./pages/deliveryOptions";
import RE from "./pages/review";


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Landing
  },
  {
    path: '/details',
    Component: RD
  },
  {
    path: '/tracklist',
    Component: TL
  },
  {
    path: '/splits',
    Component: SP
  },
  {
    path: '/delivery',
    Component: DE
  },
  {
    path: '/review',
    Component: RE
  }
]);