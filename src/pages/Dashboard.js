import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { StyledMain, StyledSection, StyledTable } from '../styles';



const Dashboard = (props) => {
    const currency = props.currency;
 

const removeCurrency = () => {
        props.removeCurrencies(currency._id);
        props.history.push("/");
      };
    
    return (
        <>
        <Helmet>

            <title>Dashboard | ⚛️</title>
            <meta name="description" content="A simple dashboard for managing contacts" />
            <meta name="keywords" content="Dashboard, business, tools, customer service" />
        </Helmet>
       
       
        <StyledMain>
       
            <StyledSection>
           
                <StyledTable>
                    <thead>
                    
                    
                        <tr>
                         
                        <th>Logo</th>
                            <th>Crypto Name</th>
                            <th>Symbol</th>
                            <th>Curremt Price</th>
                            <th>Actions</th>
                        </tr>

                    </thead>
                    <tbody>

                        { props.currencies.map (currency => (
                           
                                <tr key={currency._id}>
                                    <td>{currency.name}</td>
                                    <td>{currency.symbol}</td>
                                    <td>{currency.current_price}</td>
                                    <td><img alt={currency.name}  width="50px" src={currency.image}></img></td>
                                    <td><Link to={`/currencies/${currency._id}`}>See More Details</Link></td>
                                    <td><button id="delete" onClick={removeCurrency}>DELETE</button></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </StyledTable>
            </StyledSection>
        </StyledMain>
    </>
    );
};

export default Dashboard;