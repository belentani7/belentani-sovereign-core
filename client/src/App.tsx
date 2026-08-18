// Dirección BELENTANI: Archivo Soberano. Este archivo solo ensambla el sistema; la dirección visual vive en los componentes y tokens.
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import EditorialPage from "@/pages/EditorialPage";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Shell from "./components/Shell";
import Home from "./pages/Home";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LocaleProvider } from "./contexts/LocaleContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/artist"><EditorialPage page="artist" /></Route>
      <Route path="/archive"><EditorialPage page="archive" /></Route>
      <Route path="/work"><EditorialPage page="work" /></Route>
      <Route path="/studio"><EditorialPage page="studio" /></Route>
      <Route path="/portal"><EditorialPage page="portal" /></Route>
      <Route path="/rights"><EditorialPage page="rights" /></Route>
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <LocaleProvider>
          <TooltipProvider>
            <Toaster />
            <Shell><Router /></Shell>
          </TooltipProvider>
        </LocaleProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
