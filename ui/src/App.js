
import AppWrapper, { Route } from 'app-wrapper';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';


import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



function App() {
	return (
		
		<Provider store={store}>



			<Navbar />

			<AppWrapper router="hash">

				<Route path="/" component={Dashboard} />
			</AppWrapper>
		</Provider>
	);
}

export default App;
