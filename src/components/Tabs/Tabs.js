import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Resources from '../../containers/Resources';
export default () => (
  <Tabs>
    <TabList>
      <Tab>Workers</Tab>
      <Tab>Workshop</Tab>
    </TabList>

    <TabPanel>
      <h2>WOHTOA</h2>
    </TabPanel>
    <TabPanel>
      <h2>SDF</h2>
    </TabPanel>
  </Tabs>
);