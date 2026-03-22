import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import KuchikomiPage from "./pages/KuchikomiPage";
import SalonPage from "./pages/SalonPage";
import HyobanPage from "./pages/HyobanPage";
import JittaiPage from "./pages/JittaiPage";
import IndexPage from "./pages/IndexPage";
import NewLPPage from "./pages/NewLPPage";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={IndexPage} />
      <Route path={"/kuchikomi"} component={KuchikomiPage} />
      <Route path={"/salon-community"} component={SalonPage} />
      <Route path={"/hyoban"} component={HyobanPage} />
      <Route path={"/jittai"} component={JittaiPage} />
      <Route path={"/new-lp"} component={NewLPPage} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
