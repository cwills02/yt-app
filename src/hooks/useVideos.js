import { useState, useEffect } from 'react';
import youtube from '../components/apis/youtube';

const KEY = 'AIzaSyDq2lcr7LmDYFiN8NzsBQM2e_t_Wf7jGYw';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);
    
  const search = async term => {
    const response = await youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                type: "video",
                maxResults: 5,
                key: KEY
            }
        });
      
        setVideos(response.data.items);
    };
    
    return [videos, search];
};

export default useVideos;