import SnackHeader from './SnackHeader';
import SnackList from './SnackList';
import SnackFooter from './SnackFooter';

export default function SnackApp() {
  return (
    <main>
      <SnackHeader />
      <p>These are my top 5 snacks.</p>
      <SnackList />
      <SnackFooter />
    </main>
  );
}
