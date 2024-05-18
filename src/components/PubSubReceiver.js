import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const PubSubReceiver = () => {
  const jsonDataRef = useRef(null);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (!fetched) {
      const fetchData = async () => {
        try {
          const pubsubPublisherUrl = 'http://localhost:8080/sell-online-api/api/public/pubsub/get-received-msg';
         // const message = "Hello Rons world"

         
   
          const response = await axios.get(
            pubsubPublisherUrl,
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          );

          const newJsonData = JSON.stringify(response.data);
          console.log("message id is " + newJsonData);
          jsonDataRef.current = newJsonData;
          setFetched(true);

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }
  }, [fetched]);

  return (
    <div>
         <p>
         Calls backend  http://localhost:8080/sell-online-api/api/public/pubsub/get-received-msg <br></br>
      
       1. In backend PubSubMessageReceiverByRon class  initializes the Receiver and registers the handleMessage as the method where the message should
    be passed in to handle. We are simply adding the message to a blcoking queue there. 
    <br></br>
     2.   Also starts a thread where it will be in an infinite loop to read from the blocking queue (processMessage)
    In processMessage we simply read from the blocking queue (until we receive a messsage the infinite loop)
    will not keep looping it will just wait in there to receive the message..once we take it from the blocking
     queue we will be using appropriate components to process but for now ..we simplyh put it in a
     regular List by converting pubsub messsaage to a string message.
     <br></br>
    3. Finally there is a simple getMessage which will read from the List and return it and clear it..The backend endpoint used here is basically just  using this simple getMessage method<br></br>

      </p>
      <pre>{jsonDataRef.current}</pre>
        </div>
  );
};

export default PubSubReceiver;
