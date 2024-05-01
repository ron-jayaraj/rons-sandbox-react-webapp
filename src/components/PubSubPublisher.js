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
         <p>
        This end point publishes "Hello Rons World" as a test message to a topic in GCP.<br />
        The topic was created in GCP and a subscription also<br />
        has been created and they both are tied or linked at GCP.<br />
        Google let me download a credentials file which I stored at "C:\\Users\\Ron\\auth0-user-login-example-project-keys-secret-files\\Rons-ServiceAccount-Key-With-Permission-To-Publish-To-Rons-Topic-in-sellonline-project.json"<br />
        Now added a configuration file where I created a bean to publish ronsTopicPublisher. While creating this bean <br />
        1. you pass Google credentials <br />
        2. The project ID where the topic is created in GCP <br />
        3. The topic ID of the Topic. <br />
        Also, the pom.xml in the backend was updated to include the GCP dependencies<br />
        Finally, in the service class using the bean, simply publish and use a timeout unit. It returns the message ID in a Future. <br />
        Below is the message ID returned by GCP  <br />
      </p>
      <pre>{jsonDataRef.current}</pre>
        </div>
  );
};

export default PubSubPublisher;
