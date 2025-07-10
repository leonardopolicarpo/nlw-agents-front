import { Wand } from 'lucide-react';
import { Button } from './components/ui/button';

export function App() {
  return (
    <div>
      <Button>Teste</Button>
      <Button variant={'destructive'}>Teste</Button>
      <br />
      <Button size={'icon'}>
        <Wand />
      </Button>
    </div>
  );
}
