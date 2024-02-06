import { useEffect, useState } from "react"

const useOnlineStatus = () => {
  
  const [onlineStatus, setOnlineStatus] = useState(true);
  
  //checks if online
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    })

    
    window.addEventListener("online", () => {
      //blooean value
      setOnlineStatus(true);
    })
  }, [])

  return onlineStatus;
};

export default useOnlineStatus;