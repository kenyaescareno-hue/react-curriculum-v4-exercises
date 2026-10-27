import BugEffectLoop from './BugEffectLoop';
import BugMutatedState from './BugMutatedState';
import BugProps from './BugProps';

export default function StudentWork() {
  return (
    <div>
      <h2>React Bug Hunt</h2>
      <BugEffectLoop />
      <BugMutatedState />
      <BugProps />
    </div>
  );
}
