import { Counter } from '../../components/Counter/Counter';
import { Page } from '../../components/Page/Page';

export const Home = (): JSX.Element => {
  const homeText = 'Home';

  return (
    <Page description={homeText} keywords={homeText} title={homeText}>
      <Counter />
    </Page>
  );
};
