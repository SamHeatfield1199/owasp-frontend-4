import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAsyncAction from '../../hooks/use-async-action/use-async-action';
import NotFound from './page404';

// const Credentials = ({ setAlerts, setAccessToken }) => {
 


//   const data = getUser()

//   return data ? <Credential data /> : <NotFound />;
// };


const Credentials = ({setAlerts}) => {
  const [user, setUser] = useState(null);
  const [asyncAction] = useAsyncAction();
  let { username } = useParams();
  const history = useHistory();

  useEffect(() => {
    const getUser = async () => {
      const config = {
        method: 'get',
        url: `/${username}`,
      };
  
      const data = await asyncAction(config, setAlerts);
      if(data) setUser(data)
      else history.push('/404')
    }

    if(!user) getUser();

  }, [])

  // const { username, address, creditCard, number } = user;

  return (
    <>
      {/* <h1 className="sign-in__heading">{username}</h1>
      <div className="label mb-s-1">Adress: {address}</div>
      <div className="label mb-s-1">Credit Card: {creditCard}</div>
      <div className="label mb-s-1">Phone Number: {number}</div> */}
    </>
  )
}


export default Credentials;
