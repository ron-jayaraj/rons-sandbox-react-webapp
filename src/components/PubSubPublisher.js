import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const PubSubPublisher = () => {
  const jsonDataRef = useRef(null);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (!fetched) {
      const fetchData = async () => {
        try {
          const pubsubPublisherUrl = 'http://localhost:8080/sell-online-api/api/public/pubsub/';
          const message = "Hello Rons world"

          const response = await axios.post(
            pubsubPublisherUrl,
            { message },
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
      This end point publishes "Hello Rons World" as  a test message to a topic in GCP. Below is the message id returned by GCP  <br></br>
      <pre>{jsonDataRef.current}</pre>
    </div>
  );
};

export default PubSubPublisher;
